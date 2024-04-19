import React, {useState} from 'react';
import {FaCalendarAlt, FaCaretDown, FaCaretUp} from "react-icons/fa";
import Button from "../buttons";
import Marginer from "../marginer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


interface ICalendarProps {
    // Add any props expected by the Calendar component here
}

const DateCalendar: React.FC<ICalendarProps & { offset?: boolean }> = ({
                                                                           offset,
                                                                           ...calendarProps
                                                                       }) => (
    <Calendar
        className={`
      fixed
      top-8
      left-0
      ${offset ? "left-[-6em]" : ""}
      ...otherClasses
    `}
        {...calendarProps}
    />
);


function BookCard() {

    const [startDate, setStartDate] = useState<Date>(new Date());
    const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
    const [returnDate, setReturnDate] = useState<Date>(new Date());
    const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

    console.log('value', returnDate)

    const toggleStartDateCalendar = () => {
        setStartCalendarOpen(!isStartCalendarOpen);
        if (isReturnCalendarOpen) setReturnCalendarOpen(false);
    };

    const toggleReturnDateCalendar = () => {
        setReturnCalendarOpen(!isReturnCalendarOpen);
        if (isStartCalendarOpen) setStartCalendarOpen(false);
    };
    return (
        <div
            className="shadow-2xl min-height-[4.3rem] flex justify-center items-center rounded-md bg-white pt-1 pb-1 pr-2 pl-2 md:pt-2  md:pb-2 md:pl-9 md:pr-9">
            <div className="flex relative">
                <span className="text-red-500 fill-current text-xs md:text-base mr-1 md:mr-3 ">
                <FaCalendarAlt/>

                </span>

                <span className="text-gray-600 text-xs md:text-sm" onClick={toggleStartDateCalendar}>
Pick Up Date
                </span>
                <span className="text-gray-500 fill-current text-xs md:text-sm cursor-pointer select-none">
           {isStartCalendarOpen ? <FaCaretUp/> : <FaCaretDown/>}
                </span>

                {isStartCalendarOpen && (
                    <DateCalendar value={startDate} onChange={setStartDate as any} className="absolute max-w-none select-none top-[2em] left-[0] md:top-[3.5em] md:-left-[2em]"/>)}


            </div>

            <span className="w-2 h-[45%] bg-gray-300 mr-2 ml-2 md:mr-5 md:ml-5">

</span>
            <div className="flex relative">
                <span className="text-red-500 fill-current text-xs md:text-base mr-1 md:mr-3 ">
                <FaCalendarAlt/>

                </span>

                <span className="text-gray-600 text-xs md:text-sm" onClick={toggleReturnDateCalendar}>
Return Date
                </span>
                <span className="text-gray-500 fill-current text-xs md:text-sm cursor-pointer select-none">
                {isStartCalendarOpen ? <FaCaretUp/> : <FaCaretDown/>}
                </span>

                {isReturnCalendarOpen && (
                    <DateCalendar value={returnDate} onChange={setReturnDate as any} offset className="absolute max-w-none select-none top-[2em] left-[0] md:top-[3.5em] md:-left-[2em]"/>)}

            </div>

            <span className="w-2 h-[45%] bg-gray-300 mr-2 ml-2 md:mr-5 md:ml-5">

</span>

            <Marginer direction="horizontal" margin="2em"/>
            <Button text="Book Your Ride" theme='filled'/>
        </div>
    );
}

export default BookCard;