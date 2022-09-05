import React, { useState } from 'react';
import { Text } from 'react-native';
import { HeaderTextTemplate } from '../../styled';

export default function HeaderTextFont(props: any) {

	return (
		<HeaderTextTemplate>
			<Text style={{fontFamily: 'Insanibu'}}>
				{props.children}
			</Text>
		</HeaderTextTemplate>
	);
}
