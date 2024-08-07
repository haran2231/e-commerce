import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Category from "../Components/Category";
import Trending from "../Components/Trending";
import CustomerReview from "../Components/CustomerReview";
import LatestBlog from "../Components/LatestBlog";
import BenefitsSection from "../Components/BenefitsSection";



const Home = () => {

    return (
        <>
            <Header />
            <Hero />
            <Category />
            <Trending></Trending>
            <CustomerReview />
            <LatestBlog />
            <BenefitsSection />
            <Footer />
        </>
    )
}

export default Home;