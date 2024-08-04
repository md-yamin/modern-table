import { Link, useLocation } from "react-router-dom";
import useMeals from "../Hooks/useMenu";
import { useState } from "react";



const ItemsGrid = () => {
    const [, meals] = useMeals()
    const location = useLocation()
    const [isActive, setisActive] = useState("")
    const [type, setType] = useState(undefined)
    const menu = type ? meals.filter(meal => meal.category === type) : meals
    console.log(menu);

    const filter =(props)=>{
        setType(props)
        setisActive(props)
    }
    const menuPage = location.pathname.includes('menu')
    const featured = meals.slice(0, 6)
    
    const activeStyle = "border border-[#C40C0C]"
    const btnStyle = "px-7 py-3 rounded-3xl text-lg border border-white hover:border-[#C40C0C]"
    return (
        <div>
            {
                menuPage ?

                    <div className="mb-[10vh] flex mx-auto justify-around container">
                        <button onClick={()=>filter("")} className={`${btnStyle}${!isActive? activeStyle : ""}`}>All Menu</button>
                        <button onClick={()=>filter('breakfast')} className={`${btnStyle}${isActive=="breakfast"? activeStyle : ""}`}>Breakfast</button>
                        <button onClick={()=>filter('lunch')} className={`${btnStyle} ${isActive=="lunch"? activeStyle : ""}`}>Lunch</button>
                        <button onClick={()=>filter('dinner')} className={`${btnStyle}${isActive=="dinner"? activeStyle : ""}`}>Dinner</button>
                        <button onClick={()=>filter('dessert')} className={`${btnStyle}${isActive=="dessert"? activeStyle : ""}`}>Dessert</button>
                        <button onClick={()=>filter('softDrinks')} className={`${btnStyle}${isActive=="softDrinks"? activeStyle : ""}`}>Soft Drinks</button>
                    </div>
                    :
                    <h2 className="md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-light text-center mb-[4vw] mt-[6vw]">Our Specialties</h2>
            }
            <div className="grid grid-cols-2 md:grid-cols-3 mx-auto container">
                {menuPage ?
                    menu.map(item => <div key={item._id} className="mx-auto flex flex-col gap-5">
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