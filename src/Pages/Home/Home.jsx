import Banner from "../../Shared/Banner";
import IntroductionSection from "../../Shared/IntroductionSection";
import ItemsGrid from "../../Shared/ItemsGrid";
import TableBooking from "../../Shared/TableBooking";



const Home = () => {

    const sectionData = {
        image1: "https://i.ibb.co/ZSWm6Xj/2151259644.jpg",
        heading1 : "Crafting Contemporary Culinary Experiences",
        para1:"At The Modern Table, we celebrate the essence of contemporary dining with a focus on quality and sustainability. We source fresh, local ingredients from trusted farms and suppliers. Our chefs blend traditional recipes with modern techniques, creating dishes that are both visually stunning and delicious. Join us for a dining experience where every bite reflects our commitment to creativity, freshness, and culinary excellence.",

        image2: "https://i.ibb.co/rQVN1vh/10243.jpg",
        heading2 : "Innovative Dining",
        para2:"The Modern Table was born from a passion for innovative dining and exceptional service. Founded by culinary expert Samantha Grey, with over 15 years of experience, our restaurant aims to create unforgettable dining experiences where modern flavors and warm hospitality come together.",

        image3: "https://i.ibb.co/bNBnyQf/2151232189.jpg",
        heading3 : "Talented team",
        para3:"Chef Grey and her talented team bring a wealth of experience and creativity to The Modern Table, ensuring that every dish is crafted with precision and passion.",

        image4: "https://i.ibb.co/1QD9GyH/18361.jpg",
        heading4 : "Experience Dining Excellence",
        para4:"The Modern Table offers a chic and inviting atmosphere, complemented by elegant dining facilities that create the perfect setting for any occasion",
    }

    return (
        <div className="space-y-[20vh]">
            <Banner
                subHeading='WELCOME TO URBAN FEAST'
                heading='Embark on a Journey of Culinary Excellence'
                buttonText='our menu'
                bgImgUrl='https://i.ibb.co/qdzmFQP/55861.jpg'
            ></Banner>
            <ItemsGrid></ItemsGrid>
            <IntroductionSection sectionData={sectionData}></IntroductionSection>
            <TableBooking></TableBooking>
        </div>
    );
};

export default Home;