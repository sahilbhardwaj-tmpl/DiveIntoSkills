import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './routes/Home'
import AboutUs from './routes/AboutUs'
import Contact from './routes/ContactUs'
import Blogs from './routes/Blogs'
import SingleBlog from './routes/SingleBlog';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './components/pageNotFound';
function App() {


  return (
    <>

      <Router>
        <Header />
        <div className='pages'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/SinglePost" element={<SingleBlog />} />
            <Route path="*"  element={<PageNotFound/>}/>
          </Routes>
        </div>
        <Footer />
      </Router>

    </>
  )
}

export default App
