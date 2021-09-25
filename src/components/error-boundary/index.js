//This component must remain class component until React releases Hook implementation for componentDidCatch

import React, { Component } from 'react';

import Error404 from '../../pages/error';

class ErrorBoundary extends Component {

    state = {
        error: null,
        errorInfo: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <Error404 />
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
