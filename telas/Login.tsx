import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import 'react-native-gesture-handler';
import { Button, color } from '@rneui/base';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { MaterialCommunityIcons as Icon} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const Separator = () => (
    <View style={styles.separator} />
);
  
export default function Login({navigation}: any) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [hidePassword, setHidePassword] = useState(true);  
    const [isChecked, setChecked] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
        <LinearGradient
            colors={['rgba(31, 125, 188, 1)', 'transparent']}
            style={styles.background}
        />
        <StatusBar style="light" />

        <KeyboardAvoidingView>
            <View>
            <Animatable.Image 
                animation='flipInY'
                delay={300}
                resizeMode={'contain'}
                style={styles.image}
                source={require('../assets/nova_logo.png')}
            />
            </View>
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
            <View style={{ flexDirection: "row" }}>
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    secureTextEntry={hidePassword}
                    placeholderTextColor={'white'}
                    autoCorrect={false}
                    value={senha}
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
            <View style={{ flexDirection: "row" }}>
                <Checkbox 
                style={styles.checkbox} 
                value={isChecked} 
                onValueChange={setChecked}
                color={isChecked ? '#00BFFF' : undefined} 
                />
                <Text style={styles.textEsqueceu}>Lembrar senha</Text>
                <TouchableOpacity style={styles.btnEsqueceu}>
                <Text style={styles.textEsqueceu}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btnEntrar} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textEntrar}>Entrar</Text>
            </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Separator />
                <Text style={styles.textSeparator}>ou</Text>
                <Separator />
            </View>          
            <View>
            <TouchableOpacity style={styles.btnCadastro} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.textCadastro}>Cadastre-se</Text>
            </TouchableOpacity>
            </View>
            <View style={{ marginTop: 15 }}>
            <TouchableOpacity style={styles.btnCadastro} onPress={() => navigation.navigate('AdicionarPacoteStep1')}>
                <Text style={styles.textCadastro}>Adicionar Pacotes</Text>
            </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>     
        
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
      width: 300,
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
    input: {
      color: '#FFF',
      fontSize: 15,
      width: 300,
      borderBottomWidth: 1,
      backgroundColor: 'transparent',
      borderBottomColor: '#FFF',
      marginBottom: 15,
      padding: 2,
    },
    btnEsqueceu:{
      height: 40,
      marginBottom: 2,
      marginLeft: 90
    },
    textEsqueceu:{
      color: '#FFF',
      fontSize: 12
    },
    btnEntrar:{
      backgroundColor: '#FFF',
      width: '100%',
      height: 40,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 4,
      shadowColor: '#52006A',
      //marginBottom: 12
    },
    textEntrar: {
      color: '#00BFFF',
    },
    btnCadastro: {
      backgroundColor: 'transparent',
      width: '100%',
      height: 40,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#FFF',
      alignItems: 'center',
      justifyContent: "center",
    },
    textCadastro: {
      color: '#FFF'
    },
    separator: {
      flexDirection: "row",
      marginVertical: 20,
      width: 125,
      marginLeft: 10,
      borderBottomColor: '#FFF',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    checkbox: {
      borderColor: '#00BFFF',
      backgroundColor: '#FFF',
      marginRight: 5,
      width: 16,
      height: 16,
    },
    icon: {
      height: 20,
      marginLeft: -18,       
    },
    textSeparator: {
      fontSize: 12,
      color: '#FFF',
      marginTop: 10,
      marginLeft: 9,
      //marginRight: 1,
  }
});