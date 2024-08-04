import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    return (
        <div>
            <div className="items-center text-white bg-gradient-to-r bg-gradient-to-r from-orange-400 to-red-600 ...  fixed z-10 w-screen">
                <div className="flex justify-around mx-auto">
                    <ul
                        className="flex my-3 gap-10 p-2 text-sm items-center">
                            <Link to='/'><li className="hover:underline">Home</li></Link>
                            <Link to='/menu'><li className="hover:underline">Menu</li></Link>
                            <Link to='/about'><li className="hover:underline">About</li></Link>
                    </ul>
                    <ul
                        className="flex gap-5 p-2 text-center uppercase">
                            <Link to='/'><li><span className="text-lg font-sans font-medium tracking-widest">Modern</span><br /><span className="font-serif">Table</span></li></Link>
                        
                    </ul>

                    <ul
                        className="flex my-3 gap-10 p-2 text-sm items-center">
                        <Link to='/news'><li className="hover:underline">News</li></Link>
                        <Link to='/contact'><li className="hover:underline">Contact</li></Link>
                        {
                            user?
                            <button
                            onClick={()=>logOut()} 
                            className="btn">Sign Out</button>
                            :
                            <Link to='/login'><li className="hover:underline">Login</li></Link>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;