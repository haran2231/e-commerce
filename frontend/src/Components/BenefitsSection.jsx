import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faMoneyCheck, faMedal, faHeadset } from '@fortawesome/free-solid-svg-icons';

const BenefitsSection = () => {
    return (
        <section className="py-10">
            <div className="text-center sm:flex justify-evenly">
                <div className="mb-10 md:mb-0">
                    <FontAwesomeIcon icon={faTruck} className="mb-2 text-4xl animate-pulse" />
                    <h2 className="mb-2">Fast and Free Delivery</h2>
                    <p className="font-light">Free delivery on all orders</p>
                </div>
                <p className="mb-10 border-r-2 md:mb-0"></p>
                <div>
                    <FontAwesomeIcon icon={faMoneyCheck} className="mb-2 text-4xl animate-pulse" />
                    <h2 className="mb-2">Secure Payments</h2>
                    <p className="font-light">Free delivery on all orders</p>
                </div>
                <p className="mb-10 border-r-2 md:mb-0"></p>
                <div>
                    <FontAwesomeIcon icon={faMedal} className="mb-2 text-4xl animate-pulse" />
                    <h2 className="mb-2">Money Back Guarantee</h2>
                    <p className="font-light">Free delivery on all orders</p>
                </div>
                <p className="mb-10 border-r-2 md:mb-0"></p>
                <div>
                    <FontAwesomeIcon icon={faHeadset} className="mb-2 text-4xl animate-pulse" />
                    <h2 className="mb-2">24/7 Support</h2>
                    <p className="font-light">Free delivery on all orders</p>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
