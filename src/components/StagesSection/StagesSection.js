import ua from '../../assets/images/ua.svg'
import registericon1 from '../../assets/images/register-icon/register-icon1.svg'
import ellipse from '../../assets/images/register-icon/ellipse.svg'
import checkIN from '../../assets/images/register-icon/check-in.svg'
import time from '../../assets/images/register-icon/time.svg'
import check from '../../assets/images/register-icon/check.svg'
import rectangle from '../../assets/images/register-icon/rectangle.svg'
import arrowRight from '../../assets/images/register-icon/arrow-right.svg'


const StagesSection = ()=>{
    return(
        <section className="stage-section">
            <div className="container">
               <h2>Этапы проведения</h2>
                <div className="stage-text">
                    <p>
                        The path to every Major begins with the open qualifiers for the regional Minor Championships, spanning Europe, CIS, Americas, and Asia. Here is the schedule of every qualifying stage of StarLadder Major.
                    </p>
                    <h5>
                        Зарегистрировано: 24
                    </h5>
                </div>
                <div className="stage-wrap">
                    <div className="number">
                        <span>#</span>
                        <p>Команда</p>
                    </div>
                    <div className="stage-block">
                        <div className="stage-list">
                            <ul>
                                <li><span>353</span><a href="#"><img src={ua} alt="image"/>Dianne Russell</a></li>
                                <li><span>2</span><a href="#"><img src={ua} alt="image"/>Natus Vincere</a></li>
                                <li><span>3</span><a href="#"><img src={ua} alt="image"/>Natus Vincere</a></li>
                                <li><span>4</span><a href="#"><img src={ua} alt="image"/>Natus Vincere</a></li>
                                <li><span>5</span><a href="#"><img src={ua} alt="image"/>Natus Vincere</a></li>
                                <li><span>6</span><a href="#"><img src={ua} alt="image"/>Natus Vincere</a></li>
                                <li><span>7</span><a href="#"><img src={ua} alt="image"/>Natus Vincere</a></li>
                                <li><span>8</span><a href="#"><img src={ua} alt="image"/>Natus Vincere</a></li>
                                <li><span>9</span><a href="#"><img src={ua} alt="image"/>Natus Vincere</a></li>
                                <li><span>10</span><a href="#"><img src={ua} alt="image"/>Natus Vincere</a></li>
                                <li><span>11</span><a href="#"><img src={ua} alt="image"/>Natus Vincere</a></li>
                                <li><span>12</span><a href="#"><img src={ua} alt="image"/>Natus Vincere</a></li>
                                <li><span>13</span><a href="#"><img src={ua} alt="image"/>Natus Vincere</a></li>
                                <li><span>14</span><a href="#"><img src={ua} alt="image"/>Natus Vincere</a></li>
                                <li><span>15</span><a href="#"><img src={ua} alt="image"/>Natus Vincere</a></li>
                                <li><span>16</span><a href="#"><img src={ua} alt="image"/>Natus Vincere</a></li>
                            </ul>
                        </div>
                        <div className="stage-register">
                            <div className="register-block">
                                <div className="register-element done">
                                    <div className="icon"><div className="icon-bg"><img src={registericon1} alt="image"/><img src={ellipse} className="ellipse" alt="image"/></div></div>
                                    <div className="text">
                                        <h6>Registration</h6>
                                        <p>29 sep, 19:00 – 20 nov, 10:00</p>
                                    </div>
                                </div>
                                <div className="register-element">
                                    <div className="icon"><div className="icon-bg"><img src={checkIN} alt="image"/></div></div>
                                    <div className="text">
                                        <h6>Registration</h6>
                                        <p>29 sep, 19:00 – 20 nov, 10:00</p>
                                    </div>
                                </div>
                                <div className="register-element">
                                    <div className="icon"><div className="icon-bg"><img src={time} alt="image"/></div></div>
                                    <div className="text">
                                        <h6>Registration</h6>
                                        <p>29 sep, 19:00 – 20 nov, 10:00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="register">
                                Вы зарегистрированы
                                <span>Team: Natus vincere (#353)</span>
                                <img src={check} alt="image" className="check"/>
                                <img src={rectangle} alt="image" className="rectangle"/>
                            </div>
                            <div className="register-list">
                                <ul>
                                    <li><a href="#">Support<img src={arrowRight} alt="image"/></a></li>
                                    <li><a href="#">Rules<img src={arrowRight} alt="image"/></a></li>
                                    <li><a href="#">FAQ<img src={arrowRight} alt="image"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StagesSection;