import React, { useEffect, useState } from "react";
import Container from "../../componentes/Container";
import { StyleSheet, View, Alert, KeyboardAvoidingView, TouchableOpacity, FlatList, ListRenderItem } from "react-native";
import { Text, Input, Row, Column, Separator } from '../../styled';
import axios from "axios";


export default function ListagemList({navigation, route}: any) {

	const [data, setData] = useState();

	useEffect(() => {
		console.log(`http://192.168.0.102:${route.params?.port}${route.params?.context}${route.params?.id === undefined ? '' : route.params?.id}`)
		axios.get(`http://192.168.0.102:${route.params?.port}${route.params?.context}${route.params?.id === undefined ? '' : route.params?.id}`
		).then(res => {
			console.log(res.data);
			setData(res.data);
		}).catch((error) => {
			console.log(error); 
		})
    }, []);

    return(
        <Container>
			<Row>
				<View>
					<FlatList 
						data={data}
						keyExtractor={(item) => item.id}
						renderItem={({item}) => (
							<View style={styles.item}>
								{ item.id === undefined ? <View></View> : <Text style={styles.title} >ID: {item.id}</Text> }

								{ item.nmdespachante === undefined ? <View></View> : <Text style={styles.text} >Despachante: {item.nmdespachante}</Text>}

								{ item.nmtrajeto === undefined ? <View></View> : <Text style={styles.text} >Nome Trajeto: {item.nmtrajeto}</Text>}
								{ item.dstrajeto === undefined ? <View></View> : <Text style={styles.text} >Desc Trajeto: {item.dstrajeto}</Text>}

								{ item.dstrajeto === undefined ? <View></View> : <Text style={styles.text} >Placa: {item.placa}</Text>}
								{ item.dstrajeto === undefined ? <View></View> : <Text style={styles.text} >Id Rota: {item.idrota}</Text>}

								{ item.dstrajeto === undefined ? <View></View> : <Text style={styles.text} >Id Rota: {item.nmCliente}</Text>}
								{ item.dstrajeto === undefined ? <View></View> : <Text style={styles.text} >Id Rota: {item.frete}</Text>}
								{ item.dstrajeto === undefined ? <View></View> : <Text style={styles.text} >Id Rota: {item.cidade}</Text>}
								{ item.dstrajeto === undefined ? <View></View> : <Text style={styles.text} >Id Rota: {item.valorTotal}</Text>}



								{ item.idtransportadora === undefined ? <View></View> : <Text style={styles.text} >Iden. Transp: {item.idtransportadora}</Text>}
							</View>	
						)}
					/>
				</View>
			</Row>
        </Container>
    );
};

const styles = StyleSheet.create({
	item: {
	  width: 300,
	  padding: 20,
	  marginVertical: 8,
	  borderColor: '#FFF',
	  backgroundColor: 'transparent',
	  borderRadius: 10,
	  borderWidth: 1,

	},
	title: {
	  fontSize: 20,
	},
	text: {
		fontSize: 15,
	}
});