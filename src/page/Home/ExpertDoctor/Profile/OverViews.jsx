import Container from "../../../../components/Container/Container";

const OverViews = ({ viewsInfo }) => {
    return (
        <div>
            <Container>
                <div className="pt-7">
                    <h2 className="text-xl font-bold text-title-color">About Me</h2>
                    <p className=" my-3 md:w-[910px]">{viewsInfo?.aboutMe}</p>
                    <div className="md:flex items-center gap-5 ">
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-bold text-title-color pb-7">Education</h3>
                            <div>
                                <li className="text-lg font-bold">{viewsInfo?.americaUni}</li>
                                <p className="pl-6 text-subTitle-color">{viewsInfo?.degree}</p>
                                <p className="pl-6 text-subTitle-color">{viewsInfo?.year}</p>
                            </div>
                            <div className="pt-2">
                                <li className="text-lg font-bold">{viewsInfo?.americaUni}</li>
                                <p className="pl-6 text-subTitle-color">{viewsInfo?.degreeOne}</p>
                                <p className="pl-6 text-subTitle-color">{viewsInfo?.yearOne}</p>
                            </div>
                            <h2 className="text-xl font-bold text-title-color py-7">Work & Experience</h2>
                            <div className="space-y-1">
                                <li className="text-lg font-bold">{viewsInfo?.hospitalName}</li>
                                <p className="pl-6 text-subTitle-color">{viewsInfo?.experienceYear}</p>
                                <li className="text-lg font-bold">{viewsInfo?.hospitalNameTwo}</li>
                                <p className="pl-6 text-subTitle-color">{viewsInfo?.experienceYearTwo}</p>
                                <li className="text-lg font-bold">{viewsInfo?.hospitalNameThree}</li>
                                <p className="pl-6 text-subTitle-color">{viewsInfo?.experienceYearThree}</p>
                            </div>

                            <h2 className="text-xl font-bold text-title-color py-7">Services </h2>
                            <div className="space-y-1 pl-4">
                                <li className="text-subTitle-color">{viewsInfo?.service?.[0]}</li>
                                <li className="text-subTitle-color">{viewsInfo?.service?.[1]}</li>
                                <li className="text-subTitle-color">{viewsInfo?.service?.[2]}</li>
                                <li className="text-subTitle-color">{viewsInfo?.service?.[3]}</li>
                                <li className="text-subTitle-color">{viewsInfo?.service?.[4]}</li>
                                <li className="text-subTitle-color">{viewsInfo?.service?.[5]}</li>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-bold text-title-color pb-7">Awards</h3>
                            <p className="pl-6 text-subTitle-color">{viewsInfo?.awardsDate}</p>
                            <div>
                                <li className="text-lg font-bold">{viewsInfo?.awardName}</li>
                                <p className="pl-6 text-subTitle-color pb-6">{viewsInfo?.awardDetails}</p>
                                <p className="pl-6 text-subTitle-color">{viewsInfo?.awardsDateOne}</p>
                            </div>
                            <div>
                                <li className="text-lg font-bold">{viewsInfo?.awardNameOne}</li>
                                <p className="pl-6 text-subTitle-color pb-6">{viewsInfo?.awardDetailsOne}</p>
                                <p className="pl-6 text-subTitle-color">{viewsInfo?.awardsDateTwo}</p>
                            </div>
                            <div>
                                <li className="text-lg font-bold">{viewsInfo?.awardNameTwo}</li>
                                <p className="pl-6 text-subTitle-color pb-6">{viewsInfo?.awardDetailsTwo}</p>
                            </div>
                            <h3 className="text-xl font-bold text-title-color py-7">Specializations</h3>
                            <div className="space-y-1 pl-7">
                                <li className="text-subTitle-color">{viewsInfo?.Specializations?.[0]}</li>
                                <li className="text-subTitle-color">{viewsInfo?.Specializations?.[1]}</li>
                                <li className="text-subTitle-color">{viewsInfo?.Specializations?.[2]}</li>
                                <li className="text-subTitle-color">{viewsInfo?.Specializations?.[3]}</li>
                                <li className="text-subTitle-color">{viewsInfo?.Specializations?.[4]}</li>
                                <li className="text-subTitle-color">{viewsInfo?.Specializations?.[5]}</li>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OverViews;