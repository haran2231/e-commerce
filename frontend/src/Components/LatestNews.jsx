import React from 'react';

const LatestNews = ({ newsItems }) => {
    return (
        <section className="py-10 my-8 bg-gray-200">
            <h2 className="mb-10 text-3xl font-bold text-center">Latest News</h2>
            <div className="grid justify-center grid-cols-1 gap-5 mx-10 md:mx-32 md:grid-cols-3">
                {newsItems.map((item, index) => (
                    <div key={index}>
                        <img src={item.imgSrc} alt={item.altText} className="w-full mb-5 bgg" />
                        <p className="font-light">{item.category}</p>
                        <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
                        <p className="mt-2">{item.description}</p>
                        <p className="mt-2 underline"><a href={item.link}>Read More</a></p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestNews;
