import React,{useState} from "react";
import "../styles/HomeBanner.css";

import useDeviceType from '../hooks/useDeviceType';

const HomeBanner = () => {
  const [selectedValue, setSelectedValue] = useState("1");
  const deviceType = useDeviceType();

  return (
    <div className="home-banner">
     {deviceType !== 'mobile' && (
  <div
    id="carouselHospital"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators banner-slider">
      <button
        type="button"
        data-bs-target="#carouselHospital"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselHospital"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselHospital"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <video
          className="d-block"
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: '500px',
            objectFit: 'fill'
          }}
          autoPlay
          muted
          playsInline
        >
          <source src="slide-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="carousel-item">
        <video
          className="d-block"
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '1920px',
            maxHeight: '500px',
            objectFit: 'fill'
          }}
          autoPlay
          muted
          playsInline
        >
          <source src="slide-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="carousel-item">
        <video
          className="d-block"
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '1920px',
            maxHeight: '500px',
            objectFit: 'fill'
          }}
          autoPlay
          muted
          playsInline
        >
          <source src="slide-3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
)}

      {/* Search Box */}
      <div className="serach-box-div">
        <form className="row g-3 align-items-end search-box text-white">
          <div className="col-md-3">
            <h3>I’m looking for</h3>
            <label htmlFor="location" className="form-label">
              Location/City
            </label>
          
            <select  className="form-control" id="location"value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
            <option value="1">Dasuya</option>
            
          </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="searchDoctor" className="form-label">
              Search Doctors by
            </label>
            <input
              type="text"
              className="form-control"
              id="searchDoctor"
              placeholder="Specialty, Condition, Doctor’s name"
            />
          </div>
          <div className="col-md-3 div-btn-search">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeBanner;
