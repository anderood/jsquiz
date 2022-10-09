import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function Card(){
    return(
        <View style={style.card}>
            <Image style={style.image} source={require('../images/back-code.jpg')}/>
            <View style={style.container}>
                <Text style={style.title}>{"Iniciante"}</Text>
                <Text style={style.subTitle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Corrupti ratione temporibus non doloremque quod quae error, illum delectus provident. 
                    Labore eaque voluptatum quisquam numquam consectetur amet ex asperiores, velit aspernatur?
                </Text>
                <TouchableOpacity style={style.buttonStart}>
                    <Text style={style.textButton}>Iniciar</Text>
                </TouchableOpacity>

            </View>
        </View>
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
    }, 
      image: {
        width: 400,
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
        backgroundColor: '#121290',
        borderRadius: 5, 
      }, 
      textButton: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
      }
})

