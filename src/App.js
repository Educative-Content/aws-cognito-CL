//You can import the components here
import {Home,AccessRes} from "./index.js"

import { BrowserRouter, 
  Routes, 
  Route,} 
 from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="AccessRes" element={<AccessRes />} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;