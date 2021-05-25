import React from "react";
import classNames from "classnames";
import searchStyles from "./SearchBar.module.scss";
export const SearchBar = ({
  placeholder = "",
  onTrigger = () => {},
  className = "",
  ...props
}: {
  placeholder: string;
  onTrigger: React.ReactEventHandler;
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) => {
  console.log(className);
  return (
    <div
      className={classNames({
        [searchStyles.container]: true,
        [className]: true,
      })}
      {...props}
    >
      <input className={searchStyles.input} type="search" onKeyUp={onTrigger} />
      <button className={searchStyles.button} onClick={onTrigger}>
        {">"}
      </button>
    </div>
  );
};
