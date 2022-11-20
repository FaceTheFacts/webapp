"use client";

import React from "react";
import { useForm } from "react-hook-form";


// Client component. ISSUE: Input is not triggering the console log.
interface IFormInputs {
  searchValue: string;
}

export function Search() {
  const {
    register,
    handleSubmit,
    // formState: { errors }
  } = useForm<IFormInputs>();

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <input type="text" {...register("searchValue")}  placeholder="Search..." />
          </div>
        {/* <input type="submit" /> */}
    </form>
    </>
  );
}