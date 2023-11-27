import { Component } from 'react';
import Page404 from '../pages/page404';

class ErrorGuard extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <Page404
          clearError={() => this.setState({ error: null, errorInfo: null })}
        />
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorGuard;
