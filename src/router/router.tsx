import App from "../page/toppage/App";
import {createBrowserRouter} from "react-router-dom";
import Login from "../page/login/login";
import Information from "../page/information/information";
import RepairManagement from "../page/repairManagment/repairManagement";
import NeedRepairM from "../page/needRepairManagement/needRepairM";
import NeedReStep2 from "../page/needRepairManagement/needReStep2";

const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/Information',
        element:<Information/>
    },
    {
        path:'/NeedRepairM',
        element:<NeedRepairM/>,
    },
    {
        path:'/RepairManagment',
        element:<RepairManagement/>
    },
    {
        path:'/needReS2',
        element:<NeedReStep2/>
    }

])

export default router