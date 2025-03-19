import React from "react";
import { FaTachometerAlt, FaFileInvoice, FaUsers, FaChartBar, FaUniversity, FaBook, FaQuestionCircle } from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">∞</div>
      <ul>
        <li><FaTachometerAlt /> Dashboard</li>
        <li><FaUniversity /> Accounting</li>
        <li><FaBook /> Banking</li>
        <li><FaChartBar /> Reports</li>
        <li><FaUsers /> Contacts</li>
        <li><FaFileInvoice /> Invoices</li>
        <li><FaUsers /> Guests</li>
      </ul>
      <div className="help"><FaQuestionCircle /> Help</div>
    </div>
  );
};

export default Sidebar;
