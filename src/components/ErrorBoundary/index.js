import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  // Update the state if any error ocurs
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Registrar error en servicio de errores
    this.setState((prevSate) =>
      this.setState(...prevSate, { errorMessage: error })
    );
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return <h1>{this.state.errorMessage}</h1>;
  }
}

export { ErrorBoundary };
