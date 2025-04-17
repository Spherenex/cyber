import React from 'react';
import './BreachDetection.css';

const BreachDetection = ({ intruderInfo }) => {
  if (!intruderInfo) return null;
  
  return (
    <div className="breach-detection-container">
      <div className="breach-header">
        <div className="alert-icon">
          <i className="fas fa-exclamation-triangle"></i>
        </div>
        <h2>Security Breach Detected</h2>
      </div>
      
      <div className="breach-details">
        <div className="breach-row">
          <span className="label">IP Address:</span>
          <span className="value">{intruderInfo.ipAddress}</span>
        </div>
        <div className="breach-row">
          <span className="label">Device:</span>
          <span className="value">{intruderInfo.deviceInfo}</span>
        </div>
        <div className="breach-row">
          <span className="label">Timestamp:</span>
          <span className="value">{intruderInfo.timeStamp}</span>
        </div>
        <div className="breach-row">
          <span className="label">Email:</span>
          <span className="value">{intruderInfo.email}</span>
        </div>
      </div>
      
      <div className="breach-actions">
        <button className="action-button block">Block Access</button>
        <button className="action-button track">Track Activity</button>
        <button className="action-button report">Report Intrusion</button>
      </div>
      
      <div className="breach-map">
        <h3>Intrusion Origin Location</h3>
        <div className="map-placeholder">
          <div className="ping"></div>
        </div>
      </div>
    </div>
  );
};

export default BreachDetection;