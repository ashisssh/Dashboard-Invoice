import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import InvoiceList from "../components/InvoiceList";
import InvoicePreview from "../components/InvoicePreview";
import PaymentDetails from "../components/PaymentDetails";
import "../styles/Dashboard.css"; // Dashboard styles

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          <InvoiceList />
          <InvoicePreview />
          <PaymentDetails />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
