import { FC, ReactNode } from "react";
import { Navbar } from "../components/navbar/Navbar";

interface Props {
  children: ReactNode;
}

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default PageLayout;
