import news from "../../../public/news.json"

const News = () => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        });
      };
    return (
        <div className="mx-auto container">
            <h2 className="md:text-4xl lg:text-5xl 2xl:text-6xl font-serif font-light text-center mb-[4vw] pt-[10vw]">Flavorful Insights</h2>
            {
                news.map(article => <div key={article.id} className="flex mx-auto justify-center items-center">
                    <div className="pr-[5vw]">
                        <h2 className="w-[10vw]">{formatDate(article.date)}</h2>
                    </div>
                    <div className="border-l-2 pl-[5vw] mb-10">
                        <h3 className="text-xl lg:text-3xl font-serif mt-2 mb-5">{article.title}</h3>
                        <p className="mx-auto text-xs lg:text-sm w-[80vh]">{article.description}</p>
                        <button className="hover:underline text-sm font-semibold font-mono mt-2 md:mt-2 mb-5">View Details</button>
                    </div>
                </div>)
            }

        </div>
    );
};

export default News;