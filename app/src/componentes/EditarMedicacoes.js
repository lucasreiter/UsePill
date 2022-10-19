import React, { useState } from 'react'
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageBackground, Text, TextInput, View, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native'
import firebase from '../configuracao/firebaseConfig'
import Toast from "react-native-toast-message";


const database = firebase.firestore()

export default function EditarMedicacoes({ navigation, route }) {
    const id = route.params.medicacoes.id
    const [medicamento, setMedicamento] = useState(route.params.medicacoes.medicamento)
    const [horario, setHorario] = useState(route.params.medicacoes.horario)
    const [dias, setDias] = useState(route.params.medicacoes.dias)
    const [observacao, setObservacao] = useState(route.params.medicacoes.observacao)


    function cadastrar() {
        if (medicamento === '' || horario === '' || dias === '' || observacao === '') {
            Toast.show({
                type: 'info',
                text1: 'Atenção!',
                text2: 'Todos os campos devem ser preenchidos.'
            })
        } else {
            database.collection("medicacoes").doc(id).update({
                medicamento: medicamento,
                horario: horario,
                dias: dias,
                observacao: observacao
            })
            navigation.navigate('Medicações')
        }
    }

    function excluir() {
        if (Platform.OS === 'web') {
            deleteMedicacoes(id)
        }
        else {
            Alert.alert(
                "Atenção",
                "Você tem certeza que deseja excluir esse item?",
                [
                {
                    text: "Não",
                    onPress: () => navigation.navigate('Medicações'),
                    style: 'cancel'
                },
                { text: "Sim", onPress: () => {database.collection("medicacoes").doc(id).delete(), navigation.navigate('Medicações')} }
                ],
            )
        }
    }

    function deleteMedicacoes(id) {
        database.collection("medicacoes").doc(id).delete()
        navigation.navigate('Medicações')
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerMedico}>
                <Text style={styles.medicamento}>{medicamento}</Text>


            </View>

            <View style={styles.containerEdicao}>

                <TextInput
                    style={styles.input}
                    placeholder="Nome do medicamento"
                    onChangeText={setMedicamento}
                    value={medicamento}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Horário de uso"
                    onChangeText={setHorario}
                    value={horario}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Dias"
                    onChangeText={setDias}
                    value={dias}
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
    medicamento: {
        color:'#2B335A',
        fontWeight: 'bold',
        fontSize: 20

    }
});