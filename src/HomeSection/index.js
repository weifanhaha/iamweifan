import React from "react"
import "./style.scss"
import dictionary from "./assets/dictionary"

function HomeSection(props) {
    function getText(key) {
        return dictionary[props.language][key]
    }

    return (
        <div className="home-img-container">
            <div className="text-box">
                <div className="title">{getText("NAME")}</div>
                <div className="subtitle">{getText("SLOGAN")}</div>
            </div>
        </div>
    )
}

export default HomeSection
