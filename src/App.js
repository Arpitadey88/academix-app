import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home/Home/Home";
import Error from "./Components/Shared/Error/Error";

function App() {
  return (
   <Router>
     <Routes>
              <Route path='/' element={<Home />} />
              <Route exact path='*' element={<Error />} />
      </Routes>
   </Router>
  );
}

export default App;
