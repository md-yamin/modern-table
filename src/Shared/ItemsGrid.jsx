import { Link, useLocation } from "react-router-dom";
import useMeals from "../Hooks/useMenu";



const ItemsGrid = () => {
    const location = useLocation()
    const menuPage = location.pathname.includes('menu')
    const [,meals] = useMeals()
    const featured = meals.slice(0,6)

    return (
        <div>
            {
                menuPage ?

                    <></>
                    :
                    <h2 className="md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-light text-center mb-[4vw] mt-[6vw]">Our Specialties</h2>
            }
            <div className="grid grid-cols-2 md:grid-cols-3 mx-auto container">
                {   menuPage?
                    meals.map(item => <div key={item._id} className="mx-auto flex flex-col gap-5">
                        <img className="w-[80%] h-[80%] mx-auto mb-2" src={item.image} alt="" />
                        <h3 className="text-xl lg:text-3xl text-center font-serif mt-2">{item.title}</h3>
                        {
                            menuPage ?
                                <h3 className="text-center font-medium font-serif text-2xl text-amber-500">${item.price} USD</h3>
                                :
                                <p className="w-[70%] mx-auto text-xs lg:text-sm text-center ">{item.description}</p>
                        }
                         <Link to={`/item/${item._id}`} className="mx-auto"><button className="hover:underline text-sm font-semibold font-mono mt-2 md:mt-2 mb-10">View Details</button></Link>
                    </div>)
                    :
                    featured.map(item => <div key={item._id} className="mx-auto flex flex-col gap-5">
                        <img className="w-[80%] h-[80%] mx-auto mb-2" src={item.image} alt="" />
                        <h3 className="text-xl lg:text-3xl text-center font-serif mt-2">{item.title}</h3>
                        {
                            menuPage ?
                                <h3 className="text-center font-medium font-serif text-2xl text-amber-500">${item.price} USD</h3>
                                :
                                <p className="w-[70%] mx-auto text-xs lg:text-sm text-center ">{item.description}</p>
                        }
                        <Link to={`/item/${item._id}`} className="mx-auto"><button className="hover:underline text-sm font-semibold font-mono mt-2 md:mt-2 mb-10">View Details</button></Link>
                        
                    </div>)
                }
            </div>
        </div>
    );
};

export default ItemsGrid;