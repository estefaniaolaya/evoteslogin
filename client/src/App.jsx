import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import  Footer  from "./components/Footer";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";
import Services from "./pages/Services";


import RegisterPage from "./pages/RegisterPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { LoginPage } from "./pages/LoginPage";
import { TasksPage } from "./pages/TasksPage";
import { TaskProvider } from "./context/tasksContext";
import Contact from "./pages/Contact";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Candidates from "./pages/Candidates";
import Votes from "./pages/Votes";



function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className="w-full px-0 md:px-0">
            <Navbar />
           
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
             
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
             
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/candidates" element={<Candidates />} />
                <Route path="/votes" element={<Votes />} />
                <Route path="/add-task" element={<TaskFormPage />} />
                <Route path="/tasks/:id" element={<TaskFormPage />} />
                <Route path="/profile" element={<h1>Profile</h1>} />
              </Route>
            </Routes>
            <Footer />
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;