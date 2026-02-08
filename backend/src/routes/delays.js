import express from "express";
import { DelayRequest } from "../models/DelayRequest.js";
import { Office } from "../models/Office.js";
import { Parcel } from "../models/Parcel.js";
import { predictDelayDays } from "../services/weatherDelayService.js";
import {
  sendCustomerNotifications,
  sendOfficeNotification,
} from "../services/notificationService.js";

export const delayRouter = express.Router();

delayRouter.get("/", async (_req, res) => {
  const delays = await DelayRequest.find().populate("office").sort({ createdAt: -1 });
  res.json(delays);
});

delayRouter.post("/", async (req, res) => {
  const { officeId, weatherFactors, weatherSummary, reason } = req.body;
  const office = await Office.findById(officeId);

  if (!office) {
    return res.status(404).json({ message: "Office not found" });
  }

  const predictedDelayDays =
    typeof req.body.predictedDelayDays === "number"
      ? req.body.predictedDelayDays
      : predictDelayDays(weatherFactors);

  const delayRequest = await DelayRequest.create({
    office: officeId,
    reason,
    weatherSummary,
    predictedDelayDays,
  });

  sendOfficeNotification(office, delayRequest);

  res.status(201).json(delayRequest);
});

delayRouter.patch("/:id/approve", async (req, res) => {
  const delayRequest = await DelayRequest.findById(req.params.id);

  if (!delayRequest) {
    return res.status(404).json({ message: "Delay request not found" });
  }

  delayRequest.status = "approved";
  delayRequest.approvedAt = new Date();
  await delayRequest.save();

  const parcels = await Parcel.find({
    office: delayRequest.office,
    status: "at_office",
  });

  const updatedParcels = await Promise.all(
    parcels.map(async (parcel) => {
      parcel.delayDays = delayRequest.predictedDelayDays;
      const updatedDate = new Date(parcel.estimatedDeliveryDate);
      updatedDate.setDate(updatedDate.getDate() + delayRequest.predictedDelayDays);
      parcel.estimatedDeliveryDate = updatedDate;
      await parcel.save();
      return parcel;
    })
  );

  sendCustomerNotifications(updatedParcels, delayRequest);

  res.json({ delayRequest, affectedParcels: updatedParcels.length });
});
