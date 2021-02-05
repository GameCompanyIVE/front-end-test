import React from "react";
import logoStar from "../../../assets/images/card-image/logo-star.svg"
import play from "../../../assets/images/card-image/play.svg"
import icon1 from "../../../assets/images/card-image/icon1.svg"
import icon2 from "../../../assets/images/card-image/icon2.svg"
import partner from "../../../assets/images/card-image/partner.svg"

const LiveMatches = ()=>{
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
                <div className="card-block">
                    <div className="card-icon">
                        <img src={icon1} alt="image"/>
                        <img src={icon2} alt="image"/>
                    </div>
                    <div className="coefficient">
                        <h3>Albert Warren</h3>
                        <div className="coff">3.22</div>
                    </div>
                    <div className="coefficient">
                        <h3>Gloria Henry</h3>
                        <div className="coff">53.22</div>
                    </div>
                    <div className="partner">
                        <p>Bо 3</p>
                        <img src={partner} alt="image"/>
                    </div>
                </div>
            </a>
        </React.Fragment>
    )
}

export default LiveMatches;