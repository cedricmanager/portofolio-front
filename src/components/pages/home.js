import React from "react"
import {Helmet} from 'react-helmet' 

import Footer from "./footer"
import "../css/home.css"

const Home = () =>{

    return(
        <React.Fragment >
        <div id="home" className="bg-dark">
        <div  className=" p-4  rounded">
            <div className="row">
                <div className="col-sm">
                    <h1 className="text-light"> Masiala Phasi Cédric</h1>
                    <b className="text-light"> Développeur Full-stack</b>
                    <br/>
                    <button className="btn btn-lg text-info btn-dark bg-gradient mt-4" >Contact</button>

                </div>
                <div className="col-sm shadow" id="langue">
                        <div    className="card rounded">
                            <div className="card-header bg-gradient  text-center text-info bg-dark">
                                <h2>Langages</h2>
                            </div>
                            <div className="card-body">
                                <h3>Spécialisation</h3>
                                <p> Spécialisé dans les langages Javascript, Java et PHP. </p>
                                <p>Mais étant Bachelier en informatique de gestion, j'ai aucun problème pour m'adapter à n'importe quel langage orienté objet</p>
                            </div>
                            <div className="card-footer bg-warning bg-gradient">
                                <h3>Connaissance</h3>
                                <p>Les langages déja utilisé sans spécialisation, c++</p>

                            </div>
                        </div>
                </div>
                 
            </div>  
            
                        
        </div>

        <div className="container-fluid  p-4">
            <div className="text-center m-4"> <h1 className="text-uppercase p-4 d-inline-flex bg-dark bg-gradient text-info  text-center rounded"> Frame-Work</h1></div>
        <div className="container mt-4">
                    <div className="row">
                        <div className="col-sm">
                        <div    className="card shadow rounded">
                            <div className="card-header text-center bg-gradient text-warning bg-dark">
                                <h2>Symfony</h2>
                            </div>
                            <div className="card-body">
                               <img className="" src="./photo/symfony.png" width="100%" height="200px"/>
                            </div>
                            <div className="card-footer bg-dark text-light">
                                <h3>Connaissance</h3>
                                <p>Les langages déja utilisé sans spécialisation, c++</p>

                            </div>
                        </div>
                        </div>
                        <div className="col-sm">
                        <div    className="card shadow rounded">
                            <div className="card-header text-center bg-gradient text-warning bg-dark">
                                <h2>Laravel</h2>
                            </div>
                            <div className="card-body">
                                 <img className="" src="./photo/laravel.png" width="100%" height="200px"/>
                            </div>
                            <div className="card-footer bg-dark text-light">
                                <h3>Connaissance</h3>
                                <p>Les langages déja utilisé sans spécialisation, c++</p>

                            </div>
                        </div>
                        </div>
                        <div className="col-sm">
                        <div    className="card shadow rounded">
                            <div className="card-header text-center bg-gradient text-warning bg-dark">
                                <h2>Express-js</h2>
                            </div>
                            <div className="card-body">
                                <img className="" src="./photo/express-js.png" width="100%" height="200px"/>
                            </div>
                            <div className="card-footer bg-dark text-light">
                                <h3>Connaissance</h3>
                                <p>Les langages déja utilisé sans spécialisation, c++</p>

                            </div>
                        </div>
                        </div>
                        <div className="col-sm">
                        <div    className="card shadow rounded">
                            <div className="card-header text-center bg-gradient text-warning bg-dark">
                                <h2>Spring-boot</h2>
                            </div>
                            <div className="card-body">
                                  <img className="" src="./photo/spring.jpg" width="100%" height="200px"/>
                            </div>
                            <div className="card-footer bg-dark text-light">
                                <h3>Connaissance</h3>
                                <p>Les langages déja utilisé sans spécialisation, c++</p>

                            </div>
                        </div>
                        </div>
                    </div>
                        
                </div>  
            </div>
        
        <div id="bon" className="rotate-vertical ">
          



        <div className="container mt-4 p-4">
                    <div className="row">
                        <div className="col-sm">
                        <div    className="card shadow rounded">
                            <div className="card-header text-center bg-gradient text-warning bg-dark">
                                <h2>Symfony</h2>
                            </div>
                            <div className="card-body">
                               <img className="" src="./photo/symfony.png" width="100%" height="200px"/>
                            </div>
                            <div className="card-footer bg-dark text-light">
                                <h3>Connaissance</h3>
                                <p>Les langages déja utilisé sans spécialisation, c++</p>

                            </div>
                        </div>
                        </div>
                        <div className="col-sm">
                        <div    className="card shadow rounded">
                            <div className="card-header text-center bg-gradient text-warning bg-dark">
                                <h2>Laravel</h2>
                            </div>
                            <div className="card-body">
                                 <img className="" src="./photo/laravel.png" width="100%" height="200px"/>
                            </div>
                            <div className="card-footer bg-dark text-light">
                                <h3>Connaissance</h3>
                                <p>Les langages déja utilisé sans spécialisation, c++</p>

                            </div>
                        </div>
                        </div>
                        <div className="col-sm">
                        <div    className="card shadow rounded">
                            <div className="card-header text-center bg-gradient text-warning bg-dark">
                                <h2>Express-js</h2>
                            </div>
                            <div className="card-body">
                                <img className="" src="./photo/express-js.png" width="100%" height="200px"/>
                            </div>
                            <div className="card-footer bg-dark text-light">
                                <h3>Connaissance</h3>
                                <p>Les langages déja utilisé sans spécialisation, c++</p>

                            </div>
                        </div>
                        </div>
                        <div className="col-sm">
                        <div    className="card shadow rounded">
                            <div className="card-header text-center bg-gradient text-warning bg-dark">
                                <h2>Spring-boot</h2>
                            </div>
                            <div className="card-body">
                                  <img className="" src="./photo/spring.jpg" width="100%" height="200px"/>
                            </div>
                            <div className="card-footer bg-dark text-light">
                                <h3>Connaissance</h3>
                                <p>Les langages déja utilisé sans spécialisation, c++</p>

                            </div>
                        </div>
                        </div>
                    </div>
                        
                </div>  




        </div>    
         </div>
         <Footer/>
        <Helmet>
                  <script >
                        
                 


                        
                   </script>

        </Helmet>
        </React.Fragment>
    )
}

export default Home;