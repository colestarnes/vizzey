import React from 'react';
import Card from '../components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import db from '../db/db.json';
import SocialMedia from '../components/SocialMedia';


function Portfolio() {
    return (
        <>
            <div style={{ backgroundImage: `url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F08%2FWallpapers-laptop-cool-screen.jpg&")`, backgroundRepeat: 'repeat-y', height: '1750px' }}>
                <h3 style={{ color: "white", left: 75 }}>Portfolio</h3>

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
            </div>
            <SocialMedia />
        </>
    )
}
export default Portfolio;