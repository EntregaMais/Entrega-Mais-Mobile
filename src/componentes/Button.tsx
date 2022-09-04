import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { TouchableHighlight, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Button() {

	return (
		<View style={{ flexDirection: "row" , justifyContent:'space-between', }}>
			<TouchableOpacity style={styles.btnEntrar}>
				<Text style={styles.textEntrar}>Não</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.btnCadastro}>
				<Text style={styles.textCadastro}>Sim</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	btnEntrar:{
		backgroundColor: '#FFF',
		width: '40%',
		height: 35,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 4,
		shadowColor: '#52006A',
		marginTop: 20,
		marginBottom: 20,
		marginLeft: 10
	},
	textEntrar: {
		fontWeight: 'bold',
		color: '#00BFFF',
	},
	btnCadastro: {
		backgroundColor: 'transparent',
		width: '40%',
		height: 35,
		borderRadius: 50,
		borderWidth: 1,
		borderColor: '#FFF',
		alignItems: 'center',
		justifyContent: "center",
		marginTop: 20,
		marginBottom: 20,
		marginRight: 10
	  },
	  textCadastro: {
		color: '#FFF'
	  },
});