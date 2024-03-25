import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Blogdetails from './pages/Blogdetails';
import Error from './pages/Error';




function App() {
  let allRoutes = createBrowserRouter(
    [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/About',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/blogs',
        element:<Blogs/>
      
      },{
        path:'blogs/:id',
        element:<Blogdetails/>
      },
      {
        path:'*',
        element:<Error/>
      }
    ]
  )

  return (
    <div>
   <RouterProvider router={allRoutes}/>
    </div>
  )
}

export default App;

