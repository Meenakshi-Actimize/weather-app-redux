import React from "react";

function Footercomp(){
    return(
        <>
        <div class="container-fluid bg-dark">
            <div class="row">
                <div class="col-md-3">
                <p class="text-white text-start mx-5"><strong> React </strong></p>
                   <p class="text-primary text-start mx-5"> News</p>
                   <p class="text-primary text-start mx-5">Partners</p>
                   <p class="text-primary text-start mx-5">About us</p>
                   <p class="text-primary text-start mx-5">Terms of use</p>
                </div>
                <div class="col-md-3">
                <p class="text-white text-start mx-5"><strong> Social </strong></p>
                    <p class="text-primary text-start mx-5"><i class="bi-facebook"></i>Facebook</p>
                    <p class="text-primary text-start mx-5"><i class="bi-twitter"></i>Twitter</p>
                    <p class="text-primary text-start mx-5"><i class="bi-instagram"></i>Instagram</p>
                    <p class="text-primary text-start mx-5"><i class="bi-youtube"></i>Youtube</p>
                </div>
                <div class="col-md-3">
                <p class="text-white text-start mx-5"><strong> Service </strong></p>
                    <p class="text-primary text-start mx-5">Compare</p>
                    <p class="text-primary text-start mx-5">Download</p>
                    <p class="text-primary text-start mx-5">Feedback</p>
                    <p class="text-primary text-start mx-5">Honor</p>
                </div>
                <div class="col-md-3">
                <p class="text-white text-start mr-5"><strong> Weatherforecast Subscription </strong></p>
                <div class="row">
                    <div class="col-md-3 d-flex">
                        <input type="search" class="text-start me-2 " placeholder="Subscribe" style={{fontSize:'8px'}}/>
                        <button type="search" class="btn btn-round bg-warning  " style={{fontSize:'10px'}}>Subscribe</button>
                    </div>
                </div>
                </div>
                <div>
                    <p class="text-primary mt-3" style={{fontSize:'10px'}}>Copyright@2024 ZIGZAG.All rights reserved</p>
                </div>
            </div>
        </div>

        </>
    )
}
export default Footercomp;