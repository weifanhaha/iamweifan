import React from "react"
import "./style.scss"
import dictionary from "./assets/dictionary"
import ExperienceBlock from "../components/ExperienceBlock"

function ExperienceSection(props) {
    function getText(key) {
        return dictionary[props.language][key]
    }

    return (
        <div className="section-container">
            <div className="content">
                <div className="section-title">{getText("TITLE")}</div>
                <div className="experience-blocks-container">
                    <ExperienceBlock
                        title={getText("EDUCATION_TITLE1")}
                        subtitle={getText("EDUCATION_SUBTITLE1")}
                        period={getText("PERIOD1")}
                        desc={getText("DESC1")}
                    />
                    <ExperienceBlock
                        title={getText("EDUCATION_TITLE2")}
                        subtitle={getText("EDUCATION_SUBTITLE2")}
                        period={getText("PERIOD2")}
                        desc={getText("DESC2")}
                    />
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection
