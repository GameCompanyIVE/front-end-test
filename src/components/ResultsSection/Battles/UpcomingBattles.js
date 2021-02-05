import React from "react";
import logoStar2 from "../../../assets/images/card-image/logo-star2.svg"
import icon8 from "../../../assets/images/card-image/icon8.svg"
import partner from "../../../assets/images/card-image/partner.svg"

const UpcomingBattles = ()=>{
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
                        <img src={icon8} alt="image"/>
                    </div>
                    <div className="coefficient">
                        <div>
                            <h3>Group A</h3>
                            <h3>Group B</h3>
                        </div>
                        <div className="match">Match #2</div>
                    </div>
                    <div className="partner">
                        <p>Starts in: 5h 39min • Map: Erangel</p>
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
                        <img src={icon8} alt="image"/>
                    </div>
                    <div className="coefficient">
                        <div>
                            <h3>Group A</h3>
                            <h3>Group B</h3>
                        </div>
                        <div className="match">Match #3</div>
                    </div>
                    <div className="partner">
                        <p>Starts in: 5h 39min • Map: Erangel</p>
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
                        <img src={icon8} alt="image"/>
                    </div>
                    <div className="coefficient">
                        <div>
                            <h3>Group A</h3>
                            <h3>Group B</h3>
                        </div>
                        <div className="match">Match #4</div>
                    </div>
                    <div className="partner">
                        <p>Starts in: 5h 39min • Map: Erangel</p>
                    </div>
                </div>
            </a>
        </React.Fragment>
    )
}

export default UpcomingBattles;