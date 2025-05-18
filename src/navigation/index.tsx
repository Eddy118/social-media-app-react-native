import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS} from '../constants';
import Home from '../screens/home';
import Login from '../screens/auth/login';
import Signup from "../screens/auth/signup";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name={SCREENS.LOGIN} component={Login} />
                <Stack.Screen name={SCREENS.SIGNUP} component={Signup} />
                <Stack.Screen name={SCREENS.HOME} component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;