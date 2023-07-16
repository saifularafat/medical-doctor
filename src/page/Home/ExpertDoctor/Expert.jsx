import { GrLocation } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Expert = ({ expertDoc }) => {
    // console.log(expertDoc);
    return (
        <div className="mb-20 mt-12">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6">
                <div className="card md:w-96 bg-base-100 shadow-xl border md:space-y-3">
                    <img
                        src={expertDoc?.img}
                        alt="Shoes"
                        className="rounded-xl p-5" />
                    <div className="card-body">
                        <h2 className="text-xl font-bold text-subTitle-color -mt-7">{expertDoc?.doc_name}</h2>
                        <h5 className="font-normal text-description-color">{expertDoc?.title}</h5>
                        <div className="rating pt-3 pb-6">
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
                        <div className="flex items-center text-description-color">
                            <GrLocation className="w-6 h-6 text-description-color"/>
                            <span className="pl-5">{expertDoc?.adders}</span>
                        </div>
                        <div className="flex items-center text-description-color py-1">
                            <MdOutlineDateRange className="w-6 h-6"/>
                            <span className="pl-5">{expertDoc?.job}</span>
                        </div>
                        <div className="flex items-center text-description-color">
                            <AiOutlineDollar className="w-6 h-6"/>
                            <span className="pl-5">${expertDoc?.bookingFree}</span>
                        </div>
                        <div className="mt-5 w-full">
                            <Link to={`profile/${expertDoc?.id}`}>
                                <button className="w-full text-xl font-bold hover:text-white py-[14px] hover:bg-button-color border border-button-color text-button-color bg-transparent transition duration-200 rounded-lg">View Profile</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;