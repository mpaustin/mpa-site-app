import React from 'react';
import './App.css';
import HomePage from '../pages/HomePage';
import ResumePage from '../pages/ResumePage';

function App() {
  const [path, setPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigate = (nextPath) => {
    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
  };

  return (
    <div className='App'>
      {path === '/resume' ? <ResumePage /> : <HomePage navigate={navigate} />}
    </div>
  );
}

export default App;
