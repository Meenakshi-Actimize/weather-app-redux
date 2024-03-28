import React from "react";

function Bannercomp(){
    return(
        <>
       <div style={{ position: 'relative', textAlign: 'center' }}>
            <img src="./images/banner2.jpg" alt="..." width={'100%'} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
                <p class="text-success">ADD YOUR TODO LIST</p>
            </div>
        </div>

        
        </>
    )
}
export default Bannercomp;