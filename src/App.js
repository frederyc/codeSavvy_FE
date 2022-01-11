import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import { Login } from './pages/JS/Login';
import { RegisterEmployee } from './pages/JS/RegisterEmployee.js';
import { RegisterEmployer } from './pages/JS/RegisterEmployer.js'
import { PageNotFound } from './pages/JS/PageNotFound.js';
import { EmployeeBrowseJobs } from './pages/JS/EmployeeBrowseJobs';
import { EmployeeApplied } from './pages/JS/EmployeeApplied';
import { EmployeeFavorites } from './pages/JS/EmployeeFavorites';
import { EmployerJobManager } from './pages/JS/EmployerJobManager';
import { EmployerAddJob } from './pages/JS/EmployerAddJob';
import { JobProvider } from './contexts/jobContext';
import { AuthContext, useAuthContext } from './contexts/authContext';

function App() {

  const {token} = useAuthContext()

  // if(!token) {
  //   return <Router>
  //       <div className="App">
  //         <Routes>
  //           <Route exact path='/login' element={<Login />}/>
  //           <Route path="*" element={<Navigate to="/login" />} />
  //         </Routes>
  //       </div>
  //   </Router>
  // }

  return (
    <JobProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register_employee' element={<RegisterEmployee />}/>
            <Route path='/register_employer' element={<RegisterEmployer />}/>
            <Route path='/employee_browse_jobs' element={<EmployeeBrowseJobs />} />
            <Route path='/employee_applied' element={<EmployeeApplied />} />
            <Route path='/employee_favorites' element={<EmployeeFavorites />} />
            <Route path='/employer_job_manager' element={<EmployerJobManager />} />
            <Route path='/employer_add_job' element={<EmployerAddJob />} />
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </JobProvider>
  );
}

export default App;
