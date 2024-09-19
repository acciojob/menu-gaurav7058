import React from 'react'
import "../styles/NavBar.css";
export default function NavBar() {
  return (
    <div>
      <div className="nav-bar">
                <nav>
                    <ul>
                        <li><a href="#" onClick={()=>{
                          
                        }}>All</a></li>
                        <li><a href="#">Breakfast</a></li>
                        <li><a href="#">Lunch</a></li>
                        <li><a href="#">Shakes</a></li>
                    </ul>
                </nav>
            </div>
    </div>
  )
}
