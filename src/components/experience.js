import React from 'react'
import griet from '../images/griet.jpg'
import hexagon from '../images/hexagon.png'
import unwired from '../images/unwired.png'
const experience = () => {
    return (
        <section id="experience" className="experience section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Experience</h2>
                </div>
                <div className="row  justify-content-center">
                <div class="card1 card2">
                    <div class="card-header1">
                    <img src={hexagon} alt="rover" />
                    </div>
                    <div class="card-body1">
                    <span class="tag1 tag-teal1">Hexagon Capability Center India</span>
                    <div className="row col-12">
                        <div className="col-4">
                            <p className="card_side_header">Role</p>
                        </div>
                        <div className="col-8">
                        <p>Full Stack Developer</p>
                            
                        </div>
                    </div>
                    <div className="row col-12">
                        <div className="col-4">
                        <p className="card_side_header">Time Period</p>
                            
                        </div>
                        <div className="col-8">
                        <p>17/06/2019 - 16/07/2021</p>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div class="card1 card2">
                    <div class="card-header1">
                    <img src={unwired} alt="rover" />
                    </div>
                    <div class="card-body1">
                    <span class="tag1 tag-teal1">UNWIRED LABS</span>
                    <div className="row col-12">
                        <div className="col-4">
                            <p className="card_side_header">Role</p>
                        </div>
                        <div className="col-8">
                        <p>Full Stack Developer Intern</p>    
                        </div>
                    </div>
                    <div className="row col-12">
                        <div className="col-4">
                        <p className="card_side_header">Time Period</p>
                            
                        </div>
                        <div className="col-8">
                        <p>01/02/2019 - 31/03/2019</p>   
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default experience
