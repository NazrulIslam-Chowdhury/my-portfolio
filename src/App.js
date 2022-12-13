
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './compnents/about/About';
import Home from './compnents/home/Home';
import Main from './compnents/main/Main';
import Projects from './compnents/projects/Projects';
import Contact from './contact/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/projects',
          element: <Projects></Projects>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}>

      <Toaster />
    </RouterProvider>
  );
}

export default App;
