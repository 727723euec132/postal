import React, { useEffect, useMemo, useState } from "react";
import SummaryCard from "./components/SummaryCard.jsx";
import DelayForm from "./components/DelayForm.jsx";
import DataTable from "./components/DataTable.jsx";
import { createDelayRequest, fetchDelays, fetchOffices, fetchParcels } from "./services/api.js";

const App = () => {
  const [offices, setOffices] = useState([]);
  const [parcels, setParcels] = useState([]);
  const [delays, setDelays] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");

  const loadData = async () => {
    const [officeData, parcelData, delayData] = await Promise.all([
      fetchOffices(),
      fetchParcels(),
      fetchDelays(),
    ]);
    setOffices(officeData);
    setParcels(parcelData);
    setDelays(delayData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const metrics = useMemo(() => {
    const activeDelays = delays.filter((delay) => delay.status === "pending").length;
    const affectedParcels = parcels.filter((parcel) => parcel.delayDays > 0).length;
    return {
      offices: offices.length,
      activeDelays,
      affectedParcels,
    };
  }, [delays, offices, parcels]);

  const handleDelaySubmit = async (payload) => {
    setStatusMessage("Creating delay request...");
    await createDelayRequest(payload);
    setStatusMessage("Delay request sent for approval.");
    await loadData();
  };

  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="pill">Weather-Based Courier Delay Prediction</p>
          <h1>Monitor weather risks and notify customers proactively.</h1>
          <p>
            This dashboard connects courier offices with weather-aware delay predictions,
            dispatch approvals, and customer notifications.
          </p>
        </div>
        <div className="hero-card">
          <h3>Live status</h3>
          <div className="hero-grid">
            <SummaryCard
              title="Courier offices"
              value={metrics.offices}
              description="Registered in the network"
            />
            <SummaryCard
              title="Pending delays"
              value={metrics.activeDelays}
              description="Awaiting dispatch approval"
            />
            <SummaryCard
              title="Affected parcels"
              value={metrics.affectedParcels}
              description="Delayed due to weather"
            />
          </div>
        </div>
      </header>

      <main className="content">
        <section className="panel">
          <div>
            <h2>Create a delay prediction</h2>
            <p>
              Submit a weather-triggered delay request to the dispatch unit. Once approved,
              all affected customers will be notified automatically.
            </p>
          </div>
          <DelayForm offices={offices} onSubmit={handleDelaySubmit} />
          {statusMessage ? <p className="status">{statusMessage}</p> : null}
        </section>

        <div className="grid">
          <DataTable
            title="Courier offices"
            columns={["Office", "Location", "Contact"]}
            rows={offices.map((office) => [office.name, office.location, office.contactEmail])}
          />
          <DataTable
            title="Recent delay requests"
            columns={["Office", "Summary", "Status", "Predicted delay"]}
            rows={delays.map((delay) => [
              delay.office?.name ?? "-",
              delay.weatherSummary,
              delay.status,
              `${delay.predictedDelayDays} days`,
            ])}
          />
          <DataTable
            title="Parcels at offices"
            columns={["Tracking", "Customer", "Office", "ETA", "Delay"]}
            rows={parcels.map((parcel) => [
              parcel.trackingNumber,
              parcel.customer?.email ?? "-",
              parcel.office?.name ?? "-",
              new Date(parcel.estimatedDeliveryDate).toLocaleDateString(),
              `${parcel.delayDays} days`,
            ])}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
