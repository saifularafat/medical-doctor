import Container from "../../../components/Container/Container";
import { BsTelephoneOutbound } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

import { useForm } from "react-hook-form"
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm();

    const handleBookNow = data => {
        console.log(data);
        axios.post(`${import.meta.env.VITE_API_URL}/bookings`, {
            userName: data.userName,
            userEmail: data.userEmail,
            userNumber: data.userNumber,
            doctorName: data.doctorName,
            date: data.date,
            time: data.time,
        })
            .then(data => {
                console.log(data.data);
                if (data.data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your Booking Successful',
                        showConfirmButton: false,
                        timer: 1000
                    })
                }
            })
            .catch((err) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: `${err.message}`
                })
            })
    }

    return (
        <Container>
            <div className="bg-main-color md:p-24 p-6 rounded-lg">
                <div className="md:flex flex-row gap-6">
                    <div className="md:w-[360px]">
                        <h2 className="font-bold text-4xl text-white pb-6">Contact With Us</h2>
                        <p className="font-normal text-base text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                        <p className="text-white flex items-center pt-8 ">
                            <BsTelephoneOutbound className="w-7 h-7" />
                            <span className="pl-4 text-lg font-medium">+88 01750 14 14 14</span>
                        </p>
                        <p className="text-white flex items-center pt-6 ">
                            <CiLocationOn className="w-7 h-7" />
                            <span className="pl-4 text-lg font-medium">Dhanmondi, Dhaka, Bangladesh</span>
                        </p>
                    </div>
                    <div className="md:pl-6">
                        <form
                            onSubmit={handleSubmit(handleBookNow)}
                            className="space-y-6">
                            <div className="md:flex items-center gap-4 md:mt-0 mt-10 md:space-y-0 space-y-5">
                                <input
                                    type="text"
                                    name="userName"
                                    placeholder="Name"
                                    required
                                    {...register("userName", { required: true })}
                                    className="md:w-[260px] w-full focus:border-none
                                    rounded-lg pl-4 py-4 text-white text-xl bg-[#133D39] focus:outline-none"
                                />
                                <input
                                    type="email"
                                    name="userEmail"
                                    placeholder="Email"
                                    required
                                    {...register("userEmail", { required: true })}
                                    className="md:w-[260px] w-full
                                    rounded-lg pl-4 py-4 text-white text-xl bg-[#133D39] focus:outline-none"
                                />
                            </div>
                            <div className="md:flex items-center gap-4 md:space-y-0 space-y-5">
                                <input
                                    name="userNumber"
                                    placeholder="Mobile Number"
                                    required
                                    {...register("userNumber", { required: true })}
                                    className="md:w-[260px] w-full
                                    rounded-lg pl-4 py-4 text-white text-xl bg-[#133D39] focus:outline-none"
                                />
                                <input
                                    type="text"
                                    name="doctorName"
                                    placeholder="Doctor Name"
                                    required
                                    {...register("doctorName", { required: true })}
                                    className="md:w-[260px] w-full
                                    rounded-lg pl-4 py-4 text-white text-xl bg-[#133D39] focus:outline-none"
                                />
                            </div>
                            <div className="md:flex items-center gap-4 md:space-y-0 space-y-5">
                                <input
                                    type="date"
                                    name="date"
                                    placeholder="Date"
                                    required
                                    {...register("date", { required: true })}
                                    className="md:w-[260px] w-full
                                    rounded-lg px-4 py-4 text-white text-xl bg-[#133D39] focus:outline-none"
                                />
                                <select
                                    name="time"
                                    required
                                    {...register("time", { required: true })}
                                    className="md:w-[260px] w-full
                                    rounded-lg px-4 py-4 text-white text-xl bg-[#133D39] focus:outline-none">
                                    <option value="time">Time</option>
                                    <option value="10.30 AM">10.30 AM</option>
                                    <option value="12.00 PM">12.00 PM</option>
                                    <option value="04.30 PM">04.30 PM</option>
                                    <option value="05.30 PM">05.30 PM</option>
                                </select>
                            </div>
                            <input
                                type="submit"
                                value={"Book Now"}
                                className="w-full bg-button-color text-white rounded-lg text-xl font-bold py-4 hover:bg-transparent hover:text-button-color border-2 border-button-color transition duration-200"></input>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Contact;