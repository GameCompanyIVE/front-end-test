import React from "react";
import LiveBattles from "./LiveBattles";
import UpcomingBattles from "./UpcomingBattles";


const Battles = ()=>{
    return(
        <div className="block-wrap">
            <LiveBattles/>
            <UpcomingBattles/>
        </div>
    )
}

export default Battles;