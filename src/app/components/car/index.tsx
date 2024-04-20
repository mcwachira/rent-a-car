import { FaEllipsisH, FaFillDrip, FaTachometerAlt } from 'react-icons/fa';
import type { ICar } from '../../../typings/car';
import Button from '../buttons';

interface ICarProps extends ICar {}

export function Car(props: ICarProps) {
  const {
    name,
    thumbnailSrc,
    dailyPrice,
    monthlyPrice,
    mileage,
    gearType,
    gas,
  } = props;

  return (
    <div className="w-[16.5em] min-h-[23em] max-h-[23em] shadow-lg flex flex-col items-center p-3 pb-4 bg-white rounded-md m-1 sm:m-3 md:m-6">
      <div className=" w-full h-auto">
        <img src={thumbnailSrc} height="100%" width="100%" />
      </div>
      <h3 className="text-base font-bold text-black mt-1 mb-1">{name}</h3>
      <div className="w-full flex justify-start mt-3">
        <h5 className="text-red-500 font-bold text-sm mr-3">
          ${dailyPrice}
          <span className="inline-flex text-xs font-thin">/Day</span>
        </h5>
        <h5 className="text-gray-500 font-bold text-sm">
          ${monthlyPrice}
          <p className="inherit inline-flex text-xs font-thin">/Month</p>
        </h5>
      </div>
      <div className="flex bg-gray-300 mt-2 mb-2 min-w-full" />
      <div className="flex w-full justify-between">
        <span className="flex items-center">
          <span className="text-gray-400 text-sm mr-1">
            <FaTachometerAlt />
          </span>
          <h6 className="text-gray-400 text-xs">{mileage}</h6>
        </span>
        <span className="flex items-center">
          <span className="text-gray-400 text-sm mr-1">
            <FaEllipsisH />
          </span>
          <h6 className="text-gray-400 text-xs">{gearType}</h6>
        </span>
        <span className="flex items-center">
          <span className="text-gray-400 text-sm mr-1">
            <FaFillDrip />
          </span>
          <h6 className="text-gray-400 text-xs">{gas}</h6>
        </span>
      </div>
      <Button className="min-w-full mt-5" text="Rent Now" />
    </div>
  );
}
