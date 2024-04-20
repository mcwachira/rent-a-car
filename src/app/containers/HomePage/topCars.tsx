// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { Car } from '../../components/car';
import type { ICar } from '../../../typings/car';
import '@brainhubeu/react-carousel/lib/style.css';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { useMediaQuery } from 'react-responsive';
import { Screens } from '../../components/navbar/rersponsive';

function TopCars() {
  const [current, setCurrent] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: Screens.sm });
  const testCar: ICar = {
    name: 'Audi S3 Car',
    mileage: '10k',
    thumbnailSrc:
      'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: 'Auto',
    gas: 'Petrol',
  };

  const testCar2: ICar = {
    name: 'HONDA cITY 5 Seater Car',
    mileage: '20k',
    thumbnailSrc:
      'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: 'Auto',
    gas: 'Petrol',
  };

  const cars = [
    <Car {...testCar2} />,
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
    <Car {...testCar2} />,
  ];

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);
  return (
    <div className="max-w-screen-lg w-full flex flex-col items-center justify-center pr-4 pl-4 md:pl-0 md:pr-0 mb-10">
      <h2 className="text-3xl lg:text-5xl text-black font-extrabold mt-12">
        Explore OUr Top Deals
      </h2>

      <div className="w-full flex flex-wrap justify-center mt-7 md:mt-10">
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={cars}
          plugins={[
            'clickToChange',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </div>
    </div>
  );
}

export default TopCars;
