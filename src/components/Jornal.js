import React from "react";
import Economia from "./Economia";
import { Politica } from "./Politica/index";
import Saude from "./Saude";

export default class Jornal extends React.Component {
    constructor(props) {
        super(props)
        this.state = { aba: 1 }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    mudaAba(novaAba) {
        this.setState({
            aba: novaAba
        })
    }

    renderConteudo(aba) {
        switch(aba) {
            case 1: 
                return <Saude />
            case 2 :
                return <Politica />
            case 3 :
                return <Economia />
        }
    }

    render() {
        const { aba } = this.state
        return (
            <div className="container-fluid p-0 d-flex align-items-center flex-column main">
                <div className="btn-group py-3" role="group">
                    <button onClick={() => this.mudaAba(1)} className="btn btn-danger">Saude</button>
                    <button onClick={() => this.mudaAba(2)} className="btn btn-warning">Política</button>
                    <button onClick={() => this.mudaAba(3)} className="btn btn-success">Economia</button>
                </div>
                {this.renderConteudo(aba)}
            </div>
        )
    }
}