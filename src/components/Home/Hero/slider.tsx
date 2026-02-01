import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pricedeta } from "@/app/api/data";
import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";

const CardSlider = () => {

  const settings = {
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
    ],
  };

  return (
    <div className="mt-20">

      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white">
          Our Services
        </h2>
        <p className="text-gray-400 mt-2">
          Smart digital solutions to grow your business
        </p>
      </div>

      <Slider {...settings}>
        {pricedeta.map((item, index) => (
          <div key={index} className="px-4">

            {/* Card */}
            <div
              className="bg-dark_grey bg-opacity-70 backdrop-blur-xl 
              border border-gray-700 rounded-2xl p-6 h-full
              transition-all duration-300 hover:-translate-y-2 
              hover:shadow-2xl hover:border-primary"
            >

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className={`${item.background} ${item.padding} rounded-full`}>
                  <Image
                    src={`${getImagePrefix()}${item.icon}`}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">

                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  {item.desc}
                </p>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {item.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary bg-opacity-20 
                      text-primary px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button
                  className="mt-2 px-5 py-2 text-sm rounded-full
                  bg-primary text-white hover:bg-opacity-80 transition"
                >
                  Get Started
                </button>

              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
