import React, { useState } from 'react'
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground, Text, TextInput, View, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native'
import firebase from '../configuracao/firebaseConfig'
import Toast from "react-native-toast-message";


const database = firebase.firestore()

export default function EditarDados({ navigation, route }) {
    const id = route.params.dados.id
    const [nome, setNome] = useState(route.params.dados.nome);
    const [alergias, setAlergias] = useState(route.params.dados.alergias);
    const [sangue, setSangue] = useState(route.params.dados.sangue);
    const [altura, setAltura] = useState(route.params.dados.altura)
    const [peso, setPeso] = useState(route.params.dados.peso)
    const [dataNascimento, setDataNasc] = useState(route.params.dados.dataNascimento)



    function editarDados() {
        if (altura === '' || peso === '' || dataNascimento === '') {
            Toast.show({
                type: 'info',
                text1: 'Atenção!',
                text2: 'Todos os campos devem ser preenchidos.'
            })
        } else {
            database.collection("dados").doc(id).update({
                nome: nome,
                alergias: alergias,
                sangue: sangue,
                altura: altura,
                peso: peso,
                dataNascimento: dataNascimento
            })
            navigation.navigate('Dados')
        }
    }



    return (
        <View style={styles.container}>

            <View style={styles.containerNome}>
                <Text style={styles.nome}>{nome}</Text>
            </View>

            <View style={styles.containerEdicao}>

                <TextInput
                    placeholder="Nome Completo"
                    style={styles.input}
                    onChangeText={setNome}
                    value={nome}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Data de Nascimento"
                    onChangeText={setDataNasc}
                    value={dataNascimento}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Alergias"
                    onChangeText={setAlergias}
                    value={alergias}
                />

                <TextInput
                    placeholder="Tipo Sanguíneo"
                    style={styles.input}
                    onChangeText={setSangue}
                    value={sangue}

                />

                <TextInput
                    style={styles.input}
                    placeholder="Altura"
                    onChangeText={setAltura}
                    value={altura}
                />


                <TextInput
                    style={styles.input}
                    placeholder="Peso"
                    onChangeText={setPeso}
                    value={peso}
                />


            </View>

            <View style={styles.containerBotoes}>
                <TouchableOpacity
                    style={styles.buttonSalvar}
                    onPress={editarDados}

                >
                    <Text style={styles.textobotao}>Salvar</Text>
                </TouchableOpacity>



            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B335A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerNome: {
        //flex: 1,        
        backgroundColor: '#FFCD93',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        borderRadius: 80,
        padding: 15,
        margin: 25
    },
    containerEdicao: {
        //flex: 20,
        backgroundColor: '#FFCD93',
        width: '80%',
        height: '70%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        //padding: 50    
    },
    containerBotoes: {
        backgroundColor: '#2B335A',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginLeft: '10%'


    },
    buttonSalvar: {
        alignItems: "center",
        justifyContent: 'center',
        width: '30%',
        backgroundColor: "#83C4D8",
        padding: 10,
        borderRadius: 30,
        marginTop: 50,
        marginRight: '10%'
    },
    textobotao: {
        color: 'white',
        fontWeight: 'bold'
    },
    input: {
        padding: 5,
        width: '70%',
        borderBottomColor: "white",
        borderBottomWidth: 1.5,
        color: "#2B335A",
        marginVertical: 15

    },
    inputObs: {
        padding: 5,
        width: '70%',
        height: 80,
        borderBottomColor: "white",
        borderBottomWidth: 1.5,
        color: "#2B335A",
        marginVertical: 15

    },
    nome: {
        color:'#2B335A',
        fontWeight: 'bold',
        fontSize: 20

    }
});