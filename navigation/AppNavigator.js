import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SignInScreen from "../screens/SignInScreen";
import DashboardScreen from "../screens/DashboardScreen";
import TransactionDetailScreen from "../screens/TransactionDetailScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen name="SignIn">
            {(props) => <SignInScreen {...props} setAuth={setIsAuthenticated} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Dashboard">
              {(props) => <DashboardScreen {...props} setAuth={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
            <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
