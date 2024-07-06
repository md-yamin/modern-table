import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Banner from "../../Shared/Banner";
import IntroductionSection from "../../Shared/IntroductionSection";
import TableBooking from "../../Shared/TableBooking";
import aboutSectionData from "../../../public/aboutSectionData.json"
import chefsData from "../../../public/chefsData.json"

const About = () => {



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
                sectionData={aboutSectionData}>
            </IntroductionSection>
            <TableBooking></TableBooking>
        </div>
    );
};

export default About;