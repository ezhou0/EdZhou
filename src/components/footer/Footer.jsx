import React from 'react';
import "./footer.css";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Edwin Zhou</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                     <li>
                        <a href="#experience" className="footer__link">Experience</a>
                    </li>

                     <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                </ul>
                <div className="footer__social">
                     <a href="https://www.linkedin.com/in/edwin-zhou-a231b31b6/" className="footer__social-link" target="_blank">
                <i class="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://www.github.com/ezhou0" className="footer__social-link" target="_blank">
                <i class="uil uil-github-alt"></i>
            </a>
                </div>

                <span className = "footer__copy"></span>
            </div>
        </footer>
    )
}

export default Footer;

