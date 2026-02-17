import React from "react";
import "../styles/HomeChairman.css";

const HomeChairman = () => {
  return (
    <section className="home-chairman">
      <div className="inner-chairman">
        <div className="row align-items-center inner-box-size">
          <h2 className="section-title">Message From Our Chairman</h2>

          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src="dr.png"
              alt="Dr. Aman"
              className="img-fluid chairman-img"
            />
          </div>
          <div className="col-md-8">
            <p className="chairman-text">
              Back in the day, we realised that just as innovation in medical
              science is elementary to the growth of healthcare, we need to
              bring innovation in how we take quality healthcare to everyone.
            </p>
            <p className="chairman-text">
              We realised that it is not merely a transaction of health services
              between a patient and doctor. It is trust that fosters a healthy
              relationship in the journey of health.
            </p>
            <p className="chairman-text">
              As we move with the times, we realise that technology has a huge
              role in making our services way more efficient. And by its
              application, way more human as well.
            </p>
            <p className="chairman-text">
              We have a dream. Our dream is to be available to you round the
              clock, wherever you are and whenever you want. We want to be just
              one tap away from you, and this will be the beginning of
              consumer-centric healthcare.
            </p>
            <div className="chairman-signature">
              <p className="mb-1 fw-medium">Take Care</p>
              <h5>Dr. Aman</h5>
              <small>Founder and Chairman</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeChairman;
