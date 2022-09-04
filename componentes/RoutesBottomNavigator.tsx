import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../telas/Home";
import AdicionarPacoteStep1 from "../telas/AdicionarPacotes/AdicionarPacoteStep1";
import Feather from 'react-native-vector-icons/Feather';
import LogoTitle from "./LogoTitle";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {

    return (
        <Tab.Navigator screenOptions={{
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTintColor: '#ffffff',
            tabBarInactiveTintColor: '#FFF',
            tabBarStyle: {
                //borderTopWidth: 0,
                //backgroundColor: '#52C5EE',
                elevation: 0,
                backgroundColor: 'transparent',
                position: 'absolute',
                paddingBottom: 5,
            },
            headerTitle: (props) => <LogoTitle {...props} />
            
        }}>
            <Tab.Screen name="Inicio" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Feather name="home" color={color} size={size} />
                )
            }}/>
            <Tab.Screen name="Minhas Mercadorias" component={AdicionarPacoteStep1} options={{
                tabBarIcon: ({color, size}) => (
                    <Feather name="package" color={color} size={size} />
                ),
            }}/>
        </Tab.Navigator>
    );
}
