import React from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";

interface IDashboardLayout {
  children: React.ReactNode;
}

function DashboardLayout({ children }: IDashboardLayout) {
  return (
    <div>
      <div className="md:w-64 h-screen fixed">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
