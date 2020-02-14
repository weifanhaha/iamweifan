import React from "react"
import "./style.scss"
import dictionary from "./assets/dictionary"
import skillList from "./assets/skillList"

function SkillSection(props) {
    function getText(key) {
        return dictionary[props.language][key]
    }

    return (
        <div className="section-container gray">
            <div className="content">
                <div className="section-title">{getText("TITLE")}</div>
                <div className="skill-wrapper">
                    {skillList.map(skill => {
                        return (
                            <div className="skill-subwrapper" key={skill.title}>
                                <div className="skill-title">{skill.title}</div>
                                {skill.contents.map(item => (
                                    <div className="skill-item" key={item}>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SkillSection
