import ItemsGrid from "../../Shared/ItemsGrid";


const Menu = () => {
    const btnStyle = "px-7 py-3 rounded-3xl text-lg border border-white hover:border-orange-500"
    return (
        <div>
            <h2 className="md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-light text-center mb-[4vw] pt-[10vw]">Gourmet Delights</h2>
            <div className="mb-[10vh] flex mx-auto justify-around container">
                <button className={btnStyle}>All Menu</button>
                <button className={btnStyle}>Breakfast</button>
                <button className={btnStyle}>Lunch</button>
                <button className={btnStyle}>Dinner</button>
                <button className={btnStyle}>Dessert</button>
                <button className={btnStyle}>Soft Drinks</button>
            </div>
            <ItemsGrid></ItemsGrid>
        </div>
    );
};

export default Menu;