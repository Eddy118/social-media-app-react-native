import { View, Text } from "react-native";
import Styles from "./styles";
import Label from "../../atoms/label";

const ErrorFallback = () => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.emoji}>😓</Text>
            <Label title={"Something went wrong"} style={Styles.title} />
            <Label
                title={" We’re working to fix the issue. Please try again later."}
                style={Styles.message}
            />
        </View>
    );
};

export default ErrorFallback;