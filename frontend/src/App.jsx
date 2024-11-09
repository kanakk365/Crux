import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Jobs from "./pages/Jobs";
import Browse from "./pages/Browse";
import Profile from "./pages/Profile";
import Details from "./pages/Details";
import Admin from "./pages/Admin";
import Companies from "./components/admin/Companies";
import AdminJobs from "./components/admin/AdminJobs"
import NewCompany from "./components/admin/NewCompany";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/admin/companies" element={<Companies/>} />
        <Route path="/admin/jobs" element={<AdminJobs/>} />\
        <Route path="/admin/companies/create" element={<NewCompany/>} />\
        
      </Routes>
    </>
  );
}

export default App;
