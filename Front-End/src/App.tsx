
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RealTimeCamera from "./features/AllergenDetection/RealTimeCamera";
import CapturedPicture from "./features/AllergenDetection/CapturePicture";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/captured-picture" element={<CapturedPicture />} />
        <Route path="/realtime-camera" element={<RealTimeCamera />}/>
      </Routes>
    </Router>
  );
};

export default App;

