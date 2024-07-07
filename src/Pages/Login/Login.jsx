import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Login = () => {

    const inputStyle = "border w-full h-[3vw]"

    return (
        <div className="flex w-full justify-between items-center">
            <form className="space-y-[3vw] mx-auto" action="">
                <div>
                    <h2 className="text-[3vw]">Welcome Back</h2>
                    <p className="text-[1.2vw]">Enter the information you used while registering an account.</p>
                </div>
                <div>
                    <label className="text-[1.2vw]" htmlFor="">Email</label>
                    <br />
                    <input className={`${inputStyle}`} type="text" />
                </div>
                <div>
                    <label className="text-[1.2vw]" htmlFor="">Password</label>
                    <br />
                    <input className={`${inputStyle}`} type="Password" />
                </div>


                <div className="space-y-[1vw]">
                    <p className="text-[1vw]">Don&apos;t have an account? <Link className="hover:text-red-400 underline" to={'/'}>Register Now</Link></p>
                    <p className="text-[1vw] hover:text-red-400"><Link to={'/'}>Back to Home</Link></p>
                </div>
                <input className="bg-[#C40C0C] rounded-full w-full h-[3.5vw] border text-white text-[1.2vw]" type="submit" value="Login" />

                <button className="bg-[#C40C0C] rounded-full w-full h-[3.5vw] border text-white text-[1.2vw]">
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