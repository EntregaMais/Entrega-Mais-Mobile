import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, TextInput, Pressable} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons as Icon} from '@expo/vector-icons';
import Button from "../componentes/Button";

const Separator = () => (
    <View style={styles.separator}>
    </View>
);

export default function FinalizarCadastro({navigation}: any){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [ConfirmSenha, setSenhaConfirm] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [hidePassword2, setHidePassword2] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['rgba(31, 125, 188, 1)', 'transparent']}
                style={styles.background}
            />
            <StatusBar style="auto" />
            <ScrollView
                contentContainerStyle={{
                    paddingTop: 50,
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                <View style={{ flexDirection: "row", marginTop: 50 }}>
                    <Icon style={styles.iconStep} name={"checkmark-circle"} size={15} color="#eae900" />
                    <Separator />
                    <Icon style={styles.iconStep} name={"caret-down-circle"} size={15} color="#FFF" />
                </View>

                <Text style={styles.textHeader}>
                    Finalizar Cadastro
                </Text>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        placeholderTextColor={'white'}
                        autoCorrect={false}
                        value={email}
                        onChangeText={ (text) => setEmail(text)}
                        autoCapitalize="none"
                    />
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='Senha'
                            secureTextEntry={hidePassword}
                            value={senha}
                            placeholderTextColor={'white'}
                            autoCorrect={false}
                            onChangeText={ (text) => setSenha(text)} 
                            autoCapitalize="none"                   
                        />
                        <TouchableOpacity style={styles.icon} onPress={ () => setHidePassword(!hidePassword)}>
                            { hidePassword ?
                                <Icon name={"eye"} size={20} color="#FFF" />
                                :
                                <Icon name={"eye-off"} size={20} color="#FFF" />
                            }    
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='Confirmar Senha'
                            secureTextEntry={hidePassword2}
                            value={ConfirmSenha}
                            placeholderTextColor={'white'}
                            autoCorrect={false}
                            onChangeText={ (text) => setSenhaConfirm(text)}
                            autoCapitalize="none"
                        />
                        <TouchableOpacity style={styles.icon} onPress={ () => setHidePassword2(!hidePassword2)}>
                            { hidePassword2 ?
                                <Icon name={"eye"} size={20} color="#FFF" />
                                :
                                <Icon name={"eye-off"} size={20} color="#FFF" />
                            }    
                        </TouchableOpacity> 
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnConcluir}>
                            <Text style={styles.textConcluir}>Concluir</Text>
                        </TouchableOpacity>
                    </View>

                </View>    
            </ScrollView>
        
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(86, 203, 242, 1)'
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300
    },
    textHeader: {
        textAlign: 'left',
        color: '#FFF',
        fontSize: 25,
        fontFamily: 'Insanibu',
        marginTop: 10,
        marginBottom: 30
    },
    textStyle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        //alignItems: 'center'
    },
    input: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15,
        width: 300,
        borderBottomWidth: 1,
        backgroundColor: 'transparent',
        borderBottomColor: '#FFF',
        marginBottom: 30,
        padding: 2,        
    },
    icon: {
        height: 20,
        marginLeft: -18,       
    },
    btnConcluir:{
        backgroundColor: '#FFF',
        width: '100%',
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#52006A',
        marginBottom: 10
    },
    textConcluir: {
        fontWeight: 'bold',
        color: '#00BFFF',
    },
    separator: {
        flexDirection: "row",
        marginVertical: 20,
        width: 150,
        borderBottomColor: '#FFF',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    iconStep: {
        marginTop: 10,
        marginLeft: 1,
        marginRight: 1,
    }
});