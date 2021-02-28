import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div className="text-center">
                <h1 style={{ marginTop: "20px" }}>
                    Kenny's React CRUD App
                </h1>
                <hr />
                <h5>
                    <i>presents</i>
                </h5>
                <h1>App with React + Django</h1>
            </div>
        );
    }
}

export default Header;