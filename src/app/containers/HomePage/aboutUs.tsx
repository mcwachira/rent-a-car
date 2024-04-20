import JeepImg from '../../../assets/images/jeep.png';

function AboutUs() {
  return (
    <div className=" w-full flex flex-wrap items-center justify-center pt-4 pb-4 pr-7 pl-7 md:pl-0 md:pr-0 bg-white">
      <div className="w-auto h-[15em] -ml-[50px] md:h-[28em] lg:h-[30em] 2xl:h-[35em] 2xl:ml-0">
        <img src={JeepImg} width="100%" height="100%" alt="car image" />
      </div>
      <div className=" md:w-1/2 flex flex-col md:ml-6 2xl:ml-16">
        <h1 className="text-black text-2xl md:text-5xl font-extrabold md:font-black md:leading-normal">
          Feel The Best Experience With Our Rental Deals
        </h1>
        <p className=" md:max-w-2xl text-sm md:text-base text-gray-500 font-normal mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
