import React from "react";
import '../App.css'
import {useParams} from 'react-router-dom'

function DetailsProduct(){
    
        let { id } = useParams();
        const [Items, setItems]= React.useState([])
     
        
        React.useEffect(() =>{
            const fetchItem = async ()=>{
                const data = await fetch(`https://fakestoreapi.com/products/${id}`)
                const DataItems = await data.json()
                console.log(DataItems)
                setItems(DataItems)
                
            }
            
            fetchItem()
            
        }, [])

    return(
        
    	<div className="container">
           
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6" style={{color:"black"}}>
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src={Items.image} style={{width:300, height:300, marginLeft:50}} /></div>
   
						</div>
						
						
					</div>
					<div className="details col-md-6" style={{color:"black", padding:22, }}>
						<h3 className="product-title">{Items.title}</h3>
						<div className="rating">
							{/* <p className="review-no"> Rating {Items.rating.rate} </p> */}
					
						</div>
						<p className="product-description">{Items.description}</p>
						<h4 className="price">Price: <span>{Items.price}</span></h4>
						
						
						
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default DetailsProduct;