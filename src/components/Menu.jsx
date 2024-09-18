import React from 'react'
import "../styles/Menu.css"
export default function Menu({menuItem,setMenuItem}) {
  return (
    <div>
      <div className="menu-container">     
            {
             menuItem.map((item,index)=>{
              return(
                <div className="menu-item" key={index}>
                <div className="img">
                    <img src={item.img} alt={item.title} />
                </div>
                
                <div className="info-data">
                    <div className="title-price">

                    <h3>{item.title}</h3>
                    <p>${item.price}</p>

                    </div>

                    <div className="decription">
                        <p>{item.desc}</p>
                    </div>

                </div>
             
            </div>
              )
             })
            }
        </div>
    </div>
  )
}
