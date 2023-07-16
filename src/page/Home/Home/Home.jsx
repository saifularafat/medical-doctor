import Adders from "../Adders";
import Banner from "../Banner";
import Contact from "../Contact/Contact";
import ExpertDoctor from "../ExpertDoctor/ExpertDoctor";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner />
            <Service />
            <Adders />
            <Testimonial />
            <ExpertDoctor />
            <Contact />
        </div>
    );
};

export default Home;