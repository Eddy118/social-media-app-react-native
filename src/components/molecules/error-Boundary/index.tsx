import * as Sentry from "@sentry/react-native";
import React from "react";
import ErrorFallback from "../error-fallback";

type ErrorBoundaryProps = {
    children: React.ReactNode;
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
    return (
        <Sentry.ErrorBoundary fallback={<ErrorFallback />}>
            {children}
        </Sentry.ErrorBoundary>
    );
};

export default ErrorBoundary;