import { Link } from 'react-router-dom';
import error from '../../assets/doctor/error404.png'
const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen md:py-0 py-5'>
            <h2 className='text-3xl font-extrabold text-title-color'>Sorry,</h2>
            <p className=' text-[#6C6B6B] pb-6'>This page is not found.</p>
            <img src={error} alt="" />
            <Link to='/' className='mt-6 md:py-[16px] py-3 px-7 bg-button-color text-white text-xl font-medium rounded-md'>Back to Home</Link>
        </div>
    );
};

export default Error;