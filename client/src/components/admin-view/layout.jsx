import { Outlet } from "react-router-dom";
import { useState } from "react";
import AdminSideBar from "./sidebar";
import AdminHeader from "./header";

const AdminLayout = () => {

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full">
      {/* admin sidebar */}
      <AdminSideBar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col">
        {/* admin header */}
        <AdminHeader setOpen={setOpenSidebar} />
        <main className="flex-1 flex bg-muted/40 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
