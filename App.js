import * as React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import {
    MD3LightTheme as DefaultTheme,
    PaperProvider,
} from "react-native-paper";
import {
    FontAwesome,
    Ionicons
} from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import TransactionList from "./screens/TransactionList";
import TransactionDetail from "./screens/TransactionDetail";
import Summary from "./screens/Summary";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen
                        name="Transactions"
                        options={{
                            tabBarIcon: () => (
                                <FontAwesome name="th-list" size={24} color="black" />
                            ),
                        }}
                    >
                        {() => (
                            <Stack.Navigator>
                                <Stack.Screen
                                    name="TransactionList"
                                    component={TransactionList}
                                    options={{ title: 'Transaction List' }}
                                />
                                <Stack.Screen
                                    name="TransactionDetail"
                                    component={TransactionDetail}
                                    options={{ title: 'Transaction Detail' }}
                                />
                            </Stack.Navigator>
                        )}
                    </Tab.Screen>

                    <Tab.Screen
                        name="Summary"
                        options={{
                            tabBarIcon: () => (
                                <Ionicons name="information-circle-sharp" size={24} color="black" />
                            ),
                        }}
                        component={Summary}
                    />

                </Tab.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

AppRegistry.registerComponent(appName, () => App);
