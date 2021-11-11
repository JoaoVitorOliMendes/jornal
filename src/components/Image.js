import React from "react";

export default class Image extends React.Component {
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
            <img src={this.props.img} className="h-100 w-100" />
        )
    }
}