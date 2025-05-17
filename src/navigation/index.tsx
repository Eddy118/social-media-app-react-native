import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS} from '../constants';
import Home from '../screens/home';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name={SCREENS.HOME} component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;