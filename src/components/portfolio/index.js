import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Healthy Food Restraunt",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-7.jpg"),
        },
    },
    {
        id: 2,
        name: "Introduction Page",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/modernPortfolio2.png"),
        },
    },
    {
        id: 3,
        name: "Web Design Landing Page",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-8.jpg"),
        },
    },
    {
        id: 4,
        name: "Movix App",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/movix2.png"),
        },
    },
    {
        id: 5,
        name: "E-Commerce",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/qei_store2.png"),
        },
    },
    {
        id: 6,
        name: "Razorpay Clone",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/razorpayclone1.png"),
        },
    },
    {
        id: 7,
        name: "Discord Clone",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/discord1.png"),
        },
    },
    {
        id: 8,
        name: "Movies & Tv Shows Experience",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/movix3.png"),
        },
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomOut");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomIn");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check my Protfolio"
            background="light">

            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;