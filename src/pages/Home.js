import { useState, useEffect } from "react";

import Loadscreen from "../components/Loadscreen";

import Header from "../Home/Header";
import Wordingswall from "../assets/Wordingswall";
import InnovativeWord from "../Home/InnovativeWord";
import Aboutusvidexp from "../About/Aboutusvidexp";
import Subscribemail from "../Home/Subcribemail";
import Suggestedvideos from "../Home/Sugestedvideos";

const Home = () => {

    let [loadscreen, setLoadscreen] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoadscreen(false)
        }, 4000)
    }, [])

    return (
        <div className="intelligentsia-talk">
            <Loadscreen loadscreen={loadscreen} />
            <Header />
            <InnovativeWord />
            <Suggestedvideos />
            <Wordingswall />
            <Aboutusvidexp />
            <Subscribemail />
        </div>
    )
}

export default Home; 