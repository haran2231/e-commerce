import React from 'react';
import heroImage from '../assest/images/hero1.webp'; // Adjust the path as necessary


const Hero = () => {
    return (
        <section className="w-full h-full" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="flex py-24 ml-6 lg:justify-end">
                {/* <img src="./assets/images/hero1.webp" alt="Banner"> */}
                <div className="w-2/5 mt-36">
                    <h2 className="mb-2 font-mono text-3xl font-medium" style={{ color: 'orange' }}>Fashion Design</h2>
                    <h2 className="my-2 text-4xl font-bold">Minimal Mens Style</h2>
                    <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod aliquid architecto nihil tempore eveniet! Laborum laudantium tempore perferendis doloribus!</p>
                    <button className="p-4 my-4 text-white bg-black btn animate-bounce">Shop Now</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
