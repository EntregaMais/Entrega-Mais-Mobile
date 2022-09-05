import styled from 'styled-components/native';
import * as ReactNative from 'react-native';
import HeaderTextFont from './componentes/templates/HeaderTextFont'

// cor mais clara do app #56cbf2
// cor mais escura do app #1f7dbc

export const ScreenContainer = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: #56cbf2;
	padding: 5%;
`;

const DefaultText = styled.Text`
	color: #FFF;
	font-size: 15px;
	font-weight: bold;
`;

const DefaultTextInput = styled.TextInput`
	color: #FFF;
	font-size: 15px;
	font-weight: bold;
`;

export const TextInput = styled(DefaultTextInput)<ReactNative.TextInput>`
	min-width: 90%;
	background-color: 'transparent';
	border-bottom-width: 1px;
	border-bottom-color: #FFF;
	margin-bottom: 15px;
	padding: 2px;
`;

// --------------------- Ignorar a complexidade ---------------------//
export const HeaderTextTemplate = styled(DefaultText)<ReactNative.Text>`
	color: #FFF;
	font-size: 25px;
	margin-bottom: 35px;
`;
// --------------------- Ignorar a complexidade ---------------------//
export const HeaderText = styled(HeaderTextFont)<ReactNative.Text>`
	color: #FFF;
	font-size: 25px;
	margin-bottom: 35px;
`;
// ------------------------------------------------------------------//
export const TitleText = styled(DefaultText)<ReactNative.Text>`
	font-size: 15px;
`;

export const BodyText = styled(DefaultText)<ReactNative.Text>`
	font-size: 15px;
`;
