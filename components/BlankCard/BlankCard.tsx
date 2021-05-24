import React from "react";
import styles from "./blank-card.module.scss";
export const BlankCard = ({
  children,
  style = {},
  ...props
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) => {
  return (
    <div
      {...props}
      style={{
        ...styles,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
