import React from "react";
import Before from "./ui/Before";
import NewsCard from "./ui/NewsCard";
import { news_data } from "../../data";

const LatestNews = () => {
  return (
    <div className="md:max-w-[1250px] w-[95%] mx-auto mt-[150px]  flex flex-col items-center">
      <div className="title flex flex-col items-center mb-10 gap-4 w-full">
        <p className="barlow-condensed-regular text-[#666] text-lg uppercase flex gap-2 text-center tracking-[3px] items-center">
          <Before />
          hoexr hotel news
          <Before />
        </p>

        <h2 className="gilda-display-regular text-3xl text-[#222222] capitalize lg:text-5xl text-center">
          latest news update
        </h2>
      </div>
      <div className="news-cards flex flex-col gap-4 lg:flex-row">
        {news_data.map(({ id, day, date, img, writer, writerImg, desc }) => (
          <NewsCard
            key={id}
            day={day}
            date={date}
            img={img}
            writer={writer}
            writerImg={writerImg}
            desc={desc}
          />
        ))}

        {/* <NewsCard /> */}
      </div>
    </div>
  );
};

export default LatestNews;
