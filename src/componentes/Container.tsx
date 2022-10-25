import React, { useState } from 'react';
import { DefaultContainer } from '../styled';
import LinearGradientBackground from '../componentes/LinearGradient';
import { StatusBar } from 'expo-status-bar';

export default function Container(props: any) {

	return (
		<DefaultContainer>
			<LinearGradientBackground/>
			<StatusBar style="light" />
			{props.children}
		</DefaultContainer>
	);
}
