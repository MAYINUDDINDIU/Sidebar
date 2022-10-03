import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import {
Services,
ServicesOne,
ServicesTwo,
ServicesThree,
} from "./pages/Services";
// import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
function App() {
return (

    <Router>
      <Sidebar />
      <Routes>
      <Route path="/about-us" element={<AboutUs />}  >About</Route>
 	<Route path="/services" element={<Services/>} />
	 	{/* <Route path="/services/services1" exact component={ServicesOne} />
 	<Route path="/services/services2" exact component={ServicesTwo} />
 	<Route path="/services/services3" exact component={ServicesThree} /> */}
		<Route path="/contact" element={<Contact/>} /> 
		 {/* <Route path="/events" exact component={Events} />
 	<Route path="/events/events1" exact component={EventsOne} />
		<Route path="/events/events2" exact component={EventsTwo} />  */}
		<Route path="/support" element={<Support/>} />
      </Routes>
    </Router>

);
}

export default App;
