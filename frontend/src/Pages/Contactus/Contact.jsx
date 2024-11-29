
import React, { useState , useEffect} from 'react';
import './Contact.css';
import Footer from '../../Components/Footer/Footer';
import Customercare from '../../Components/Contacts/Customercare';
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar';

const Contact = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Function to check screen size
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
  
    useEffect(() => {
      // Check screen size on component mount
      checkScreenSize();
  
      // Add resize event listener
      window.addEventListener('resize', checkScreenSize);
  
      // Cleanup the event listener on unmount
      return () => {
        window.removeEventListener('resize', checkScreenSize);
      };
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);

    const contactMethods = [
        {
            icon: '🎧',
            title: 'Customer Service',
            description: 'All Days: 8AM to 6PM',
            contact: '1800 209 9191',
        },
        {
            icon: '📞',
            title: 'Customer Service (NRI Customers)',
            description: 'Monday to Friday: 9AM to 6PM – IST',
            contact: '+91 8069440017',
        },
        {
            icon: '💬',
            title: 'Live Chat',
            description: 'All Days: 8AM to 8PM',
            contact: '',
        },
        {
            icon: '💬',
            title: 'WhatsApp Chat',
            description: 'All Days: 8AM to 8PM',
            contact: '',
        },
        // {
        //     icon: '📧',
        //     title: 'Email us for queries/requests',
        //     description: 'service.securities@kotak.com',
        //     contact: '',
        // },
    ];

    const faqItems = [
        {
            question: "How do I open an account online?",
            solution: "You can open an account online by visiting the account opening page and filling out the required details."
        },
        {
            question: "Procedure for filing a complaint with Kotak Securities",
            solution: "You can file a complaint via our website, or you can reach out to customer service for assistance."
        },
        {
            question: "What reports or statements shall I require while filing IT return?",
            solution: "You'll need to have your transaction statements, account balance reports, and other relevant documents."
        },
        {
            question: "How to close my account online?",
            solution: "To close your account, log in to your account, go to account settings, and follow the steps for closure."
        },
        {
            question: "What documents are required for account verification?",
            solution: "You will need your KYC documents, such as a government-issued ID and proof of address."
        },
        {
            question: "How do I reset my password?",
            solution: "Click the 'Forgot Password' link on the login page and follow the instructions to reset your password."
        },
        {
            question: "How can I update my address?",
            solution: "Go to your account settings and select the option to update your address details."
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % faqItems.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? faqItems.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
    
       {/* <Navbar/> */}
       {isMobile ? <Sidebar/> : <Navbar />}
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">
                Have a query? We're happy to hear from you!
            </p>

            <div className="contact-cards">
                {contactMethods.map((method, index) => (
                    <div className="contact-card" key={index}>
                        <span className="contact-icon">{method.icon}</span>
                        <h3 className="contact-card-title">{method.title}</h3>
                        <p className="contact-description">{method.description}</p>
                        {method.contact && <p className="contact-info">{method.contact}</p>}
                    </div>
                ))}
            </div>

            <div className="faq-section">
                <div className="faq-text">
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                    <p className="faq-description">
                        Here are some of the most frequently asked questions. Click through to learn more!
                    </p>
                </div>
                <div className="faq-carousel">
                    <button className="carousel-button left" onClick={handlePrevious}>&lt;</button>
                    <div className="faq-item">
                        <p className="faq-question">{faqItems[currentIndex].question}</p>
                        <p className="faq-solution">{faqItems[currentIndex].solution}</p>
                    </div>
                    <button className="carousel-button right" onClick={handleNext}>&gt;</button>
                </div>
                </div>
                
             

            </div>

            <div className='contactteam-details'>
            <Customercare/>
            </div>
        <Footer />
        </>
    );
};

export default Contact;
