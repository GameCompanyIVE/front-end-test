import background from '../../assets/images/main-image.png'
import mainLogo from '../../assets/images/main-logo.svg'
import arrow from '../../assets/images/icon/arrow.svg'
import tickets from '../../assets/images/icon/tickets.svg'
import twitch from '../../assets/images/icon/twitch.svg'
import twitter from '../../assets/images/icon/twitter.svg'
import vkontakte from '../../assets/images/icon/vkontakte.svg'
import facebook from '../../assets/images/icon/facebook.svg'

var sectionStyle = {
    backgroundImage: `url(${background})`
};

const MainSection = ()=>{
    return(
        <section className="main-section" style={sectionStyle}>
            <div className="container">
                <div className="main-wrap">
                    <img src={mainLogo} alt="image"/>
                    <h1>StarSeries i-League CSGO<br/> Season 8</h1>
                    <div className="main-block">
                        <div className="main-el-first main-text">
                            <p>
                                Parimatch League CS:GO is the new online league in Counter-Strike: Global Offensive from Parimatch and StarLadder, with $100,000 total prize pool. 16 teams from Europe and the CIS will take part in the League, with 4 teams going to League through open qualifiers.
                            </p>
                        </div>
                        <div className="main-el-second main-inform">
                            <p><span>Место:</span><span>Берлин, Германия</span></p>
                            <p><span>Даты:</span><span>22 Сентября – 30 Октября 2020</span></p>
                            <p><span>Призы:</span><span>$1,000,000</span></p>
                        </div>
                    </div>
                    <div className="main-block">
                        <div className="main-el-first main-button">
                            <a href="#" className="button bg">Read Announcement<img src={arrow} alt="image"/></a>
                            <a href="#" className="button">GET TICKETS<img src={tickets} alt="image"/></a>
                        </div>
                        <div className="main-el-second main-social">
                            <a href="#"><img src={twitter} alt="image"/></a>
                            <a href="#"><img src={twitch} alt="image"/></a>
                            <a href="#"><img src={facebook} alt="image"/></a>
                            <a href="#"><img src={vkontakte} alt="image"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSection;