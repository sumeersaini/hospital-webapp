import React, { useState } from "react";
import "../styles/HomeHealthcare.css";

const TABS = [
  {
    id: "success",
    label: "Success Stories",
    cards: [
      {
        title: "Life Saved with Timely Diagnosis of Sepsis",
        desc: "Dr.  (MD Medicine) identified early sepsis signs and stabilized a critical patient.",
        tag: "Internal Medicine",
        img: "sepsis.png",
      },
      {
        title: "Gallbladder Removed via Laparoscopic Surgery",
        desc: "Dr.  (MD General Surgery) performed a minimally invasive cholecystectomy.",
        tag: "General Surgery",
        img: "gallbllader.png",
      },
      {
        title: "High-Risk Pregnancy Managed Successfully",
        desc: "Dr. (MD Gynae & Obs) ensured safe delivery for a high-risk patient.",
        tag: "Obstetrics",
        img: "high-risk.png",
      },
      {
        title: "Appendicitis Surgery Saves Teen’s Life",
        desc: "Quick action by Dr.  helped avoid complications in a 15-year-old.",
        tag: "Emergency Surgery",
        img: "teen-apend.png",
      },
    ],
  },
  {
    id: "news",
    label: "News & Articles",
    cards: [
      {
        title: "New Diabetes Management Guidelines Released",
        desc: "MD physicians adopt WHO protocols for better glycemic control.",
        tag: "Medicine",
        img: "diabties.png",
      },
      {
        title: "Advances in Hernia Repair Techniques",
        desc: "General surgeons now use mesh implants for quicker recovery.",
        tag: "Surgical Innovation",
        img: "hernia.png",
      },
      {
        title: "Tele-Gynaecology Gains Popularity Post-COVID",
        desc: "Remote consultations support expecting mothers in rural areas.",
        tag: "Women’s Health",
        img: "tele-gynaecology.png",
      },
      {
        title: "Internists Focus on Preventive Medicine Campaigns",
        desc: "Screening programs to tackle heart disease and hypertension.",
        tag: "Public Health",
        img: "internists.png",
      },
    ],
  },
  {
    id: "blogs",
    label: "Blogs From Our Experts",
    cards: [
      {
        title: "5 Signs You Should See a Physician Immediately",
        desc: "Dr. Meera Kapoor explains early red flags in general health.",
        tag: "Internal Medicine",
        img: "symptoms.png",
      },
      {
        title: "Understanding Laparoscopic vs Open Surgery",
        desc: "Dr. Rakesh Singh breaks down the benefits of minimally invasive surgery.",
        tag: "General Surgery",
        img: "laparoscopic-surgery-Indore.png",
      },
      {
        title: "Pregnancy Nutrition Myths Busted",
        desc: "Dr. Anjali Sinha shares insights on healthy eating during pregnancy.",
        tag: "Obstetrics",
        img: "Food-for-pregnant-woman.png",
      },
      {
        title: "Managing PCOS with Lifestyle Changes",
        desc: "A gynaecologist’s view on treating PCOS naturally and medically.",
        tag: "Gynaecology",
        img: "poc.png",
      },
    ],
  },
];

const HomeHealthcare = () => {
  const [activeTab, setActiveTab] = useState("success");

  return (
    <div className="home-healthcare">
      <div className="inner-healthcare">
         <h2 className="section-title">Healthcare Insights</h2>
      <p className="subheading">
        Read about Healing Hand Health’s success stories, stay informed with the latest news and media updates,
        and explore informative blogs from our experts.
      </p>

      <div className="nav-buttons">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`btn-nav-healthcare ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {TABS.find((tab) => tab.id === activeTab)?.cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <span className="tag">{card.tag}</span>
          </div>
        ))}
      </div>
      </div>
     
    </div>
  );
};

export default HomeHealthcare;
