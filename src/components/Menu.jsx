import React from 'react'
import "../styles/Menu.css"
export default function Menu({title,desc,price,img,id,category}) {
  return (
    <div>
             
                <div className="menu-item" key={id}>
                <div className="img">
                    <img src="" alt="" />
                </div>
                
                <div className="info-data">
                    <div className="title-price">

                    <h3>{title}</h3>
                    <p>${price}</p>

                    </div>

                    <div className="decription">
                        <p>{desc}</p>
                    </div>

                </div>
             
            </div>
        </div>
  )
}

