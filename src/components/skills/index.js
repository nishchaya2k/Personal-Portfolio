import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import ReactSnowfall from 'react-snowfall';


import Section from "../shared/section";
import TechIcons from "../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";
import { MdRemoveRedEye } from "react-icons/md";
import Resume from "../../Resume.pdf"

import "./style.scss";

const Skills = () => {
    return (
        <Section background="dark" id="skills">
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img src={TechIcons} alt="JS,React,HTMl,CSS" />
                </div>

                <div className="right-col">
                    <h2>Skills</h2>
                    <div className="Card">
                        <ul>
                            <li>React</li>
                            <li>Javascript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>C++</li>
                            <li>Bootstrap</li>
                            <li>DS & Algo</li>

                        </ul>
                    </div>
                    {/* <CallToAction text="Download CV" icon={<AiOutlineCloudDownload />} /> */}
                    <a href={Resume} target="_blank">
                        <CallToAction text="View CV" icon={<MdRemoveRedEye />} />
                    </a>

                </div>
            </div>
        </Section>
    );
};

export default Skills;



//for skills to show, try to plan moving 3d cicrle rovolae and in that skills are
//there, particular circle for particular skill