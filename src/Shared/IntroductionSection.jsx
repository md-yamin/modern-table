

const IntroductionSection = ({ sectionData, topHeading, topHeading2 }) => {

    const { image1, heading1, para1, image2, heading2, para2, image3, heading3, para3, image4, heading4, para4 } = sectionData
    const headingStyle = 'text-3xl font-serif mt-6 mb-3'
    return (
        <div>
            <h2 className="md:text-5xl font-serif mt-6 mb-10 text-center w-1/2 mx-auto">{topHeading} {
                topHeading2 ? <p>{topHeading2}</p> : <></>
            }</h2>
            <div className="flex items-center gap-[10%] container mx-auto w-[80%]">
                <div className="w-full">
                    <img src={image1} alt="" />
                    <div className="mb-[5%]">
                        <h3 className={headingStyle}>{heading1}</h3>
                        <p>{para1}</p>
                    </div>
                    <img src={image2} alt="" />
                </div>
                <div className="w-full -mt-[10%]">
                    <div className="mb-[5%]">
                        <h3 className={headingStyle}>{heading2}</h3>
                        <p>{para2}</p>
                    </div>
                    <img src={image3} alt="" />
                    <div className="mb-[5%]">
                        <h3 className={headingStyle}>{heading3}</h3>
                        <p>{para3}</p>
                    </div>
                    <img src={image4} alt="" />
                    <div >
                        <h3 className={headingStyle}>{heading4}</h3>
                        <p>{para4}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroductionSection;