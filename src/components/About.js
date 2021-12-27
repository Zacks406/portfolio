import React from 'react'
import "../components/About.css"
import zack from "../images/pf1.jpg"
import award from "../images/pf4.jpg"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={zack}
                        alt=""
                        className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h2 className="a-title">
                    About Me
                </h2>
                <p className="a-sub">
                    Anthropology plays a crucial or central role in the area of global understanding
                    and recognition of diverse ways of seeing the world as critical social, political,
                </p>
                <p className="a-desc">
                    Anthropology plays a crucial or central role in the area of global understanding
                    and recognition of diverse ways of seeing the world as critical social, political,
                    and economic importance. It uses practical methods to investigate philosophical
                    problems about the nature of human life in the society.
                </p>
                <div className="a-award">
                    <img src={award}
                        alt=""
                        className="a-award-img"
                    />
                    <div className="a-award-text">
                        <h4 className="a-award-title">International Design</h4>
                        <p className="a-award-desc">
                            Anthropology plays a crucial or central role in the area of global understanding
                            and recognition of diverse ways of seeing the world.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
