import React, { useRef, useState } from "react";
import { Modal, SafeAreaView, TouchableOpacity, View, StyleSheet, Animated, Easing } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';
import { Text } from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

type PopupProps = {
	children: React.ReactNode;
}

export default function PopupMenu(props: PopupProps) {

    const [visible, setVisible] = useState(false);
    const scale = useRef(new Animated.Value(0)).current;

    const navigation = useNavigation();

    const options = [
        {
            title: 'Usuário',
            icon: "person-outline",
            action: () => alert('Usuário'),
        },
        {
            title: 'Sair',
            icon: "exit-outline",
            action: () => navigation.goBack(),
        },
    ] as const;

    function resizeBox(to: any) {
        to === 1 && setVisible(true);
        Animated.timing(scale,{
            toValue:to,
            useNativeDriver: true,
            duration: 200,
            easing: Easing.linear,
        }).start(() => to === 0 && setVisible(false));
    }

    return (
        <View>
            <TouchableOpacity onPress={() => resizeBox(1)} style={{marginLeft: 10}}>
				<Icon name="menu-sharp" size={35} color="#FFF"></Icon>
			</TouchableOpacity>
            <Modal transparent visible={visible}>
                <SafeAreaView 
                    style={{flex: 1}} 
                    onTouchStart={() => resizeBox(0)} >
                    <Animated.View style={[styles.popup,
                        {
                            transform: [{ scale}],
                        },
                    ]}>
                        {options.map((op, i) =>(
                            <TouchableOpacity style={[styles.option, {borderBottomWidth: i === options.length - 1 ? 0: 1}]}
                             key={i} onPress={op.action}>
                                <Icon name={(op.icon)} size={26} color={'#FFF'}/>
                                <Text style={{color: '#FFF', fontWeight: 'bold'}}>{op.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </Animated.View>

                </SafeAreaView>
            </Modal>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    popup: {
        borderRadius: 8,
        borderColor: '#FFF',
        borderWidth: 1,
        backgroundColor: 'transparent',
        paddingHorizontal: 15,
        position: 'absolute',
        top: 45,
        left: 4
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomColor: '#ccc'
    }
})