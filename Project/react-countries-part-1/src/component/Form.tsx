import React, { useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        capacity: '',
        halls:'',
        address: '',
        geolocation: '',
        imageUrl: '',
        email: '',
        phone: '',
        summary: '',
        availableFrom: '',
        availableTo:''
    })
   const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
  return (
    <div>
      <form>
        <div>
          <label>Enter Venue name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="venue name"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Enter Capacity:</label>
          <input
            type="number"
            name="capacity"
            value={form.capacity}
            placeholder="capacity"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Halls:</label>
          <input
            type="number"
            name="halls"
            value={form.halls}
            placeholder="no. of halls"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={form.address}
            placeholder="valid address"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>GeoLocation:</label>
          <input
            type="text"
            name="geoloaction"
            value={form.geolocation}
            placeholder="location"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={form.imageUrl}
            placeholder="imageUrl"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="email address"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            id="phone"
            name="capacity"
            value={form.phone}
            placeholder="phone number"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Summary:</label>
          <textarea
            id="summary"
            name="summary"
            value={form.summary}
            placeholder="minimum 150 characters"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Available From:</label>
          <input
            type="date"
            name="availableFrom"
            value={form.availableFrom}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Available To:</label>
          <input
            type="date"
            name="availableTo"
            value={form.availableTo}
            onChange={handleChange}
          ></input>
        </div>
        <button
          type="submit"
          className={`submit-btn ${isSubmitting ? "btn--running" : ""}`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
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
}

export default Form