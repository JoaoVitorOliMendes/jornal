import React from "react";
import jsonData from '../jsonData/news.json';

export default class Title extends React.Component {
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
            <div className="h1 text-center text-dark fw-bold">
                {this.props.title}
            </div>
        )
    }
}