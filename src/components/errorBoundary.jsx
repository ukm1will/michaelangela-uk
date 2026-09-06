import React, {Component} from 'react';
import Error from "./error";

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            message: ''
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            message: error.message
        }
    }

    render() {
        if(this.state.hasError) {
            return <Error error={this.state.message}></Error>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;