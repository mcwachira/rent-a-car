import React from 'react';
import { FaCalendarAlt, FaCarSide, FaMapMarkedAlt } from 'react-icons/fa';

function BookingSteps() {
  return (
    <div className=" w-full flex flex-col items-center pt-3 pb-3 lg:pt-6 lg:pb-6">
      <h2 className="text-3xl lg:text-5xl text-black font-extrabold mt-12">
        Our Working Steps
      </h2>
      <div className="flex justify-evenly flex-wrap mt-7 lg:mt-16">
        <div className="flex flex-col md:w-96 items-center transition-colors hover:text-red-500 m-3">
          <div className="flex rounded-lg items-center justify-center p-6">
            <span className="text-red-500 text-3xl">
              <FaMapMarkedAlt />
            </span>
          </div>
          <h4 className="text-black text-lg font-semibold  mt-4">
            Choose Location
          </h4>
          <p className="w-10/12 text-xs md:text-sm text-center text-gray-600">
            Find the nearest Yourcar point and book your car.
          </p>
        </div>
        <div className="flex flex-col md:w-96 items-center transition-colors hover:text-red-500 m-3">
          <div className="flex rounded-lg items-center justify-center p-6">
            <span className=" text-red-500 text-3xl">
              <FaCalendarAlt />
            </span>
          </div>
          <h4 className="text-black text-lg font-semibold mt-4">
            Pick-Up Date
          </h4>
          <p className="w-10/12 text-xs md:text-sm text-center text-gray-600">
            Pickup the Best Date to rent a car for you.
          </p>
        </div>
        <div className="flex flex-col md:w-96 items-center transition-colors hover:text-red-500 m-3">
          <div className="flex rounded-lg items-center justify-center p-6">
            <span className="text-red-500 text-3xl">
              <FaCarSide />
            </span>
          </div>
          <h4 className="text-black text-lg font-semibold mt-4">
            Book Your Car
          </h4>
          <p className="w-10/12 text-xs md:text-sm text-center text-gray-600">
            Book your nice car with ease in one single click
          </p>
        </div>
      </div>
    </div>
  );
}
export default BookingSteps;
