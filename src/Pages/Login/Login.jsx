import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";


const Login = () => {

    const inputStyle = "border w-full h-[3vw]"

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()
    const from = location?.state?.from?.pathname || '/'

    const [passwordEye, setPasswordEye] = useState(false)
    const showPassword = () => {
        setPasswordEye(!passwordEye)
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onTouched'
    });

    const onSubmit = data => {
        const { email } = data;
        const { password } = data;


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Success',
                    text: 'You have successfully logged in',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
                navigate(from, { replace: true })
                reset()
            }
            )
            .catch(
                error => {
                    console.log(error),
                        Swal.fire({
                            title: 'Error',
                            text: 'Sorry something went wrong',
                            icon: 'error',
                            confirmButtonText: 'Close'
                        })
                }
            )

    }
    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photoURL: result.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data) {
                            Swal.fire({
                                title: 'Success',
                                text: 'You have successfully logged in',
                                icon: 'success',
                                confirmButtonText: 'Continue'
                            })
                        }
                    })
                navigate('/')
            })
            .catch(
                error => {
                    console.log(error),
                        Swal.fire({
                            title: 'Error',
                            text: 'Sorry something went wrong',
                            icon: 'error',
                            confirmButtonText: 'Close'
                        })
                }

            )
    }


    return (
        <div className="flex w-full justify-between items-center">
            <form  onSubmit={handleSubmit(onSubmit)} className="space-y-[3vw] mx-auto" action="">
                <div>
                    <h2 className="text-[3vw]">Welcome Back</h2>
                    <p className="text-[1.2vw]">Enter the information you used while registering an account.</p>
                </div>
                <div>
                    <label className="text-[1.2vw]" htmlFor="">Email</label>
                    <br />
                    <input 
                    className={`${inputStyle}`} 
                    type="text" 
                    {...register("email", { required: true })} />
                </div>
                <div>
                    <label className="text-[1.2vw]" htmlFor="">Password</label>
                    <br />
                    <input className={`${inputStyle}`} type="Password" {...register("password", {
                            required: true,
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{6,}$/,
                                message: 'Password must be at least 6 characters long and contain at least one uppercase letter, one special character, and one numeric digit.'
                            },
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long'
                            }
                        })} required />
                    {errors.password && <p className="text-red-600 font-bold max-w-96 text-wrap mx-auto">{errors.password.message}</p>}
                    <div className="absolute right-3 top-7">
                        {
                            (passwordEye === false) ? <IoEyeOff className="text-2xl text-black" onClick={showPassword} /> : <IoEye className="text-2xl text-black" onClick={showPassword} />
                        }
                    </div>
                </div>


                <div className="space-y-[1vw]">
                    <p className="text-[1vw]">Don&apos;t have an account? <Link to={'/register'} className="hover:text-red-400 underline" >Register Now</Link></p>
                </div>
                <input className="bg-[#C40C0C] rounded-full w-full h-[3.5vw] border text-white text-[1.2vw]" type="submit" value="Login" />

                <button onClick={()=>handleSocialLogin(signInWithGoogle)} className="bg-[#C40C0C] rounded-full w-full h-[3.5vw] border text-white text-[1.2vw]">
                    <div className="flex justify-center items-center gap-2">
                        <FaGoogle></FaGoogle><p>Log in with Google</p>
                    </div>
                </button>
            </form>


            <img className="w-1/2 h-screen object-cover" src="https://i.ibb.co/gMC91F8/2895.jpg" alt="" />

        </div>
    );
};

export default Login;