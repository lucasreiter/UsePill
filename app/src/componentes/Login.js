import { useState } from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import firebase from '../configuracao/firebaseConfig'

export default function Login({ navigation }) {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    function callSave() {
        if (validarDados()) {
            setMessage('');
            logar()
        }
    }
    function limpar() {
        setPassword('')
        setEmail('')
    }

    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user.email)
                //limpadados()
                navigation.navigate('Perfis')

            })
            .catch((error) => {
                console.log(error.message)
            });

    }

    function logarGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const credential = result.credential
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user)
                navigation.navigate('Menu')

            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    function validarDados() {
        if (email == '') {
            setMessage("Digite um email")
            return false
        } if (password == '') {
            setMessage("Digite a senha")
            return false
        }
        return true
    }

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/login-bg.png')} resizeMode="cover" style={styles.image}>

                <View style={styles.logoContainer}>
                    {/* <Image source={require('../../assets/medpill.png')} resizeMode='contain' style={styles.logoTop} ></Image> */}
                    <Image source={require('../../assets/usepill-azul.png')} resizeMode='contain' style={styles.logoTop} ></Image>
                </View>

                <View style={styles.bodyContainer}>
                    <View style={styles.inputContainer}>

                        <TextInput
                            placeholder="Email"
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                            placeholderTextColor="#FFF"
                        />

                        {(message.search('email') > -1) ? <Text style={styles.textValida}>{message}</Text> : null}

                        <TextInput
                            placeholder="Senha"
                            style={styles.input}
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry={true}
                            placeholderTextColor="#FFF"
                        />
                        {(message.search('senha') > -1) ? <Text style={styles.textValida}>{message}</Text> : null}
                    </View>

                    <Text style={{ alignSelf: 'flex-end', marginRight: '15%', marginTop: 20, color: '#FBCB76' }}>Esqueceu sua senha?</Text>



                    <TouchableOpacity
                        style={styles.button}
                        onPress={callSave}
                    >
                        <Text style={styles.textobotao}>ENTRAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonGoogle}
                        onPress={logarGoogle}
                    >
                        <Image source={require('../../assets/google-icon.png')} resizeMode='contain' style={styles.logoGoogle} ></Image> 
                        <Text style={styles.textobotaoGoogle}>LOGAR COM GOOGLE</Text>
                    </TouchableOpacity>

                    <View style={styles.cadastrarContainer}>
                        <Text style={{ color: 'white' }}>Não possui uma conta?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Cadastro")}
                        >
                            <Text style={{ color: '#FBCB76' }}> Cadastre-se</Text>
                        </TouchableOpacity>

                    </View>

                    {/* ESTAMOS USANDO? */}
                    {(message.search('Não foi') > -1) ? <Text style={styles.text}>{message}</Text> : null} 

                </View>



            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 7,
        color: 'black'
    },
    bodyContainer: {
        flex: 3,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('100%'),
        height: hp('66.6%'),
    },
    logoContainer: {
        flex: 1,
        width: wp('100%'),
        height: hp('33.3%'),
        alignItems: 'center',
        justifyContent: 'center',
        //flexDirection: 'column'        
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    button: {
        alignItems: "center",
        width: wp('40%'),
        backgroundColor: "#83C4D8",
        padding: 10,
        borderRadius: 30,
        marginTop: 50
    },
    buttonGoogle: {
        alignItems: 'baseline',
        justifyContent: 'center',
        width: wp('35%'),
        padding: 10,
        borderWidth: 3,
        borderColor: 'white',
        marginTop: 50
    },
    textobotao: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 10,
    },
    textobotaoGoogle: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 10,
        marginLeft: 20
        
    },
    text: {
        fontSize: 10,
        color: 'red',
        textAlign: "left",
        marginLeft: '15%',
        marginTop: 3
    },
    textValida: {
        fontSize: 10,
        color: 'red',
        textAlign: "center",
        marginTop: 3
    },
    input: {
        padding: 5,
        width: wp('70%'),
        borderBottomColor: "white",
        borderBottomWidth: 1.5,
        color: "white",
        margin: 'auto',
        marginTop: 25
    },
    inputContainer: {
        width: wp('100%'),
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',

    },
    cadastrarContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 5,
    },
    logoTop: {
        position: 'absolute',
        width: wp('40%'),
        height: hp('40%'),
    },
    logoGoogle: {
        position: 'absolute',
        width: 20,
        height: 20,
    }

});











