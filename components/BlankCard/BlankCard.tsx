import classNames from "classnames";
import React from "react";
import cardStyles from "./BlankCard.module.scss";
export const BlankCard = ({
  children,
  style = {},
  className = "",
  ...props
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) => {
  return (
    <div
      {...props}
      className={classNames({
        [cardStyles.container]: true,
        [className]: true,
      })}
    >
      {children}
    </div>
  );
};
