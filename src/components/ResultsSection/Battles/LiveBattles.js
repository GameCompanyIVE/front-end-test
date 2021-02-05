import React from "react";
import logoStar from "../../../assets/images/card-image/logo-star.svg"
import play from "../../../assets/images/card-image/play.svg"
import icon8 from "../../../assets/images/card-image/icon8.svg"
import partner from "../../../assets/images/card-image/partner.svg"

const LiveBattles = ()=>{
    return(
        <React.Fragment>
            <a href="#" className="block-element live">
                <img src={logoStar} className="logo-star" alt="image"/>
                <div className="card-start">
                    <p>Asia Minor: Play-Off</p>
                    <div>
                        <img src={play} alt="image"/>
                        <h5>WATCH LIVE!</h5>
                    </div>
                </div>
                <div className="card-block battles">
                    <div className="card-icon">
                        <img src={icon8} alt="image"/>
                    </div>
                    <div className="coefficient">
                        <div>
                            <h3>Group A</h3>
                            <h3>Group B</h3>
                        </div>
                        <div className="match">Match #1</div>
                    </div>
                    <div className="partner">
                        <p>Map: Erangel</p>
                    </div>
                </div>
            </a>
        </React.Fragment>
    )
}

export default LiveBattles;