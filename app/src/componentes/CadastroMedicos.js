import React, { useState } from 'react'
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground, Text, TextInput, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import firebase from '../configuracao/firebaseConfig'
import Toast from 'react-native-toast-message'

const database = firebase.firestore()


export default function CadastroMedicos({ navigation }) {
    const [nome, setNome] = useState('')
    const [especialidade, setEspec] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState('')
    const [observacao, setObservacao] = useState('')
    const [msg, setMessage] = useState('')


    function cadastrar() {
        if (nome === '' || especialidade === '' || telefone === '' || endereco === '') {
            Toast.show({
                type: 'info',
                text1: 'Atenção!',
                text2: 'Todos os campos devem ser preenchidos.'
            })
        } else {
            database.collection("medicos").add({
                nome: nome,
                especialidade: especialidade,
                telefone: telefone,
                endereco: endereco,
                observacao: observacao
            })
            navigation.navigate('Médicos')
        }
    }

    return (
        <View style={styles.container}>
                <View style={styles.bodyContainer}>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome do médico"
                        onChangeText={setNome}
                        value={nome}
                        placeholderTextColor='#FFF'
                    />


                    <TextInput
                        style={styles.input}
                        placeholder="Especialidade"
                        onChangeText={setEspec}
                        value={especialidade}
                        placeholderTextColor='#FFF'
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Telefone"
                        onChangeText={setTelefone}
                        value={telefone}
                        placeholderTextColor='#FFF'
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Endereço"
                        onChangeText={setEndereco}
                        value={endereco}
                        placeholderTextColor='#FFF'
                    />

                    <TextInput
                        placeholder="Observações"
                        style={styles.inputObs}
                        onChangeText={setObservacao}
                        value={observacao}
                        placeholderTextColor='#FFF'
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={cadastrar}

                    >
                        <Text style={styles.textobotao}>SALVAR</Text>
                    </TouchableOpacity>

                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B335A'
    },
    bodyContainer: {
        flex: 3,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '66.6%',
    },
    logoContainer: {
        flex: 1,
        width: '100%',
        height: '33.3%',
        flexDirection: 'column-reverse',
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    button: {
        alignItems: "center",
        justifyContent: 'center',
        width: '40%',
        backgroundColor: "#EF815C",
        padding: 10,
        borderRadius: 30,
        marginTop: 50
    },
    textobotao: {
        color: 'white',
        fontWeight: 'bold'
    },
    text: {
        padding: 5,
        fontSize: 20,
        color: 'white',
        textAlign: "center",
        marginBottom: 10
    },
    input: {
        padding: 5,
        width: '70%',
        borderBottomColor: "white",
        borderBottomWidth: 1.5,
        color: "white",
        marginTop: 5

    },
    inputContainer: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoBot: {
        with: '40%',
        height: '40%',
        marginBottom: 28
    },
    inputObs: {
        padding: 5,
        width: '70%',
        height: 80,
        borderBottomColor: "white",
        borderBottomWidth: 1.5,
        color: "white",
        marginVertical: 15,

    },

});