import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/stack";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";

type NavegationHideProps = {
    children: React.ReactNode;
}

export default function NavegationHideOnScroll(props: NavegationHideProps) {
    const navigation = useNavigation();

    const yOffset = useRef(new Animated.Value(0)).current;
    const headerOpacity = yOffset.interpolate({
      inputRange: [0, 80],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    const height = useHeaderHeight();
    useEffect(() => {
        navigation.setOptions({
        headerStyle: {
            opacity: headerOpacity,
        },
        headerBackground: () => (
            <Animated.View
            style={{
                ...StyleSheet.absoluteFillObject,
                opacity: headerOpacity,
            }}
            />
        ),
        headerTransparent: true,
    });
    }, [headerOpacity, navigation]);
    
    return (        
        <Animated.ScrollView
            contentContainerStyle={{
                paddingTop: 50,
                alignItems: "center",
                justifyContent: "center"
            }}
            onScroll={Animated.event(
                [
                {
                    nativeEvent: {
                    contentOffset: {
                        y: yOffset,
                    },
                    },
                },
                ],
                { useNativeDriver: true }
            )}
            scrollEventThrottle={1}>
        {props.children}
        </Animated.ScrollView>
    );
}