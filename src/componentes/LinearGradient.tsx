import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useWindowDimensions } from 'react-native';


export default function LinearGradientBackground( props: any ) {
	const { height, width } = useWindowDimensions();
	let heightLinear = Math.round(height * 35/100)

	return (
			<LinearGradient 
				colors={['#1f7dbc', 'transparent']} 
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					top: 0,
					height: heightLinear
				}}
			/>
	);
}
