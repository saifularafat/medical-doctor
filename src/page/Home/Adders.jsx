import Container from "../../components/Container/Container";
import { BiTime } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephoneOutbound } from "react-icons/bs";
const Adders = () => {
    return (
        <Container>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 my-24 mx-5 md:mx-0">
                <div className="bg-main-color p-10 rounded-lg">
                    <div className="flex gap-5 text-white">
                        <BiTime className="w-12 h-12" />
                        <div>
                            <h2 className="text-2xl font-bold">Opening Hours</h2>
                            <p>Open 9.00 am to 5.00pm Everyday</p>
                        </div>
                    </div>
                </div>
                <div className="bg-button-color p-10 rounded-lg">
                    <div className="flex gap-4 text-white">
                        <IoLocationOutline className="w-12 h-12" />
                        <div>
                            <h2 className="text-2xl font-bold">Our Locations</h2>
                            <p>Dhanmondi 17, Dhaka <br /> -1200, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="bg-main-color p-10 rounded-lg">
                    <div className="flex gap-5 text-white">
                        <BsTelephoneOutbound className="w-12 h-12 pt-2" />
                        <div>
                            <h2 className="text-2xl font-bold">Contact Us</h2>
                            <p>+88 01750 00 00 00 <br />
                                +88 01750 00 00 00</p>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default Adders;