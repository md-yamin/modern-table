import { useLocation } from "react-router-dom";
import data from '../../public/data.json'


const ItemsGrid = () => {
    const location = useLocation()
    const noDescription = location.pathname.includes('menu')

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 mx-auto container">
            {
                data.map(item=><div key={item.id} className="mx-auto flex flex-col">
                <img className="w-[70%] h-[80%] mx-auto mb-2" src={item.image} alt="" />
                <h3 className="text-lg lg:text-xl text-center font-serif mt-2 mb-2">{item.title}</h3>
                {
                    noDescription? 
                    <h3>{item.price}</h3>
                    :
                    <p className="w-[70%] mx-auto text-xs lg:text-sm text-center ">{item.description}</p>
                }
                <button className="hover:underline text-sm font-semibold font-mono mt-2 md:mt-2 mb-10">View Details</button>
            </div>)
            
            }
        </div>
    );
};

export default ItemsGrid;