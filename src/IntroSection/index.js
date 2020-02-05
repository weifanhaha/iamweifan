import React, { Component } from "react"
import "./style.scss"
import dictionary from "./assets/dictionary"

class IntroSection extends Component {
    getText = key => {
        return dictionary[this.props.language][key]
    }

    render() {
        return (
            <div className="section-container">
                <div className="content">
                    <div className="intro-wrapper">
                        <div className="intro-img-container" />
                        <div className="intro-text">
                            <span>
                                <strong>{this.getText("NAME")}</strong>
                                {this.getText("INTRO1")}
                                <br />
                                <br />
                                {this.getText("INTRO2")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IntroSection
