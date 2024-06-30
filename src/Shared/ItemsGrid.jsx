import { useLocation } from "react-router-dom";
import data from '../../public/data.json'


const ItemsGrid = () => {
    const location = useLocation()
    const noDescription = location.pathname.includes('menu')

    return (
        <div>
            {
                noDescription ?

                    <></>
                    :
                    <h2 className="md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-light text-center mb-[4vw] mt-[6vw]">Our Specialties</h2>
            }
            <div className="grid grid-cols-2 md:grid-cols-3 mx-auto container">
                {
                    data.map(item => <div key={item.id} className="mx-auto flex flex-col gap-5">
                        <img className="w-[80%] h-[80%] mx-auto mb-2" src={item.image} alt="" />
                        <h3 className="text-xl lg:text-3xl text-center font-serif mt-2">{item.title}</h3>
                        {
                            noDescription ?
                                <h3 className="text-center font-medium font-serif text-2xl text-amber-500">${item.price} USD</h3>
                                :
                                <p className="w-[70%] mx-auto text-xs lg:text-sm text-center ">{item.description}</p>
                        }
                        <button className="hover:underline text-sm font-semibold font-mono mt-2 md:mt-2 mb-10">View Details</button>
                    </div>)

                }
            </div>
        </div>
    );
};

export default ItemsGrid;