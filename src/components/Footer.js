import React, {Component} from 'react';

const Footer = (props) =>{
    return(
        <footer>
            <p className="footer-links">
                <a href="https://github.com/tamilzh/" target="_blank">View Source on Github</a>
                <span>  /  </span>
                <a href="mailto:tamilselvan.p@kgisl.com" target="_blank">Need any help?</a>
            </p>
            <p>&copy; 2018 <strong>eKart</strong> - Ecommerce Store</p>
        </footer>
    )
};

export default Footer;