// Timeline component for delivery status progression.
import React from "react";

const Timeline = ({ steps }) => (
  <div className="card">
    <h3>Delivery Status Timeline</h3>
    <div className="timeline">
      {steps.map((step) => (
        <div className="timeline-item" key={step.label}>
          <span className={`timeline-dot ${step.status}`} />
          <div>
            <p className="timeline-label">{step.label}</p>
            <span className="timeline-time">{step.time}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Timeline;
