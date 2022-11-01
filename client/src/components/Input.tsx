import React from "react";

interface props {
  placeholder: string;
  className: string;
  name: string;
  type: string;
  handleOnChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void | undefined;
  step: string | undefined;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

export const Input = ({
  placeholder,
  className,
  name,
  type,
  step,
  value,
  onChange,
}: props) => {
  return (
    <input
      placeholder={placeholder}
      className={`${className}`}
      name={name}
      type={type}
      step={step}
      value={value}
    />
  );
};
