import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonContainer, Label } from '../styled';

//import { useNavigation } from '@react-navigation/native';
//import {StackNavigationProp} from '@react-navigation/stack';

//import {NavigationParamList} from '../navigation/NavigationParamList';

//type defaultStackProp = StackNavigationProp<NavigationParamList, 'Default'>;

export default function Button(props: any) {

	//const navigation = useNavigation<defaultStackProp>()

	return (
		<ButtonContainer 
			buttonSize={props.buttonSize}
			isPrimary={props.isPrimary}
			style={[props.isPrimary ? styles.shadow : false]}
			onPress={props.onPress} 
			>
			<Label 
				labelSize={props.labelSize}
				isPrimary={props.isPrimary}
			>
				{props.children}
			</Label>
		</ButtonContainer>
	);
}

const styles = StyleSheet.create({
	shadow:{
		elevation: 4,
		shadowColor: '#52006A',
	},
});
