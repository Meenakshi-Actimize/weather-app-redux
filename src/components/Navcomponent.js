import React from "react";

function Navcomp(){
    return(
        <>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">ZIGZAG</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link text-primary mx-2" href="#">Home </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-primary mx-2" href="#">About us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-primary mx-2" href="#">Contact</a>
                    </li> 
                    <li class="nav-item">
                    <a class="nav-link text-primary mx-2" href="#">Logout</a>
                    </li>    
                </ul>
                <form class="d-flex ml-4">
                <input class="form-control me-2" type="text" placeholder="Search" />
                <button class="btn btn-primary" type="button">Search</button>
                </form>
                </div>
            </div>
        </nav>
  
        </>
    )
}       

export default Navcomp;