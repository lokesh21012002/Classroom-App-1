import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav";
import StudentLogin from "./Screen/StudentLogin";
import TeacherLogin from "./Screen/TeacherLogin";
import StudentRegister from "./Screen/StudentRegister";
import TeacherRegister from "./Screen/TeacherRegister";
import LoginScreen from "./Screen/LoginScreen";
import CreateTest from './Screen/CreateTest'
import CreateClass from './Screen/CreateClass'
import CreateAssigment from './Screen/CreateAssigement'
import DasboardAssigment from './Screen/DashboardAssigment'
import DasboardClass from './Screen/DashboardClass'
import DasboardTest from './Screen/DashboardTest'
import AuthScreen from './Screen/AuthScreen'
import JoinClass from './Screen/JoinClass';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Route component={LoginScreen} path="/login" />
        <Route component={StudentLogin} path="/student/login" />
        <Route component={TeacherLogin} path="/teacher/login" />
        <Route component={StudentRegister} path="/student/register" />
        <Route component={TeacherRegister} path="/teacher/register" />
        <Route component={AuthScreen(CreateTest)} path="/create/test" />
        <Route component={AuthScreen(CreateAssigment)} path="/create/assigment"/>
        <Route component={AuthScreen(CreateClass)} path="/create/class" />
        <Route exact component={AuthScreen(DasboardClass)} path="/" />
        <Route component={AuthScreen(DasboardAssigment)} path="/dashboard/assigment" />
        <Route component={AuthScreen(DasboardTest)} path='/dashboard/test' />
        <Route component={AuthScreen(JoinClass)} path="/joinclass"/>
      </BrowserRouter>
    </div>
  );
}
export default App;
