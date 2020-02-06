import React from "react"
import "./style.scss"

function ExperienceBlock(props) {
    return (
        <div className="experience-block">
            <div className="period-textbox">{props.period}</div>
            <div className="title-textbox">
                <span className="title">{props.title}</span>
                <span className="subtitle">{props.subtitle}</span>
            </div>
            <div className="desc-textbox">{props.desc}</div>
        </div>
    )
}

export default ExperienceBlock
