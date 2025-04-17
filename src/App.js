import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import NavScrollExample from './Components/Navbar';
// import Cart from './Components/Cart';
// import Dashboard from './Components/dashboard';
import { Provider } from 'react-redux';

// import Parent from "./Redux Comb/Todo22/Parent";
// import Child from "./Redux Comb/Todo22/child";
// import strre22 from "./Redux Comb/Redux22/store2";

// import { Provider } from "react-redux";
import Home from "./Todo/Home";
import Info from "./Todo/Info";
import store from "./redux/store";
import HomeP from './Progressbar/Home';
import Home3 from './pb2/Home3';
import Footer from './Footer/Footer';
import FacebookLatestPost from './Footer/Footer';


function App() {
  return(
  //  <Provider store={store}>
  //   <BrowserRouter>
  //   <NavScrollExample />
  //   <Routes>
  //     <Route to='/' element={<Dashboard />} />
  //     <Route path='/cart' element={<Cart />} />
  //     <Route path='/dashboard' element={<Dashboard />} />
  //   </Routes>
  //  </BrowserRouter>
  //  </Provider>
  // <Provider store={store}>
  //   <Home />
  //   <Info />
  // </Provider>
  // <Provider store={strre22}>
  //   <Parent />
  //   <Child />
  // </Provider>
  <>
  <FacebookLatestPost />
  </>
  )
}

export default App;
