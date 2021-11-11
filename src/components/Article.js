import React from "react";
import jsonData from '../jsonData/news.json';

export default class Article extends React.Component {
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
            <div className="text-center text-dark">
                {this.props.article}
            </div>
        )
    }
}