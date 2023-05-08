import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Screens/Aboutus';
import HomeScreen from './Screens/HomeScreen';
import NotFound from './Screens/NotFound';
import ContactUS from './Screens/ContactUS';
import MoviesPage from './Screens/Movies';
import SingleMovie from './Screens/SingleMovie';
import WatchPage from './Screens/WatchPage';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Profile from './Screens/Dashboard/Profile';
import Aos from 'aos';
import Password from './Screens/Dashboard/Password';
import FavoriteMovies from './Screens/Dashboard/FavoriteMovies';
import MoviesList from './Screens/Dashboard/Admin/MovieList';
import Categories from './Screens/Dashboard/Admin/Categories';
import Users from './Screens/Dashboard/Admin/User';
import AddMovie from './Screens/Dashboard/Admin/AddMovie';
import Dashboard from './Screens/Dashboard/Admin/Dashbord';
import ScrollOnTop from './ScrollOnTop';
import DrawerContext from './Context/DrawerContext';



function App() {
  Aos.init();
  return (
    <Router>
    <DrawerContext >
    <ScrollOnTop>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/password" element={<Password />} />
        <Route path="/favorites" element={<FavoriteMovies />} />
        <Route path="/movieslist" element={<MoviesList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/users" element={<Users />} />
        <Route path="/addmovie" element={<AddMovie  />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   
    </ScrollOnTop>
    </DrawerContext>
     </Router>
  );
}

export default App;

