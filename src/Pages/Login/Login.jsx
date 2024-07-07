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
                <p className="text-[1vw] hover:text-red-400"><Link to={'/'}>Back to Home</Link></p>
                <input className="bg-[#C40C0C] rounded-full uppercase w-full h-[3.5vw] border text-white text-[1.2vw]" type="submit" value="Login" />
            </form>

            <img className="w-1/2 h-screen object-cover" src="https://i.ibb.co/gMC91F8/2895.jpg" alt="" />

        </div>
    );
};

export default Login;