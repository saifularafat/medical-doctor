import { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Expert from "./Expert";

const ExpertDoctor = () => {
    const [expertDoctor, setExpertDoctor] = useState([]);
    useEffect(() => {
        fetch('/public/Doctor.json')
            .then(res => res.json())
            .then(data => setExpertDoctor(data))
    }, [])
    return (
        <Container>
            <SectionTitle
                title='Our Expert Doctors'
                subTitle='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' />
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                {
                    expertDoctor.map(expertDoc => <Expert
                        key={expertDoc.id}
                        expertDoc={expertDoc}
                    />)
                }
            </div>
        </Container>
    );
};

export default ExpertDoctor;