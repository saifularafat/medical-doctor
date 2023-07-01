import { useEffect, useState } from "react";
import Container from "../../../../components/Container/Container";
import ProfileDocu from "./ProfileDocu";
import { useParams } from "react-router-dom";

const Profile = () => {
    const [expertDoctor, setExpertDoctor] = useState([]);
    useEffect(() => {
        fetch('/public/Doctor.json')
            .then(res => res.json())
            .then(data => setExpertDoctor(data))
    }, []);

    const { id } = useParams();
    const oneProfile = expertDoctor.filter(doctorProfile => doctorProfile.id == id);
    // console.log(oneProfile);
    return (
        <div className="bg-[#F3F3F3]">
            <div className="bg-main-color h-96">
                <Container>
                    <h2 className="pt-44 text-white text-lg font-normal">Home /  Doctor Profile</h2>
                    <h1 className="text-[45px] font-bold text-white">Doctor Profile</h1>
                </Container>
            </div>
            <div className="md:pt-32 py-8 md:pb-12">
                <Container>
                    {
                        oneProfile.map((profile) => <ProfileDocu key={profile?.id} profileInfo={profile} />)
                    }
                </Container>
            </div>
        </div>
    );
};

export default Profile;