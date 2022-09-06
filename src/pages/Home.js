import React from "react";

import {} from 'react-native';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet} from 'react-native';

export default function Home(){
    return(

       <View style = {styles.container}>
        <Text style = {styles.titulo}> Meus Filmes Fav</Text>
        <Text style = {styles.Subtitulo}> Olá Romario, Boa noite!</Text>

<TextInput
        style={styles.campo}
        placeholder= "Nome do Filme"
/>
        <TouchableOpacity style = {styles.button}>
            <Text style = {styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>

       </View>  
       
    );
}

//Criando os estilos do layout
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#363636',
        paddingVertical: 70,
        paddingHorizontal: 20
    },
        titulo:{
            color: '#B22222',
            fontSize:20,
            fontWeight: 'bold',
            marginBottom: 10
        },

        Subtitulo:{
            color: '#fff',
            fontSize: 15
        },

        campo: {
            backgroundColor:'#1F1E25',
            color: '#fff',
            fontSize: 18,
            marginTop: 30,
            borderRadius: 7,
            padding: 15
        },

        greetings: {
            color: '#fff'
        },

        button: {
            backgroundColor: '#FFFAFA',
            padding: 15,
            borderRadius: 7,
            alignItems: 'center',
            marginTop: 20
        },
        buttonText: {
            color: '#000',
            fontSize: 17,
            fontWeight: 'bold',
        }

}); // Fim do estilos