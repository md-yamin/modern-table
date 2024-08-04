import { useParams } from "react-router-dom";
import useGetItem from "../../Hooks/useGetItem";

const Item = () => {
    const params = useParams()
    const itemId = params.id
    const [, item] = useGetItem(itemId)
    console.log(item);
    return (
        <div className="pt-[8vw] mx-auto text-center space-y-[5vw]">

            <div className="mx-auto">
                <h4 className="capitalize">{item?.category}</h4>
                <h2 className="text-[5vw] mb-5">{item?.title}</h2>
                <p className="w-1/2 mx-auto text-sm">{item?.description}</p>
            </div>

            <img className="w-4/5 max-h-[85vh] mx-auto object-cover object-center" src={item?.image} alt="" />

            <div className="mx-auto w-4/5 text-left space-y-[3vw]">
                <ol className="list-inside space-y-2">
                    <h3 className="text-[2.4vw] mb-5">Gathering Ingredients</h3>
                    {
                      item?.gatheringItems?.map((item, index)=><li key={index} className="list-decimal text-sm">{item}</li>)  
                    }
                </ol>

                <div>
                    <h3 className="text-[2.4vw] mb-5">Cooking:</h3>
                    <p className="text-sm">{item?.cooking}</p>
                </div>

                <div>
                    <h3 className="text-[2.4vw] mb-5">Presentation:</h3>
                    <p className="text-sm">{item?.preparation}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;