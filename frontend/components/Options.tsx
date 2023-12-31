import { join } from "path";
import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const Options = ({
  setDuration,
}: {
  setDuration: Dispatch<SetStateAction<string>>;
}) => {

    useEffect(() => {
        handleButtonClick(0, 1)
    }, [])


  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
   const buttonLabels = [
     { label: "1 month", value: 1 },
     { label: "6 months", value: 6 },
     { label: "1 year", value: 12 },
     { label: "3 years", value: 36 },
     { label: "10 years", value: 120 },
   ];
    const [dateValue, setDateValue] = useState({
      startDate: null,
      endDate: null,
    });

    const handleValueChange = (newValue: any) => {
      setDateValue(newValue);
      setDuration(newValue.startDate)
    };

  const handleButtonClick = (index: number, value: number) => {
    setSelectedOption(index);
    const today = new Date();
    const selectedDate = new Date(
      today.getFullYear(),
      today.getMonth() + value,
      today.getDate()
    );
    const formattedDate = selectedDate
      .toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
      .reverse()
      .join("-");

    setDuration(formattedDate);
  };

  const handleToggle = () => {
    if (showDatePicker) {
        handleButtonClick(0, 1)
    } else {
      setDateValue({
        startDate: null,
        endDate: null,
      });
      setDuration("");
    }
    setShowDatePicker(!showDatePicker);
  };


  return (
    <div className="space-y-2">
      <p className="opacity-60 font-lg flex justify-between items-center">
        Deliver in{" "}
        <span>
          Or choose a{" "}
          <button
            onClick={handleToggle}
            className="font-bold text-emerald-800 underline decoration-emerald-500"
          >
            {showDatePicker ? "duration" : "date"}
          </button>
        </span>
      </p>
      {showDatePicker ? (
        <div>
          <Datepicker
            primaryColor={"emerald"}
            asSingle={true}
            value={dateValue}
            onChange={handleValueChange}
            useRange={false}
          />
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          {buttonLabels.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index, btn.value)}
              className={`w-fit ${
                selectedOption === index
                  ? "bg-emerald-400 text-white font-bold"
                  : "font-semibold"
              } py-2 px-2 rounded-full`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Options