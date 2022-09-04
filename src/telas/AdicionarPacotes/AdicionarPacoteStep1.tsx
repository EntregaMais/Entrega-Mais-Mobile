import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, TextInput, Pressable} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons as Icon} from '@expo/vector-icons';
import Button from "../../componentes/Button";
import { Picker } from '@react-native-picker/picker';
import { estadosJSON } from '../../mocks/Estados';
import { cidadesJSON} from '../../mocks/Cidades';
import { color } from "@rneui/base";

const Separator = () => (
	<View style={styles.separator}>
	</View>
);

export default function AdicionarPacoteStep1({navigation}: any) {

	const [estadoSelecionado, setEstadoSelecionado] = useState();
	const [cidadeSelecionado, setCidadeSelecionado] = useState();

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

				<View style={{ flexDirection: "row", marginTop: 50}}>
					<Icon style={styles.iconStep} name={"caret-down-circle"} size={15} color="#FFF" />
					<Separator />
					<Icon style={styles.iconStep} name={"radio-button-off-outline"} size={15} color="#dcdedc" />
					<Separator />
					<Icon style={styles.iconStep} name={"radio-button-off-outline"} size={15} color="#dcdedc" />
				</View>
				<Text style={styles.textHeader}>
					NOVO PEDIDO
				</Text>

				<View >
					<TextInput
						style={styles.input}
						placeholder='Fornecedor'
						placeholderTextColor={'white'}
						autoCorrect={false}
						//value={}
						onChangeText={ (text) => (text)}
					/>
					<TextInput
						style={styles.input}
						placeholder='Tel Fornecedor (DDD)'
						placeholderTextColor={'white'}
						autoCorrect={false}
						//value={}
						onChangeText={ (text) => (text)}
					/>
					<TextInput
						style={styles.input}
						placeholder='Cliente'
						placeholderTextColor={'white'}
						autoCorrect={false}
						//value={}
						onChangeText={ (text) => (text)}
					/>
					<TextInput
						style={styles.input}
						placeholder='Tel Cliente (DDD)'
						placeholderTextColor={'white'}
						autoCorrect={false}
						//value={}
						onChangeText={ (text) => (text)}
					/>

					<Text style={styles.textStyle}>ESTADO</Text>

					<View style={styles.pickerborder}>
						<Picker
							selectedValue={estadoSelecionado}
							style={styles.picker}
							onValueChange={(itemValue, itemIndex) =>
								setEstadoSelecionado(itemValue)
							}>
							{estadosJSON.map((estado) => {
								return (
									<Picker.Item style={styles.pickerItem} label={estado.Nome} value={estado.Sigla} key={estado.ID} />
								);
							})}
						</Picker>
					</View>

					<Text style={styles.textStyle}>CIDADE</Text>
					<View style={styles.pickerborder}>
						<Picker
							selectedValue={cidadeSelecionado}
							style={styles.picker}
							onValueChange={(itemValue, itemIndex) =>
								setCidadeSelecionado(itemValue)
							}>
							{cidadesJSON.map((cidade) => {
								return (
									<Picker.Item style={styles.pickerItem} label={cidade.Nome} value={cidade.Nome} key={cidade.ID}/>
								);
							})}
						</Picker>
					</View>

					<View style={{margin: 5, marginTop: 15}}>
						<TouchableOpacity style={styles.btnProsseguir}  onPress={() => navigation.navigate('AdicionarPacoteStep2')}>
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
		marginBottom: 35,
		fontFamily: 'Insanibu'
	},
	textStyle: {
		color: '#FFF',
		fontSize: 15,
		fontWeight: 'bold',
	},
	pickerborder: {
		borderRadius: 0,
		borderBottomWidth: 2,
		borderColor: '#FFF',
		marginBottom: 10
	  },
	picker: {
		color: '#FFF',
		fontSize: 15,
		fontWeight: 'bold',
		backgroundColor: 'rgba(86, 203, 242, 1)',
	},
	pickerItem: {
		color: '#FFF',
		backgroundColor: 'rgba(86, 203, 242, 1)',
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
		width: 100,
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