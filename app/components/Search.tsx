"use client";

import React from "react";
import { useForm } from "react-hook-form";
interface IFormInputs {
  searchValue: string;
}

export function Search() {
  const {
    register,
    handleSubmit,
    // formState: { errors }
  } = useForm<IFormInputs>();

  const onSubmit = async (data: any) => {
    console.log(data);
    const a = await (await fetch('/api/politician')).json()
    console.log(a)
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <input type="text" {...register("searchValue")}  placeholder="Search..." />
          </div>
        <button type="submit">CLICK</button>
    </form>
    </>
  );
}