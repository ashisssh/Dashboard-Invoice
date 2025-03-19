import React from "react";
import "../styles/UploadReceipt.css"; // Style for this component

const UploadReceipt = () => {
  return (
    <div className="upload-container">
      <div className="upload-header">
        <h3>EasyUpload</h3>
        <div className="tab-buttons">
          <button> Bills </button>
          <button className="active"> Receipts </button>
          <button> Bank </button>
        </div>
        <button className="close-button">✕</button>
      </div>

      <div className="upload-content">
        <div className="owner-info">
          <p>
            <strong>Document Owner:</strong> <span className="bold-text">Accountant 01</span>
          </p>
          <p>
            <strong>Client:</strong> <span className="select-dropdown">Select Client ▼</span>
          </p>
        </div>

        <div className="upload-box">
          <div className="upload-icon">📤</div>
          <p className="upload-text">
            <span className="purple-text">Drag & Drop or Choose file to upload</span>
          </p>
          <p className="file-types">JPG, PNG, PDF, CVS</p>
        </div>

        <button className="add-receipt-button">Add Receipt</button>

        <div className="email-info">
          <p><strong>Send Over Email</strong></p>
          <p>Single: <span className="email purple-text">abc.single@gmail.com</span> 📋</p>
          <p>Multiple: <span className="email purple-text">abc.multiple@gmail.com</span> 📋</p>
        </div>
      </div>
    </div>
  );
};

export default UploadReceipt;
