import React from 'react';
import "./AboutUs.css";
import { useTheme } from '../../context/ThemeContext'; // Import the theme hook

const aboutContent = [
    {
        title: "Our Strength",
        content: "We are committed to providing clients with top-notch financial services, combining modern technology with deep-rooted values. Our client-focused approach ensures that each solution is tailored to add value to our clients’ lives, always prioritizing customer satisfaction."
    },
    {
        title: "Our Vision",
        content: "Our goal is to be a leading brokerage firm, delivering comprehensive advisory services and full management of clients' financial needs. With a growing network of branches and franchisees, we stay ahead by providing innovative services in equity, derivatives, and digital trading solutions."
    }
];

const AboutUs = () => {
    const { isDarkMode } = useTheme(); // Access the theme
    return (
        <>
        <section className="about-us-section">
            <div className="about-us-header">
                <h3 className={`about-us-tagline  ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>THE CRAZE IS RIYAL!</h3>
                <h1 className="about-us-title">It's time for our story!</h1>
                <p className="about-us-description">
                    Learn more about what drives us and why our clients trust us with their financial future.
                </p>
            </div>
            <div className="about-content-container">
                {aboutContent.map((content, index) => (
                    <div key={index} className="about-card">
                        <h4 className="about-card-title">{content.title}</h4>
                        <p className="about-card-content">{content.content}</p>
                    </div>
                ))}
            </div>
        </section>
        </>
    );
};

export default AboutUs;
