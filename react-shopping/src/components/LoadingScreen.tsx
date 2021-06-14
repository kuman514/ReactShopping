import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function LoadingScreen() {
  return (
    <div className="LoadingScreen">
      <div className="LoadingScrBg">
      </div>
      <header className="LoadingScrContent">
        <img src={logo} className="ReactLogo" alt="logo" />
        <div>
          <h1 className="LoadingComment">로딩중</h1>
        </div>
      </header>
    </div>
  );
}

export default LoadingScreen;
