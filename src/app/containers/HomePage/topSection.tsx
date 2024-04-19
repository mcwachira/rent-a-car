import React from 'react';
import MclarenCarImg from "../../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../../assets/images/blob.svg";
import Button from "../../components/buttons";

function TopSection() {
    return (
        <div
            className='min-h-[400px] mt-[6em] w-full max-w-screen-2xl flex justify-between pl-3 pr-3 lg:pl-12 lg:pr-12 '>


            <div className="w-1/2 flex flex-col">




            <h1 className="font-bold text-2xl xl:text-6xl sm:text-3xl md:text-5xl lg:font-black md:font-extrabold text-black mb-4 sm:leading-snug lg:leading-normal xl:leading-relaxed">

                Rent The Best Qulity Car's With Us

            </h1>
            <p className="    text-xs lg:text-sm xl:text-lg sm:max-h-full overflow-hidden max-h-12 text-gray-800">
                Always choose the best car from our local stores or order it remotely
                at the best price for you and get the best quality cars for as long as
                you like
            </p>

                <div className="flex flex-wrap mt-4">

                    <Button  className="">Book Your Ride</Button>
                    <Button className="">Sell Your Car</Button>
                </div>
            </div>
            <div className="w-1/2 flex flex-col relative mt-20">


            <div className="w-[20em] h-[10em] absolute -right-[5em] -top-[9em] -rotate-[30deg] sm:w-[40em] sm:max-h-[10em] sm:-right-[9em] sm:-top-[16em] sm:-rotate-[25deg]  lg:w-[50em] lg:max-h-[30em] lg:-right-[7em] lg:-top-[15em] lg:-rotate-[30deg] xl:w-[70em] xl:max-h-[30em] xl:-right-[15em] xl:-top-[25em] xl:-rotate-[20deg]">


                <img src={BlobImg} alt="blob" className="w-full h-auto max-h-[max-content]"/>
            </div>

            <div className="w-auto h-[10em] -right-[6em] -top-[5em] absolute    sm:h-[16em] sm:-right-[6em] sm:-top-[6em] lg:h-[21em] lg:-right-[8em] lg:-top-[5em] xl:h-[30em] xl:-right-[13em] xl:-top-[9em]">

                <img  src={MclarenCarImg} alt="Mclarens car image" className="w-auto h-full max-w-[fit-content]"/>
            </div>
            </div>
        </div>
    );
}

export default TopSection;