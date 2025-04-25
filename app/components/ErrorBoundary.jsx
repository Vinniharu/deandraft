"use client";

import { useState } from 'react';

export default function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  if (typeof window !== 'undefined') {
    window.onerror = (message, source, lineno, colno, error) => {
      console.error("Caught by ErrorBoundary:", { message, source, lineno, colno, error });
      setError({ message, source, lineno, colno, errorObject: error });
      setHasError(true);
      return true; // Prevents default error handling
    };
  }

  if (hasError) {
    return (
      <div className="p-8 bg-red-50 border border-red-200 rounded-lg">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
        <div className="bg-white p-4 rounded shadow mb-4 overflow-auto">
          <pre className="text-sm whitespace-pre-wrap">
            {error ? JSON.stringify(error, null, 2) : 'Unknown error'}
          </pre>
        </div>
        <button
          onClick={() => {
            setHasError(false);
            setError(null);
          }}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return children;
} 