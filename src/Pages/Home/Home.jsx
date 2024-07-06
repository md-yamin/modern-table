import Banner from "../../Shared/Banner";
import IntroductionSection from "../../Shared/IntroductionSection";
import ItemsGrid from "../../Shared/ItemsGrid";
import TableBooking from "../../Shared/TableBooking";
import homeSectionData from "../../../public/homeSectionData.json"


const Home = () => {


    const topHeading = "Excellence in Every Bite, Quality in Every Dish"

    return (
        <div className="space-y-[20vh]">
            <Banner
                subHeading='WELCOME TO URBAN FEAST'
                heading='Embark on a Journey of Culinary Excellence'
                buttonText='our menu'
                bgImgUrl='https://i.ibb.co/qdzmFQP/55861.jpg'
            ></Banner>
            <ItemsGrid></ItemsGrid>
            <IntroductionSection topHeading={topHeading} sectionData={homeSectionData}></IntroductionSection>
            <TableBooking></TableBooking>
        </div>
    );
};

export default Home;