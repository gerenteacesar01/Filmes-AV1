import { StatusBar, setStatusBarBackgroundColor, } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function App(){

const[Id,setId] = useState ("")
const[Nome, setNome] = useState("")
const[Genero, setGenero] = useState("")
const[Ano, setAno] = useState("")
const [filme, setFilme] = useState(null);

useEffect(() => {
  const fetchFilme = async () => {
    try {
      const response = await axios.get(`http://172.19.176.1:3001/filmes/${Id}`);
      setFilme(response.data);
    } catch (error) {
      console.error('Erro ao obter filme:', error);
    }
  };

  fetchFilme();
}, [Id]);



  return(
    <View style={styles.containerPrincipal}>
          <View style = {styles.topBar}> 

                       <Text style = {styles.title}>
                          Buscar Filmes
                       </Text>
            </View>

        <View style = {styles.containerFilme}>

        <TextInput
        style={
          {
            borderColor: "black",
            borderWidth: 2,
            width: 200,
            fontSize: 18,
            marginTop: 30,
            marginEnd: 20,
            borderRadius: 30,


          }}
        value={Id}
        onChangeText={(texto) => setId(texto)}
        placeholder='Filme por id'

        />

        <TouchableOpacity style= {styles.botaoBuscar}>
          <Text style={styles.textoBotaoBuscar}>Buscar</Text>
        </TouchableOpacity>

        </View>   

        <TextInput
        style = {styles.caixaTexto}
        value={Nome}
        onChangeText={(texto) => setNome(texto)}
        placeholder='Nome'

        />
        

      <TextInput
        style = {styles.caixaTexto}
        value={Genero}
        onChangeText={(texto) => setGenero(texto)}
        placeholder='Gênero'

        />
        
      <TextInput
        style = {styles.caixaTexto}
        value={Ano}
        onChangeText={(texto) => setAno(texto)}
        placeholder='ano'

        />


     </View>

  );
}

const styles = StyleSheet.create({

    containerPrincipal:{
      flex: 1,
      flexDirection: "column",
     
      
    },

    topBar:{
      flexDirection: "row",
      height: 70,
      backgroundColor: "green",
    },

    title:{
      color: "#FFFFFF",
      fontSize: 25,
      fontWeight: "bold",
      alignSelf: "center",
      margin: 20,
    },

    containerFilme:{
      flexDirection: "row",
      height: 100,
      marginHorizontal: 20,
     

    },


    botaoBuscar:{
      backgroundColor: "green",
      width: 120,
      height:70,
      marginTop: 30,
      marginEnd: 20,
      borderRadius: 10,
      padding: 20,
    },


    textoBotaoBuscar:{
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      alignSelf: 'center',
    },



    caixaTexto:{
      borderBlockColor: "black",
      borderWidth:2,
      padding: 15,
      fontSize:18,
      borderRadius: 30,
      marginTop: 10,
      marginHorizontal: 20,
    },


});