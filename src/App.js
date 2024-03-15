import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  
  const [progress, setProgress] = useState(0)
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <LoadingBar
      height={3}
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exact path="/general" element={<News setProgress={setProgress} pageSize={5}  key="general" country="in" category="general"/>} />
        <Route exact path="/business" element={<News setProgress={setProgress} pageSize={5}  key="business" country="in" category="business"/>} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} pageSize={5}  key="entertainment" country="in" category="entertainment"/>} />
        <Route exact path="/health" element={<News setProgress={setProgress} pageSize={5} key="health" ountry="in" category="health"/>} />
        <Route exact path="/technology" element={<News setProgress={setProgress} pageSize={5}  key="technology" country="in" category="technology"/>} />
        <Route exact path="/science" element={<News setProgress={setProgress} pageSize={5}  key="science" country="in" category="science"/>} />
        <Route exact path="/sports" element={<News setProgress={setProgress} pageSize={5}  key="sports" country="in" category="sports"/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
