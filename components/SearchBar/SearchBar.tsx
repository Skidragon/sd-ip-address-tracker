import React from "react";
import classNames from "classnames";
import searchStyles from "./SearchBar.module.scss";
export const SearchBar = ({
  onEnter,
  onClick,
  placeholder = "",
  className = "",
  ...props
}: {
  onEnter: React.KeyboardEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) => {
  return (
    <div
      className={classNames({
        [searchStyles.container]: true,
        [className]: true,
      })}
      {...props}
    >
      <input
        className={searchStyles.input}
        placeholder={placeholder}
        type="search"
        onKeyUp={(e) => {
          if (onEnter && e.key === "Enter") {
            onEnter(e);
          }
        }}
      />
      <button className={searchStyles.button} onClick={onClick}>
        {">"}
      </button>
    </div>
  );
};
