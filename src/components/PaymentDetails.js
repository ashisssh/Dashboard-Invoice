import React from "react";
import "../styles/PaymentDetails.css";

const PaymentDetails = () => {
  return (
    <div className="payment-details">
      <h3>Payment Details</h3>

      <div className="radio-group">
        <label>
          <input type="radio" name="paymentStatus" /> Paid
        </label>
        <label>
          <input type="radio" name="paymentStatus" /> Unpaid
        </label>
      </div>

      <div className="input-group">
        <label>Bill Number</label>
        <input type="text" placeholder="Start Typing" />
      </div>

      <div className="input-group">
        <label>Bill Date</label>
        <input type="date" />
      </div>

      <div className="input-group">
        <label>Paid Amount</label>
        <input type="text" placeholder="₹ 1900.00" />
      </div>

      <div className="input-group">
        <label>Paid Date</label>
        <input type="date" />
      </div>

      <div className="input-group">
        <label>Due Date</label>
        <input type="date" />
      </div>

      <div className="input-group">
        <label>Payment Mode</label>
        <select>
          <option>Select Payment Mode</option>
        </select>
      </div>

      <div className="input-group">
        <label>Currency</label>
        <select>
          <option>Select Currency</option>
        </select>
      </div>

      <div className="input-group">
        <label>Bank Transaction Ref</label>
        <input type="text" placeholder="Start Typing" />
      </div>

      <div className="input-group">
        <label>Total Amount</label>
        <input type="text" placeholder="Start Typing" />
      </div>

      <div className="input-group">
        <label>Tax Amount</label>
        <input type="text" placeholder="Start Typing" />
      </div>

      <div className="input-group">
        <label>FX Rate</label>
        <input type="text" placeholder="Start Typing" />
      </div>

      <h4>Description</h4>
      <div className="radio-group">
        <label>
          <input type="radio" name="description" /> Single
        </label>
        <label>
          <input type="radio" name="description" /> Multiple
        </label>
      </div>

      <div className="input-group">
        <label>Description</label>
        <input type="text" placeholder="Enter Description" />
      </div>

      <div className="buttons">
        <button className="save-btn">Save</button>
        <button className="publish-btn">Publish</button>
      </div>
    </div>
  );
};

export default PaymentDetails;
