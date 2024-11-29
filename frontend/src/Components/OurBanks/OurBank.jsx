import React from 'react';
import './OurBank.css';

import BankOfIndia from '../../assets/Bank_of_India_logo.png';
import HdfcBank from '../../assets/HDFC_Bank_logo.png';
import YesBank from '../../assets/yes_bank_logo.png';
import SaraswatBank from '../../assets/saraswat_bank_logo.png';
import KotakBank from '../../assets/kotak_bank_logo.png';

const banks = [
  { name: 'Bank Of India', logo: BankOfIndia },
  { name: 'HDFC Bank', logo: HdfcBank },
  { name: 'YES Bank', logo: YesBank },
  { name: 'Saraswat Bank', logo: SaraswatBank },
  { name: 'Kotak Bank', logo: KotakBank },
];

const OurBank = () => {
  return (
    <div className="bank-slider-container">
      <h2 className="bank-slider-title">Our Bankers</h2>
      <div className="bank-slider">
        <div className="bank-slider-track">
         
          {banks.concat(banks).map((bank, index) => (
            <div key={index} className="bank-slide">
              <img src={bank.logo} alt={`${bank.name} Logo`} className="bank-bank-logo" />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBank;
