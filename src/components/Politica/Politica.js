import React from "react";
import jsonData from '../../jsonData/news.json';
import Article from "../Article";
import Image from "../Image";
import Title from "../Title";

export default class Politica extends React.Component {
    constructor(props) {
        super(props)
    }

    newNews(data) {
        const { newsUpdated } = this.props;
        newsUpdated(data)
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    render() {
        const { newValue } = this.props;

        return (
            <div className="w-100 flex-grow-1 politicaMain">
                <div className="h1 text-warning text-center">
                    Política
                    {newValue}
                </div>
                {jsonData.news.politica.map((news,index) => {
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
                            <button className="btn btn-primary" onClick={() => this.newNews(jsonData.news.politica[index])}>Ver Mais</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}