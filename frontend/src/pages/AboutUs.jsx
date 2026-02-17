import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <section className="mission">
                <div className="mission-content">
                    <div className="about-text-title">
                        <h2>Our Mission</h2>
                        <p>Your Health Is Our Priority. To make healthcare accessible to all.</p>
                    </div>
                    <div className="about-img">
                        <img
                            src="doctors.png"
                            alt="Doctors"
                            className="hero-image"
                        />
                    </div>
                </div>
            </section>

            <section className="story">
                <h2>Our Story Grew From Seeds of Compassion</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <h3>2019</h3>
                        <p><strong>Started operations in Gurugram</strong><br />
                            Started operations in Gurugram with our world-class medical Facility in DLF
                        </p>
                    </div>
                    <div className="timeline-item">
                        <h3>2018</h3>
                        <p><strong>Partnership with Dharamshila Cancer Foundation and Research</strong><br />
                            Partnership with Dharamshila Cancer Foundation and Research to provide healthcare services in Dasuya initiated
                        </p>
                    </div>
                    <div className="timeline-item">
                        <h3>2017</h3>
                        <p><strong>Launched our first Paediatric hospital</strong><br />
                            Launched our first Paediatric hospital in Mumbai with SRCC Children Trust
                        </p>
                    </div>
                </div>
            </section>

            <section className="overview">
            <h2>Overview</h2>
                <div className="overview-content">
                    <div className="text">
                    <h3>Healthier People, Happier Planet: Our Sustainable Vision</h3>
                    <p>
                        As we care about your health and the environment, we're taking steps to be eco-friendly and create a happy and healthy world for everyone.
                    </p>
                    </div>
                    <img
                    src="heart-healthy-people.jpg"
                    alt="Gloved Hands"
                    />
                </div>
            </section>

            <section className="honours">
                <h2>Honours and Recognition</h2>
                <p></p>
                <div className="tabs">
                    {/* <button className="active">Latest</button> */}
                    {/* <button>2025</button> */}
                </div>
                <div className="honour-content">
                    <img
                        src="award.png"
                        alt="Award"
                    />
                    <div className="text">
                        <h4>Winning the Way Forward</h4>
                        <p>
                            A proud moment in our commitment to healthcare excellence “The Best Human Experience Management Award”.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
