import React from 'react';

const ContactForm = ({ inputFields }) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mb-8 font-light text-center text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                </p>
                <form action="#" className="space-y-8">
                    {Object.values(inputFields).map((field) => (
                        <div key={field.id}>
                            <label htmlFor={field.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                {field.label}
                            </label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    id={field.id}
                                    rows={field.rows}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder={field.placeholder}
                                    required={field.required}
                                ></textarea>
                            ) : (
                                <input
                                    type={field.type}
                                    id={field.id}
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder={field.placeholder}
                                    required={field.required}
                                />
                            )}
                        </div>
                    ))}
                    <button className="w-full px-10 py-6 text-white bg-black">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
