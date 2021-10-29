import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './component/Home/Navbar/Navbar';
import Home from './component/Home/Home/Home';
import MyBooking from './component/MyBooking/MyBooking';
import BookingPlace from './component/BookingPlace/BookingPlace';
import Login from './component/UserLogin/Login';
import AuthProvider from './component/Context/AuthProvider/AuthProvider';
import Footer from './component/Home/Footer/Footer';
import AddServices from './component/AddServices/AddServices';
import NotFound from './component/NotFound/NotFound';

function App() {
  
  return (
    <AuthProvider>
      <BrowserRouter>
    <Navbar/>
    <Switch>

      <Route exact path="/">
      <Home></Home>
      </Route>

      <Route path="/home">
      <Home></Home>
      </Route>

      <Route path="/login">
       <Login></Login>
      </Route>

      <Route path="/mybooking">
       <MyBooking></MyBooking>
      </Route>

      <Route path="/bookingplace">
       <BookingPlace></BookingPlace>
      </Route>

      <Route path="/addServices">
       <AddServices></AddServices>
      </Route>

      <Route path="*">
       <NotFound></NotFound>
      </Route>

    </Switch>
    <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
   
  );
}

export default App;
