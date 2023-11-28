
// Argon Dashboard 2 MUI routes
import routes from "routes";
import {Routes, Route} from "react-router-dom"
import WelcomePage from "./layouts/authentication/welcome";
import ForgetPassword from "./layouts/authentication/forgetPassword";
import Login from "./layouts/authentication/login";
import ResetPassword from "./layouts/authentication/resetPassword";

export default function App() {

  return (
      <div className="App">
        <Routes>
          <Route path="*" element={<WelcomePage to="/welcome" />} />
          <Route path="/forgetpassword" element={<ForgetPassword to="/forgetpassword" />} />
          <Route path="/connexion" element={<Login to="/connexion" />} />
          <Route path="/resetPassword" element={<ResetPassword to="/resetPassword" />} />
        </Routes>
      </div>
  );
}
