import React, { useState } from 'react'
import Rating from '@material-ui/lab/Rating';
import Switch from '@material-ui/core/Switch';
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
    const [dark,setDark]=useState(false)
    return (
        <div className="navbarr">
          <ul>
          <li className="leftborder">
          <span><i class="fas fa-home"></i></span>    
          <span className="borderbir"><Link className="textt" to="/">Ana Sayfa</Link></span>    
          </li>    
          <li>
          <span><i class="fas fa-dice-d20"></i></span>    
          <span className="borderiki"><Link className="textt" to="/product">Products</Link></span>    
          </li> 
           <li>
          <span><i class="fas fa-hand-holding-water"></i></span>    
          <span className="borderuc">Protein Tozu</span>    
          </li>
          <li>
          <span><i class="fas fa-heart"></i></span>    
          <span className="borderdort">Health</span>    
          </li> 
          <li>
          <span><i class="fab fa-twitch"></i></span>    
          <span className="borderbes">İletisim</span>    
          </li> 
          <li>
          <span>
          <Switch size="small" id="switc" onClick={()=>setDark(dark ? false : true)}/>    
          </span>    
          <span className="borderalti">{ dark ? 'Dark Mode':'Light Mode'}</span>    
          </li> 
          <li>
          <span className="kaldir">
          <Rating size="small" name="half-rating" defaultValue={5} precision={0.5} />
           </span>    
          <span className="borderyedi kaldir">Rating(Vote to)</span>    
          </li> 
          <li>
          <span><i class="fas fa-cash-register"></i></span>    
          <span className="bordersekiz">Login</span>    
          </li> 
          <li>
          <span className="sepet">0</span>    
          <span className="borderdokuz">Sepetim</span>    
          </li>  
          </ul>          
        </div>
    )
}
