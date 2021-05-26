import React from "react";
import listStyles from "./StatusList.module.scss";
export const StatusList = ({ children }: { children: React.ReactNode }) => {
  return <ul className={listStyles.container}>{children}</ul>;
};
