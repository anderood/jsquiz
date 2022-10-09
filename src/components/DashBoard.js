import React from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function DashBoard(){
    return(
        <ScrollView>
            <View style={style.card}>
                <View style={style.container}>
                    <Text style={style.title}>{"Teste 1"}</Text>
                    <Text style={style.subTitle}>
                        Score: 0%
                    </Text>
                    <TouchableOpacity style={style.buttonStart}>
                        <Text style={style.textButton}>Iniciar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 12,
        marginBottom: 5
    },
    container: {
        padding: 14,
        width: 200,
    }, 
      image: {
        width: 200,
        height: 200
      }, 
      title: {
        fontSize: 30,
        fontWeight: 'bold', 
        paddingBottom: 5
      }, 
      subTitle: {
        paddingTop: 5,
      }, 
      buttonStart: {
        padding: 15,
        textAlign: 'center',
        marginTop: 15,
        backgroundColor: '#121270',
        borderRadius: 5, 
      }, 
      textButton: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
      }
})