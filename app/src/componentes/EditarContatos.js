import React, { useState } from 'react'
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground, Text, TextInput, View, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native'
import firebase from '../configuracao/firebaseConfig'
import Toast from "react-native-toast-message";


const database = firebase.firestore()

export default function EditarContatos({ navigation, route }) {
    const id = route.params.contatos.id
    const [nomeCompleto, setNomeCompleto] = useState(route.params.contatos.nomeCompleto)
    const [endereco, setEndereco] = useState(route.params.contatos.endereco)
    const [telefone, setTelefone]= useState(route.params.contatos.telefone)
   
 
    function cadastrar() {
        if (nomeCompleto === '' || endereco === '' || telefone === '') {
            Toast.show({
                type:'info',
                text1:'Atenção!',
                text2: 'Todos os campos devem ser preenchidos.'
              })
        } else {
            database.collection("contatos").doc(id).update({
                nomeCompleto: nomeCompleto,
                telefone: telefone,
                endereco: endereco
            })
            navigation.navigate('Contatos')
        }
    }

    function excluir(){
        if (Platform.OS === 'web') {
            deleteContatos(id)
        }
        else {
            Alert.alert(
                "Atenção",
                "Você tem certeza que deseja excluir esse item?"
                [
                {
                    text: "Não",
                    onPress: () => navigation.navigate('Contatos'),
                    style: 'cancel'
                },
                { text: "Sim", onPress: () => database.collection("contatos").doc(id).delete() }
                ],
            )
        }
    }

    function deleteContatos(id) {
        database.collection("contatos").doc(id).delete()
        navigation.navigate('Contatos')
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerMedico}>
                <Text>Contatos</Text>
              

            </View>

            <View style={styles.containerEdicao}>

            <TextInput
                    style={styles.input}
                    placeholder="Nome Completo"
                    onChangeText={setNomeCompleto}
                    value={nomeCompleto}
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
        //color: 'black',
        backgroundColor: '#2B335A',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    containerMedico: {
        //flex: 1,
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
        color: "white",
        marginVertical: 15

    },
    inputObs: {
        padding: 5,
        width: '70%',
        height: 80,
        borderBottomColor: "white",
        borderBottomWidth: 1.5,
        color: "white",
        marginVertical: 15

    },
});