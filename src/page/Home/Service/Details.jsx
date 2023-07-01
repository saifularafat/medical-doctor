import { useParams } from "react-router-dom";
import { useService } from "../../../hook/useService";
import Container from "../../../components/Container/Container";

const Details = () => {
    const { id } = useParams();
    const [services] = useService();
    const oneService = services.find(item => item._id === id);
    return (
        <div>
            <div className="bg-main-color w-full md:h-96 h-64">  
            </div>
            <Container>
                <div className="md:we-1\2 md:flex flex-row items-center gap-10 py-20 mx-5 md:mx-0">
                    <div>
                        <img src={oneService?.img} alt="" className="md:w-[540px] h-96" />
                    </div>
                    <div className="space-y-4 md:w-1/2 mt-8 md:mt-0">
                        <h2 className="text-2xl md:text-3xl font-semibold">Treatment Name: <span className="font-bold md:text-4xl text-3xl text-main-color">{oneService?.category_Name}</span></h2>
                        <h3 className="font-semibold text-2xl ">{oneService?.title}</h3>
                        <p className="text-gray-400 text-lg text-justify md:text-left">{oneService?.description}</p>
                        <p className="text-gray-400 text-lg text-justify md:text-left">{oneService?.description1}</p>
                        <p className="text-gray-500 text-xl">Treatment Time: <span>09:00 AM - 05:30 PM </span> ||| <span>EveryDay</span></p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Details;