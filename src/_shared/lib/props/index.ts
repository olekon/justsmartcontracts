import { ReactNode } from "react";

export type TWithChildren = {
  children: ReactNode;
};

export type TWithClassname = {
  className?: string;
};

export type TSize = "small" | "medium" | "large";

export type TWithSize = {
  size?: TSize;
};

export type TValueHandler<T> = (_value: T) => void;

export type TValueInput<T> = {
  onChange: TValueHandler<T>;
  value: T;
};
