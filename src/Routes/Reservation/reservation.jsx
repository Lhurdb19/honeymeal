import React, { useState } from 'react';
import "./Reservation.css";

function Reservation() {
    const [isReservation, setIsReservation] = useState(false);

    

  return (
    <div className='reservation-component'>
        {isReservation && (
            <div className="reservation-overlay">
                <div className="reserve-card">
                    <span>
                        <h3>Reserve A Table</h3>
                        <form>
                            <input type="text" name='fullName' placeholder='Enter Your Full Name' required />
                            <input type="mail" name='email' placeholder='Enter Your Email' required />
                            <input type="tel" name='phone' placeholder='Enter Your Phone Number' required />
                            <input type="text" name='address' placeholder='Enter Your Address' required />
                            <input type="date" name='date' placeholder='Choose Date' required />
                            <div className="reserve-btn">
                                <button>Submit</button>
                                <button onClick={()=> setIsReservation(false)}>Cancel</button>
                            </div>
                        </form>
                    </span>
                </div>
            </div>
        )}
        <div className="view-btn">
            <button onClick={() => setIsReservation(true)}>RESERVATION</button>
        </div>
    </div>
  )
}

export default Reservation
