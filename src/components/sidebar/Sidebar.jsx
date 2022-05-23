import "./sidebar.scss"
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SystemSecurityUpdateGoodOutlinedIcon from '@mui/icons-material/SystemSecurityUpdateGoodOutlined'; 
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)


  return (
    <div className="sidebar">
        <div className="top">
          <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">Gaurav Admin</span>
          </Link>
        </div>
        <hr/ >

        <div className="center">
            <ul>
              <p className="title">MAIN</p>
              <li>
                <DashboardCustomizeOutlinedIcon className="icon"/>
                <span>Dashboard</span>
              </li>
              <p className="title">LISTS</p>

              <Link to="/users" style={{textDecoration:"none"}}>    
                <li>
                  <PersonOutlinedIcon className="icon"/>
                  <span>Users</span>
                </li>
              </Link>
              <Link to="/products" style={{textDecoration:"none"}}>    
                <li>
                  <Inventory2OutlinedIcon className="icon"/>
                  <span>Products</span>
                </li>
              </Link>

              <li>
                <ReorderOutlinedIcon className="icon"/>
                <span>Orders</span>
              </li>
              <li>
                <LocalShippingOutlinedIcon className="icon"/>
                <span>Delivery</span>
              </li>
              <p className="title">USEFUL</p>
              <li>
                <InsertChartOutlinedIcon className="icon"/>
                <span>Stats</span>
              </li>
              <li>
                <NotificationsNoneOutlinedIcon className="icon"/>
                <span>Notifications</span>
              </li>
              <p className="title">SERVICE</p>
              <li>
                <SystemSecurityUpdateGoodOutlinedIcon className="icon"/>
                <span>System Health</span>
              </li>
              <li>
                <PsychologyOutlinedIcon className="icon"/>
                <span>Logs</span>
              </li>
              <li>
                <SettingsOutlinedIcon className="icon"/>
                <span>Settings</span>
              </li>
              <p className="title">USER</p>
              <li>
                <AccountCircleOutlinedIcon className="icon"/>
                <span>Profile</span>
              </li>
              <li>
                <ExitToAppOutlinedIcon className="icon"/>
                <span>Logout</span>
              </li>
            </ul>
        </div>

        <div className="bottom">
          <div className="colorOption" onClick={()=>dispatch({type: "LIGHT"})}></div>
          <div className="colorOption" onClick={()=>dispatch({type: "DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar