import { BrowserRouter,Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import SignUp from "../components/SignUp";
import UserPage from "../components/UserPage";


function App(){

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/UserPage" element={<UserPage />} />
        </Routes>
      </BrowserRouter>     
    </div>

  );


}
export default App;