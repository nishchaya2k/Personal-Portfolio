import React from "react";

import Section from "../shared/section";
import callback from "../../images/blogs/callback.png";
import glassmorphism from "../../images/blogs/glassmorphism.png";
import axios from "../../images/blogs/axios.png";
import BlogCard from "./blog-card";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Nishchaya Narula"
                    date="Dec 20, 2023"
                    image={callback}
                    title="Callback function"
                    description="A callback is a function passed as an argument to another function.
                                This technique allows a function to call another function.
                                A callback function can run after another function has finished"

                />
                <BlogCard
                    user="Nishchaya Narula"
                    date="Dec 19, 2023"
                    image={glassmorphism}
                    title="Glassmorphism Effect"
                    description="Glassmorphism is a UI design style that uses transparency and
                                 background blur to achieve a glass-like effect in UI."
                />
                <BlogCard
                    user="Nishchaya Narula"
                    date="Dec 17, 2023"
                    image={axios}
                    title="Axios"
                    description="Axios is a popular JavaScript library for making HTTP requests
                                 from a web browser or a Node. js server. It performs various
                                 operations, such as retrieving and sending data and handling responses."
                />
            </div>
        </Section>
    );
};

export default Blogs;