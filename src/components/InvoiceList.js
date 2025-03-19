import React, { useState } from "react";
import "../styles/InvoiceList.css";

const InvoiceList = () => {
  const [activeTab, setActiveTab] = useState("Bills");

  return (
    <div className="invoice-list">
      <div className="tabs">
        <span className={activeTab === "All" ? "active" : ""} onClick={() => setActiveTab("All")}>All Documents</span>
        <span className={activeTab === "Bills" ? "active" : ""} onClick={() => setActiveTab("Bills")}>Bills</span>
        <span className={activeTab === "Receipts" ? "active" : ""} onClick={() => setActiveTab("Receipts")}>Receipts</span>
      </div>
      <ul>
        <li>Bill 1</li>
        <li>Bill 2</li>
        <li>Bill 3</li>
        <li>Bill 4</li>
      </ul>
    </div>
  );
};

export default InvoiceList;
