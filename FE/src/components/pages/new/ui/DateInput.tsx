import { useEffect, useRef, useState } from "react";
import { DayPicker, SelectSingleEventHandler } from "react-day-picker";
import "react-day-picker/dist/style.css";

type Props = {
  date: Date;
  labelText?: string;
  setDate: (date: Date) => void;
};

const DateInput = ({ labelText, setDate, date }: Props) => {
  const [onPicker, setOnPicker] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node) &&
        setOnPicker(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handlePicker = () => {
    setOnPicker(!onPicker);
  };

  const handleDateSelect: SelectSingleEventHandler = (selectedDate) => {
    if (selectedDate) {
      setDate(selectedDate);
      setOnPicker(false);
    }
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return "";
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
        {labelText}
        <input
          type="text"
          value={formatDate(date)}
          readOnly
          onClick={handlePicker}
          className="w-full px-4 py-2 border rounded-md focus:outline-none cursor-pointer"
          placeholder="날짜 선택"
        />
      </label>
      {onPicker && (
        <div className="absolute z-10 mt-1 bg-white shadow-lg rounded-md">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            footer={
              <button
                className="text-sm text-center w-full py-2 hover:bg-gray-50"
                onClick={() => setDate(new Date())}
              >
                Clear
              </button>
            }
          />
        </div>
      )}
    </div>
  );
};

export default DateInput;
