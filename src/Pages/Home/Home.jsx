import Banner from "../../Shared/Banner";
import IntroductionSection from "../../Shared/IntroductionSection";
import ItemsGrid from "../../Shared/ItemsGrid";
import TableBooking from "../../Shared/TableBooking";
import useIntros from "../../Hooks/useIntros";
import { useEffect, useState } from "react";


const Home = () => {
    const [introData ,setIntroData]= useState({})

    const [, intros,isLoading] = useIntros()
    useEffect(()=>{
        if (intros[0] && !isLoading) {
                const {homeSection} =  intros[0]
                setIntroData(homeSection) 
        }
        return
    },[intros,isLoading])
    const topHeading = "Excellence in Every Bite, Quality in Every Dish"
    
    return (
        <div className="space-y-[20vh]">
            <Banner
                subHeading='WELCOME TO Modern Table'
                heading='Embark on a Journey of Culinary Excellence'
                buttonText='our menu'
                bgImgUrl='https://i.ibb.co/qdzmFQP/55861.jpg'
            ></Banner>
            <ItemsGrid></ItemsGrid>

                <IntroductionSection topHeading={topHeading} sectionData={introData}></IntroductionSection>

            <TableBooking></TableBooking>
        </div>
    );
};

export default Home;