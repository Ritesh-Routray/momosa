import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };

  return (
    <div className="h-screen w-full container mx-auto -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/back.png"
            alt=""
            layout="fill"
            priority
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-48  text-white flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">Find your best momo HERE</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Customize your momos to fit your taste! Choose from a variety of fillings, wrappers, and sauces to create your perfect dish.
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
        <div>
          <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
            <Title addClass="text-6xl">How It Works:</Title>
            <p className="text-sm sm:w-2/5 w-full">
              1. Pick Your Filling (chicken, veggie, paneer, etc.)
              <br />
              2. Select Your Wrapper (wheat or gluten-free)
              <br />
              3. Add Your Sauces (spicy, tangy, or mild)
            </p>
            <h1>Enjoy fresh, delicious momos made just for you!</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
