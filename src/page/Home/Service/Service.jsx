import Container from "../../../components/Container/Container";
import serviceImg from '../../../assets/doctor/service-img.png'
import Category from "./Category";
const Service = () => {
    return (
        <Container>
            <div className="md:flex flex-row items-center gap-10 md:my-20 mt-32 mx-5 space-y-8 md:space-y-0">
                <div className="md:w-1/2">
                    <img src={serviceImg} alt="" />
                </div>
                <div className="md:w-1/2">
                    <h2 className="font-bold text-3xl md:text-justify text-center">Our Services</h2>
                    <p className="md:text-justify text-center pb-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <div>
                        <Category />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Service;