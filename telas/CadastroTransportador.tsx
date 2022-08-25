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


export default function Cadastro({navigation}: any) {

    const [currentPosition, setCurrentPosition] = useState(1);
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
                    paddingTop: 120,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    
                <Text style={styles.textHeader}>
                    TRANSPORTADOR
                </Text>
                <View style={{ flexDirection: "row" }}>
                    <Icon style={styles.iconStep} name={"caret-down-circle"} size={15} color="#FFF" />
                    <Separator />
                    <Icon style={styles.iconStep} name={"radio-button-off-outline"} size={15} color="#dcdedc" />
                </View>   
                <View >
                    <TextInput
                        style={styles.input}
                        placeholder='Empresa'
                        placeholderTextColor={'white'}
                        autoCorrect={false}
                        //value={}
                        onChangeText={ (text) => (text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Nome do Responsável'
                        placeholderTextColor={'white'}
                        autoCorrect={false}
                        //value={}
                        onChangeText={ (text) => (text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='CPF/CNPJ'
                        placeholderTextColor={'white'}
                        autoCorrect={false}
                        //value={}
                        onChangeText={ (text) => (text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Setor'
                        placeholderTextColor={'white'}
                        autoCorrect={false}
                        //value={}
                        onChangeText={ (text) => (text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Vaga'
                        placeholderTextColor={'white'}
                        autoCorrect={false}
                        //value={}
                        onChangeText={ (text) => (text)}
                    />
                    
                    <Text style={styles.textStyle}>Cobra taxa de embarque?</Text>
                    <Button></Button>
                    
                    <TextInput
                        style={styles.input}
                        placeholder='Chave do Pix'
                        placeholderTextColor={'white'}
                        autoCorrect={false}
                        //value={}
                        onChangeText={ (text) => (text)}
                    />

                    <View>
                        <TouchableOpacity style={styles.btnProsseguir}  onPress={() => navigation.navigate('FinalizarCadastro')}>
                            <Text style={styles.textProsseguir}>Prosseguir <Icon name={"chevron-forward-outline"} size={14} color="#00BFFF" /></Text>
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
    image: {
      width: 200,
      height: 80,
      marginBottom: 40
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300
    },
    textHeader: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
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
    btnProsseguir:{
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
    textProsseguir: {
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
    separator2: {
        flexDirection: "row",
        marginVertical: 20,
        width: 80,
        borderBottomColor: '#dcdedc',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    iconStep: {
        marginTop: 10,
        marginLeft: 1,
        marginRight: 1,
    }
});