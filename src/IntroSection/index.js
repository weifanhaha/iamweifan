import React from "react"
import "./style.scss"
import dictionary from "./assets/dictionary"

function IntroSection(props) {
    function getText(key) {
        return dictionary[props.language][key]
    }

    return (
        <div className="section-container">
            <div className="content">
                <div className="intro-wrapper">
                    <div className="intro-img-container" />
                    <div className="intro-text">
                        <span>
                            <strong>{getText("NAME")}</strong>
                            {getText("INTRO1")}
                            <br />
                            <br />
                            {getText("INTRO2")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroSection
