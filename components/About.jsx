import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm:h-[600px]  flex justify-center w-[300px] h-[450px]">
            <Image src="/images/hii2.jpg" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">We Are momoSA</Title>
          <p className="my-5 flex flex-col items-center">
            At momoSA, we believe that food should be as unique as you are. That’s why we specialize in customizable momos, allowing you to craft the perfect combination of flavors. Whether you're a fan of classic fillings or adventurous new ingredients, we've got something for everyone.
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
