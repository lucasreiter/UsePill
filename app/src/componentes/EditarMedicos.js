import React, { useState } from 'react'
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground, Text, TextInput, View, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native'
import firebase from '../configuracao/firebaseConfig'
import Toast from "react-native-toast-message";

const database = firebase.firestore()

export default function EditarMedicos({ navigation, route }) {
    const id = route.params.medicos.id
    const [nome, setNome] = useState(route.params.medicos.nome)
    const [especialidade, setEspec] = useState(route.params.medicos.especialidade)
    const [telefone, setTelefone] = useState(route.params.medicos.telefone)
    const [endereco, setEndereco] = useState(route.params.medicos.endereco)
    const [observacao, setObservacao] = useState(route.params.medicos.observacao)
  
    function cadastrar() {
        if (nome === '' || especialidade === '' || telefone === '' || endereco === '') {
            Toast.show({
                type:'info',
                text1:'Atenção!',
                text2: 'Todos os campos devem ser preenchidos.'
              })
        } else {
            database.collection("medicos").doc(id).update({
                nome: nome,
                especialidade: especialidade,
                telefone: telefone,
                endereco: endereco,
                observacao: observacao
            })
            navigation.navigate('Médicos')
        }
    }

    function excluir(){
        if (Platform.OS === 'web') {
            deleteMedicos(id)
        }
        else {
            Alert.alert(
                "Atenção",
                "Você tem certeza que deseja excluir esse item?",
                [
                {
                    text: "Não",
                    onPress: () => navigation.navigate('Médicos'),
                    style: 'cancel'
                },
                { text: "Sim", onPress: () => {database.collection("medicos").doc(id).delete(), navigation.navigate('Médicos')} }
                ],
            )
        }
    }

    function deleteMedicos(id) {
        database.collection("medicos").doc(id).delete()
        navigation.navigate('Médicos')
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerMedico}>
                <Text style={styles.nome}>Dr. {nome}</Text>
            </View>

            <View style={styles.containerEdicao}>

                <TextInput
                    style={styles.input}
                    placeholder="Nome do médico"
                    onChangeText={setNome}
                    value={nome}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Especialidade"
                    onChangeText={setEspec}
                    value={especialidade}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    onChangeText={setTelefone}
                    value={telefone}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Endereço"
                    onChangeText={setEndereco}
                    value={endereco}
                />

                <TextInput
                    placeholder="Observações"
                    style={styles.inputObs}
                    onChangeText={setObservacao}
                    value={observacao}
                />
            </View>

            <View style={styles.containerBotoes}>
                <TouchableOpacity
                    style={styles.buttonEditar}
                    onPress={excluir}
                >
                    <Text style={styles.textobotao}>EXCLUIR</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonSalvar}
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
        backgroundColor: '#2B335A',
        alignItems: 'center',
    },
    containerMedico: {
        flexDirection: "column",
        backgroundColor: '#FFCD93',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        borderRadius: 80,
        padding: 15,
        margin: 25
    },
    containerEdicao: {
        backgroundColor: '#FFCD93',
        width: '80%',
        height: '70%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    containerBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    buttonEditar: {
        alignItems: "center",
        justifyContent: 'center',
        width: '30%',
        backgroundColor: "#EF815C",
        padding: 10,
        borderRadius: 30,
        marginTop: 50,
        marginLeft: '10%',
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