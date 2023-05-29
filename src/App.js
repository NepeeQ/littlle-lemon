import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import InProgress from './components/InProgress';
import {Route, Routes } from 'react-router-dom';
import BookingConfirmaton from './components/BookingConfirmaton';

function App() {
  return (
    <>
      <Header/>
      <main>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/Home" element={<Homepage/>} />
              <Route path="/About" element={<InProgress/>}/>
              <Route path="/Menu" element={<InProgress/>}/>
              <Route path="/Order" element={<InProgress/>}/>
              <Route path="/Login" element={<InProgress/>}/>
              <Route path="/Reservations" element={<BookingPage/>}/>
              <Route path="/Confirmation" element={<BookingConfirmaton/>}/>
          </Routes>
        </main>
      <Footer/>
    </>
  );
}

export default App;
