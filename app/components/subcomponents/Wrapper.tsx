import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return <div className="pl-[25px] pr-[25px] pt-[25px]">{children}</div>;
}
