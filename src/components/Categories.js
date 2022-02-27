import React from "react";
import '../App.css'
import {Link} from 'react-router-dom'
import electronic from '../Assets/e1.jpg'
import jewelery from '../Assets/j1.png'
import men from '../Assets/m1.jpg'
import women from '../Assets/w1.jpg'
// import "./categories.scss"
function Categories(){

    const [Items, setItems]= React.useState([])
 
    
    React.useEffect(() =>{
        const fetchItem = async ()=>{
            const data = await fetch("https://fakestoreapi.com/products/categories")
            const DataItems = await data.json()
            console.log(DataItems)
            setItems(DataItems)
            
        }
        
        fetchItem()
        
    }, [])
    
    const img_array= [electronic, jewelery, men, women ]
    
   
    return(
        <div className="categories-container">
            <div className="sub-container">

              <h1 style={{color:"white", textAlign:"center",paddingTop:"40px"}}>All Categories</h1>  

              <div className="img_list">     
              {Items.map((item, index) =>(
                
                <h2 className="item_name"key={index} 
                style={{backgroundImage: `url(${img_array[index]})`, width:"250px", height:"300px", 
                borderRadius:"10px",}}
                >
                    <h2>{item}</h2>

                 <Link to={`/productcategory/${item}`} className="link">  View More </Link>
                </h2> 
                ))}
                </div>



            {/* {img_array.map((item, index) => (
                <h2 key= {index}>
                    <img src={item}  width={200} height={200}/>
                </h2>

            ))} */}
           

            </div>
         
              
         
        </div>
    )
}

export default Categories;  