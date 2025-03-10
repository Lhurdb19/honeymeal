import React, { useState, useEffect } from 'react';
import AboutSample from "../../Assets/aboutvideo.mp4";
import './About.css';
import Reservation from '../Reservation/reservation';
import MultipleItems from './aboutslider';

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating data fetching delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="about-video">
        {loading ? (
          <div className="skeleton-video"></div>
        ) : (
          <video autoPlay loop muted>
            <source src={AboutSample} type="video/mp4" />
          </video>
        )}
        <div className="video-writeup">
          <h1>Welcome To Honey meal The Steakhouse</h1>
          <h2>A Family Affair</h2>
          <Reservation />
        </div>
      </div>

      <br />

      <div className="about-component">
        <div className="about-box">
          <h2>About NationMeal</h2>
          <h1>It’s All About The Steak</h1>
        </div>

        <div className="manager-container">
          {loading ? (
            <div className="skeleton-manager"></div>
          ) : (
            <>
              <div className="manager-text">
                <h4>Gregorio Polimeni Jr.</h4>
                <p>
                  At Honey meal The Steakhouse, we pride ourselves on our professional and friendly staff who ensure that every customer feels at home. Our commitment to excellence transforms customers into family.
                </p>
                <p>
                  We serve only the highest quality prime cuts, fresh seafood, and homemade pastas, distinguishing us from the typical cookie-cutter restaurant.
                </p>
                <h3>Manager Speech</h3>
              </div>
              <img src="https://i.ibb.co/mr6FcXss/workers.jpg" alt="" />
            </>
          )}
        </div>

        <div className="chef-container">
          {loading ? (
            <div className="skeleton-chef"></div>
          ) : (
            <>
              <div className="first-chef">
                <img src="https://i.ibb.co/fGBkXP95/worker2.webp" alt="" />
                <div className="chef-text">
                  <h2>Good Food Starts with Fresh Ingredients</h2>
                  <h3>Lizzy Steve</h3>
                  <h5>- Executive Chef</h5>
                </div>
              </div>

              <div className="second-chef">
                <div className="chef-text">
                  <h2>No one deserves to be hungry</h2>
                  <h3>David L.</h3>
                  <h5>- Co-worker</h5>
                </div>
                <img src="https://i.ibb.co/dsTJ7hXj/worker1.webp" alt="" />
              </div>
            </>
          )}
        </div>
        {!loading && <MultipleItems />}
      </div>
    </>
  );
}

export default About;
