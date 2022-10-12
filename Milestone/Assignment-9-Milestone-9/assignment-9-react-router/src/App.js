import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Topic from './components/Topic/Topic';
import Statistic from './components/Topic/Statistic/Statistic';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import Quiz from './components/Quiz/Quiz';
import QuizsDetails from './components/QuizsDetails/QuizsDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        { path: '/topic', element: <Topic></Topic> },
        { path: '/statistic', element: <Statistic></Statistic> },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/quiz', element: <Quiz></Quiz> },
      ]
    },
    { path: '*', element: <NotFound></NotFound> },
    {
      path: 'quiz/:quizID',
      loader: async ({params}) => {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`)
      },
      element: <QuizsDetails></QuizsDetails>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
