import React from 'react';
import "../Footer/Footer.css";

function Footer () {

  return (
    <div className="footer">
      <ul>
        <li>
          <a href="tel:507.649.0822">
          <img src={require("../../assets/images/phone-call.png")} alt="Telephone Icon"/></a>
        </li>
        <li>
          <a href="mailto:klmirg6@gmail.com">
          <img src={require("../../assets/images/gmail.png")} alt="Gmail Logo"/></a>
        </li>
        <li>
          <a href="https://github.com/klmirg">
          <img src={require("../../assets/images/github.png")} alt="GitHub logo"/></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ronya-gettis-267b91220/">
          <img src={require("../../assets/images/Linkedin_symbol_transparent.png")} alt="Linkedin logo" className="linkedinlogo"/></a>
        </li>
      </ul>
    </div>
  );
}


export default Footer;