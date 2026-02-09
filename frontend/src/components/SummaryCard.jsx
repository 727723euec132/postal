import React from "react";

const SummaryCard = ({ title, value, description }) => {
  return (
    <div className="summary-card">
      <div className="summary-title">{title}</div>
      <div className="summary-value">{value}</div>
      <div className="summary-description">{description}</div>
    </div>
  );
};

export default SummaryCard;
