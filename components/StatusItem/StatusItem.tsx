import React from "react";
import itemStyles from "./StatusItem.module.scss";
export const StatusItem = ({
  heading = "",
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <li className={itemStyles.container}>
      <h2>{heading}</h2>
      {children}
    </li>
  );
};
