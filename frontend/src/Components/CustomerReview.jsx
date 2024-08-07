import React from 'react';
import customerImage from '../assest/images/customer.webp';

const CustomerReview = () => {
    return (
        <section className="p-10 mt-10 text-center md:p-28" style={{ backgroundColor: 'rgb(255, 216, 144)' }}>
            <h1 className="mb-2 text-3xl font-bold">Customer Review</h1>
            <p className="m-auto text-xl font-normal sm:w-2/4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga cum pariatur impedit explicabo doloribus earum odit inventore vitae magnam.
            </p>
            <div className="flex justify-center mt-5">
                <div className="mx-3">
                    <img src={customerImage} alt="Customer" />
                </div>
                <div>
                    <p>Petey Crusier</p>
                    <p className="font-light">Designed at colorlib</p>
                </div>
            </div>
        </section>
    );
};

export default CustomerReview;
