import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

const Contact = ()=>{

    const inputFields = {
        email: {
            id: "email",
            type: "email",
            placeholder: "name@flowbite.com",
            label: "Your email",
            required: true,
        },
        subject: {
            id: "subject",
            type: "text",
            placeholder: "Let us know how we can help you",
            label: "Subject",
            required: true,
        },
        message: {
            id: "message",
            type: "textarea",
            placeholder: "Leave a comment...",
            label: "Your message",
            rows: 6,
        },
    };

    return(
        <>
            <Header />
            <ContactForm inputFields={inputFields} />
            <Footer />
        </>
    )
}

export default Contact;