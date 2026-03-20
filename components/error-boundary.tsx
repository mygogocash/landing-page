"use client";

import { Component, ReactNode } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    // You can log to an error reporting service here
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center bg-white p-8">
          <div className="max-w-md text-center">
            <AlertCircle className="mx-auto h-16 w-16 text-red-500" />
            <h2 className="mt-4 text-2xl font-bold text-[#161d1a]">
              เกิดข้อผิดพลาด
            </h2>
            <p className="mt-2 text-base text-[#52525b]">
              ขออภัย เกิดข้อผิดพลาดที่ไม่คาดคิด กรุณาลองใหม่อีกครั้ง
            </p>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-[#71717a]">
                  รายละเอียดข้อผิดพลาด
                </summary>
                <pre className="mt-2 overflow-auto rounded bg-[#f4f4f5] p-4 text-xs text-[#161d1a]">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <button
              onClick={this.handleReset}
              className="btn btn-primary mt-6 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-bold text-white shadow-lg"
            >
              <RefreshCw className="h-5 w-5" />
              <span>ลองใหม่อีกครั้ง</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
