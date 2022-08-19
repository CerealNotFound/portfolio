import * as React from "react";
import hero from "../../assets/monkey-hero.png";
import earth from "../../assets/earth.png";
import runningmonkey from "../../assets/monkey-running.png";
import sleepingmonkey from "../../assets/monkey-sleeping.png";
import standingmonkey from "../../assets/monkey-standing.png";
import boredmonkey from "../../assets/monkey-bored.png";
import jumpingmonkey from "../../assets/monkey-jumping.png";
import pimpedoutmonkey from "../../assets/monkey-pimpedout.png";
import flexingmonkey from "../../assets/monkey-flexing.png";
import orb from "../../assets/empty-orb.png";
import "./LandingPage.scss"

const LandingPage = () => {
    return(
        <section>
            <div id="earth">
                <img src={earth} alt="earth" />
            </div>
            <div id="hero">
                <img src={hero} alt="hero-monkey" />
            </div>
            <div id="main-text">
                <div id="greeting">Hey! I am Adarsh</div>
                <div id="short-intro">Geek, designer and student.</div>
            </div>
            <div className="running monkey">
                <img src={runningmonkey} alt="a monkey running in an orb" />
            </div>
            <div className="sleeping monkey">
                <img src={sleepingmonkey} alt="a monkey sleeping in an orb" />
            </div>
            <div className="standing monkey">
                <img src={standingmonkey} alt="a monkey standing in an ord" />
            </div>
            <div className="bored monkey">
                <img src={boredmonkey} alt="a bored monkey in an orb" />
            </div>
            <div className="jumping monkey">
                <img src={jumpingmonkey} alt="a monkey jumping in an orb" />
            </div>
            <div className="pimpedout monkey">
                <img src={pimpedoutmonkey} alt="a monkey wearing a suit fixing his tie in an orb" />
            </div>
            <div id="flexing-monkey">
                <img src={flexingmonkey} alt="a monkey flexing" />
            </div>
            <div className="pimpedout monkey">
                <img src={pimpedoutmonkey} alt="a monkey wearing a suit fixing his tie in an orb" />
            </div>
            <div id="orbs">
                <img id="orb-1" src={orb} alt="an empty orb" />
                <img id="orb-2" src={orb} alt="an empty orb" />
                <img id="orb-3" src={orb} alt="an empty orb" />
                <img id="orb-4" src={orb} alt="an empty orb" />
                <img id="orb-5" src={orb} alt="an empty orb" />
                <img id="orb-6" src={orb} alt="an empty orb" />
                <img id="orb-7" src={orb} alt="an empty orb" />
                <img id="orb-8" src={orb} alt="an empty orb" />
            </div>
        </section>
    )   
}

export default LandingPage;