import Loginpage from "./componenets/Loginpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./componenets/Mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Loginpage />} /> */}
        <Route path="/" element={<Loginpage />} />
        <Route path="home" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// mongodb+srv://himanshuhimo:<password>@cluster0.7ub6dfv.mongodb.net/?retryWrites=true&w=majority
