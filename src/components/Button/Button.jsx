import { Link } from "react-router-dom";

const Button = ({ adders, label }) => {
    return (
        <Link
            to={adders}
            className="text-xl font-bold text-white bg-button-color py-3 px-7 rounded-lg border border-button-color hover:text-button-color transition duration-200">
            {label}
        </Link>
    );
};

export default Button;