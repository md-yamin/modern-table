import Banner from "../../Shared/Banner";
import TableBooking from "../../Shared/TableBooking";


const Contact = () => {
    return (
        <div>
            <Banner
            heading='Let’s Make Every Meal a Memorable One'
            subHeading='Get in Touch'
            bgImgUrl='https://i.ibb.co/Dkd0WzG/2149141352.jpg'
            ></Banner>
            <h1 className="text-4xl text-center
            ">Contact US</h1>
            <div className="flex justify-between text-center mt-10 container mx-auto">
                <p>Send a Message</p>
                <p>Our Location</p>
                <p>Call Us</p>
            </div>
            <TableBooking></TableBooking>
        </div>
    );
};

export default Contact;