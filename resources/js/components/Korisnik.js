import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Korisnik extends Component {
    constructor(props) {
        super(props);
        this.state = {
            korisnik: this.props.korisnik,
            noviEmail: "",
            formaNoviEmail: false,
        };
        this.izbaciClana = this.izbaciClana.bind(this);
        this.izmeniEmail = this.izmeniEmail.bind(this);
        this.formaIzmeniEmail = this.formaIzmeniEmail.bind(this);
        this.prikazForme = this.prikazForme.bind(this);
        this.noviEmail = this.noviEmail.bind(this);
        this.url = "http://127.0.0.1:8000/";
    }

    izbaciClana() {
        axios
            .delete(this.url + "korisnik/izbrisi?id=" + this.state.korisnik.id)
            .then((res) => {});
    }
    izmeniEmail(e) {
        e.preventDefault();
        axios
            .put(this.url + "korisnik/izmeni", {
                email_korisnik: this.state.noviEmail,
                id: this.state.korisnik.id,
            })
            .then((res) => {
                let korisnik = this.state.korisnik;
                korisnik.email_korisnik = this.state.noviEmail;
                this.setState({ korisnik: korisnik });
            });
    }

    formaIzmeniEmail() {
        this.setState({ formaNoviEmail: !this.state.formaNoviEmail });
    }
    noviEmail(e) {
        this.setState({ noviEmail: e.target.value });
    }

    prikazForme() {
        if (this.state.formaNoviEmail) {
            return (
                <form onSubmit={this.izmeniEmail}>
                    <div className="col">
                        <input
                            onChange={this.noviEmail}
                            type="text"
                            className="form-control"
                            placeholder="Unesite novi email"
                        ></input>

                        <input
                            hidden={true}
                            type="submit"
                            className="form-control"
                            value=""
                        ></input>
                    </div>
                </form>
            );
        }
        return this.state.korisnik.email_korisnik;
    }

    render() {
        let korisnik = this.state.korisnik;
        let ime = korisnik.ime_korisnik;
        let email = korisnik.email_korisnik;
        return (
            <div className="container">
                <div className="row justify-content-center align-items-center h6 border-top">
                    <div className="col-2">{ime}</div>
                    <div className="col-2">{this.prikazForme()}</div>

                    <div className="col-2">
                        <button
                            onClick={this.izbaciClana}
                            className=" btn btn-danger btn-sm"
                        >
                            IZBACI CLANA
                        </button>
                    </div>
                    <div className="col-2">
                        <button
                            onClick={this.formaIzmeniEmail}
                            className=" btn btn-warning btn-sm"
                        >
                            IZMENI EMAIL
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById("korisnik")) {
    ReactDOM.render(<Korisnik />, document.getElementById("korisnik"));
}
