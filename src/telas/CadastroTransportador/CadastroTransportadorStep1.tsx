import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, TextInput, Pressable, Animated} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons as Icon} from '@expo/vector-icons';
import Button from "../../componentes/Button";
import NavegationHideOnScroll from "../../componentes/NavegationHideOnScroll";

const Separator = () => (
	<View style={styles.separator}/>
);

export default function CadastroTransportadorStep1({navigation}: any) {


	const [empresa, setEmpresa] = useState('');
	const [senha, setSenha] = useState('');

	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient
				colors={['rgba(31, 125, 188, 1)', 'transparent']}
				style={styles.background}
			/>
			<StatusBar style="light" />

			<NavegationHideOnScroll>

				<View style={{ flexDirection: "row", marginTop: 25 }}>
					<Icon style={styles.iconStep} name={"caret-down-circle"} size={15} color="#FFF" />
					<Separator />
					<Icon style={styles.iconStep} name={"radio-button-off-outline"} size={15} color="#c4c4c4" />
				</View>
				<Text style={styles.textHeader}>
					TRANSPORTADOR
				</Text>
				<View >
					<TextInput
						style={styles.input}
						placeholder='Empresa'
						placeholderTextColor={'white'}
						autoCorrect={false}
						value={empresa}
						onChangeText={ (text) => setEmpresa(text)}
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
						<TouchableOpacity style={styles.btnProsseguir}  onPress={() => navigation.navigate('CadastroTransportadorStep2', {paramKey: empresa})}>
							<Text style={styles.textProsseguir}>Prosseguir <Icon name={"chevron-forward-outline"} size={14} color="#00BFFF" /></Text>
						</TouchableOpacity>
					</View>

				</View>
			</NavegationHideOnScroll>
		</SafeAreaView>
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
		borderBottomColor: '#c4c4c4',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	iconStep: {
		marginTop: 10,
		marginLeft: 1,
		marginRight: 1,
	}
});