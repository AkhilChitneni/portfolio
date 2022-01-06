import React from 'react'
import griet from '../images/griet.jpg'
import uc from '../images/uc.jpeg'

const degree = () => {
    return (
        <section id="degree" className="degree">
            <div className="container">
                <div className="section-title">
                    <h2>Education</h2>
                </div>
                <div className="row  justify-content-center">
                
                <div class="card1">
                    <div class="card-header1">
                    <img src={uc} alt="rover" />
                    </div>
                    <div class="card-body1">
                    <span class="tag1 tag-teal1 .bg-danger">University of Cincinnati</span>
                    <div className="row col-12">
                        <div className="col-4">
                            <p className="card_side_header">Course</p>
                        </div>
                        <div className="col-8">
                        <p>Master's in Computer and Information Science</p>
                            
                        </div>
                    </div>
                    <div className="row col-12">
                        <div className="col-4">
                        <p className="card_side_header">Major</p>
                            
                        </div>
                        <div className="col-8">
                        <p>Computer Science</p>
                            
                        </div>
                    </div>
                    <div className="row col-12">
                        <div className="col-4">
                        <p className="card_side_header">CGPA</p>
                            
                        </div>
                        <div className="col-8">
                        <p>3,9/10</p>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div class="card1">
                    <div class="card-header1">
                    <img src={griet} alt="rover" />
                    </div>
                    <div class="card-body1">
                    <span class="tag1 tag-teal1">Gokaraju Rangaraju Insutitute of engineering and technology</span>
                    <div className="row col-12">
                        <div className="col-4">
                            <p className="card_side_header">Course</p>
                        </div>
                        <div className="col-8">
                        <p>Bachelor's in Technology</p>
                            
                        </div>
                    </div>
                    <div className="row col-12">
                        <div className="col-4">
                        <p className="card_side_header">Major</p>
                            
                        </div>
                        <div className="col-8">
                        <p>Computer Science and Engineering</p>
                            
                        </div>
                    </div>
                    <div className="row col-12">
                        <div className="col-4">
                        <p className="card_side_header">CGPA</p>
                            
                        </div>
                        <div className="col-8">
                        <p>9.6/10</p>
                            
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default degree
