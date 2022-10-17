import React, { useState } from 'react'
import { ImageBackground, Text, TextInput, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import firebase from '../configuracao/firebaseConfig'
import Toast from 'react-native-toast-message'

const database = firebase.firestore()

export default function CadastroContatos({ navigation }) {
    const [nomeCompleto, setNomeCompleto] = useState('')
    const [endereco, setEndereco] = useState('')
    const [telefone, setTelefone] = useState('')

    function cadastrar() {
        if (nomeCompleto === '' || endereco === '' || telefone === '') {
            Toast.show({
                type: 'info',
                text1: 'Atenção!',
                text2: 'Todos os campos devem ser preenchidos.'
            })
        } else {
            database.collection("contatos").add({
                nomeCompleto: nomeCompleto,
                telefone: telefone,
                endereco: endereco
            })
            navigation.navigate('Contatos')
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/cadastro-bg.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.bodyContainer}>

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
    }

});