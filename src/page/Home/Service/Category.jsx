import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Category.css';
import { useService } from '../../../hook/useService';
import { Link } from 'react-router-dom';

const Category = () => {
    const [services] = useService();
    const cavity = services.find(service => service.category_Name === "Cavity");
    const cosmetic = services.find(service => service.category_Name === "Gastrology");
    const oral = services.find(service => service.category_Name === "Oral");
    return (
        <Tabs>
            <TabList>
                <Tab>Cavity Protection</Tab>
                <Tab>Cosmetic Dentistry</Tab>
                <Tab>Oral Surgery</Tab>
            </TabList>

            <TabPanel>
                <img src={cavity?.img} alt="" className='my-10 md:w-[480px] md:mx-0 mx-auto w-72 h-64 md:h-80' />
                <h2 className='md:text-3xl text-2xl font-bold my-6 md:text-justify text-center'>{cavity?.title}</h2>
                <p>{cavity?.description}</p>
                <p className='pt-4 md:text-justify text-center'>{cavity?.description1}</p>
                <div className='my-9 md:text-justify text-center'>
                    <Link to={`/details/${cavity?._id}`} className='detail_btn'>More Details</Link>
                </div>
            </TabPanel>
            <TabPanel>
                <img src={cosmetic?.img} alt="" className='my-10 md:w-[420px] md:mx-0 mx-auto w-72 h-64 md:h-80' />
                <h2 className='md:text-3xl text-2xl font-bold my-6 md:text-justify text-center'>{cosmetic?.title}</h2>
                <p>{cosmetic?.description}</p>
                <p className='pt-4 md:text-justify text-center'>{cosmetic?.description1}</p>
                <div className='my-9 md:text-justify text-center'>
                    <Link to={`/details/${cosmetic?._id}`} className='detail_btn'>More Details</Link>
                </div>
            </TabPanel>
            <TabPanel>
                <img src={oral?.img} alt="" className='my-10 md:w-[420px] md:mx-0 mx-auto w-72 h-64 md:h-80' />
                <h2 className='md:text-3xl text-2xl font-bold my-6 md:text-justify text-center'>{oral?.title}</h2>
                <p>{oral?.description}</p>
                <p className='pt-4 md:text-justify text-center'>{oral?.description1}</p>
                <div className='my-9 md:text-justify text-center'>
                    <Link to={`/details/${oral?._id}`} className='detail_btn'>More Details</Link>
                </div>
            </TabPanel>
        </Tabs >
    );
};

export default Category;