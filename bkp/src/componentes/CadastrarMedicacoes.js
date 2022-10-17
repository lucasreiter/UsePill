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
            navigation.navigate('Medicacoes')
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/cadastro-bg.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.bodyContainer}>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome da Medicação"
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

                    <TouchableOpacity
                        style={styles.button}
                        onPress={cadastrar}
                    >
                        <Text style={styles.textobotao}>SALVAR</Text>
                    </TouchableOpacity>
                </View>



                <View style={styles.logoContainer}>
                    <Image source={require('../../assets/medpill.png')} resizeMode='contain' style={styles.logoBot} ></Image>
                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        backgroundColor: "#2b335a",
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