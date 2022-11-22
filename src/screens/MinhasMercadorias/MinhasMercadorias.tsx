import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from "../../componentes/Container";
import { Alert, KeyboardAvoidingView, TouchableOpacity, FlatList } from "react-native";
import { Text, Input, Row, Column, Separator } from '../../styled';
import { Ionicons as Icon } from '@expo/vector-icons';
import Button from '../../componentes/Button';
import axios from "axios";

export function MinhasMercadorias({navigation}: any) {

    return(
        <Container>
            <KeyboardAvoidingView>
                <Row>
                    <Column alignItensCenter>

                        
                    <Button
							isPrimary
							buttonSize={'large'}
							labelSize={'medium'}
							onPress={() => {navigation.navigate('AdicionarPacoteStep1')}}
						>
							Novo pedido
						</Button>
                    </Column>
                </Row>
            </KeyboardAvoidingView>
        </Container>
    )
}