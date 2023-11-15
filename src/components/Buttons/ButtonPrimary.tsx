"use client";

import "./buttons.style.css";

interface IButtonPrimaryProps {
  children: React.ReactNode;
  click: (arg: any | undefined) => Promise<any | void> | any | void;
}

export default function ButtonPrimary({
  children,
  click,
}: IButtonPrimaryProps) {
  return (
    <button className="btn btn-green" onClick={(arg: any) => click(arg)}>
      {children}
    </button>
  );
}
