import { useForm } from "react-hook-form"
import login from '../../assets/doctor/login-img.png'
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
    const { createUser } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const handlerSignUp = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const logged = result.user;
                console.log(logged);
                axios.post(`${import.meta.env.VITE_API_URL}/users`, {
                    name: data.name,
                    email: data.email,
                    userName: data.userName,
                    role: 'passant'
                })
                    .then(data => {
                        console.log(data);
                        if (data.data.insertedId) {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Your SignUp success!',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                        navigate('/')
                    })
                    .catch(err => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `${err.message}`,
                        })
                    })
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
            })
    }
    return (
        <div className="md:flex flex-row">
            <div className="bg-main-color md:w-1/2">
                <img src={login} alt="" className='w-4/6 mx-auto pt-24' />
            </div>
            <div className='md:w-1/2 flex items-center justify-center'>
                <div className="flex flex-col border md:px-[76px] px-8 md:py-8 py-5 rounded-md shadow-lg shadow-slate-400">
                    <form
                        onSubmit={handleSubmit(handlerSignUp)}
                        className=" space-y-4 "
                    >
                        <h2 className="text-title-color text-center font-bold text-3xl mb-12">Sign Up to Doc House</h2>
                        <div className="">
                            <label htmlFor="name" className="">
                                <span className="text-xl font-semibold text-title-color"> Name</span>
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                required
                                placeholder="Enter your name"
                                className="w-full bg-[#F3F3F3] p-4 focus:outline-none rounded-md text-[#9D9C9C] shadow-lg mt-3"
                                {...register("name", { required: true })}
                            />
                            {
                                errors.name?.type === 'required' && (
                                    <p className="text-red-600">Name is required</p>
                                )
                            }
                        </div>
                        <div className="">
                            <label htmlFor="userName" className="">
                                <span className="text-xl font-semibold text-title-color"> Username</span>
                            </label>
                            <input
                                type='text'
                                name='userName'
                                id='userName'
                                required
                                placeholder="Enter your username"
                                className="w-full bg-[#F3F3F3] p-4 focus:outline-none rounded-md text-[#9D9C9C] shadow-lg mt-3"
                                {...register("userName", { required: true })}
                            />
                            {
                                errors.name?.type === 'required' && (
                                    <p className="text-red-600">UserName is required</p>
                                )
                            }
                        </div>
                        <div className="">
                            <label htmlFor="email" className="">
                                <span className="text-xl font-semibold text-title-color"> Email</span>
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder="Enter your email"
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
                            <label htmlFor="password" className="">
                                <p> <span className="text-xl font-semibold text-title-color">Password</span></p>
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                placeholder="Enter your password"
                                className="w-full bg-[#F3F3F3] p-4 focus:outline-none rounded-md text-[#9D9C9C] shadow-lg mt-3"
                                {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{6}/
                                    })}
                            />
                            {errors.password?.type === 'required' &&
                                <p className="text-red-600 mt-1">Password is required</p>
                            }
                        </div>
                        <div className="">
                            <input type="submit" value={'Create Account'} className="w-full cursor-pointer bg-button-color py-4 font-semibold text-xl tracking-wide text-white rounded-md focus:outline-none" />
                        </div>
                    </form>
                    <p className="text-center pt-5">Already registered? Go to

                        <Link to='/login' className="text-button-color font-bold text-lg text-center">
                            SIGN IN
                        </Link>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default SignUp;