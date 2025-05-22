import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SCREENS} from '../constants';
import Home from '../screens/home';
import Login from '../screens/auth/login';
import Signup from "../screens/auth/signup";
import Search from "../screens/search";
import SearchResults from "../screens/search-results";
import Splash from "../screens/splash";
import Profile from "../screens/profile";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name={SCREENS.SPLASH} component={Splash} />
                <Stack.Screen name={SCREENS.LOGIN} component={Login} />
                <Stack.Screen name={SCREENS.SIGNUP} component={Signup} />
                <Stack.Screen name={SCREENS.HOME} component={Home} />
                <Stack.Screen name={SCREENS.SEARCH_RESULTS} component={SearchResults} />
                <Stack.Screen name={SCREENS.PROFILE} component={Profile} />
                <Stack.Screen
                    name={SCREENS.SEARCH}
                    component={Search}
                    options={{
                        presentation: 'modal',
                        animation: 'slide_from_bottom',
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;