import Container from "../../../components/Container/Container";
import logo from "../../../assets/doctor/logo-h.png"
import { NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <div className="w-full bg-main-color fixed z-10">
            <Container>
                <div className="flex items-center justify-between py-6">
                    <div className="flex flex-row items-center">
                        <img src={logo} alt="" />
                        <h2 className="ml-3 text-4xl font-bold text-button-color">Doc <span className="text-white">House</span></h2>
                    </div>
                    <ul className="md:flex items-center hidden space-x-8">
                        <li>
                            <NavLink to='/' className={({isActive}) => (isActive ? 'bg-button-color py-3 px-6 text-white text-xl font-semibold': 'text-white text-xl font-semibold')}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='about' className={({isActive}) => (isActive ? 'bg-button-color py-3 px-6 text-white text-xl font-semibold': 'text-white text-xl font-semibold')}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='appointment' className={({isActive}) => (isActive ? 'bg-button-color py-3 px-6 text-white text-xl font-semibold': 'text-white text-xl font-semibold')}>
                            Appointment
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='reviews' className={({isActive}) => (isActive ? 'bg-button-color py-3 px-6 text-white text-xl font-semibold': 'text-white text-xl font-semibold')}>
                            Reviews 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='contactUs' className={({isActive}) => (isActive ? 'bg-button-color py-3 px-6 text-white text-xl font-semibold': 'text-white text-xl font-semibold')}>
                            Contact Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/login' className={({isActive}) => (isActive ? 'bg-button-color py-3 px-6 text-white text-xl font-semibold': 'text-white text-xl font-semibold')}>
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Nav;