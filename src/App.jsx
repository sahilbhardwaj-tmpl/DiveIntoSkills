import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Routes from './routes/routes';
function App() {

  const location = useLocation();
  // console.log("L", location)

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location])

  return (
    <>
      <Routes />
      <Toaster />
    </>
  )
}

export default App
