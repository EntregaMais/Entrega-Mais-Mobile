import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, Pressable} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons as Icon} from '@expo/vector-icons';
import ButtonEscolha from "../../componentes/ButtonEscolha";
import NumericInput from 'react-native-numeric-input'
import LinearGradientBackground from "../../componentes/LinearGradient";
import { HeaderText, Input } from "../../styled";
import Container from '../../componentes/Container';

const Separator = () => (
	<View style={styles.separator}>
	</View>
);

export default function AdicionarPacoteStep3({navigation}: any) {

	const [estadoSelecionado, setEstadoSelecionado] = useState();
	const [cidadeSelecionado, setCidadeSelecionado] = useState();

	return (
		<Container>
			<ScrollView
				contentContainerStyle={{
					paddingTop: 50,
					alignItems: "center",
					justifyContent: "center"
				}}>

				<View style={{ flexDirection: "row", marginTop: 50}}>
					<Icon style={styles.iconStep} name={"checkmark-circle"} size={15} color="#ffff00" />
					<Separator />
					<Icon style={styles.iconStep} name={"checkmark-circle"} size={15} color="#ffff00" />
					<Separator />
					<Icon style={styles.iconStep} name={"caret-down-circle"} size={15} color="#dcdedc" />
				</View>

				<HeaderText > NOVO PACOTE </HeaderText>
				<View>

					<Text style={styles.textStyle}>Quantidade de Pacotes</Text>

					<View style={styles.contadorPacotes}>
						<NumericInput
							rounded
							minValue={0}
							onChange={value => console.log(value)}
							totalWidth={200}
							totalHeight={60}
							textColor='#FFF'
							iconStyle={{color: '#FFF', fontSize: 30} as any}
							borderColor={'#FFF'}
							rightButtonBackgroundColor='#8CFCA4'
							leftButtonBackgroundColor='#FF6961' />
					</View>

					<View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly'}}>
						<TouchableOpacity style={styles.bnt}>
							<Text style={styles.textStyleBtn}>PP</Text>
							<Text style={styles.textStyleBtn}>R$10</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.bnt}>
							<Text style={styles.textStyleBtn}>P</Text>
							<Text style={styles.textStyleBtn}>R$15</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.bnt}>
							<Text style={styles.textStyleBtn}>M</Text>
							<Text style={styles.textStyleBtn}>R$20</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.bnt}>
							<Text style={styles.textStyleBtn}>G</Text>
							<Text style={styles.textStyleBtn}>R$30</Text>
						</TouchableOpacity>
					</View >

					<View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly'}}>
						<TouchableOpacity style={styles.bnt}>
							<Text style={styles.textStyleBtn}>FARDO</Text>
							<Text style={styles.textStyleBtn}>R$80</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.bnt}>
							<Text style={styles.textStyleBtn}>OUTRO</Text>
							<Text style={styles.textStyleBtn}>VALOR</Text>
						</TouchableOpacity>
					</View >

					<View style={{marginTop: 20}}>
						<TouchableOpacity style={styles.btnProsseguir}  onPress={() => navigation.navigate('Home')}>
							<Text style={styles.textProsseguir}>Prosseguir <Icon name={"chevron-forward-outline"} size={14} color="#00BFFF" /></Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</Container>
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
		color: '#FFF', fontSize: 30,
	  flexDirection: "row",
	  margin: 20,
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	contadorStyle:{
		color: '#FFF',
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
		marginBottom: 100
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
	textStyleBtn: {
		fontFamily: 'Insanibu',
		fontSize: 25,
		color: '#FFF',
		textShadowColor: '#8a8a8a',
		textShadowOffset: { width: 0, height: 1 },
		textShadowRadius: 1,
		paddingHorizontal: 10
	},
	bnt: {
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
	},
});