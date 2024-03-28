import React from "react";

function Carouselcomp(){
    return(
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/carousel1.jpg" class=" w-100 h-50" alt="..." />
            <div class="carousel-caption">
                <h3>Sunny</h3>
                <p>We had such a hot weather</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/carousel2.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption">
                <h3>Snow</h3>
                <p>We had such a beautiful snow</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/carousel3.jpeg" class="d-block w-100" alt="..." />
            <div class="carousel-caption">
                <h3>Rainy</h3>
                <p>We had such a cool weather</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default Carouselcomp;