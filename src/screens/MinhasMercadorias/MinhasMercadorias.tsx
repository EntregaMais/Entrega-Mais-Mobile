import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from "../../componentes/Container";
import { Alert, KeyboardAvoidingView, TouchableOpacity, FlatList } from "react-native";
import { Text, Input, Row, Column, Separator } from '../../styled';
import { Ionicons as Icon } from '@expo/vector-icons';
import Button from '../../componentes/Button';
import axios from "axios";

export function MinhasMercadorias({navigation}: any) {

    const [email, setEmail] = useState('');
    const [idTransportadora, setIdTransportadora] = useState('');
	
	const getData = async (email:string) => {
		try {
		  	const value = await AsyncStorage.getItem(email)
			if(value !== null) {
				console.log(value);
				setEmail(value);
                navigation.navigate('AdicionarPacoteStep1',{email: email})
		  	}
		} catch(e) {
		  // error reading value
		}
	}
    
    const getIdTransportadora = async (idTransportadora: string) => {
		try {
		  	const value = await AsyncStorage.getItem(idTransportadora)
			if(value !== null) {
				console.log(value);
				setIdTransportadora(value);
		  	}
		} catch(e) {
		  // error reading value
		}
	} 
	
	useEffect(() => {
        getIdTransportadora("idTransportadora");
        
    }, [idTransportadora]);

    return(
        <Container>
            <KeyboardAvoidingView>
                <Row>
                    <Column alignItensCenter>       
                    <Button
							isPrimary
							buttonSize={'large'}
							labelSize={'medium'}
							onPress={() => {getData('email')}}
						>
							Novo pedido
						</Button>
                    </Column>
                </Row>
            </KeyboardAvoidingView>
        </Container>
    )
}