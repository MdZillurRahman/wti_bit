import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Courses from './Components/Courses';
import Students from './Components/Students';
import Exams from './Components/Exams';
import Results from './Components/Results';
import NoticeBoard from './Components/NoticeBoard';
import LiveClasses from './Components/LiveClasses';
import Notifications from './Components/Notifications';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/home' element={
            <Home></Home>
        }>
          <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path="courses" element={<Courses></Courses>}></Route>
          <Route path="students" element={<Students></Students>}></Route>
          <Route path="exams" element={<Exams></Exams>}></Route>
          <Route path="results" element={<Results></Results>}></Route>
          <Route path="noticeBoard" element={<NoticeBoard></NoticeBoard>}></Route>
          <Route path="liveClasses" element={<LiveClasses></LiveClasses>}></Route>
          <Route path="notifications" element={<Notifications></Notifications>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
