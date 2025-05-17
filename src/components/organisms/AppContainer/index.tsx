import { ReactNode } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Styles from "./AppContainerStyles";

type AppContainerProps = {
    children: ReactNode;
};

const AppContainer = ({ children }: AppContainerProps) => {
    return (
        <SafeAreaView style={Styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // adjust as needed
            >
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default AppContainer;