import React from "react";
import { StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

type LogoProps = {
	children: React.ReactNode;
}

export default function Logo(props: any) {
	if (props.size == 'large') {
		return (
			<Animatable.Image
				animation='flipInY'
				delay={300}
				resizeMode={'contain'}
				style={styles.imageLarge}
				source={require('../../assets/nova_logo.png')}
				/>
		);
	} else {
		return (
			<Image
				resizeMode={'contain'}
				style={styles.image}
				source={require('../../assets/logo_new.png')}
				/>
		);
	}
}

const styles = StyleSheet.create({
	imageLarge: {
	  width: 300,
	  height: 80,
	  marginBottom: 40
	},
	image: {
		width:     150,
		height:     80,
		marginLeft:  8,
		marginTop:   2
	}
});