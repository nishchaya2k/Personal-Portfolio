import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { MdMovieEdit } from "react-icons/md";


import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                {/* left Column */}
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am </span>
                        </span>
                        <span className="big-text">Nishchaya Narula</span>
                    </h1>
                    <p>
                        " I am a highly motivated and detail-oriented Frontend Developer with a strong passion for crafting immersive user experiences.
                        My goal is to continue contributing to innovative projects and driving excellence in development."
                    </p>
                    <CallToAction text="Contact me" />
                </div>

                {/* right Column */}
                <div className="right-col">
                    <img
                        src={girl}
                        alt="Nishchaya Narula"
                    />

                    {/* <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">HackerRank (Intermediate)</div>
                    </div> */}


                    <div className="highlights horizontal" onClick={() => { window.open("https://movix-seven-ebon.vercel.app/", "_blank"); }}>
                        <div className="icon">
                            <MdMovieEdit />
                        </div>
                        <div className="text">Movix App (Project)</div>
                    </div>

                    <div className="highlights verticle" onClick={() => { window.open("https://leetcode.com/narula_1/", "_blank"); }}>
                        <div className="icon">
                            <BsFillQuestionSquareFill />
                        </div>
                        <div className="text">
                            <span>170+</span>
                            Solved Leetcode Questions
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;