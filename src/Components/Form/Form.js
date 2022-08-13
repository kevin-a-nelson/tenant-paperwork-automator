
import React, { Component } from "react"
import "./Form.css"
import ReactToPrint from "react-to-print"

export default class Form extends Component {
    render() {
        return (
                <div id="form">
                    <div className="page page-one">
                        <h1 className="title">TENANCY&nbsp;CONTRACT</h1>
                        <p>The Agreement Made on 12 day of Auguest, 2022</p>
                        <h1>BETWEEN</h1>
                        <p>
                            Gentle Property Management Ltd. Who is the Lessor
                            <br></br>
                            Kirill Sukhikh who is the Property Manager
                            <br></br>
                            (One Party)
                        </p>
                        <h1>AND</h1>
                        <p>______________________________________________ who is the LESSEE
                            <br></br>
                            (The Other Party)
                        </p> 
                        <p>
                            The Agreement shall be effective as of the date executed by Lessor as set forth in the next pages.
                        </p>
                        <p>
                            Lesee's Initials ______
                        </p>
                    </div>
                    <div className="page page-two">
                        Page Two
                    </div>
                    <div className="page page-three">
                        Page Three
                    </div>
                    <div className="page page-four">
                        Page Four
                    </div>
                    <div className="page page-five">
                        Page Five
                    </div>
                </div>
        )
    }
}