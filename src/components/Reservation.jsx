import { useState } from "react";
import "./Reservation.css";

function Reservation() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const date = form.date.value.trim();
    const time = form.time.value.trim();
    const guests = form.guests.value.trim();

    if (!name || !phone || !date || !time || !guests) {
      return;
    }

    setSubmitted(true);

    form.reset();
  };

  return (
    <section
      id="reservation"
      className="reservation"
      data-aos="zoom-in"
    >

      <p className="small-heading">
        RESERVE YOUR SPOT
      </p>

      <h2>
        Book A Table At Nova Brew
      </h2>

      <form
        className="reservation-form"
        onSubmit={handleSubmit}
      >

        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          name="phone"
          type="text"
          placeholder="Phone Number"
          maxLength="10"
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit phone number"
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
          }}
          required
        />

        <input
          name="date"
          type="text"
          placeholder="Preferred Date (DD/MM/YYYY)"
          required
        />

        <input
          name="time"
          type="text"
          placeholder="Preferred Time (e.g. 6:30 PM)"
          required
        />

        <input
          name="guests"
          type="number"
          placeholder="Number of Guests"
          min="1"
          max="20"
          required
        />

        <button type="submit">
          Reserve Table
        </button>

      </form>

      {submitted && (
        <div className="success-message">

          ☕ Reservation Received

          <br />
          <br />

          Thank you for choosing Nova Brew.

          <br />

          We look forward to sharing a cozy moment with you.

        </div>
      )}

    </section>
  );
}

export default Reservation;