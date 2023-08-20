import React, { Component } from "react";

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "Pratham" };
        console.log("constructor called.");
    }

    static getDerivedStateFromProps(props, state) {
        if (props.name !== state.name) {
            return { name: props.name };
        }
        console.log("static getDerivedStateFromProps()");
        return null;
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: "Hello World!",
            });
        }, 2000);
        console.log("componentDidMount()");
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("prevProps", prevProps, this.props);
        console.log("prevState", prevState, this.state);
        console.log("snapshot", snapshot);
        console.log("componentDidUpdate()");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount()");
    }
    showMessage() {
        // this.setState({
        //     name: "from onClick!",
        // });
        alert("Hello from onClick event!");
    }
    render() {
        return (
            <div onClick={this.showMessage}>
                Title: {this.props.name}
                <br />
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
}
export default Title;
