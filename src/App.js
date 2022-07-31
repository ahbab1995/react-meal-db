import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header/Header';
import Mealcard from './components/MealCard/Mealcard';
import CardDetails from './components/Carddetails/CardDetails';

function App() {
  return (
    <div className="App">
    <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/mealcard' element = {<Mealcard></Mealcard>}></Route>
          <Route path='/card-details/:idMeal' element={<CardDetails></CardDetails>}></Route>
        </Routes>
    </div>
  );
}

export default App;
