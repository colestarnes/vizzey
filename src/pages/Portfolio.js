import React from 'react'; 
import Card from '../components/Card'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import db from '../db/db.json'; 

// const theCards = <Card/> 

function Portfolio() {
    

    return (
    
        <> 
         <h3>Portfolio</h3>
        <div>  
        
        <Card/>
            {/* {db.map(card => {
                return (
                <p><Card>
                    
                    </Card></p>
                )
            })} */}
   
        </div>
        </>
    )
} 

export default Portfolio;