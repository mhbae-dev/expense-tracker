import React from "react";
import 'boxicons';

const obj = [
  {
    type: "Savings",
    color: "#f9c74f",
    percent: 45,
  },
  {
    type: "Investment",
    color: "#f9c74f",
    percent: 20,
  },
  {
    type: "Expense",
    color: "#f9c74f",
    percent: 10,
  },
];

const List = () => {
  const renderLabels = obj.map((value, index) => {
    return (
      <div
        key={index}
        className="item flex justify-center bg-gray-50 py-2 rounded-r"
        style={{ borderRight: `8px solid ${value.color ?? "e5e5e5"}` }}
      >
        <button className='px-3'><box-icon color={value.color ??  "#e5e5e5"} size="15px" name="trash" ></box-icon></button> 
        <span className="block w-full">{value.type ?? ""}</span>
      </div>
    );
  });

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {renderLabels}
    </div>
  );
};

export default List;
