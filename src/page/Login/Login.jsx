import { useForm } from "react-hook-form"
import login from '../../assets/doctor/login-img.png'
import { Link } from "react-router-dom";
const Login = () => {
    const {
        register,
        handleSubmit,
        // reset,
        formState: { errors },
    } = useForm()
    const handlerLogin = data => {
        console.log(data);
    }
    return (
        <div className="md:flex flex-row">
            <div className="bg-main-color md:w-1/2 h-screen">
                <img src={login} alt="" className='w-4/6 mx-auto pt-20' />
            </div>
            <div className='md:w-1/2 flex items-center justify-center'>
                <div className="flex flex-col border md:px-20 px-8 md:py-12 py-5 rounded-md shadow-lg shadow-slate-400">
                    <form
                        onSubmit={handleSubmit(handlerLogin)}
                        className=" space-y-8 "
                    >
                        <h2 className="text-title-color text-center font-bold text-3xl mb-12">Sign in to Doc House</h2>
                        <div className="">
                            <label htmlFor="email" className="">
                                <span className="text-xl font-semibold text-title-color"> Username or Email Address</span>
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder="Enter your username or address"
                                className="w-full bg-[#F3F3F3] p-4 focus:outline-none rounded-md text-[#9D9C9C] shadow-lg mt-3"
                                {...register("email", { required: true })}
                            />
                            {
                                errors.email?.type === 'required' && (
                                    <p className="text-red-600">Email is required</p>
                                )
                            }
                        </div>
                        <div className="">
                            <label htmlFor="password" className="flex justify-between items-center">
                                <p> <span className="text-xl font-semibold text-title-color">Password</span></p>
                                <p> <span className="text-button-color font-medium cursor-pointer">Forgot password?</span></p>
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                placeholder="Enter your password"
                                className="w-full bg-[#F3F3F3] p-4 focus:outline-none rounded-md text-[#9D9C9C] shadow-lg mt-3"
                                {...register("password", { required: true })}
                            />
                            {errors.password?.type === 'required' &&
                                <p className="text-red-600 mt-1">Password is required</p>
                            }
                        </div>
                        <div className="">
                            <input type="submit" className="w-full cursor-pointer bg-button-color py-4 font-semibold text-xl tracking-wide text-white rounded-md focus:outline-none" />
                        </div>
                    </form>
                    <p className="text-center pt-5">Please register at first. Go to

                        <Link to='/signUp' className="text-button-color font-bold text-lg text-center">
                            SIGN UP
                        </Link>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Login;