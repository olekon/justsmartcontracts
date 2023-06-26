import { ReactNode } from "react";

export type TWithChildren = {
  children: ReactNode;
};

export type TWithClassname = {
  className?: string;
};

export type TValueHandler<T> = (value: T) => void;

export type TValueInput<T> = {
  onChange: TValueHandler<T>;
  value: T;
};
