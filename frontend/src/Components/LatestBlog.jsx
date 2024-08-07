import React from 'react';
import latest1 from '../assest/images/latest1.webp';
import latest2 from '../assest/images/latest2.webp';
import latest3 from '../assest/images/latest3.webp';

const LatestBlog = () => {
    return (
        <section className="py-10 my-8 bg-gray-200">
            <h2 className="mb-10 text-3xl font-bold text-center">Latest News</h2>
            <div className="grid justify-center grid-cols-1 gap-5 mx-6 md:mx-32 md:grid-cols-3">
                <div>
                    <img src={latest1} alt="Men" className="w-full mb-5 bgg" />
                    <p className="font-light">Fashion Design</p>
                    <h2 className="mt-2 text-2xl font-semibold">What Curling Irons Are The Best Ones</h2>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla repudiandae accusamus magni ut numquam!</p>
                    <p className="mt-2 underline"><a href="#">Read More</a></p>
                </div>
                <div>
                    <img src={latest2} alt="Women" className="w-full mb-5" />
                    <p className="font-light">Fashion Design</p>
                    <h2 className="mt-2 text-2xl font-semibold">What Curling Irons Are The Best Ones</h2>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla repudiandae accusamus magni ut numquam!</p>
                    <p className="mt-2 underline"><a href="#">Read More</a></p>
                </div>
                <div>
                    <img src={latest3} alt="baby" className="w-full mb-5" />
                    <p className="font-light">Fashion Design</p>
                    <h2 className="mt-2 text-2xl font-semibold">What Curling Irons Are The Best Ones</h2>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla repudiandae accusamus magni ut numquam!</p>
                    <p className="mt-2 underline"><a href="#">Read More</a></p>
                </div>
            </div>
        </section>
    );
};

export default LatestBlog;
