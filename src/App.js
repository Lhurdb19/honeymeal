import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/navbar";
import Home from "./Routes/Home/home";
import About from "./Routes/About/about";
import Contact from "./Routes/Contacts/contact";
import MealCategoriesComponent from "./Routes/Mealcategories/mealcategoriescomponent";
import MealListsComponent from "./Routes/Meallist/meallistcomponent";
import Footer from "./Routes/Footer/footer";

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/meallistscomponent" element={<MealListsComponent/>}/>
        <Route path="/mealcategoriescomponent" element={<MealCategoriesComponent/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
