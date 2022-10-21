import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Questions(){
    return(
        <View style={style.card}>
            <View style={style.container}>
              <Text style={style.title}>1/8 Qual é o Valor do Resultado?</Text>
                <View style={style.response}>
                  <Text style={style.textResponse}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Nulla animi rem exercitationem molestiae deleniti perferendis, 
                    eligendi vero fugit temporibus nobis architecto impedit officia 
                    ea numquam recusandae molestias quo, quae provident.</Text>  
                </View>
                <TouchableOpacity style={style.buttonStart}>
                    <Text style={style.textButton}>Resposta 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStart}>
                    <Text style={style.textButton}>Resposta 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStart}>
                    <Text style={style.textButton}>Resposta 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.buttonStart}>
                    <Text style={style.textButton}>Resposta 4</Text>
                </TouchableOpacity>

                <View style={style.response}>
                  <Text style={style.textResponse}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Nulla animi rem exercitationem molestiae deleniti perferendis, 
                    eligendi vero fugit temporibus nobis architecto impedit officia 
                    ea numquam recusandae molestias quo, quae provident.</Text>  
                </View>
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
        // fontSize: 30,
        padding: 10,
        color: '#000',
        fontWeight: 'bold', 
        // paddingBottom: 5
      }, 
      subTitle: {
        paddingTop: 5,
        backgroundColor: '#BBB'
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
      }, 
      response: {
        marginTop: 10,
        padding: 20,
        backgroundColor: '#454544',
      }, 
      textResponse: {
        color: '#fff'
      }
})

