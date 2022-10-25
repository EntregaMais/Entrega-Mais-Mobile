import React from "react";
import { Image} from 'react-native';

type LogoProps = {
	children: React.ReactNode;
}

export default function LogoTitle(props: LogoProps) {
	return (
		<Image
			resizeMode={'contain'}
			style={{width:     150,
					height:     80,
					marginLeft:  8,
					marginTop:   2}}
			source={require('../../assets/logo_new.png')}
		/>
	);
}