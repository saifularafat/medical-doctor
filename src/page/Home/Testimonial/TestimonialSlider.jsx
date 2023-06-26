import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import './TestimonialSlider.css'

import userImg1 from '../.../../../../assets/doctor/user1.png'
import userImg2 from '../.../../../../assets/doctor/user2.png'
import que from '../.../../../../assets/doctor/Quote_1_.png'
const TestimonialSlider = () => {
    return (
        < div className="my-16">
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=" md:flex items-center md:gap-5 md:mx-8 mx-2">
                        <div className="md:w-1/2 border rounded-lg p-5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <img src={userImg1} alt="" />
                                    <div>
                                        <h1 className="text-xl font-bold text-title-color">Awlad Hossain</h1>
                                        <p className="text-base text-description-color">Product Designer</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={que} alt="" />
                                </div>
                            </div>
                            <p className="py-5">
                                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.
                            </p>
                        </div>
                        <div className="md:w-1/2 hidden md:block border rounded-lg p-5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <img src={userImg2} alt="" />
                                    <div>
                                        <h1 className="text-xl font-bold text-title-color">Awlad Hossain</h1>
                                        <p className="text-base text-description-color">Product Designer</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={que} alt="" />
                                </div>
                            </div>
                            <p className="py-5">
                                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" md:flex items-center md:gap-5 md:mx-8 mx-2">
                        <div className="md:w-1/2 hidden md:block border rounded-lg p-5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <img src={userImg1} alt="" />
                                    <div>
                                        <h1 className="text-xl font-bold text-title-color">Awlad Hossain</h1>
                                        <p className="text-base text-description-color">Product Designer</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={que} alt="" />
                                </div>
                            </div>
                            <p className="py-5">
                                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.
                            </p>
                        </div>
                        <div className="md:w-1/2 border rounded-lg p-5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <img src={userImg2} alt="" />
                                    <div>
                                        <h1 className="text-xl font-bold text-title-color">Awlad Hossain</h1>
                                        <p className="text-base text-description-color">Product Designer</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={que} alt="" />
                                </div>
                            </div>
                            <p className="py-5">
                                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" md:flex items-center md:gap-5 md:mx-8 mx-2">
                        <div className="md:w-1/2 border rounded-lg p-5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <img src={userImg1} alt="" />
                                    <div>
                                        <h1 className="text-xl font-bold text-title-color">Awlad Hossain</h1>
                                        <p className="text-base text-description-color">Product Designer</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={que} alt="" />
                                </div>
                            </div>
                            <p className="py-5">
                                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.
                            </p>
                        </div>
                        <div className="md:w-1/2 hidden md:block border rounded-lg p-5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <img src={userImg2} alt="" />
                                    <div>
                                        <h1 className="text-xl font-bold text-title-color">Awlad Hossain</h1>
                                        <p className="text-base text-description-color">Product Designer</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={que} alt="" />
                                </div>
                            </div>
                            <p className="py-5">
                                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;