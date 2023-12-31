import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import store from './component/Redux/store'
import { Provider } from 'react-redux'

const AppReducer = () => (

    <Provider store={store}>
        <App></App>
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppReducer);
