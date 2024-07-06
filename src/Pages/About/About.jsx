import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Banner from "../../Shared/Banner";
import IntroductionSection from "../../Shared/IntroductionSection";


const About = () => {

    const sectionData = {
        image1: "https://i.ibb.co/3WVdn4d/32127.jpg",
        heading1: "Our Culinary Heritage",
        para1: "At Urban Feast, our journey began with a simple passion for authentic, delectable cuisine. Our founders, seasoned culinary enthusiasts, envisioned a place where tradition meets innovation, and every dish tells a story. From our humble beginnings to becoming a beloved culinary destination, we have always stayed true to our roots while embracing new flavors and techniques. Join us as we celebrate our rich heritage and continue to create unforgettable dining experiences.",

        image2: "https://i.ibb.co/zJTNp1n/40154.jpg",
        heading2: "Farm-to-Table Freshness",
        para2: "We believe that great food starts with the finest ingredients. That’s why at Urban Feast, we source our produce directly from local farms, ensuring freshness and quality in every bite. Our commitment to sustainable practices and supporting local communities is reflected in every dish we serve. Experience the vibrant flavors and natural goodness that come from our farm-to-table approach, making each meal a celebration of nature’s bounty.",

        image3: "https://i.ibb.co/M2GP97r/31115.jpg",
        heading3: "Innovative Culinary Creations",
        para3: "At Urban Feast, we take pride in our ability to blend tradition with innovation. Our talented chefs constantly push the boundaries of culinary artistry, crafting unique dishes that surprise and delight our guests. From classic favorites reimagined with a modern twist to bold new creations, our menu is a testament to our creativity and passion for excellence. Indulge in a dining experience where every bite is a journey of discovery.",

        image4: "https://i.ibb.co/XLGHDtd/9608.jpg",
        heading4: "Exceptional Dining Experience",
        para4: "Urban Feast is a destination for unforgettable moments. Enjoy our warm ambiance, attentive service, and curated menu. Whether for a celebration, family dinner, or casual meal, we make every visit special. Experience comfort, elegance, and extraordinary cuisine.",
    }

    const chefsData = [
        {
            "_id": 1,
            "name": "Michael Anderson",
            "profile_img": "https://i.ibb.co/jD2jDHQ/2151208316.jpg",
            "about": "Michael Anderson, a seasoned chef at Urban Feast, combines his extensive culinary expertise with a passion for creating memorable dining experiences."
        },
        {
            "_id": 2,
            "name": "Emily Lee",
            "profile_img": "https://i.ibb.co/jD2jDHQ/2151208316.jpg",
            "about": "Emily Lee brings a fresh perspective to Urban Feast, infusing her dishes with bold flavors and artistic presentation that captivate guests."
        },
        {
            "_id": 3,
            "name": "Daniel Ramirez",
            "profile_img": "https://i.ibb.co/jD2jDHQ/2151208316.jpg",
            "about": "Daniel Ramirez, known for his meticulous attention to detail, crafts each dish at Urban Feast with precision and creativity, ensuring every bite is a delight."
        }
    ]


    return (
        <div className="space-y-[10vw]">
            <Banner
                heading="Savor Our Story, Relish Our Craft"
                subHeading="About Us"
                bgImgUrl="https://i.ibb.co/MsZy61Y/3541.jpg"
                buttonText="Get in touch"
            ></Banner>
            <div className="grid grid-cols-3">
                {
                    chefsData.map(data =>
                        <div key={data._id} className="space-y-5">
                            <img className="w-3/4 mx-auto" src={data.profile_img} alt="" />
                            <h4 className="text-center font-semibold text-xl">{data.name}</h4>
                            <p className="text-center w-3/4 mx-auto">
                                {data.about}
                            </p>
                            <div className="flex justify-between w-1/3 mx-auto">
                                <FaInstagram />
                                <FaFacebookF />
                                <FaXTwitter />
                            </div>
                        </div>
                    )
                }
            </div>
            <IntroductionSection
                topHeading="Savor Our Story,"
                topHeading2="Relish Our Craft"
                sectionData={sectionData}>
            </IntroductionSection>
        </div>
    );
};

export default About;