import React, { ReactNode } from "react";

import style from "./Wrapper.module.scss";

type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return <div className={style.wrapper}>{children}</div>;
}
