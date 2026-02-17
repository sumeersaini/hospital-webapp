import React from "react";
import "../styles/HomeCentresOfExcellence.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useDeviceType from "../hooks/useDeviceType";

const centres = [
  {
    icon: "medicine.png",
    title: "Medical Care",
    description:
      "With decades of experience in internal medicine, we provide personalized, evidence-based care for a wide range of adult health conditions — ensuring accurate diagnosis and comprehensive treatment.",
  },
  {
    icon: "sss.png",
    title: "General Surgery",
    description:
      "Our expert surgical team delivers safe, advanced procedures using cutting-edge technology and compassionate care — ensuring the best outcomes for every patient.",
  },
  {
    icon: "gyno.png",
    title: "Gynecology & Obstetrics",
    description:
      "From routine checkups to advanced maternity and women's health services, our team provides compassionate, expert care through every stage of life",
  },
  {
    icon: "gastro.png",
    title: "Gastro Sciences",
    description:
      "We offer expert diagnosis and treatment for digestive disorders, combining advanced endoscopic technology with personalized care for lasting relief and better gut health.",
  },
  {
    icon: "diagnostics.png",
    title: "Preventive Health & Diagnostics",
    description:
      "We focus on early detection, prevention, and management of chronic diseases like diabetes, hypertension, and lifestyle disorders — empowering you to take control of your long-term health with tailored care and cutting-edge diagnostics.",
  },
];

const HomeCentresOfExcellence = () => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === "mobile";

  return (
    <section className="home-centres-section">
      <div className="inner-centeres-section">
        <h2 className="section-title center-excelence-title">
          Our Centres of Excellence
        </h2>

        {/* Mobile Swiper Slider */}
        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
             slidesPerView={1}
            centeredSlides={true} 
            pagination={{ clickable: true }}
          >
            {centres.map((centre, index) => (
              <SwiperSlide key={index}>
                <div className="centre-card mobile-card">
                  <div className="centre-title">{centre.title}</div>
                  <div className="centre-hover show">
                    <div className="hover-description">{centre.description}</div>
                    <div className="hover-readmore">Read More →</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Desktop Grid
          <div className="inner-box-excellence">
            {centres.map((centre, index) => (
              <div key={index} className="centre-box">
                <div className="centre-card">
                  <div className="centre-title">{centre.title}</div>
                  <div className="centre-hover">
                    <div className="hover-description">{centre.description}</div>
                    <div className="hover-readmore">Read More →</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeCentresOfExcellence;
