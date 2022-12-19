import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, StyleSheet, Text, View, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, TouchableHighlight, Pressable} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons as Icon} from '@expo/vector-icons';
import ButtonEscolha from "../../componentes/ButtonEscolha";
import NumericInput from 'react-native-numeric-input'
import { HeaderText, Input, Row, Column} from "../../styled";
import Button from '../../componentes/Button';
import Container from '../../componentes/Container';
import { statusJSON } from '../../mocks/statusPedido';
import { pagamentosJSON } from '../../mocks/Pagamentos';
import { Picker } from '@react-native-picker/picker';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Separator = () => (
	<View style={styles.separator}>
	</View>
);

export default function AdicionarPacoteStep2({navigation, route}: any) {

	const [pagaTaxa, setPagaTaxa] = useState('');
	const [pagouFrete, setPagouFrete] = useState(Number);
	const [fornecedor, setFornecedor] = useState(route.params?.fornecedor);
	const [telefoneF, setTelefoneF] = useState(route.params?.telefoneF);
	const [cliente, setCliente] = useState(route.params?.cliente);
	const [telefoneC, setTelefoneC] = useState(route.params?.telefoneC);
	const [emailCli, setEmailCli] = useState(route.params?.emailCli);
	const [statusSelecionado, setStatusSelecionado] = useState();
	const [pagamentoSelecionado, setPagamentoSelecionado] = useState();

	const storeData = async (id:string) => {
		try {
		  await AsyncStorage.setItem('idPedido', id)
		} catch (e) {
		  // saving error
		}
	}
	
	const salvarPedido = () => {

		const body = {
			frete: 100,
			idTransportadora: route.params?.id,
			valorTotal: 100,
			estado: route.params?.estado,
			cidade: route.params?.cidade,
			fornPagouFrete: pagouFrete,
			quemPagaTaxa: pagaTaxa,		
			nmCliente: cliente,
			telefoneCli: telefoneC,
			formaPag: pagamentoSelecionado,
			status: statusSelecionado,
			idVeiculo: 1,
			idDespachante: 1
		}

		axios.post('http://entregamais.brazilsouth.cloudapp.azure.com:7740/api/pedido/salvar', body)
			.then(res => {
				const titulo = (res.data.status) ? "Erro" : "Sucesso";
				Alert.alert(titulo, "Pedido realizado com sucesso!", [ {
					text: "OK", onPress: () => {navigation.navigate('AdicionarPacoteStep3',{
						fornecedor: fornecedor,
						telefoneF: telefoneF,
					} )}
				}]);
				console.log(res.data);
				storeData(JSON.stringify(res.data.id));
			})
			.catch((error) => {
				Alert.alert("Erro", "Erro ao tentar cadastrar pedido");
				console.log(error);
			});
	}

	var [ isPress, setIsPress ] = useState(false);

	var touchProps = {
		activeOpacity: 1,
		underlayColor: 'gray',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
		style: isPress ? styles.btnPress : styles.btnTaxa, // <-- but you can still apply other style changes
		onHideUnderlay: () => setIsPress(true),
		onShowUnderlay: () => setIsPress(false),
		onPress: () => setPagaTaxa("Fornecedor"),                 // <-- "onPress" is apparently required
	};


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
					<Icon style={styles.iconStep} name={"caret-down-circle"} size={15} color="#FFF" />
					<Separator />
					<Icon style={styles.iconStep} name={"radio-button-off-outline"} size={15} color="#dcdedc" />
				</View>
				<HeaderText> NOVO PEDIDO </HeaderText>
				<View >

					<Text style={styles.textStyle}>Quem paga a taxa?</Text>
					<View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly'}}>
						<TouchableHighlight {...touchProps}>
							<Text style={styles.textTaxa}>Fornecedor</Text>
						</TouchableHighlight>
						<TouchableOpacity style={styles.btnTaxa} onPress={() => setPagaTaxa("Cliente")}>
							<Text style={styles.textTaxa}>Cliente</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.btnTaxa} onPress={() => setPagaTaxa("Nao paga")}>
							<Text style={styles.textTaxa}>Não Paga</Text>
						</TouchableOpacity>
					</View >

					<Text style={styles.textStyle}>Fornecedor pagou frete?</Text>
					<Separator></Separator>
					<Row>
							<Column>
								<Button
									isPrimary
									buttonSize={'medium'}
									labelSize={'small'}
									onPress={() => {setPagouFrete(1)}}
								>
									Sim
								</Button>
							</Column>
							<Column>
								<Button
									buttonSize={'medium'}
									labelSize={'small'}
									onPress={() => {setPagouFrete(0)}}
								>
									Não
								</Button>
							</Column>
					</Row>
					<Separator></Separator>

					<Text style={styles.textStyle}>Forma de pagamento:</Text>

					<View style={styles.pickerBorder}>
						<Picker
							selectedValue={pagamentoSelecionado}
							style={styles.Picker}
							onValueChange={(itemValue, itemIndex) =>
								setPagamentoSelecionado(itemValue)
							}>
							{pagamentosJSON.map((pag) => {
								return (
									<Picker.Item style={styles.pickeItem} label={pag.Tipo} value={pag.Tipo} key={pag.ID}/>
								);
							})}
						</Picker>
					</View>

					<Text style={styles.textStyle}>Status do pedido:</Text>

					<View style={styles.pickerBorder}>
						<Picker
							selectedValue={statusSelecionado}
							style={styles.Picker}
							onValueChange={(itemValue, itemIndex) =>
								setStatusSelecionado(itemValue)
							}>
							{statusJSON.map((status) => {
								return (
									<Picker.Item style={styles.pickeItem} label={status.Status} value={status.Status} key={status.ID}/>
								);
							})}
						</Picker>
					</View>

					<View>
						<TouchableOpacity style={styles.btnProsseguir}  onPress={() => salvarPedido()}>
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
	btnPress:{
		backgroundColor: 'transparent',
		borderRadius: 50,
		borderWidth: 1,
		borderColor: '#FFF',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		shadowColor: '#52006A',
		minWidth: '25%',
		minHeight: 30,
		marginVertical: 20,
	},
	textTaxa: {
		fontWeight: 'bold',
		color: '#00BFFF',
		padding: 10
	},
	Picker: {
		color: '#FFF',
		fontSize: 15,
		fontWeight: 'bold',
		backgroundColor: 'rgba(86, 203, 242, 1)',
	},
	pickerBorder: {
		borderRadius: 0,
		borderBottomWidth: 2,
		borderColor: '#FFF',
		marginBottom: 10,
		width: 300
	},
	pickeItem: {
		color: '#FFF',
		backgroundColor: 'rgba(86, 203, 242, 1)',
		fontSize: 15,
		fontWeight: 'bold',
	},
});