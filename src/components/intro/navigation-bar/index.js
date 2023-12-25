import React, { useState } from "react";

import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

import nishchaya from "../../../images/nishchaya.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const Navigation = () => {

    const [mobileMenu, setMobileMenu] = useState(false);

    const menuItemClickHandler = (section) => {
        setMobileMenu(!mobileMenu);
        scrollToSection(section);
    };
    return (
        <div className='top-navigation-bar'>
            <div className='app-logo'>
                <img src={nishchaya} alt='Nishchaya' />
            </div>

            <div className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)} >
                {mobileMenu ? (
                    <IoMdClose
                        size={24}
                        color="#fff"
                    />
                ) : (
                    <CgMenuRight
                        size={24}
                        color="#fff"
                    />
                )}
            </div>

            <div className={`navigation ${mobileMenu ? "active" : ""}`}>
                <span className="navigation-item" onClick={() => menuItemClickHandler("skills")}>Skills</span>
                <span className="navigation-item" onClick={() => menuItemClickHandler("portfolio")}>Portfolio</span>
                <span className="navigation-item" onClick={() => menuItemClickHandler("blogs")}>Blogs & Articles</span>
                <CallToAction text="Contact me" action={() => menuItemClickHandler("contact")} />
            </div>

        </div>
    )
}

export default Navigation
