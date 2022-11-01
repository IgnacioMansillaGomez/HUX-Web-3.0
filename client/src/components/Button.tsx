import React from "react";

interface props {
  className: string | undefined;
  textButton: string | undefined;
}

export const Button = ({ className, textButton }: props) => {
  const handleSubmit = () => {};

  return (
    <button type="button" onClick={handleSubmit} className={className}>
      {textButton}
    </button>
  );
};
