import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "./style.scss"

class ContactSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showEmail: false
        }
    }

    get emailClass() {
        return this.state.showEmail ? "email-addr" : "email-addr hidden"
    }

    toggleEmail = () => {
        this.setState(prevState => ({
            showEmail: !prevState.showEmail
        }))
    }

    render() {
        return (
            <div className="contact-section">
                <div className="icons-wrapper">
                    <a
                        href="https://github.com/weifanhaha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="icon"
                        ></FontAwesomeIcon>
                    </a>
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="icon icon-link"
                        onClick={this.toggleEmail}
                    ></FontAwesomeIcon>
                    <a
                        href="https://www.linkedin.com/in/wei-fan-chang-5a8127117/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="icon"
                        ></FontAwesomeIcon>
                    </a>
                </div>
                <a
                    href="mailto:wf.trista.chang@gmail.com"
                    className={this.emailClass}
                >
                    wf.trista.chang@gmail.com
                </a>
            </div>
        )
    }
}

export default ContactSection
