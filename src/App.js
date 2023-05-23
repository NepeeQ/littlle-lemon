import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Chicago from './components/Chicago';
import BookingPage from './components/BookingPage';
import {Route, Routes } from 'react-router-dom';
import BookingConfirmaton from './components/BookingConfirmaton';

function App() {
  return (
    <>
      <Header/>
      <main>
                <Routes>
            <Route path="/Home" element={<Homepage/>} />
            <Route path="/About" element={<Chicago/>}/>
            <Route path="/Reservations" element={<BookingPage/>}/>
            <Route path="/Confirmation" element={<BookingConfirmaton/>}/>
          </Routes>
        </main>
      <Footer/>
    </>
  );
}

export default App;
