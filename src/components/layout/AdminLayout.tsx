import { Outlet } from "react-router";


const AdminLayout = () => {
    return (
        <div>
            this is the admin layout
            <Outlet/>
        </div>
    );
};

export default AdminLayout;