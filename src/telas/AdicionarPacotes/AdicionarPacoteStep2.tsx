import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, TextInput, Pressable} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons as Icon} from '@expo/vector-icons';
import Button from "../../componentes/Button";
import NumericInput from 'react-native-numeric-input'
import LinearGradientBackground from "../../componentes/LinearGradient";
import { HeaderText, ScreenContainer } from "../../styled";


const Separator = () => (
	<View style={styles.separator}>
	</View>
);

export default function AdicionarPacoteStep2({navigation}: any) {

	const [estadoSelecionado, setEstadoSelecionado] = useState();
	const [cidadeSelecionado, setCidadeSelecionado] = useState();

	return (
		<ScreenContainer>
			<LinearGradientBackground/>
			<StatusBar style="auto" />
			<ScrollView
				contentContainerStyle={{
					paddingTop: 50,
					alignItems: "center",
					justifyContent: "center"
				}}>

				<View style={{ flexDirection: "row", marginTop: 50}}>
					<Icon style={styles.iconStep} name={"checkmark-circle"} size={15} color="#ffff00" />
					<Separator />
					<Icon style={styles.iconStep} name={"caret-down-circle"} size={15} color="#dcdedc" />
					<Separator />
					<Icon style={styles.iconStep} name={"radio-button-off-outline"} size={15} color="#dcdedc" />
				</View>

				<HeaderText> NOVO PEDIDO </HeaderText>
				<View >

					<Text style={styles.textStyle}>Quem paga a taxa?</Text>
					<View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly'}}>
						<TouchableOpacity style={styles.btnTaxa}>
							<Text style={styles.textTaxa}>Fornecedor</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.btnTaxa}>
							<Text style={styles.textTaxa}>Cliente</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.btnTaxa}>
							<Text style={styles.textTaxa}>Não Paga</Text>
						</TouchableOpacity>
					</View >

					<Text style={styles.textStyle}>Fornecedor pagou frete?</Text>
					<Button />

					<TextInput
						style={styles.input}
						placeholder='Observações'
						placeholderTextColor={'white'}
						autoCorrect={false}
						//value={}
						onChangeText={ (text) => (text)}
					/>

					<View>
						<TouchableOpacity style={styles.btnProsseguir}  onPress={() => navigation.navigate('AdicionarPacoteStep3')}>
							<Text style={styles.textProsseguir}>Prosseguir <Icon name={"chevron-forward-outline"} size={14} color="#00BFFF" /></Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</ScreenContainer>
	);
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems: 'center',
	  justifyContent: 'center',
	  backgroundColor: 'rgba(86, 203, 242, 1)'
	},
	contadorPacotes: {
	  flexDirection: "row",
	  margin: 20,
	  alignItems: 'center',
	  justifyContent: 'center',
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
	},
	btnTaxa:{
		backgroundColor: '#FFF',
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		elevation: 4,
		shadowColor: '#52006A',
		minWidth: '25%',
		minHeight: 30,
		marginVertical: 20,

		/*
		marginLeft: 5,
		marginRight: 5,
		minWidth: 50,
		minHeight: 50,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		borderColor: '#FFF',
		backgroundColor: 'transparent',
		borderRadius: 10,
		borderWidth: 1,
		marginTop: 10,
		//elevation: 1,
		shadowColor: '#52006A',
		*/
	},
	textTaxa: {
		fontWeight: 'bold',
		color: '#00BFFF',
		padding: 10
	},
});