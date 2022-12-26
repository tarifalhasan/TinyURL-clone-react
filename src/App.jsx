import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Features from './components/Features/Features';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import MyUrl from './components/MyUrl/MyUrl';
import Plan from './components/Plan/Plan';
import SignUp from './components/SignUp/SignUp';
function App() {
  return (

    <div className="App h-fit ">
      <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/plans" element={<Plan />} />
          <Route path="/features" element={<Features />} />
          <Route path="/myurls" element={<MyUrl />} />
      </Routes>
      </Layout>
    </div>

  );
}

export default App;
