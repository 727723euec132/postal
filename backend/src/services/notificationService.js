export const sendOfficeNotification = (office, delayRequest) => {
  console.log(
    `Notify office ${office.name} (${office.contactEmail}) about delay request ${delayRequest._id}`
  );
};

export const sendCustomerNotifications = (parcels, delayRequest) => {
  parcels.forEach((parcel) => {
    console.log(
      `Notify ${parcel.customer.email}: Parcel ${parcel.trackingNumber} delayed by ${
        delayRequest.predictedDelayDays
      } days due to ${delayRequest.weatherSummary}.`
    );
  });
};
