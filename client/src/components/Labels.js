import React from "react";

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

const renderLabels = obj.map((value, index) => {
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ background: value.color ?? "#f9c74f" }}
        ></div>
        <h3 className="text-md">{value.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{value.percent ?? 0}%</h3>
    </div>
  );
});

const Labels = () => {
  return <>{renderLabels}</>;
};

export default Labels;
