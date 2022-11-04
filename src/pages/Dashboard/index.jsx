import React from "react";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import Wrapper from "../../components/Wrapper";

function Dashboard({ children }) {
  return (
    <div className="w-full">
      <Header />
      {/* <Tabs /> */}
      <Wrapper>{children}</Wrapper>
    </div>
  );
}

export default Dashboard;
