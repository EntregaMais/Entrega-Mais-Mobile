import { Ionicons as Icon } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

import Button from '../../componentes/Button';
import Container from '../../componentes/Container';
import { Column, HeaderText, Input, Row, Separator, Text } from '../../styled';


export default function CadastroTransportadorStep1({ navigation }: any) {
	const [empresa, setEmpresa] = useState('');
	const [nomeResponsavel, setNomeResponsavel] = useState('');
	const [cnpj, setCNPJ] = useState('');
	const [numero, setNumero] = useState('');
	const [setor, setSetor] = useState('');
	const [taxaEmbarque, setTaxaEmbarque] = useState(Number);
	const [pix, setPix] = useState('');
	
	return (
		<Container>
			<KeyboardAvoidingView>
				<Row>
					<Column alignItensCenter>
						<Row justifyContentCenter>
							<Icon
								name={'caret-down-circle'}
								size={15}
								color="#FFF"
							/>
							<Separator />
							<Icon
								name={'radio-button-off-outline'}
								size={15}
								color="#dedede"
							/>
						</Row>

						<HeaderText>TRANSPORTADOR</HeaderText>

						<Input
							value={empresa}
							placeholder="Empresa"
							placeholderTextColor={'white'}
							autoCorrect={false}
							onChangeText={(text: string) => {setEmpresa(text)}}
						/>
						<Input
							value={nomeResponsavel}
							placeholder="Nome do Responsável"
							placeholderTextColor={'white'}
							autoCorrect={false}
							onChangeText={(text: string) => {setNomeResponsavel(text)}}
						/>
						<Input
							value={cnpj}
							placeholder="CNPJ"
							placeholderTextColor={'white'}
							autoCorrect={false}
							onChangeText={(text: string) => {setCNPJ(text)}}
						/>
						<Input
							value={numero}
							placeholder="Número"
							placeholderTextColor={'white'}
							autoCorrect={false}
							onChangeText={(text: string) => {setNumero(text)}}
						/>
						<Input
							value={setor}
							placeholder="Setor"
							placeholderTextColor={'white'}
							autoCorrect={false}
							onChangeText={(text: string) => {setSetor(text)}}
						/>

						<Text>Cobra taxa de embarque?</Text>

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
						<Input
							value={pix}
							placeholder="Chave do PIX"
							placeholderTextColor={'white'}
							autoCorrect={false}
							onChangeText={(text: string) => {setPix(text)}}
						/>

						<Button
							isPrimary
							buttonSize={'large'}
							labelSize={'medium'}
							onPress={() => { 
								navigation.navigate('CadastroTransportadorStep2', {
									empresa: empresa,
									nomeResponsavel: nomeResponsavel,
									cnpj: cnpj,
									numero: numero,
									setor: setor,
									taxaEmbarque: taxaEmbarque,
									pix: pix
								});
							}}
						>
							Prosseguir
						</Button>
					</Column>
				</Row>
			</KeyboardAvoidingView>
		</Container>
	);
}

