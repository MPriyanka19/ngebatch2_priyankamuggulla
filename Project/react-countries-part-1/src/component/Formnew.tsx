import React, { useState } from "react";
import "../App.css"; // Import the CSS file for styles

const Formnew = () => {
  const [form, setForm] = useState({
    name: "",
    capacity: "",
    halls: "",
    address: "",
    geolocation: "",
    imageUrl: "",
    email: "",
    phone: "",
    summary: "",
    availableFrom: "",
    availableTo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitting(true); // Start the progress indication

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false); // End the progress indication
      alert("Form submitted successfully!");
    }, 3000); // Simulate a delay for form submission
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Enter Venue Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            placeholder="Venue Name"
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Enter Capacity:</label>
          <input
            type="number"
            id="capacity"
            name="capacity"
            value={form.capacity}
            placeholder="Capacity"
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="halls">Halls:</label>
          <input
            type="number"
            id="halls"
            name="halls"
            value={form.halls}
            placeholder="No. of Halls"
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.address}
            placeholder="Valid Address"
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="geolocation">GeoLocation:</label>
          <input
            type="text"
            id="geolocation"
            name="geolocation"
            value={form.geolocation}
            placeholder="Location"
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={form.imageUrl}
            placeholder="Image URL"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            placeholder="Email Address"
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            placeholder="Phone Number"
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            name="summary"
            value={form.summary}
            placeholder="Minimum 150 characters"
           // onChange={handleChange}
            
            minLength={150}
          />
        </div>
        <div className="form-group">
          <label htmlFor="availableFrom">Available From:</label>
          <input
            type="date"
            id="availableFrom"
            name="availableFrom"
            value={form.availableFrom}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="availableTo">Available To:</label>
          <input
            type="date"
            id="availableTo"
            name="availableTo"
            value={form.availableTo}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className={`submit-btn ${isSubmitting ? "btn--running" : ""}`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      <div
        className={`progress-button ${
          isSubmitting ? "btn--running btn_progress-fill" : ""
        }`}
      >
        <svg
          className="progress-icon btn_progress-check"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default Formnew;
