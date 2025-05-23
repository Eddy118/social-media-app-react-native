import {useState} from 'react'
import MainNavigation from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import * as Sentry from "@sentry/react-native";
import {LogBox} from 'react-native';
import ErrorBoundary from './src/components/molecules/error-Boundary'
import Toast from "react-native-toast-message";
import 'react-native-get-random-values';
import {ThemeContext} from "./src/theme/app-theme/theme-hook.tsx";
import {DarkTheme, LightTheme, ThemeType} from "./src/theme/app-theme";

const App = () => {

    const [theme, setTheme] = useState<ThemeType>(DarkTheme);

    const toggleTheme = () => {
        setTheme((prev) => (prev === LightTheme ? DarkTheme : LightTheme));
    };

    Sentry.init({
        dsn: "__DSN__",

        tracesSampleRate: 1.0,
        enableNative: false
    });

    Sentry.init({
        dsn: process.env.Sentry_Key,

        // Configure Session Replay
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1,
        integrations: [Sentry.mobileReplayIntegration()],
    });
    LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
    LogBox.ignoreAllLogs();

    return (
        <ThemeContext.Provider value={{ theme ,  toggleTheme }}>
        <ErrorBoundary>
            <Provider store={store}>
                <MainNavigation />
            </Provider>
            <Toast />
        </ErrorBoundary>
        </ThemeContext.Provider>


    );
};
export default Sentry.wrap(App);