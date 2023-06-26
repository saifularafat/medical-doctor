import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import TestimonialSlider from "./TestimonialSlider";
const Testimonial = () => {
    return (
        <Container>
            <div className="pt-8 pb-24">
                <SectionTitle
                    title='What Our Patients Says'
                    subTitle='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' />

                <div>
                    <TestimonialSlider />
                </div>
            </div>
        </Container>
    );
};

export default Testimonial;