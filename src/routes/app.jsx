import Dashboard from 'views/Dashboard/Dashboard';
import UserProfile from 'views/UserProfile/UserProfile';
import TableList from 'views/TableList/TableList';
import Typography from 'views/Typography/Typography';
import About from 'views/About/About';
import Results from 'views/Results/Results';
import Icons from 'views/Icons/Icons';
import Maps from 'views/Maps/Maps';
import Notifications from 'views/Notifications/Notifications';
import Upgrade from 'views/Upgrade/Upgrade';
import Predict from 'views/Predict/Predict';

const appRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-display1", component: Dashboard },
    { path: "/predict", name: "Predict", icon: "pe-7s-graph1", component: Predict },
    { path: "/about", name: "About Us", icon: "pe-7s-users", component: About },
    { results: true, path: "/results", name: "Results", icon: "pe-7s-news-paper", component: Results },    
    // { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
    // { path: "/table", name: "Table List", icon: "pe-7s-note2", component: TableList },
    // { path: "/typography", name: "Typography", icon: "pe-7s-news-paper", component: Typography },
    //{ path: "/user", name: "User Profile", icon: "pe-7s-user", component: UserProfile },
    //{ path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
    //{ path: "/notifications", name: "Notifications", icon: "pe-7s-bell", component: Notifications },
    //{ upgrade: true, path: "/upgrade", name: "Upgrade to PRO", icon: "pe-7s-rocket", component: Upgrade },
    { redirect: true, path:"/", to:"/dashboard", name: "Dashboard" }
];

export default appRoutes;
