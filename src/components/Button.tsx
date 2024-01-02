"use client"

import React, { ReactNode } from "react";

interface Props {
  className?: string;
  action?: any;
  children: ReactNode;
  theme?: "standard" | "alert" | "disable";
  loading?: boolean;
  type : "button" | "submit"
}

export default function Button({ className, action, children, theme = "standard",type = "button" }: Props) {
  
  let colorStyle = "";

  switch (theme) {
    case "standard":
      colorStyle = "bg-stone-500";
      break;
    case "alert":
      colorStyle = "bg-red-500";
      break
    case "disable":
      colorStyle = "bg-stone-500 opacity-70";
      break
    default:
      break;
  }

  return (
    <button
      type={type}
      onClick={action}
      className={`${className} ${colorStyle} font-bold p-3 rounded-xl shadow-lg hover:brightness-110 transition-all`}
    >
      {children}
    </button>
  );
}