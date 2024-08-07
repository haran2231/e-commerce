import Footer from "../Components/Footer";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import latest1 from '../assest/images/latest1.webp';
import latest2 from '../assest/images/latest2.webp';
import latest3 from '../assest/images/latest3.webp';



const Blog = ()=>{
    const newsItems = [
        {
            imgSrc: latest1,
            altText: "Men",
            category: "Fashion Design",
            title: "What Curling Irons Are The Best Ones",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla repudiandae accusamus magni ut numquam!",
            link: "#"
        },
        {
            imgSrc: latest2,
            altText: "Women",
            category: "Fashion Design",
            title: "What Curling Irons Are The Best Ones",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla repudiandae accusamus magni ut numquam!",
            link: "#"
        },
        {
            imgSrc: latest3,
            altText: "Baby",
            category: "Fashion Design",
            title: "What Curling Irons Are The Best Ones",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla repudiandae accusamus magni ut numquam!",
            link: "#"
        },
        {
            imgSrc: latest1,
            altText: "Men",
            category: "Fashion Design",
            title: "What Curling Irons Are The Best Ones",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla repudiandae accusamus magni ut numquam!",
            link: "#"
        },
        {
            imgSrc: latest2,
            altText: "Women",
            category: "Fashion Design",
            title: "What Curling Irons Are The Best Ones",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla repudiandae accusamus magni ut numquam!",
            link: "#"
        },
        {
            imgSrc: latest3,
            altText: "Baby",
            category: "Fashion Design",
            title: "What Curling Irons Are The Best Ones",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla repudiandae accusamus magni ut numquam!",
            link: "#"
        },
        {
            imgSrc: latest1,
            altText: "Men",
            category: "Fashion Design",
            title: "What Curling Irons Are The Best Ones",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla repudiandae accusamus magni ut numquam!",
            link: "#"
        },
        {
            imgSrc: latest2,
            altText: "Women",
            category: "Fashion Design",
            title: "What Curling Irons Are The Best Ones",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla repudiandae accusamus magni ut numquam!",
            link: "#"
        },
        {
            imgSrc: latest3,
            altText: "Baby",
            category: "Fashion Design",
            title: "What Curling Irons Are The Best Ones",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla repudiandae accusamus magni ut numquam!",
            link: "#"
        },
        {
            imgSrc: latest1,
            altText: "Men",
            category: "Fashion Design",
            title: "What Curling Irons Are The Best Ones",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla repudiandae accusamus magni ut numquam!",
            link: "#"
        },
        {
            imgSrc: latest2,
            altText: "Women",
            category: "Fashion Design",
            title: "What Curling Irons Are The Best Ones",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla repudiandae accusamus magni ut numquam!",
            link: "#"
        },
        {
            imgSrc: latest3,
            altText: "Baby",
            category: "Fashion Design",
            title: "What Curling Irons Are The Best Ones",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla repudiandae accusamus magni ut numquam!",
            link: "#"
        },
        // Add more items as needed
    ];
    

    return(
        <>
        <Header />
        <LatestNews newsItems={newsItems} />
        <Footer />
        </>
    )
}

export default Blog;