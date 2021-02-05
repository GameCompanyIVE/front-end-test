import React from "react";
import LiveMatches from "./LiveMatches";
import UpcomingMatches from "./UpcomingMatches";

const Matches = ()=>{
    return(
        <div className="block-wrap">
            <LiveMatches/>
            <UpcomingMatches/>
        </div>
    )
}

export default Matches;