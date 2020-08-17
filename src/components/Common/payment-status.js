import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';

const PaymentStatus = (props) => {
    const item = props.route.params.item;
    return (
        <View style={styles.container}>
            <Icon size={50} name="check" />
            <View>
                <Text>
                    Subscribe success!
                </Text>
            </View>
            <View>
                <Text>
                    Thank you very much for supporting E-learning.IO service.
                    You can access the course using the link below or via the email we sent you
                </Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    props.navigation.navigate("CourseDetail", { item: item })
                }}
            >
                <Text style={styles.text}>Join course</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    props.navigation.navigate("Home")
                }}
            >
                <Text style={styles.text}>Back to Home page</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PaymentStatus

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 50,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 20,
        backgroundColor: 'darkgray',
        marginBottom: 10
    },
    text: {
        color: 'white',
    }
})