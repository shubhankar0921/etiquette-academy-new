import { Route, Routes } from "react-router-dom";
import './App.css';
import Add_chat from "./components/Chat/Add_chat";
import Chat from "./components/Chat/Chat";
import Chat_room from "./components/Chat/Chat_room";
import Add_courses from "./components/Courses/Add_courses";
import Courses from "./components/Courses/Courses";
import Course_bought from "./components/Courses/Course_bought";
import Course_sell from "./components/Courses/Course_sell";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Request_recieved from "./components/Profile/Request_recieved";
import Become_tutor from "./components/tutor/Become_tutor";
import Learn_request from "./components/tutor/Learn_request";
import Tutor from "./components/tutor/Tutor";
import Video_call from "./components/Video_call/Video_call";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tutor" element={<Tutor/>}/>
        <Route path="/become-tutor" element={<Become_tutor/>}/>
        <Route path="/learn-request" element={<Learn_request/>}/>
        <Route path="/request-recieved" element={<Request_recieved/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/add_chat" element={<Add_chat/>}/>
        <Route path="/chat-room" element={<Chat_room/>}/>
        <Route path="/video-meet" element={<Video_call/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses-bought" element={<Course_bought/>}/>
        <Route path="/courses-selled" element={<Course_sell/>}/>
        <Route path="/add-course" element={<Add_courses/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
