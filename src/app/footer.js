import React, { Component } from 'react';
import allisonImg from "../img/allison.jpg";
import leeImg from "../img/lee.jpg"
import noahImg from "../img/noah.jpg"
import trevorImg from "../img/trevor.jpg"

class Footer extends Component {

    render() {
        return (
            <section className="team-section">
                <div className="container">
                    <h2>Meet the Team</h2>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="team-member">
                                <h3>Lee</h3>
                                <img src={leeImg} alt="Lee" />
                                <div className="team-member-copy">
                                    <p>team member info goes here</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="team-member">
                                <h3>Noah</h3>
                                <img src={noahImg} alt="Noah" />
                                <div className="team-member-copy">
                                    <p>team member info goes here</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="team-member">
                                <h3>Trevor</h3>
                                <img src={trevorImg} alt="Trevor" />
                                <div className="team-member-copy">
                                    <p>team member info goes here</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="team-member">
                                <h3>Allison</h3>
                                <img src={allisonImg} alt="Allison" />
                                <div className="team-member-copy">
                                    <p>team member info goes here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
        )
    }
}

export default Footer;