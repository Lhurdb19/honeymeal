import React, { useState } from "react";
import { Link } from "react-router-dom";
import useMealCategories from "../../Lib/useMealCategory";
import specialSample from "../../Assets/specialmeal.mp4";
import privateRoom from "../../Assets/private.mp4";
import chickenSample from "../../Assets/chicken.jpeg";
import Reservation from "../Reservation/reservation";
import "./Mealcategories.css";

const MealCategoriesComponent = () => {
  const { categories, loading, error } = useMealCategories();
  const [isSitdown, setIsSitdown] = useState(true);
  const [isFamily, setIsFamily] = useState(false);

  const handleSitdown = () => {
    setIsSitdown(true);
    setIsFamily(false);
  };

  const handleFamily = () => {
    setIsSitdown(false);
    setIsFamily(true);
  };

  return (
    <>
      <div className="special-video">
        <video width="300px" muted autoPlay loop>
          <source src={specialSample} type="video/mp4" />
        </video>
        <div className="special-text">
          <h1>Welcome To Honey meal The Steakhouse</h1>
          <h2>Meal Categories</h2>
        </div>
      </div>
      <div className="meal-categories-component">
        <div className="private-meal">
          <div className="private-room">
            <video width="300px" autoPlay muted loop>
              <source src={privateRoom} type="video/mp4" />
            </video>
            <div className="text">
              <h1>Welcome To Honey meal The Steakhouse</h1>
              <h2>Private Room</h2>
              <div className="reserve-cont">
                <Reservation />
              </div>
            </div>
          </div>

          <div className="private-text">
            {isSitdown && (
              <div className="sitdown-dinner">
                <div className="sitdown-image">
                  <div className="sitdown-image-text">
                    <h2>Sit Down Dinner</h2>
                    <h1>Great Spaces, Great Food</h1>
                  </div>
                </div>
                <div className="modal">
                  <div className="switch-button">
                    <button onClick={handleSitdown}>Sitdown Dinner</button>
                    <button onClick={handleFamily}>Family Dinner</button>
                  </div>
                </div>
                <div className="sitdown-text">
                  <div className="sitdown-appetizers">
                    <h2>Appetizers</h2>
                    <h5>(Select One)</h5>
                    <ul>
                      <li>Classic Italian Antipasto</li>
                      <li>
                        Fresh Mozzarella with Roasted Peppers and Sliced
                        Tomatoes
                      </li>
                      <li>Rigatoni alla Vodka</li>
                      <li>
                        Penne Rigate with Eggplant, Fontina Cheese, Tomato &
                        Parmesan
                      </li>
                      <li>
                        Rigatoni Amatriciana with a hearty Sauce of Tomatoes &
                        Pancetta
                      </li>
                      <li>Penne with our renowned Tomato and Basil Sauce</li>
                    </ul>
                  </div>

                  <div className="sitdown-salad">
                    <h2>Salad</h2>
                    <h5>(Select One)</h5>
                    <ul>
                      <li>
                        House Salad of Mixed Greens with Homemade Red Wine
                        Vinegar Dressing
                      </li>
                      <li>
                        Caesar Salad-Romaine Lettuce with Classic Caesar
                        Dressing & Croutons{" "}
                      </li>
                      <li>Tri-color Salad-Endive, Arugula and Radicchio</li>
                      <li>
                        Heart of Iceberg Lettuce with In-house made Rockford
                        Dressing
                      </li>
                    </ul>
                  </div>

                  <div className="sitdown-entrees">
                    <h1>Entrée ~ Choice of Three</h1>
                    <div className="fish-con">
                      <h5>(Fish, Select One)</h5>
                      <ul>
                        <li>Grilled Salmon</li>
                        <li>Jumbo Shrimp with White Wine Sauce</li>
                        <li>Lemon Sole Francese</li>
                        <li>Sesame Crusted Tuna</li>
                      </ul>
                    </div>

                    <div className="poultry-con">
                      <h5>(Poultry, Select One)</h5>
                      <ul>
                        <li>
                          Breast of Chicken Margherita with Artichoke Hearts,
                          Mozzarella and Pizzaiola Sauce
                        </li>
                        <li>
                          Boneless Breast of Chicken Marsala, Francese or
                          Piccata
                        </li>
                        <li>Bone-In Chicken Milanese with Arugula Salad</li>
                        <li>
                          Boneless Breast of Chicken Paillard Topped with
                          Sautéed Sweet Peppers, Giambotta or Tomato & Onion
                        </li>
                      </ul>
                    </div>

                    <div className="meat-con">
                      <h5>(Meat, Select One)</h5>
                      <ul>
                        <li>Grilled Filet Mignon (Additional $10.00)</li>
                        <li>
                          rilled Prime Rib Chop “Ultimate Cowboy Steak”
                          (Additional $15.00)
                        </li>
                        <li>Grilled New York Sirloin</li>
                        <li>
                          Grilled Pork Chop Topped with Hot Peppers and Potatoes
                        </li>
                      </ul>
                    </div>

                    <div className="sitdown-dessert">
                      <h2>Dessert and Coffee</h2>
                      <li>Cake from Calandra’s Bakery or Dessert Sampler</li>
                    </div>
                    <div className="additional-con">
                      <p>
                        Any item not listed will be considered for your
                        accommodation
                      </p>
                      <h6>$85 Per Person Plus Beverages</h6>
                      <h6>
                        Additional Charges: N.J. Sales Tax 3%Captain Fee
                        20%Gratuities
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isFamily && (
              <div className="family-dinner">
                <div className="family-image">
                  <div className="family-image-text">
                    <h2>Family Style Menu</h2>
                    <h1>Family Style</h1>
                  </div>
                </div>
                <div className="modal">
                  <div className="switch-button">
                    <button
                      onClick={handleSitdown}
                      className={isSitdown ? "active" : ""} >
                      Sitdown Dinner
                    </button>
                    <button
                      onClick={handleFamily}
                      className={isFamily ? "active" : ""} >
                      Family Dinner
                    </button>
                  </div>
                </div>
                <div className="family-text">
                  <div className="family-appetizers">
                    <h2>Family Style Appetizers</h2>
                    <h5>(Select Four)</h5>
                    <ul>
                      <li>Clams Oreganata</li>
                      <li>Fresh Mozzarella with Roasted Peppers & Tomatoes</li>
                      <li>Eggplant Parmigiana</li>
                      <li>Veal Meatballs in a Garlic Cream Sauce</li>
                      <li>Rigatoni Alla Vodka</li>
                      <li>Fritto Misto of Calamari & Shrimp</li>
                      <li>Fried Zucchini Sticks</li>
                    </ul>
                  </div>
                  <div className="family-salad">
                    <h2>Salad</h2>
                    <h5>(Select One)</h5>
                    <ul>
                      <li>Tri-color Salad-Endive, Arugula and Radicchio</li>
                      <li>
                        Heart of Iceberg Lettuce with In-house made Rockford
                        Dressing
                      </li>
                      <li>
                        House Salad of Mixed Greens with Homemade Red Wine
                        Vinegar Dressing
                      </li>
                      <li>
                        Caesar Salad-Romaine Lettuce with Classic Caesar
                        Dressing & Croutons
                      </li>
                    </ul>
                  </div>
                  <div className="family-entree">
                    <h1>Entrée ~ Choice of Three</h1>
                    <div className="fish-con">
                      <h5>(Fish, Select One)</h5>
                      <ul>
                        <li>Grilled Salmon</li>
                        <li>Jumbo Shrimp with White Wine Sauce</li>
                        <li>Lemon Sole Francese</li>
                        <li>Sesame Crusted Tuna</li>
                      </ul>
                    </div>

                    <div className="poultry-con">
                      <h5>(Poultry, Select One)</h5>
                      <ul>
                        <li>
                          Breast of Chicken Margherita with Artichoke Hearts,
                          Mozzarella and Pizzaiola Sauce
                        </li>
                        <li>
                          Boneless Breast of Chicken Marsala, Francese or
                          Piccata
                        </li>
                        <li>Bone-In Chicken Milanese with Arugula Salad</li>
                        <li>
                          Boneless Breast of Chicken Paillard Topped with
                          Sautéed Sweet Peppers, Giambotta or Tomato & Onion
                        </li>
                      </ul>
                    </div>

                    <div className="meat-con">
                      <h5>(Meat, Select One)</h5>
                      <ul>
                        <li>Grilled Filet Mignon (Additional $10.00)</li>
                        <li>
                          rilled Prime Rib Chop “Ultimate Cowboy Steak”
                          (Additional $15.00)
                        </li>
                        <li>Grilled New York Sirloin</li>
                        <li>
                          Grilled Pork Chop Topped with Hot Peppers and Potatoes
                        </li>
                      </ul>
                    </div>

                    <div className="family-dessert">
                      <h2>Dessert and Coffee</h2>
                      <li>Cake from Calandra’s Bakery or Dessert Sampler</li>
                    </div>
                    <div className="considered-con">
                      <p>
                        Any item not listed will be considered for your
                        accommodation
                      </p>
                      <h5>$90 Per Person Plus Beverages</h5>
                      <h5>
                        Additional Charges: N.J. Sales Tax 3%Captain Fee
                        20%Gratuities
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {loading && (
          <ul className="meal-categories-wrapper">
            {Array.from({ length: 10 }).map((_, index) => (
              <li key={index} className="meal-categories-info skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-text"></div>
              </li>
            ))}
          </ul>
        )}

        {error && <p>Error: {error}</p>}

        {!loading && categories.length > 0 && (
          <ul className="meal-categories-wrapper">
            {categories.map((category) => (
              <li key={category.idCategory} className="meal-categories-info">
                <Link to={`/meal/${category.idCategory}`}>
                  <img
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                  />
                </Link>
                <div className="text">
                  <h3>{category.strCategory}</h3>
                  <p>{category.strCategoryDescription.substring(0, 100)}...</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default MealCategoriesComponent;
