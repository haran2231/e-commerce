import React from 'react';
import menImage from '../assest/images/men.webp';
import womenImage from '../assest/images/women.webp';
import babyImage from '../assest/images/baby.webp';

const Category = () => {
    return (
        <section className="my-10">
            <div className="grid justify-center grid-cols-1 gap-5 mx-6 md:mx-32 md:grid-cols-3">
                <div className="relative boy">
                    <img src={menImage} alt="Men" className="w-full mb-5 bgg" />
                    <h3 className="w-full text-xs font-bold text-center animate-pulse sm:relative sm:text-white sm:bg-gray-600 md:text-2xl sm:bottom-16">
                        Men's fashion
                    </h3>
                </div>
                <div className="boy">
                    <img src={womenImage} alt="Women" className="w-full mb-5" />
                    <h3 className="w-full text-xs font-bold text-center animate-pulse sm:relative sm:text-white md:text-2xl sm:bg-gray-600 sm:bottom-16">
                        Women's fashion
                    </h3>
                </div>
                <div className="boy">
                    <img src={babyImage} alt="baby" className="w-full mb-5" />
                    <h3 className="w-full text-xs font-bold text-center animate-pulse sm:relative sm:text-white md:text-2xl sm:bg-gray-600 sm:bottom-16">
                        Baby's fashion
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Category;
