import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Switch, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Footer from './component/Footer';
import About from './component/About';
import Contact from './component/Contact';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Protectedroute from './ProtectedRoute';
import Login from './component/Login';
import Signup from './component/Signup';
import Logout from './component/Logout';
import React, { useEffect, useState } from 'react';
import Dashboard from './component/Dashboard';
import Inventory from './component/pages/Inventory';
import Orders from './component/pages/Orders';
import Addproduct from './component/pages/Addproduct';

function App() {

  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('https://whispering-gorge-87073.herokuapp.com/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json",
          "Access-Control-Allow-Origin": "https://whispering-gorge-87073.herokuapp.com/"
        },
        credentials : "include"
      });

       if(res.status === 200) {
         setauth(true)
         setauth1(false)
      }

      if(res.status === 401) {
        setauth(false)
        setauth1(true)
       }

    } catch (error) {
      console.log(error)

    }
  }


  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
    <Navbar auth={auth1}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
         <Route exact path="/checkout" component={Checkout} />
         <Route exact path="/about" component={About} />
         <Route exact path="/contact" component={Contact} />
         <Protectedroute exact path="/login" component={Login} auth={auth1}/>
         <Protectedroute exact path="/signup" component={Signup} auth={auth1} />
         <Protectedroute exact path="/logout" component={Logout} auth={auth} />
         <Protectedroute exact path="/dashboard" component={Dashboard} auth={auth} />
         <Route exact path="/allProducts" component={Inventory} />
         <Route exact path="/orders" component={Orders} />
         <Route exact path="/addProduct" component={Addproduct}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
