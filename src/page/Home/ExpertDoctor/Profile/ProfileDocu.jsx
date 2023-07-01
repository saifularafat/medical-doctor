import { GrLocation } from "react-icons/gr";

const ProfileDocu = ({ profileInfo }) => {
    console.log(profileInfo)
    return (
        <div className="bg-white md:p-9 p-5 rounded-lg">
            <div className="md:flex items-center gap-7">
                <div>
                    <p className="md:w-[350px] w-[347px] h-[250px] md:h-[378px] rounded-lg bg-slate-300"></p>
                </div>
                <div className="space-y-3">
                    <h2 className="text-4xl font-bold text-title-color pt-4 md:pt-0">{profileInfo?.doc_name}</h2>
                    <h5 className="font-normal text-lg text-description-color">{profileInfo?.title}</h5>
                    <div className="flex items-center">
                        <div className="rating">
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                checked
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                            />
                        </div>
                        <span className="text-lg font-normal pl-2">({profileInfo?.totalRating})</span>
                    </div>
                    <div className="md:flex items-center">
                        <div className="flex items-center text-description-color">
                            <GrLocation className="w-6 h-6 text-description-color" />
                            <span className="pl-5">{profileInfo?.adders}</span>
                        </div>
                        <span className="text-button-color md:pl-2 pl-10">{profileInfo?.direction}</span>
                    </div>
                    <div className="grid md:grid-cols-6 grid-cols-3 md:gap-5 gap-3 md:py-4">
                        <p className="w-20 h-20 rounded-lg bg-[#f3f3f3]"></p>
                        <p className="w-20 h-20 rounded-lg bg-[#f3f3f3]"></p>
                        <p className="w-20 h-20 rounded-lg bg-[#f3f3f3]"></p>
                        <p className="w-20 h-20 rounded-lg bg-[#f3f3f3]"></p>
                        <p className="w-20 h-20 rounded-lg bg-[#f3f3f3]"></p>
                        <p className="w-20 h-20 rounded-lg bg-[#f3f3f3]"></p>
                    </div>
                    <div className=" hidden md:block">
                            <button className="py-2 px-5 border-2 rounded-lg font-semibold text-xl">Dental Filling</button>
                            <button className="py-2 px-5 border-2 rounded-lg font-semibold text-xl ml-5">Teeth Whitneing</button>
                    </div>
                    <div className="md:hidden block pt-4">
                            <button className="py-2 px-5 border-2 rounded-lg font-semibold text-xl">Dental Filling</button> <br />
                            <button className="py-2 px-5 border-2 rounded-lg font-semibold text-xl mt-3">Teeth Whitneing</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDocu;