import bannerImg from "../../assets/doctor/bg.png"
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import docImage from '../../assets/doctor/doc-slider.png'
const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bannerImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100vh',
                width: '100'
            }}
        >
            <Container>
                <div className="flex flex-row items-center justify-center absolute mt-8">
                    <div className="w-1/2 text-white">
                        <div className=" w-[540px] ">
                            <h2 className="text-6xl font-bold leading-normal">Your Best Medical Help Center</h2>
                            <p className="mb-7 text-[19px] font-semibold">Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                            <Button adders='' label='All Service' />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img src={docImage} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;