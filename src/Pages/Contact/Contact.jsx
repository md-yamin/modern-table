import { FaLocationDot } from "react-icons/fa6";
import Banner from "../../Shared/Banner";
import TableBooking from "../../Shared/TableBooking";
import { BsEnvelopeFill } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";


const Contact = () => {
    return (
        <div className="space-y-[10vw]">
            <Banner
                heading='Let&apos;s Make Every Meal a Memorable One'
                subHeading='Get in Touch'
                bgImgUrl='https://i.ibb.co/Dkd0WzG/2149141352.jpg'
            ></Banner>
            <div className="space-y-[7vw]">
                <h1 className="text-4xl text-center mx-auto font-serif">Contact Us</h1>
                <div className="flex justify-between text-center mt-10 mx-auto w-[70vw]">
                    <div className="space-y-[1vw] w-[15vw]">
                        <BsEnvelopeFill className="w-[3vw] h-[3vw] mx-auto" />
                        <p className="font-semibold font-serif">Send a Message</p>
                        <p className="font-mono">moderntable@mail.com</p>
                    </div>
                    <div className="space-y-[1vw] w-[15vw]">
                        <FaLocationDot className="w-[3vw] h-[3vw] mx-auto" />
                        <p className="font-semibold font-serif">Our Location</p>
                        <p className="font-mono">6/14 New Palace, Kenedy</p>
                    </div>
                    <div className="space-y-[1vw] w-[15vw]">
                        <IoCallSharp className="w-[3vw] h-[3vw] mx-auto" />
                        <p className="font-semibold font-serif">Call Us</p>
                        <p className="font-mono">+44XXXXXXXXX</p>
                    </div>
                </div>
            </div>
            <TableBooking></TableBooking>
        </div>
    );
};

export default Contact;