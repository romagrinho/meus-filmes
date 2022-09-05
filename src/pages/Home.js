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

       <View>
        <Text> Meus Filmes Fav</Text>
        <text> Ola Romario, Boa noite!</text>

        <TouchableOpacity>
            <Text>Adicionar</Text>
        </TouchableOpacity>
        
       </View>  
       
       
    );
}

//Criando os estilos do layout
const style = StyleSheet.create({


});