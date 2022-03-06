import React from 'react';
import phoneCall from '../../assets/images/phone-call.png';
import gmail from '../../assets/images/gmail.png';
import gitHub from '../../assets/images/github.png';
import "../Footer/Footer.css";

function Footer () {

  const contacts = [
    {
      "image": phoneCall,
      "link": "tel:507.649.0822",
      "alt": "Telephone Icon"
    },
    {
      "image": gmail,
      "link": "mailto:klmirg6@gmail.com",
      "alt": "Gmail logo"
    },
    {
      "image": gitHub,
      "link": "https://github.com/klmirg",
      "alt": "Github logo"
    }
  ]

  return (
    <div className="footer">
      <ul className="footer">
       {contacts.map((contact, i) => (
         <li key={i}>
           <a href={contact.link}>
           <img src={contact.image} alt={contact.alt} className="img-thumbnail"/></a>
         </li>
       ))} 
        <li className="linkedinlogo">
          <a href="https://www.linkedin.com/in/ronya-gettis-267b91220/">
          <img src={require("../../assets/images/Linkedin_symbol_transparent.png")} alt="Linkedin logo"/></a>
        </li> 
      </ul>
    </div>
  );
}


export default Footer;