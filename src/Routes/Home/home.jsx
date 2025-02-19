import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import FilteredMealsComponent from '../Filteredmeal/filteredmeal';
import MealsByCategoryComponent from '../Mealbycategory/mealbycategory';
import MealsByAreaComponent from '../Mealbyarea/mealbyarea';
import Reservation from '../Reservation/reservation';
import sampleVideo from "../../Assets/restuarant.mp4";
import sampleImage from "../../Assets/chicken.jpeg";
// import { Link } from 'react-scroll';

function Home() {
  return (
    <>
    <div className="home-container">
      <video width="300" autoPlay muted loop>
      <source src={sampleVideo} type="video/mp4" />
    </video>
    <h1>Welcome To Honey Meal The Steakhouse</h1>

    <div className="reserve">
      <Reservation/>
    </div>
    <div className="reserve-daily-menu-con">
    <Link to='/meallistscomponent'>MENU</Link>
    <Link to='/mealcategoriescomponent' style={{cursor: 'pointer'}}>DAILY SPECIALS</Link>
    </div>
    </div>
    <div className='home-component'>
      <FilteredMealsComponent/>

      <div className="about-us-con">
        <div className="about-text">
        <h2>About Us</h2>
        <p>Established in 2007 by Greg and his father, Honey meal The Steakhouse fulfills the need for a high-end steakhouse in Little Falls. Located near Il Tulipano, Nationmeal combines exceptional food with a unique dining experience, featuring an à la carte menu and a touch of Italian cuisine. We serve only the highest quality prime cuts, fresh seafood, and homemade pastas, distinguishing us from the typical cookie-cutter restaurant. </p>
        </div>
        <div className="open-text">
          <h2>Opening Hours</h2>
          <span>
            <h1>Monday-Wednesday</h1>
            <h3>4pm-9:30pm</h3>
          </span>
          <span>
            <h1>Thursday</h1>
            <h3>4pm-8pm</h3>
          </span>
          <span>
            <h1>Friday-Saturday</h1>
            <h3>4pm-10pm</h3>
          </span>
          <span>
            <h1>Sunday</h1>
            <h3>3pm-8pm</h3>
          </span>
        </div>
      </div>

      <div className="our-meal-by-category">
        <h1>Voted Best Steakhouse in New Jersey</h1>
        <br />
        <div className="reservate">
        <Reservation/>
        </div>
      </div>

        
      <br />
      <MealsByCategoryComponent/>
      <br />
      <MealsByAreaComponent/>
    </div>
    </>
  )
}

export default Home
