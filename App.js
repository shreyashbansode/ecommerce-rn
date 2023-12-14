import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/Login';
import Register from './component/Register'
import Tabs from './component/Tabs';
import ProductDetail from './component/ProductDetail';
import Cart from './component/Cart';
import Order from './component/Order';

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name='tab' component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name='detail' component={ProductDetail} options={{ headerShown: false, }} />
        <Stack.Screen name='cart' component={Cart} options={{ headerShown: false }} />
        <Stack.Screen name='order' component={Order} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App