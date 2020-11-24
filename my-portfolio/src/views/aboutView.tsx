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
                    <p>"Programming isn't about what you know; it's about what you can figure out.” - Chris Pine

                        <br /> <br />This is so true. At first, we're so anxious about knowing everything, especially language syntax. Problem-solving is the skill we end up using most.</p>
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