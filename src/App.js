import Index from './pages/index';
import Listing from './pages/listing';
import About from './pages/about';
import Contact from './pages/contact';
import Dashboard from './pages/dashboard';
import Faq from './pages/faq';
import Listingdetails from './pages/listingdetails';
import Listingoffline from './pages/listingoffline';
import Listproperty from './pages/listproperty';
import Signup from './pages/signup';
import Terms from './pages/terms';
import Verify from './pages/verify';
import Why from './pages/why';
import Welcome from './pages/welcome';
import Privacy from './pages/privacy';
import Profile from './pages/profile';
import Category from './pages/category';
import Tag from './pages/tag';
import Post from './pages/post';
// import logo from './logo.svg';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

// function App() {
//   return <Home/>;
// }

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Nav/> */}

      <div className="auth-wrapper">
        <div className='auth-inner'>
          <Routes>
            <Route exact path='/' element={<Index/>}/>
            <Route exact path='/listing' element={<Listing/>}/>
            <Route exact path='/welcome' element={<Welcome/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
            <Route exact path='/faq' element={<Faq/>}/>
            <Route exact path='/listingdetails' element={<Listingdetails/>}/>
            <Route exact path='/listingoffline' element={<Listingoffline/>}/>
            <Route exact path='/listproperty' element={<Listproperty/>}/>
            <Route exact path='/signup' element={<Signup/>}/>
            <Route exact path='/terms' element={<Terms/>}/>
            <Route exact path='/verify' element={<Verify/>}/>
            <Route exact path='/why' element={<Why/>}/>
            <Route exact path='/privacy' element={<Privacy/>}/>
            <Route exact path='/profile' element={<Profile/>}/>
            <Route exact path='/category' element={<Category/>}/>
            <Route exact path='/tag' element={<Tag/>}/>
            <Route exact path='/post' element={<Post/>}/>
            <Route/>
            </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
