import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h4 className="footer-title">Bank Details for Fund Transfer</h4>
                <div className="footer-section">
                    <div className="footer-card">
                        <h5>CASH SEGMENT</h5>
                        <p><strong>Name:</strong> Rikhav Securities Limited</p>
                        <p><strong>Bank Name:</strong> HDFC Bank Ltd.</p>
                        <p><strong>A/c No:</strong> Rikhav + Client Code</p>
                        <p className="example">(Example: Client Code is L10, A/C No. will be RikhavL10)</p>
                        <p><strong>IFSC Code:</strong> HDFC0000060</p>
                        <p><strong>Branch:</strong> Fort</p>
                    </div>
                    <div className="footer-card">
                        <h5>DERIVATIVES (F&O) SEGMENT</h5>
                        <p><strong>Name:</strong> Rikhav Securities Limited</p>
                        <p><strong>Bank Name:</strong> HDFC Bank Ltd.</p>
                        <p><strong>A/c No:</strong> RKHAV36 + Client Code</p>
                        <p className="example">(Example: Client Code is L10, A/C No. will be RKHAV36L10)</p>
                        <p><strong>IFSC Code:</strong> HDFC0000060</p>
                        <p><strong>Branch:</strong> Fort</p>
                    </div>
                </div>
                
                <div className="footer-info">
                    <p>Rikhav Securities Ltd - Member: BSE/ NSE / MCX. SEBI Registration No.: INZ000157737.</p>
                    <p>Compliance Officer: Mr. Vishal G. Patel | Contact Email: info@rikhav.net</p>
                    <p>Depository Participant (CDSL) SEBI Registration No.: IN-DP-CDSL-417-2007. DP Compliance Officer: Vishal G. Patel</p>
                    <p>&copy; 2017 Rikhav Securities Ltd. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
