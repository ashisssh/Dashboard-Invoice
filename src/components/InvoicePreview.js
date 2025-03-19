import React from "react";
import "../styles/InvoicePreview.css";

const InvoicePreview = () => {
  return (
    <div className="invoice-preview">
      <div className="invoice-container">
        <h3>Invoice Preview</h3>
        <div className="invoice">
          <h2>INVOICE</h2>
          <p>Bill to: XYZ</p>
          <p>Amount: ₹5000</p>
        </div>
      </div>
    </div>
  );
};

export default InvoicePreview;
