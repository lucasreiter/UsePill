import React, { useState } from 'react'
import { ImageBackground, Text, TextInput, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import firebase from '../configuracao/firebaseConfig'
import Toast from 'react-native-toast-message'

const database = firebase.firestore()


export default function CadastroMedicacoes({ navigation }) {
    const [medicamento, setMedicamento] = useState('')
    const [horario, setHorario] = useState('')
    const [dias, setDias] = useState('')
    const [observacao, setObservacao] = useState('')



    function cadastrar() {
        if (medicamento === '' || horario === '' || dias === '' || observacao === '') {
            Toast.show({
                type: 'info',
                text1: 'Atenção!',
                text2: 'Todos os campos devem ser preenchidos.'
            })
        } else {
            database.collection("medicacoes").add({
                medicamento: medicamento,
                horario: horario,
                dias: dias,
                observacao: observacao
            })
            navigation.navigate('Medicações')
        }
    }

    return (
        <View style={styles.container}>
                <View style={styles.bodyContainer}>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome da Medicação"
                        onChangeText={setMedicamento}
                        value={medicamento}
                        placeholderTextColor='#FFF'
                    />


                    <TextInput
                        style={styles.input}
                        placeholder="Horário de uso"
                        onChangeText={setHorario}
                        value={horario}
                        placeholderTextColor='#FFF'
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Dias"
                        onChangeText={setDias}
                        value={dias}
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
    input: {
        padding: 5,
        width: '70%',
        borderBottomColor: "white",
        borderBottomWidth: 1.5,
        color: "white",
        marginTop: 5

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