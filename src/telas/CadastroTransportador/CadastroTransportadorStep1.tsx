import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, Pressable, Animated} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons as Icon} from '@expo/vector-icons';
import Button from "../../componentes/Button";
import NavegationHideOnScroll from "../../componentes/NavegationHideOnScroll";
import LinearGradientBackground from "../../componentes/LinearGradient";
import {ScreenContainer, BodyText, TextInput, HeaderText } from "../../styled";

const Separator = () => (
	<View style={styles.separator}/>
);

export default function CadastroTransportadorStep1({navigation}: any) {


	const [empresa, setEmpresa] = useState('');
	const [senha, setSenha] = useState('');

	return (
		<ScreenContainer>
			<LinearGradientBackground/>
			<StatusBar style="light" />

			<NavegationHideOnScroll>

				<View style={{ flexDirection: "row", marginTop: 25 }}>
					<Icon style={styles.iconStep} name={"caret-down-circle"} size={15} color="#FFF" />
					<Separator />
					<Icon style={styles.iconStep} name={"radio-button-off-outline"} size={15} color="#c4c4c4" />
				</View>

				<HeaderText>Transportador</HeaderText>

				<View >
					<TextInput
						placeholder='Empresa'
						placeholderTextColor={'white'}
						autoCorrect={false}
						value={empresa}
						onChangeText={ (text: string) => setEmpresa(text)}
					/>
					<TextInput
						placeholder='Nome do Responsável'
						placeholderTextColor={'white'}
						autoCorrect={false}
						//value={}
						onChangeText={ (text: string) => (text)}
					/>
					<TextInput
						placeholder='CPF/CNPJ'
						placeholderTextColor={'white'}
						autoCorrect={false}
						//value={}
						onChangeText={ (text: string) => (text)}
					/>
					<TextInput
						placeholder='Setor'
						placeholderTextColor={'white'}
						autoCorrect={false}
						//value={}
						onChangeText={ (text: string) => (text)}
					/>
					<TextInput
						placeholder='Vaga'
						placeholderTextColor={'white'}
						autoCorrect={false}
						//value={}
						onChangeText={ (text: string) => (text)}
					/>

					<BodyText>Cobra taxa de embarque?</BodyText>
					<Button></Button>

					<TextInput
						placeholder='Chave do Pix'
						placeholderTextColor={'white'}
						autoCorrect={false}
						//value={}
						onChangeText={ (text: string) => (text)}
					/>

					<View>
						<TouchableOpacity style={styles.btnProsseguir}  onPress={() => navigation.navigate('CadastroTransportadorStep2', {paramKey: empresa})}>
							<Text style={styles.textProsseguir}>Prosseguir <Icon name={"chevron-forward-outline"} size={14} color="#00BFFF" /></Text>
						</TouchableOpacity>
					</View>

				</View>
			</NavegationHideOnScroll>
		</ScreenContainer>
	);
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems: 'center',
	  justifyContent: 'center',
	  backgroundColor: 'rgba(86, 203, 242, 1)',
	  paddingTop: 35
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
		marginBottom: 35,
		fontFamily: 'Insanibu'
	},
	textStyle: {
		color: '#FFF',
		fontSize: 15,
		fontWeight: 'bold'
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
		borderBottomColor: '#c4c4c4',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	iconStep: {
		marginTop: 10,
		marginLeft: 1,
		marginRight: 1,
	}
});