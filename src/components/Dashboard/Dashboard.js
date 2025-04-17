import React, { useState, useEffect } from 'react';
import Firewall from './Firewall';
import './Dashboard.css';
import { Player } from '@lottiefiles/react-lottie-player';

const Dashboard = ({ username }) => {
  const [activeFirewallLevel, setActiveFirewallLevel] = useState(1);
  const [alertMessage, setAlertMessage] = useState(null);
  const [breachDetected, setBreachDetected] = useState(false);
  const [intruderInfo, setIntruderInfo] = useState(null);
  
  const handleFirewallBreached = (level) => {
    if (level < 4) {
      setAlertMessage({
        type: 'warning',
        message: `Alert: Firewall Level ${level} has been breached! WIAN signal detected.`
      });
      
      setTimeout(() => {
        setActiveFirewallLevel(level + 1);
        setAlertMessage(null);
      }, 3000);
    } else {
      // All firewalls breached - system compromised
      setBreachDetected(true);
      collectIntruderData();
    }
  };
  
  const collectIntruderData = () => {
    // In a real app, this would actually collect data or call an API
    // Here we'll simulate finding the "hacker's" info
    setIntruderInfo({
      ipAddress: '192.168.1.' + Math.floor(Math.random() * 255),
      deviceInfo: 'Laptop: ' + ['MacBook Pro', 'Dell XPS', 'Lenovo ThinkPad', 'HP Spectre'][Math.floor(Math.random() * 4)],
      timeStamp: new Date().toLocaleString(),
      email: 'hacker' + Math.floor(Math.random() * 1000) + '@hackermail.com'
    });
    
    setAlertMessage({
      type: 'critical',
      message: 'CRITICAL ALERT: All firewalls breached! System compromised!'
    });
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="logo-area">
          <h1>CyberShield</h1>
          <span className="subtitle">Advanced Security System</span>
        </div>
        <div className="user-info">
          <span className="welcome-text">Welcome, {username}</span>
          <span className="status-text">System Status: {breachDetected ? 'COMPROMISED' : 'Protected'}</span>
        </div>
      </div>
      
      {alertMessage && (
        <div className={`alert-message ${alertMessage.type}`}>
          {alertMessage.message}
        </div>
      )}
      
      <div className="dashboard-content">
        <div className="left-panel">
          <div className="section-title">
            <h2>Firewall System</h2>
            <span className="section-subtitle">Multi-layer protection system</span>
          </div>
          
          <div className="firewalls-container">
            {[1, 2, 3, 4].map((level) => (
              <Firewall 
                key={level}
                level={level}
                active={level === activeFirewallLevel || breachDetected}
                onBreached={handleFirewallBreached}
              />
            ))}
          </div>
        </div>
        
        <div className="right-panel">
          <div className="section-title">
            <h2>AI Security Monitor</h2>
            <span className="section-subtitle">Real-time threat analysis</span>
          </div>
          
          <div className="ai-system">
            <Player
              autoplay
              loop
              src="https://assets7.lottiefiles.com/packages/lf20_ymbzgxgc.json"
              style={{ height: '240px', width: '100%' }}
            />
            <div className="ai-status">
              <div className="status-label">AI Status:</div>
              <div className="status-value">Active, monitoring all network traffic</div>
            </div>
            <div className="ai-metrics">
              <div className="metric">
                <span className="metric-label">Threats Blocked</span>
                <span className="metric-value">2,483</span>
              </div>
              <div className="metric">
                <span className="metric-label">Risk Level</span>
                <span className="metric-value high">{breachDetected ? 'CRITICAL' : 'Low'}</span>
              </div>
            </div>
          </div>
          
          {breachDetected && intruderInfo && (
            <div className="intruder-info">
              <h3>Intrusion Detected</h3>
              <div className="intruder-data">
                <div className="data-item">
                  <span className="data-label">IP Address:</span>
                  <span className="data-value">{intruderInfo.ipAddress}</span>
                </div>
                <div className="data-item">
                  <span className="data-label">Device:</span>
                  <span className="data-value">{intruderInfo.deviceInfo}</span>
                </div>
                <div className="data-item">
                  <span className="data-label">Timestamp:</span>
                  <span className="data-value">{intruderInfo.timeStamp}</span>
                </div>
                <div className="data-item">
                  <span className="data-label">Email:</span>
                  <span className="data-value">{intruderInfo.email}</span>
                </div>
              </div>
              <div className="action-buttons">
                <button className="block-button">Block Intruder</button>
                <button className="report-button">Report Activity</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;