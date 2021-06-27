import React from 'react'
import angular from '../images/Angular_full_color_logo.svg.png'
import react from '../images/reactlogo.png'
import django from '../images/django.png'
import nodejs from '../images/nodejs.png'
import mongodb from '../images/mongod.png'
import sql from '../images/sql.png'
import python from '../images/python.png'
import javascript from '../images/javascript.png'
import java from '../images/java.png'
import gatsby from '../images/gatsby.png'
import express from '../images/express.png'
import redis from '../images/redis.png'
import git from '../images/git.png'
import docker from '../images/docker.png'
import nginx from '../images/nginx.png'
import netlify from '../images/netlify.png'
import azure from '../images/azure.png'
import heroku from '../images/heroku.png'
const technologies = () => {
    return (
        <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row skills-content justify-content-center">
            <div className="col-lg-6 ">
                <div className="skills-section row">
                    <div className="col-4 skills-header">
                        Languages
                    </div>
                    <div className="col-8 row  skills-main">
                        <div className="col-3 justify-content-center">
                            <img src={python} alt="" />
                            <p>python</p>
                        </div>
                        <div className=" col-3 justify-content-center">
                            <img src={javascript} alt="" />
                            <p>javascript</p>
                        </div>
                        <div className=" col-3 justify-content-center">
                            <img src={java} alt="" />
                            <p>java</p>
                        </div>
                    </div>
                </div>
                <div className="skills-section row">
                    <div className="col-4 skills-header">
                        Client technologies
                    </div>
                    <div className="col-8 row skills-main">
                        <div className="col-3 justify-content-center ">
                            <img src={angular} alt="" />
                            <p>angular</p>
                        </div>
                        <div className=" col-3 justify-content-center">
                        <img src={react} alt="" />
                        <p>react</p>   
                        </div>
                        <div className=" col-3 justify-content-center">
                        <img src={gatsby} alt="" />
                        <p>gatsby</p>
                        </div>
                    </div>
                </div>
                <div className="skills-section row">
                    <div className="col-4 skills-header">
                        Server technologies
                    </div>
                    <div className="col-8 row  skills-main">
                        <div className="col-3 justify-content-center ">
                        <img src={express} alt="" />
                        <p>express</p>
                        </div>
                        <div className=" col-3 justify-content-center">
                        <img src={django} alt="" />
                        <p>Django</p>
                        </div>
                    </div>
                </div>
                <div className="skills-section row">
                    <div className="col-4 skills-header">
                        Databases
                    </div>
                    <div className="col-8 row  skills-main">
                        <div className="col-3 justify-content-center ">
                        <img src={sql} alt="" />
                        <p>sql server</p>
                        </div>
                        <div className=" col-3 justify-content-center">
                        <img src={mongodb} alt="" />
                        <p>mongo db</p>
                        </div>
                        <div className=" col-3 justify-content-center">
                        <img src={redis} alt="" />
                        <p>redis</p>
                        </div>
                    </div>
                </div>
                <div className="skills-section row">
                    <div className="col-4 skills-header">
                        DevOps
                    </div>
                    <div className="col-8 row  skills-main">
                        <div className="col-3 justify-content-center ">
                        <img src={git} alt="" />
                        <p>git</p>
                        </div>
                        <div className=" col-3 justify-content-center">
                        <img src={docker} alt="" />
                        <p>docker</p>
                        </div>
                        <div className=" col-3 justify-content-center">
                        <img src={nginx} alt="" />
                        <p>nginx</p>
                        </div>
                    </div>
                </div>
                <div className="skills-section row">
                    <div className="col-4 skills-header">
                        Cloud
                    </div>
                    <div className="col-8 row  skills-main">
                        <div className="col-3 justify-content-center ">
                        <img src={azure} alt="" />
                        <p>azure</p>
                        </div>
                        <div className=" col-3 justify-content-center">
                        <img src={netlify} alt="" />
                        <p>netlify</p>
                        </div>
                        <div className=" col-3 justify-content-center">
                        <img src={heroku} alt="" />
                        <p>heroku</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

 

      </div>
    </section>
    )
}

export default technologies
