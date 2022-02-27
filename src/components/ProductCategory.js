import React from "react";
import '../App.css'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function ProductCategory({match}){
    let { id } = useParams();
    const [Items, setItems]= React.useState([])
 
    
    React.useEffect(() =>{
        const fetchItem = async ()=>{
            const data = await fetch(`https://fakestoreapi.com/products/category/${id}`)
            const DataItems = await data.json()
            console.log(DataItems)
            setItems(DataItems)
            
        }
        
        fetchItem()
        
    }, [])
    return(
        <div className="product-category">
            <h1 style={{color:"white", textAlign:"center",paddingTop:"40px"}}> Product Category {id}</h1>
            <div className="img_list1" >  
            {/* <div className="img_list1" style={{overflow:'auto',scrollBehavior:'smooth'}}>     */}
              {Items.map((item, index) =>(
                <div >
                <div className="item_name1"key={index}>
                    <img src={item.image} style={{width:200, height:200}} />
                    <p style={{width:200,justifyContent:'center',textAlign:'center', margin:'0 auto',padding:10,fontSize:12}}>{item.title}</p>
                    <p style={{ fontSize:12, fontWeight:20, marginRight:"56%",}}> Rating {item.rating.rate}</p>
                    <p style={{fontSize:12, marginLeft:"55%", margin:-33,}}> Price {item.price}</p>

                    <div className="product_btn">
                    <Link to = {`/detailsproduct/${item.id}` } > <Button variant="outline-danger" type="submit" > 
                         View Details
                     </Button>{' '}</Link>
                     </div>

                 
                 {/* <Link to={`/detailsproduct/${item}`}>  {item} </Link> */}
                </div> 
                
                </div>
                ))}
            </div> 
            
        </div>
    )
}

export default ProductCategory;