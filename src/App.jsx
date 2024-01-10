import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home'
import AboutUs from './routes/AboutUs'
import Contact from './routes/ContactUs'
import Blogs from './routes/Blogs'
import SingleBlog from './routes/SingleBlog';
import PageNotFound from './components/pageNotFound';
import Layout from './components/Layout'
import{Toaster} from 'react-hot-toast';
function App() {
  const routes = [
    {
      path: "/",
      component: <Home />,
    },
    {
      path: "/About",
      component: <AboutUs />,
    },
    {
      path: "/Contact",
      component: <Contact />,
    },
    {
      path: "/Blogs",
      component: <Blogs />,
    }, {
      path: "/SinglePost",
      component: <SingleBlog />,
    },
  ]

  return (
    <>

      <Router>
        <Routes>
          {routes.map((route, index) => {
            return (
              <>
                <Route key={index} path={route.path} element={<Layout>{route.component}</Layout>} />

              </>
              )
          })}
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
        <Toaster />
      </Router>

    </>
  )
}

export default App
