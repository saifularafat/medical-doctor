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
                <div className="md:flex flex-row items-center justify-center absolute">
                    <div className="md:w-1/2 text-white">
                        <div className=" md:w-[540px] hidden md:block ">
                            <h2 className="md:text-6xl font-bold leading-normal">Your Best Medical Help Center</h2>
                            <p className="mb-7 text-[19px] font-semibold">Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                            <Button adders='' label='All Service' />
                        </div>
                        <div className=" md:hidden w-full mx-auto space-y-3 pt-28">
                            <h2 className="font-semibold text-4xl text-center">Your Best Medical <br /> Help Center</h2>
                            <p className="mb-3 text-base font-normal text-center ">Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                            <div className="text-center pt-3">
                                <Button adders='' label='All Service' />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 hidden md:block">
                        <img src={docImage} alt="" />
                    </div>
                    <div className="md:hidden bg-main-color pb-3">
                        <img src={docImage} alt="" className="w-3/4 mx-auto"/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;