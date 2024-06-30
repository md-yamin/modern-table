

const Navbar = () => {
    return (
        <div>
            <div className="items-center text-white w-full bg-orange-500 fixed z-10">
                <div className="flex justify-around mx-auto">
                    <ul
                        className="flex my-3 gap-10 p-2 text-sm items-center">
                        <li className="hover:underline">Menu</li>
                        <li className="hover:underline">About</li>
                    </ul>
                    <ul
                        className="flex gap-5 p-2 text-center uppercase">
                        <li><span className="text-lg font-sans font-medium tracking-widest">Urban</span><br /><span className="font-serif">Feast</span></li>
                    </ul>

                    <ul
                        className="flex my-3 gap-10 p-2 text-sm items-center">
                        <li className="hover:underline">News</li>
                        <li className="hover:underline">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;