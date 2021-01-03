import React from 'react';
import Card from '../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import db from '../db/db.json';


function Portfolio() {
    return (
        <>
            <h3>Portfolio</h3>

            <div>
                <div className="row" xs={6}>
                    {db.map(card => {
                        return (

                            <ul>
                                <Card link={card.link} image={card.image} imageAlt={card.imageAlt} title={card.title} description={card.description} />
                            </ul>

                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Portfolio;