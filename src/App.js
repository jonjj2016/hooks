import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isOn, setLight] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);
  useEffect(() => {
    document.title = `You have Clicked ${count}`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [count]);
  const handleOnline = e => {
    setStatus(true);
  };
  const handleOffline = e => {
    setStatus(false);
  };
  const handleMouseMove = e => {
    setMousePosition({
      x: e.pageX,
      y: e.pageY
    });
  };
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  const toggleLight = () => {
    setLight(prevLight => !prevLight);
  };
  return (
    <>
      {JSON.stringify(mousePosition, null, 2)}
      <h1>{count}</h1>
      <button onClick={incrementCount}>Click me</button>

      <h1>Toggle Light</h1>
      <img
        src={
          isOn
            ? 'https://icon.now.sh/highlight/fd0'
            : 'https://icon.now.sh/highlight/aaa'
        }
        style={{
          height: '50px',
          width: '50px'
        }}
        onClick={toggleLight}
      />
      <h2>Network status</h2>
      <p>{status ? 'online' : 'Offline'}</p>
    </>
  );
}

export default App;
