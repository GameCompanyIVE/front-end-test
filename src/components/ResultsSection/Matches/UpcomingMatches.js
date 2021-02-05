import React from "react";
import logoStar2 from "../../../assets/images/card-image/logo-star2.svg"
import icon2 from "../../../assets/images/card-image/icon2.svg"
import icon3 from "../../../assets/images/card-image/icon3.svg"
import icon4 from "../../../assets/images/card-image/icon4.svg"
import icon5 from "../../../assets/images/card-image/icon5.svg"
import icon6 from "../../../assets/images/card-image/icon6.svg"
import icon7 from "../../../assets/images/card-image/icon7.svg"
import partner from "../../../assets/images/card-image/partner.svg"

const UpcomingMatches = ()=>{
    return(
        <React.Fragment>
            <a className="block-element upcoming">
                <img src={logoStar2} className="logo-star" alt="image"/>
                <div className="card-start">
                    <p>Asia Minor: Play-Off</p>
                    <div>
                        <h4>19:00</h4>
                        <p>29 октября</p>
                    </div>
                </div>
                <div className="card-block">
                    <div className="card-icon">
                        <img src={icon3} alt="image"/>
                        <img src={icon4} alt="image"/>
                    </div>
                    <div className="coefficient">
                        <h3>Regina Watson</h3>
                        <div className="coff">3.22</div>
                    </div>
                    <div className="coefficient">
                        <h3>Kathryn Jones</h3>
                        <div className="coff">53.22</div>
                    </div>
                    <div className="partner">
                        <p>Starts in: 5 hours 39 min • Bо 3</p>
                        <img src={partner} alt="image"/>
                    </div>
                </div>
            </a>
            <a className="block-element upcoming">
                <img src={logoStar2} className="logo-star" alt="image"/>
                <div className="card-start">
                    <p>Asia Minor: Play-Off</p>
                    <div>
                        <h4>19:00</h4>
                        <p>29 октября</p>
                    </div>
                </div>
                <div className="card-block">
                    <div className="card-icon">
                        <img src={icon2} alt="image"/>
                        <img src={icon5} alt="image"/>
                    </div>
                    <div className="coefficient">
                        <h3>Ricardo Hawkins</h3>
                        <div className="coff">3.22</div>
                    </div>
                    <div className="coefficient">
                        <h3>Bruce Simmmons</h3>
                        <div className="coff">53.22</div>
                    </div>
                    <div className="partner">
                        <p>Starts in: 5 hours 39 min • Bо 3</p>
                        <img src={partner} alt="image"/>
                    </div>
                </div>
            </a>
            <a className="block-element upcoming">
                <img src={logoStar2} className="logo-star" alt="image"/>
                <div className="card-start">
                    <p>Asia Minor: Play-Off</p>
                    <div>
                        <h4>19:00</h4>
                        <p>29 октября</p>
                    </div>
                </div>
                <div className="card-block">
                    <div className="card-icon">
                        <img src={icon6} alt="image"/>
                        <img src={icon7} alt="image"/>
                    </div>
                    <div className="coefficient">
                        <h3>Jenny Bell</h3>
                        <div className="coff">3.22</div>
                    </div>
                    <div className="coefficient">
                        <h3>Arlene Robertson</h3>
                        <div className="coff">53.22</div>
                    </div>
                    <div className="partner">
                        <p>Starts in: 5 hours 39 min • Bо 3</p>
                        <img src={partner} alt="image"/>
                    </div>
                </div>
            </a>
        </React.Fragment>
    )
}

export default UpcomingMatches;