import styled from 'styled-components/native';
import * as ReactNative from 'react-native';
import HeaderTextFont from './componentes/HeaderTextFont'
import * as GestureHandler from 'react-native-gesture-handler';
import Checkbox, { CheckboxProps } from 'expo-checkbox';



// cor mais clara do app #56cbf2
// cor mais escura do app #1f7dbc

// Interfaces ----------------------------//
interface TouchableOpacityProps extends ReactNative.TouchableOpacityProps {
	isPrimary: boolean;
	isDisabled: boolean;
};

interface ViewProps extends ReactNative.ViewProps {
	alignItensCenter: boolean
	justifyContentCenter: boolean
	justifyContentSpaceBetween: boolean
	wrap: boolean
};

// Default Values ==============================================================//
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

const DefaultTouchableOpacity = styled.TouchableOpacity<TouchableOpacityProps>`
	background-color: ${(props) => (props.isPrimary ? '#FFF' : 'transparent')};
	width: 100%;
	height: 10%;
	border: 1px solid #FFF;
	border-radius: 100px;
	align-items: center;
	justify-content: center;
`;


export const DefaultContainer = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: #56cbf2;
	padding: 0 10% 0 10%;
	`;

// ============================================================= Default Values //

export const Flex = styled.View<ViewProps>`
	${(props) => (props.alignItensCenter) &&`
		align-items: center;
	`}
	${(props) => (props.justifyContentCenter) &&`
		justify-content: center;
	`}
	${(props) => (props.justifyContentSpaceBetween) &&`
		justify-content: space-between;
	`}
	${(props) => (props.wrap) ?
		`flex-wrap: wrap;`
		:
		`flex-wrap: nowrap;`
	}
`;

export const Row = styled(Flex)<ReactNative.View>`
	flex-direction: row;
	width: 100%;
`;


export const Column = styled(Flex)<ReactNative.View>`
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const Separator = styled(Row)<ReactNative.View>`
	width: 150px;
	border-bottom-color: #FFF;
	margin: 6% 0 6% 0;
	border-bottom-width: 0.5px;
`;


export const Input = styled(DefaultTextInput)<ReactNative.TextInput>`
	width: 100%;
	background-color: 'transparent';
	border-bottom-width: 1px;
	border-bottom-color: #FFF;
	margin-bottom: 2.5%;
	padding: 2.5%;
`;

export const Text = styled(DefaultText)<ReactNative.Text>`
	color: ${(props) => (props.isPrimary ? '#00BFFF' : '#FFF')};
	${(props) => {
		switch (props.size) {
			case 'large': 
				return `font-size: 18px`;
			case 'medium': 
				return `font-size: 15px;`;
			case 'small': 
				return `font-size: 12px;`;
			}
		}
	};
`; 

export const CheckboxExpo = styled(Checkbox)<CheckboxProps>`
	border-color: ${(props) => (props.value ? '#FFF': '#00BFFF' )};
	background-color: ${(props) => (props.value ? '#00BFFF' : '#FFF')};
	margin-right: 5px;
	width: 16px;
	height: 16px;
`;

export const ButtonContainer = styled(DefaultTouchableOpacity)<ReactNative.TouchableOpacity>`
	margin-bottom: 2.5%;
	${(props) => {
		switch (props.buttonSize) {
			case 'large': 
				return `height: 40px;`;
			case 'medium':
				return `height: 30px;`;
			case 'small':
				return `height: auto;`;
			case 'auto': 
				return `height: auto;
						width: auto;
						border: 0;
						margin-bottom: 5%;`;
			}
		}
	}
`;

export const Label = styled(Text)<ReactNative.Text>`
	${(props) => {
		switch (props.labelSize) {
			case 'large': 
				return `font-size: 18px`;
			case 'medium': 
				return `font-size: 15px;`;
			case 'small': 
				return `font-size: 12px;`;
			}
		}
	};
`; 

export const HidePassword = styled.TouchableOpacity`
	margin-top: 5%;
	margin-left: -10%;
`;

// ------ Caso seja necessário usar  Gesture Handler no lugar ------ //
export const LoginForm = styled(Input)<GestureHandler.TextInput>`
`;


export const HeaderText = styled(HeaderTextFont)<ReactNative.Text>`
`;

export const HeaderTextTemplate = styled(DefaultText)<ReactNative.Text>`
	color: #FFF;
	font-size: 25px;
	margin-bottom: 35px;
`;

