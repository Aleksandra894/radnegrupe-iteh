import React, { Component } from "react";
import ReactDOM from "react-dom";
import Grupa from "./Grupa";

export default class Grupe extends Component {
    constructor(props) {
        super(props);
        this.state = { grupe: [] };
        this.url = "http://127.0.0.1:8000/";

        this.ucitajGrupe();
    }

    ucitajGrupe() {
        axios.get(this.url + "grupe/get").then((res) => {
            const grupe = res.data.grupe;
            this.setState({ grupe });
        });
    }

    prikaziGrupe() {
        let grupe = this.state.grupe;
        return grupe.map((grupa) => {
            return <Grupa key={grupa.id} grupa={grupa} />;
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row p-3 bg-dark text-white justify-content-center">
                    <div className="col-2 h4 ">NAZIV</div>
                    <div className="col-2 h4 ">TIP GRUPE</div>
                    <div className="col-2 h4 ">UCLANJENO</div>
                    <div className="col-2 h4 ">AKCIJE</div>
                    {this.prikaziGrupe()}
                </div>
            </div>
        );
    }
}

if (document.getElementById("grupe")) {
    ReactDOM.render(<Grupe />, document.getElementById("grupe"));
}
