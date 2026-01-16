import { Component, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    // In production, you could send this to an error tracking service
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white p-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle size={32} className="text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">
              Something went wrong
            </h1>
            <p className="text-gray-500 mb-6">
              An unexpected error occurred. Please try refreshing the page.
            </p>
            {import.meta.env.DEV && this.state.error && (
              <pre className="text-left text-xs bg-gray-100 p-4 rounded-lg mb-6 overflow-auto max-h-40 text-red-600">
                {this.state.error.message}
              </pre>
            )}
            <div className="flex gap-3 justify-center">
              <Button
                onClick={() => window.location.reload()}
                className="bg-black hover:bg-gray-900 text-white"
              >
                <RefreshCw size={16} className="mr-2" />
                Refresh Page
              </Button>
              <Button
                onClick={this.handleRetry}
                variant="secondary"
              >
                Try Again
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
