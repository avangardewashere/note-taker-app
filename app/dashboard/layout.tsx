import React from "react";
import Sidebar from "./_components/Sidebar";

interface IDashboardLayout {
  children: React.ReactNode;
}

function DashboardLayout({ children }: IDashboardLayout) {
  return (
    <div>
      <div className="md:w-64 h-screen fixed">
        <Sidebar /> 
      </div>
      <div className="md:ml-64">{children}</div>
    </div>
  );
}

export default DashboardLayout;
