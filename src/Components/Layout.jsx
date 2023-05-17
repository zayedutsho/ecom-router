import { Outlet } from 'react-router-dom';
import SideBar from './SideBar'
const Layout = () => {
    return (
        <div>
            <SideBar></SideBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;