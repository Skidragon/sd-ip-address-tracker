import React from "react";

export const SearchBar = ({
  placeholder = "",
  onTrigger = () => {},
  ...props
}: {
  placeholder: string;
  onTrigger: React.ReactEventHandler;
  props?: React.HTMLAttributes<HTMLDivElement>;
}) => {
  return (
    <div {...props}>
      <input type="search" onKeyUp={onTrigger} />
      <button onClick={onTrigger}></button>
    </div>
  );
};
