import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="items-center text-white bg-orange-500 fixed z-10 w-screen">
                <div className="flex justify-around mx-auto">
                    <ul
                        className="flex my-3 gap-10 p-2 text-sm items-center">
                            <Link to='/menu'><li className="hover:underline">Menu</li></Link>
                            <Link to='/about'><li className="hover:underline">About</li></Link>
                    </ul>
                    <ul
                        className="flex gap-5 p-2 text-center uppercase">
                            <Link to='/'><li><span className="text-lg font-sans font-medium tracking-widest">Urban</span><br /><span className="font-serif">Feast</span></li></Link>
                        
                    </ul>

                    <ul
                        className="flex my-3 gap-10 p-2 text-sm items-center">
                        <Link to='/news'><li className="hover:underline">News</li></Link>
                        <Link to='/contact'><li className="hover:underline">Contact</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;