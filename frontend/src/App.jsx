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
import AdminJobs from "./components/admin/AdminJobs"
import NewCompany from "./components/admin/NewCompany";
import CompanySetup from "./components/admin/Sidebar/CompanySetup";
import SeeCompanies from "./components/admin/SeeCompanies";
import NewJob from "./components/admin/NewJob";
import JobSetup from "./components/admin/JobSetup";
import Applicants from "./components/admin/Sidebar/Applicants";
import ProtectedRoute from "./components/admin/ProtectedRoute";

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

        <Route path="/admin/companies" element={ <ProtectedRoute><SeeCompanies/></ProtectedRoute>  } />
        <Route path="/admin/jobs" element={ <ProtectedRoute><AdminJobs/></ProtectedRoute>   } />\
        <Route path="/admin/jobs/create" element={  <ProtectedRoute><NewJob/></ProtectedRoute>} />\
        <Route path="/admin/jobs/:id" element={ <ProtectedRoute> <JobSetup/></ProtectedRoute>} />\
        <Route path="/admin/jobs/:id/applicants" element={<ProtectedRoute> <Applicants/></ProtectedRoute>} />\
        <Route path="/admin/companies/create" element={ <ProtectedRoute><NewCompany/></ProtectedRoute> } />\
        <Route path="/admin/companies/:id" element={<ProtectedRoute><CompanySetup/></ProtectedRoute> } />\
        
      </Routes>
    </>
  );
}

export default App;
