import React from 'react'
import "./aboutView.css"
import profile from "../images/profile.jpg"
const aboutView = () => {
    return (
        <div className="content-wrapper"> {/*<!-- This is where everythin below the navbar is going to be-->*/}
            <div className="two-column-wrapper">
                <div className="profile-image-wrapper">
                    <img src={profile} />
                </div>

                <div className="profile-content-wrapper">
                    <h1>Hi, thanks for visiting!</h1>
                    <p>Before today I didn't know anything about html or css. But a few hours later this is what I was able to do</p>
                    <p>“While one may encounter many defeats, one must not be defeated.”
                    ― Maya Angelou
                         </p>
                    <p>“Defeat is for the valiant. Only they will know the honour of losing and the joy of winning."
                    ― Paulo Coelho, Manuscript Found in Accra
                            </p>
                </div>
            </div>
        </div>

    )
}
export default aboutView