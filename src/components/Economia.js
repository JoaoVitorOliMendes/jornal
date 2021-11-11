import React from "react";
import jsonData from '../jsonData/news.json';
import Article from "./Article";
import Image from "./Image";
import Title from "./Title";

export default class Economia extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="w-100 flex-grow-1 economiaMain">
                <div className="h1 text-success text-center">
                    Economia
                </div>
                {jsonData.news.economy.map((news,index) => {
                    return(
                        <div className="container d-flex flex-column align-items-center p-5" key={index}>
                            <Title title={news.title} />
                            <div className="row m-4">
                                <div className="col-lg-6">
                                    <Article article={news.article} />
                                </div>
                                <div className="col-lg-6">
                                    <Image img={news.img} />
                                </div>
                            </div>
                            <button className="btn btn-primary">Ver Mais</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}