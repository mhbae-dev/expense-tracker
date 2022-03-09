import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, resetField } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transcation</h1>

      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              placeholder="Salary, Rent, SIP"
              className="form-input"
              {...register("name")}
            />
          </div>
          <select className="form-input" {...register("type")}>
            <option value="Investment" defaultValue>
              Investment
            </option>
            <option value="Expense" defaultValue>
              Expense
            </option>
            <option value="Savings" defaultValue>
              Savings
            </option>
          </select>
          <div className="input-group">
            <input
              type="text"
              placeholder="Amount"
              className="form-input"
              {...register("amount")}
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Make Transaction
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
