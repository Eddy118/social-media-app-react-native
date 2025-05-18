import MainNavigation from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
const App = () => {
    return (
        <Provider store={store}>
            <MainNavigation />
        </Provider>

    );
};
export default App;