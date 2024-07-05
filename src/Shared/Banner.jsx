const Banner = ({subHeading, heading, buttonText,bgImgUrl}) => {
    return (
        <div style={{backgroundImage: `url(${bgImgUrl})`}} className="h-[80vh] text-white flex justify-center items-end bg-no-repeat bg-cover bg-fixed">
            <div className="-ml-[10%] mb-[5%] space-y-5">
                <h4 className="text-sm font-mono tracking-wider">{subHeading}</h4>
                <h1 className="lg:text-6xl xl:text-7xl text-wrap max-w-3xl font-serif">{heading}</h1>
                {
                    buttonText?
                    <button className="bg-orange-500 px-10 py-3 rounded-full uppercase">{buttonText}</button>
                    :
                    <></>
                }
            </div>
        </div>
    );
};

export default Banner;