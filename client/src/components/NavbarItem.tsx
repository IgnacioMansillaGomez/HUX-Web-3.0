import React from "react";

interface props {
  title: string;
  classProps: string;
  key: number;
}

export const NavbarItem = ({ title, classProps, key }: props) => {
  console.log({ classProps, title, key });
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`} key={key}>
      {title}
    </li>
  );
};
