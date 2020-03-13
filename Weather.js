import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";


const weatherOptions = {
    Thunderstorm: {
        gradient: ["#373B44", "#4286f4"],
        iconName: "weather-lightning",
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    Drizzle: {
        gradient: ["#89F7FE", "#66A6FF"],
        iconName: "weather-hail",
        title: "Drizzle",
        subtitle: "Is like rain"
    },
    Rain: {
        gradient: ["#00C6FB", "#005BEA"],
        iconName: "weather-rainy",
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    Snow: {
        gradient: ["#7DE2FC", "#B9B6E5"],
        iconName: "weather-snow",
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Atmosphere: {
        gradient: ["#89F7FE", "#66A6FF"],
        iconName: "weather-hail"
    },
    Clear: {
        gradient: ["#FF7300", "#FEF253"],
        iconName: "weather-sunny",
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    },
    Clouds: {
        gradient: ["#D7D2CC", "#304352"],
        iconName: "weather-cloudy",
        title: "Clouds",
        subtitle: "I know, fucking boring"
    },
    Mist: {
        gradient: ["#4DA0B0", "#D39D38"],
        iconName: "weather-hail",
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
    },
    Haze: {
        gradient: ["#4DA0B0", "#D39D38"],
        iconName: "weather-hail",
        title: "Haze",
        subtitle: "Just don't go outside"
    },
    Dust: {
        gradient: ["#4DA0B0", "#D39D38"],
        iconName: "weather-hail",
        title: "Dusty",
        subtitle: "Thanks a lot China."
    }
}


export default function Weather({temp, condition, position}) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.container}>
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons size={96} color="white"
                                            name={weatherOptions[condition].iconName} />
                    <Text style={styles.temp}>
                        {temp}º
                    </Text>
                    <Text style={styles.position}>
                        {position}
                    </Text>
                </View>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>
                        {weatherOptions[condition].title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {weatherOptions[condition].subtitle}
                    </Text>
                </View>
            </View>
        </LinearGradient>
    );
}

Weather.prototype = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },  
    position: {
        color: "white",
        fontWeight: "600",
        marginTop: 10,
    },  
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});