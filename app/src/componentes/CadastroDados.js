import { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import firebase from '../configuracao/firebaseConfig'
import Toast from "react-native-toast-message";

const database = firebase.firestore()

export default function CadastroDadosPessoais({ navigation }) {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNasc] = useState('');
    const [alergias, setAlergias] = useState('');
    const [sangue, setSangue] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');


    function save() {
        if (altura === '' || peso === '' || dataNascimento === '') {
            Toast.show({
                type: 'info',
                text1: 'Atenção!',
                text2: 'Todos os campos devem ser preenchidos.'
            })
        }  else {
            database.collection("dados").add({
                altura: altura,
                peso: peso,
                dataNascimento: dataNascimento
            })
            navigation.navigate('Dados')
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.bodyContainer}>

                <TextInput
                    placeholder="Nome Completo"
                    style={styles.input}
                    onChangeText={setNome}
                    value={nome}
                    placeholderTextColor='#FFF'
                />

                <TextInput
                    placeholder="Data Nascimento"
                    style={styles.input}
                    onChangeText={setDataNasc}
                    value={dataNascimento}
                    placeholderTextColor='#FFF'

                />

                <TextInput
                    placeholder="Alergias"
                    style={styles.input}
                    onChangeText={setAlergias}
                    value={alergias}
                    placeholderTextColor='#FFF'

                />

                <TextInput
                    placeholder="Tipo Sanguíneo"
                    style={styles.input}
                    onChangeText={setSangue}
                    value={sangue}
                    placeholderTextColor='#FFF'

                />


                <TextInput
                    placeholder="Altura"
                    style={styles.input}
                    onChangeText={setAltura}
                    value={altura}
                    placeholderTextColor='#FFF'

                />

                <TextInput
                    placeholder="Peso"
                    style={styles.input}
                    onChangeText={setPeso}
                    value={peso}
                    placeholderTextColor='#FFF'

                />


                
                <TouchableOpacity
                    style={styles.button}
                    onPress={save}
                >
                    <Text style={styles.textobotao}>CADASTRAR</Text>
                </TouchableOpacity>

            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#83c4d8'
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
        backgroundColor: "#fbcb76",
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
        marginTop: 18

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
