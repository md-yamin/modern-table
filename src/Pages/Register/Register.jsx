import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";


const Register = () => {

    // const {createUser} = useContext(AuthContext)
    const { createUser, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const [passwordEye, setPasswordEye] = useState(false)
    const showPassword = () => {
        setPasswordEye(!passwordEye)
    }
    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    imgUrl: result.user?.imgUrl
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data) {
                            Swal.fire({
                                title: 'Success',
                                text: 'You have successfully registered',
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

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onTouched'
    });
    const onSubmit = data => {
        const { name } = data;
        const { email } = data;
        const { password } = data;
        const { imgUrl } = data;
        reset()

        createUser(email, password, name)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(name, imgUrl)
                    .then(() => {
                        const userInfo = {
                            name: name,
                            email: email,
                            imgUrl: imgUrl
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        title: 'Success',
                                        text: 'You have successfully registered',
                                        icon: 'success',
                                        confirmButtonText: 'Continue'
                                    })
                                }
                            })
                        navigate('/')
                    })

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

    const inputStyle = "border w-full h-[3vw]"
    return (
        <div className="flex w-full justify-between items-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-[1vw] mx-auto" action="">
                <div>
                    <h2 className="text-[3vw]">Become a Registered User</h2>
                    <p className="text-[1.2vw]">Enter valid information and create an account.</p>
                </div>
                <div>
                    <label className="text-[1.2vw]" htmlFor="">Name</label>
                    <br />
                    <input
                        type="text"
                        className={`${inputStyle}`}
                        {...register("name", { required: true })} />
                </div>
                <div>
                    <label className="text-[1.2vw]" htmlFor="">Image Url</label>
                    <br />
                    <input
                        type="text"
                        className={`${inputStyle}`}
                        {...register("imgUrl", { required: true })} />
                </div>
                <div>
                    <label className="text-[1.2vw]" htmlFor="">Email</label>
                    <br />
                    <input
                        type="email"
                        className={`${inputStyle}`}
                        {...register("email", { required: true })} />
                </div>
                <div>
                    <label className="text-[1.2vw]" htmlFor="">Password</label>
                    <br />
                    <input
                        type={(!passwordEye) ? 'password' : 'text'}
                        className={`${inputStyle}`}
                        {...register("password", {
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
                        <p className="text-[1vw]">Already have an account?<Link className="hover:text-red-400 underline" to={'/login'}>Login Now</Link></p>
                    </div>
                    <input className="bg-[#C40C0C] rounded-full w-full h-[3.5vw] border text-white text-[1.2vw]" type="submit" value="Register" />

                    <button 
                    onClick={() => handleSocialLogin(signInWithGoogle)}
                    className="bg-[#C40C0C] rounded-full w-full h-[3.5vw] border text-white text-[1.2vw]">
                        <div className="flex justify-center items-center gap-2">
                            <FaGoogle></FaGoogle><p>Register in with Google</p>
                        </div>
                    </button>
            </form>


            <img className="w-1/2 h-screen object-cover" src="https://i.ibb.co/gMC91F8/2895.jpg" alt="" />

        </div>
    );
};

export default Register;