import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import LoginComponent from './components/login.js';
import SignupComponent from './components/signup.js';
import HomeComponent from './components/home.js';
import AlfaPartsComponent from './components/alfa_parts.js';
import GTV6PartsComponent from './components/GTV6_parts.js';
import MilanoPartsComponent from './components/milano_parts.js';
import MechanicsComponent from './components/mechanics.js';
import EngineComponent from './components/engine.js';
import CheckoutComponent from './components/checkout.js';
import ElectricalComponent from './components/electrical.js';
import BrakesComponent from './components/brakes.js';
import PasswordComponent from './components/change_password.js';
import CartComponent from './components/cart.js';
import TwitterComponent from './components/tweets.js';



import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './js/login.js';
import Footer from './js/footer.js';
import Header from './js/header.js';

class SignupPage extends Component {
  render() {
    return (
      <div>
        <Login />
        <SignupComponent />
      </div>
    );
  }
}

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Login />
        <LoginComponent />
      </div>
    );
  }
}

class PasswordPage extends Component {
  render() {
    return (
      <div>
        <Login />
        <PasswordComponent />
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeComponent />
      </div>
    );
  }
}

class AlfaPartsPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <AlfaPartsComponent />
      </div>
    );
  }
}

class GTV6PartsPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <GTV6PartsComponent />
      </div>
    );
  }
}

class MilanoPartsPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <MilanoPartsComponent />
      </div>
    );
  }
}

class MechanicsPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <MechanicsComponent />
      </div>
    );
  }
}

class EnginePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <EngineComponent />
      </div>
    );
  }
}

class CheckoutPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <CheckoutComponent />
      </div>
    );
  }
}

class ElectricalPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <ElectricalComponent />
      </div>
    );
  }
}

class BrakesPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrakesComponent />
      </div>
    );
  }
}

class CartPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <CartComponent />
      </div>
    );
  }
}

class TwitterPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <TwitterComponent />
      </div>
    );
  }
}



const Home = () => (
  <HomePage />
);

const Login2 = () => (
  <LoginPage />
);

const Signup = () => (
  <SignupPage />
);

const AlfaParts = () => (
  <AlfaPartsPage />
);

const GTV6Parts = () => (
  <GTV6PartsPage />
);

const MilanoParts = () => (
  <MilanoPartsPage />
);

const Mechanics = () => (
  <MechanicsPage />
);

const Engine = () => (
  <EnginePage />
);

const Checkout = () => (
  <CheckoutPage />
);

const Electrical = () => (
  <ElectricalPage />
);

const Brakes = () => (
  <BrakesPage />
);

const Password = () => (
  <PasswordPage />
);

const Cart = () => (
  <CartPage />
);

const Twitter = () => (
  <TwitterPage />
);

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={Login2} />
            <Route exact path="/signup.js" component={Signup} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/index.js" component={Login2} />
            <Route exact path="/login.js" component={Login2} />
            <Route exact path="/login" component={Login2} />
            <Route exact path="/home.js" component={Home} />
            <Route exact path="/alfa_parts.js" component={AlfaParts} />
            <Route exact path="/GTV6_parts.js" component={GTV6Parts} />
            <Route exact path="/milano_parts.js" component={MilanoParts} />
            <Route exact path="/mechanics.js" component={Mechanics} />
            <Route exact path="/engine.js" component={Engine} />
            <Route path="/checkout.js" component={Checkout} />
            <Route path="/electrical.js" component={Electrical} />
            <Route path="/brakes.js" component={Brakes} />
            <Route path="/change_password.js" component={Password} />
            <Route path="/change_password" component={Password} />
            <Route path="/cart.js" component={Cart} />
            <Route path="/electrical" component={Electrical} />
            <Route path="/brakes" component={Brakes} />
            <Route exact path="/engine" component={Engine} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/cart" component={Cart} />
            <Route path="/tweets.js" component={Twitter} />
            <Route path="/tweets" component={Twitter} />




          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
