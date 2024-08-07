import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="py-10 text-white bg-black">
            <div className="items-center justify-around w-4/5 m-auto mb-5 text-center border-b-2 md:flex">
                <div className="mb-6">
                    <h2 className="mb-2 text-2xl font-bold">Subscribe News Letter</h2>
                    <p>Subscribe newsletter to get 5% on all products.</p>
                </div>
                <div className="mb-6">
                    <input className="p-3 text-black w-72 focus:outline-none" type="email" placeholder="Enter your email..." />
                    <button className="p-3 mt-2 ml-1 bg-red-600 btn2">Subscribe</button>
                </div>
                <div className="flex justify-center gap-5 mb-6">
                    <FontAwesomeIcon icon={faFacebook} className="fa-2x" />
                    <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
                    <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
                </div>
            </div>

            {/* <div className="mt-5 text-center md:flex md:text-left md:justify-evenly">
                <div className="mb-4">
                    <img className="m-auto" src="./assets/images/logo-footer.webp" alt="Logo" />
                </div>
                <ul className="mb-5 font-light">
                    <li className="mb-2 font-bold">Shop Men</li>
                    <li>Clothing Fashion</li>
                    <li>Summer</li>
                    <li>Winter</li>
                    <li>Formal</li>
                    <li>Casual</li>
                </ul>
                <ul className="mb-5 font-light">
                    <li className="mb-2 font-bold">Shop Women</li>
                    <li>Clothing Fashion</li>
                    <li>Summer</li>
                    <li>Winter</li>
                    <li>Formal</li>
                    <li>Casual</li>
                </ul>
                <ul className="mb-5 font-light">
                    <li className="mb-2 font-bold">Shop Baby</li>
                    <li>Clothing Fashion</li>
                    <li>Summer</li>
                    <li>Winter</li>
                    <li>Formal</li>
                    <li>Casual</li>
                </ul>
                <ul className="mb-5 font-light">
                    <li className="mb-2 font-bold">Quick Links</li>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="Mens.html">Men</a></li>
                    <li><a href="womens.html">Women</a></li>
                    <li><a href="baby.html">Baby Collections</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div> */}

            <div><p className="w-4/5 m-auto mt-5 border-b-2"></p></div>
            <div className="my-5 font-light text-center">
                <p>Copyright ©2024 All rights reserved | This template is made with Heart by Colorlib</p>
            </div>
        </footer>
    );
};

export default Footer;
