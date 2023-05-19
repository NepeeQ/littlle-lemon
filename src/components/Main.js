import {Routes, Route} from 'react-router-dom'
import Homepage from './Homepage';
import Chicago from './Chicago';


function Main(){
    return(
         <Routes>
            <Route path="*" element={<Homepage/>} />
            <Route path="/About" element={<Chicago/>}/>
         </Routes>
    )
}

export default Main;