import React from "react";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GET_DATA } from "../redux/actions/actiontypes";
import  GetData  from "../redux/apis/api";
import { Getdata } from "../redux/actions/action1";

function Home({data, Getdata}) {
    const handleGetData = async () => {
        try{
    const placeholder = document.getElementById("myinput").value;

            console.log(placeholder);
            const test = 'kakinada';
            const getting =  await GetData(placeholder); 
            console.log('This is home page',getting)
            Getdata(getting);
            // const data = getting;
            // console.log('Hi, i get the data',data.main.temp);
            
            
        }
        catch(error){
            console.log('error');
        }

       
    };

    return (
        <>
                <div class="container-fluid">
                    <div class="row d-flex bg-secondary">
                        <div class="col-md-6">
                
                            <div className="card mx-auto mt-5 mb-4 h-50" style={{ maxWidth: '450px'}}>
                            <img src="./images/back2.jpeg" className="card-img-top" alt="Weather" />
                            <div className="card-body">
                                <h5 className="card-title">Today's Weather</h5>
                                <input type="search" placeholder="Enter city name" id="myinput"/>
                                <button className="bg-primary"  onClick={handleGetData}>Get data</button>
                                {data && data.main ? (
                                        <ul class="list-unstyled mt-3">
                                        
                                                <li class="text-start"><strong>City:</strong> <span class="text-primary">{data.name}</span></li>
                                                <li class="text-start">Temperature is : <span class="text-primary">{(data.main.temp - 32)*(5/9) } &#8451;</span></li>
                                                <li class="text-start">Humidity is: <span class="text-primary">{data.main.humidity} %</span></li>
                                                <li class="text-start">Wind speed is: <span class="text-primary">{data.wind.speed} kmph</span></li>

                                        
                                            
                                        </ul>
                                        ) : (
                                            <p>{data ? 'Enter city' : 'No city found'}</p>
                                        )}
                            </div>
                            </div>
                        </div>  
                        <div class="col-md-6">
                            <div className="card mx-auto mt-5 mb-3 h-50" style={{ maxWidth: '450px'}}>

                            <img src="./images/banner.jpg" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Get the daily weather forecast</h5>
                                <div style={{marginTop:'24px'}}><strong>Download with mobile app</strong>
                                    <p class="secondary"><img src="./images/playstore1.png" width="10%"/>
                                    <img class="mx-2" src="./images/playstore2.png" width="10%"/></p>
                                </div>
                            </div>

                            </div>
                           
                                   
                        </div>
                       
                                             
                    </div>
                </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    data: state.data
    
});

const mapDispatchToProps = {Getdata}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

