import React, { Component } from "react";
import ReactDOM from "react-dom";
import Korisnik from "./Korisnik";

export default class Grupa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grupa: this.props.grupa,
            korisnici: [],
            prikazi: false,
            uclanjenje: false,
            novoIme: "",
            noviEmail: "",
        };
        this.url = "http://127.0.0.1:8000/";
        this.prikaziGrupu = this.prikaziGrupu.bind(this);
        this.uclanjenje = this.uclanjenje.bind(this);
        this.dodajKorisnika = this.dodajKorisnika.bind(this);
        this.noviEmail = this.noviEmail.bind(this);
        this.novoIme = this.novoIme.bind(this);
        this.ucitajKorisnike();
    }

    ucitajKorisnike() {
        axios
            .get(this.url + "korisnik/get?id=" + this.state.grupa.id)
            .then((res) => {
                const korisnici = res.data.korisnici;
                this.setState({ korisnici });
            });
    }

    prikaziClanove() {
        if (this.state.prikazi) {
            if (!this.state.korisnici.length)
                return (
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-6">
                                NE POSTOJE KORISNICI ZA OVU GRUPU, BUDITE PRVI
                                DA SE UCLANITE
                            </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
                );
            return this.state.korisnici.map((korisnik) => {
                return <Korisnik key={korisnik.id} korisnik={korisnik} />;
            });
        }
    }
    prikaziGrupu() {
        this.setState({ prikazi: !this.state.prikazi });
        this.setState({ uclanjenje: false });
    }

    dodajKorisnika(e) {
        e.preventDefault();
        axios
            .post(this.url + "korisnik/dodaj", {
                ime_korisnik: this.state.novoIme,
                email_korisnik: this.state.noviEmail,
                grupa_id: this.state.grupa.id,
            })
            .then((res) => {
                let korisnik = {
                    id: res.data.id,
                    ime_korisnik: this.state.novoIme,
                    email_korisnik: this.state.noviEmail,
                    grupa_id: this.state.grupa.id,
                };

                let korisnici = this.state.korisnici;

                korisnici.push(korisnik);
                console.log(this.state.korisnici);

                this.setState({ korisnici: korisnici });
                console.log(this.state.korisnici);
            });
    }

    novoIme(e) {
        this.setState({ novoIme: e.target.value });
    }

    noviEmail(e) {
        this.setState({ noviEmail: e.target.value });
    }

    prikaziFormu() {
        if (this.state.uclanjenje) {
            return (
                <form onSubmit={this.dodajKorisnika}>
                    <div className="row justify-content-center">
                        <div className="col">
                            <input
                                onChange={this.noviEmail}
                                type="email"
                                className="form-control"
                                placeholder="Unesite email"
                            ></input>
                            <small className="white-text form-text ">
                                Unesite Vas email ovde..
                            </small>
                        </div>
                        <div className="col">
                            <input
                                onChange={this.novoIme}
                                type="text"
                                className="form-control"
                                placeholder="Unesite ime"
                            ></input>
                            <small className="white-text form-text ">
                                Unesite Vase ime ovde..
                            </small>
                        </div>
                        <div className="col">
                            <input
                                type="submit"
                                className="form-control"
                                value="Uclani se!"
                            ></input>
                        </div>
                    </div>
                </form>
            );
        }
    }

    uclanjenje() {
        this.setState({ uclanjenje: !this.state.uclanjenje });
        this.setState({ prikazi: false });
    }

    render() {
        let naziv = this.state.grupa.naziv_grupa;
        let tip = this.state.grupa.tip_grupa;
        let broj_prijavljenih = this.state.grupa.broj_prijavljenih;

        return (
            <div className="container">
                <div className="row justify-content-center rounded bg-info h5">
                    <div className="col-2">{naziv}</div>
                    <div className="col-2">{tip}</div>
                    <div className="col-2">{broj_prijavljenih}</div>
                    <div className="col-2">
                        <button
                            onClick={this.prikaziGrupu}
                            className="btn btn-block btn-secondary "
                        >
                            Prikazi clanove
                        </button>
                    </div>
                    <div className="col-2">
                        <button
                            onClick={this.uclanjenje}
                            className="btn btn-block btn-primary"
                        >
                            UCLANI SE
                        </button>
                    </div>
                </div>
                <div className="row">{this.prikaziFormu()}</div>
                <div className="row">{this.prikaziClanove()}</div>
            </div>
        );
    }
}

if (document.getElementById("grupa")) {
    ReactDOM.render(<Grupa />, document.getElementById("grupa"));
}
