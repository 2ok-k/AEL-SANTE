
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import WelcomePage from "./layouts/authentication/welcome";
import ForgetPassword from "./layouts/authentication/forgetPassword";
import Login from "./layouts/authentication/login";
import ResetPassword from "./layouts/authentication/resetPassword";

const routes = [
  {
    type: "route",
    name: "Welcome",
    key: "welcome",
    route: "/welcome",
    component: <WelcomePage />,
  },
  {
    type: "route",
    name: "ForgetPassword",
    key: "forgetpassword",
    route: "/forgetpassword",
    component: <ForgetPassword />,
  },
  {
    type: "route",
    name: "Login",
    key: "connexion",
    route: "/connexion",
    component: <Login />,
  },
  {
    type: "route",
    name: "ResetPassword",
    key: "resetPassword",
    route: "/resetPassword",
    component: <ResetPassword />,
  },

  /*
  Routes template
  * */
  {
    type: "route",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  {
    type: "route",
    name: "Tables",
    key: "tables",
    route: "/tables",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58" />
    ),
    component: <Tables />,
  },
  {
    type: "route",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card" />,
    component: <Billing />,
  },
  {
    type: "route",
    name: "Virtual Reality",
    key: "virtual-reality",
    route: "/virtual-reality",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-app" />,
    component: <VirtualReality />,
  },
  {
    type: "route",
    name: "RTL",
    key: "rtl",
    route: "/rtl",
    icon: <ArgonBox component="i" color="error" fontSize="14px" className="ni ni-world-2" />,
    component: <RTL />,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "route",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <Profile />,
  },
  {
    type: "route",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04" />
    ),
    component: <SignIn />,
  },
  {
    type: "route",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignUp />,
  },
];

export default routes;
