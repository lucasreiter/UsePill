import React, { useState } from 'react'
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground, Text, TextInput, View, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native'
import firebase from '../configuracao/firebaseConfig'
import Toast from "react-native-toast-message";


const database = firebase.firestore()

export default function EditarConsultas({ navigation, route }) {
    const id = route.params.consultas.id
    const [motivo, setMotivo] = useState(route.params.consultas.motivo)
    const [endereco, setEndereco] = useState(route.params.consultas.endereco)
    const [medico, setMedico]= useState(route.params.consultas.medico)
    const [telefone, setTelefone] = useState(route.params.consultas.telefone)
    const [dataConsulta, setDataConsulta] = useState(route.params.consultas.dataConsulta)
    const [dataRetorno, setDataRetorno] = useState(route.params.consultas.dataRetorno)
  
 
    function cadastrar() {
        if (motivo === '' || endereco === '' || medico === '' || telefone === '' || dataConsulta === '' || dataRetorno === '') {
            Toast.show({
                type:'info',
                text1:'Atenção!',
                text2: 'Todos os campos devem ser preenchidos.'
              })
        } else {
            database.collection("consultas").doc(id).update({
                motivo: motivo,
                medico: medico,
                telefone: telefone,
                endereco: endereco,
                dataConsulta: dataConsulta,
                dataRetorno:dataRetorno 
            })
            navigation.navigate('Consultas')
        }
    }

    function excluir(){
        if (Platform.OS === 'web') {
            deleteConsultas(id)
        }
        else {
            Alert.alert(
                "Atenção",
                "Você tem certeza que deseja excluir esse item?"
                [
                {
                    text: "Não",
                    onPress: () => navigation.navigate('Consultas'),
                    style: 'cancel'
                },
                { text: "Sim", onPress: () => database.collection("consultas").doc(id).delete() }
                ],
            )
        }
    }

    function deleteConsultas(id) {
        database.collection("consultas").doc(id).delete()
        navigation.navigate('Consultas')
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerMedico}>
                <Text>Consultas</Text>
              

            </View>

            <View style={styles.containerEdicao}>

            <TextInput
                    style={styles.input}
                    placeholder="Motivo"
                    onChangeText={setMotivo}
                    value={motivo}
                />


                <TextInput
                    style={styles.input}
                    placeholder="Médico"
                    onChangeText={setMedico}
                    value={medico}
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
                    placeholder="DataConsulta"
                    style={styles.input}
                    onChangeText={setDataConsulta}
                    value={dataConsulta}
                />
                 <TextInput
                    placeholder="Data Retorno"
                    style={styles.input}
                    onChangeText={setDataRetorno}
                    value={dataRetorno}
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