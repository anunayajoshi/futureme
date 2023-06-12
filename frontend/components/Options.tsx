import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
const Options = () => {

    const [selectedOption, setSelectedOption] = useState<number>(0);
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
    const buttonLabels = ["1 day", "6 months", "1 year", "3 years", "10 years"]
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    })

    const handleValueChange = (newValue: any) => {
        setValue(newValue);
    }

    const handleButtonClick = (index: number) => {
        setSelectedOption(index);
    }
  return (
    <div className="space-y-2">
      <p className="opacity-60 font-lg flex justify-between items-center">
        Deliver in{" "}
        <span>
          Or choose a <button onClick={() => setShowDatePicker(!showDatePicker)} className="font-bold text-emerald-800 underline decoration-emerald-500">{showDatePicker ? "date" : "duration"}</button>
        </span>
      </p>
        {showDatePicker ? (<div><Datepicker primaryColor={"emerald"} asSingle={true} value={value} onChange={handleValueChange} useRange={false}/></div>) : (
      <div className="flex items-center space-x-2">
        {buttonLabels.map((label, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`w-fit ${
              selectedOption === index ? "bg-emerald-400 text-white" : ""
            } font-bold py-2 px-4 rounded-full`}
          >
            {label}
          </button>
        ))}
      </div>
        )}
      
    </div>
  );
}

export default Options