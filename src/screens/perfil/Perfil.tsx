import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from "../../componentes/Container";
import { Alert, KeyboardAvoidingView, TouchableOpacity, View } from "react-native";
import { Text, Input, Row, Column, Separator } from '../../styled';
import { Ionicons as Icon } from '@expo/vector-icons';
import Button from '../../componentes/Button';
import axios from "axios";

export default function Perfil({navigation}: any) {

    const [email, setEmail] = useState('');
	const [nomeResponsavel, setNomeResponsavel] = useState('');
	const [numero, setNumero] = useState('');
	const [pix, setPix] = useState('');
	const [taxaEmbarque, setTaxaEmbarque] = useState(Number);
	
	const getData = async (email:string) => {
		try {
		  	const value = await AsyncStorage.getItem(email)
			if(value !== null) {
				console.log(value);
                setEmail(value);
		  	}
		} catch(e) {
		  // error reading value
		}
	}  

    useEffect(() => {
        getData("email");
        axios.get(`http://192.168.0.102:7730/api/transportadora/transportadoraPorEmail/${email}`
        ).then(res => {
            console.log(res.data);
            setNomeResponsavel(res.data.nm_resp)
            setNumero(res.data.telefone);
            setPix(res.data.pix);
            setTaxaEmbarque(res.data.cobre_embarque);
        }).catch((error) => {
			console.log(error); 
		})
    
    }, [email]);

    const AtualizarTransportador = async (nomeResponsavel: String, numero: String, pix: String, taxaEmbarque: number) => {
        
        const data = {
            nm_resp: nomeResponsavel,
            telefone: numero,
            pix: pix,
            cobre_embarque: taxaEmbarque
        };
        
		axios.post(`http://192.168.0.102:7730/api/transportadora/transportadoraEdicao/${email}`, data)
			.then(res => {
				const titulo = (res.data.status) ? "Erro" : "Sucesso";
				Alert.alert(titulo, "Dados atualizados com sucesso!", [ {
					text: "OK", onPress: () => {navigation.navigate('Home')}
				}]);
				console.log(res.data);
			})
			.catch((error) => {
				Alert.alert("Erro", "Erro ao atualizar dados");
				console.log(error);
			});
	}

    return(
        <Container>
            <KeyboardAvoidingView>
                <Row>
                    <Column alignItensCenter> 
                        <Icon name="person-circle-outline" size={40} color={"#FFF"} ></Icon>                   
                        <Text> Olá, {email}</Text>
                        <Separator/>
                        <Text>Nome Responsável:</Text>
                        <Input
                            placeholder="Nome do Responsável"
							placeholderTextColor={'white'}
							autoCorrect={false}
							value={nomeResponsavel}
							onChangeText={(text: any) => {setNomeResponsavel(text);}}
							autoCapitalize="none"
                        />
                        <Text>Número de telefone:</Text>
                        <Input
							placeholder="Número"
							placeholderTextColor={'white'}
							autoCorrect={false}
							value={numero}
							onChangeText={(text: string) => {setNumero(text)}}
						/>
                        <Text>Chave do PIX:</Text>
                        <Input
							value={pix}
							placeholder="Chave do PIX"
							placeholderTextColor={'white'}
							autoCorrect={false}
							onChangeText={(text: string) => {setPix(text)}}
						/>
                        
                        <Text>Cobra taxa de embarque?</Text>
                        <Separator/>
                        <Row>
							<Column>
								<Button
									isPrimary
									buttonSize={'medium'}
									labelSize={'small'}
									onPress={() => {setTaxaEmbarque(1)}}
								>
									Sim
								</Button>
							</Column>
							<Column>
								<Button
									buttonSize={'medium'}
									labelSize={'small'}
									onPress={() => {setTaxaEmbarque(0)}}
								>
									Não
								</Button>
							</Column>
						</Row>
                        <Separator/>
                        <Button
							isPrimary
							buttonSize={'large'}
							labelSize={'medium'}
							onPress={() => {AtualizarTransportador(nomeResponsavel,
                                numero,pix, taxaEmbarque
                                )}}
						>
							Atualizar informações
						</Button>
                    </Column>
                </Row>
            </KeyboardAvoidingView>
        </Container>
    )
}