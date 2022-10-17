import { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message'
import { FontAwesome } from '@expo/vector-icons'
import firebase from "../configuracao/firebaseConfig"

export default function CadastroUsuarios({navigation}) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('')

    function callSave() {
        if (validarDados()) {
            setMessage('');
            save()
        }
    }
    

    function save() {
        if (email === '' || password === '') {
            Toast.show({
                type: 'info',
                text1: 'Atenção!',
                text2: 'Todos os campos devem ser preenchidos'
            })
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Login')
            })
            .catch((error) => {
                console.log(error.message)
            });
        }
    }


    function validarDados() {
        if (nome == '') {
            setMessage("Digite Nome!")
            return false
        } if (sobrenome == '') {
            setMessage("Digite Sobrenome!")
            return false
        } if (email == '') {
            setMessage("Digite E-mail!")
            return false
        } if (password == '') {
            setMessage("Digite Senha!")
            return false
        }
        return true
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/cadastro-bg.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.bodyContainer}>

                    {/* <View style={styles.inputContainer}> */}
                    <TextInput
                        placeholder="Nome"
                        style={styles.input}
                        onChangeText={setNome}
                        value={nome}
                        placeholderTextColor='#FFF'
                    />
                    {(message.search('Nome') > -1) ? <Text style={styles.textValida}>{message}</Text> : null}

                    <TextInput
                        placeholder="Sobrenome"
                        style={styles.input}
                        onChangeText={setSobrenome}
                        value={sobrenome}
                        placeholderTextColor='#FFF'
                    />
                    {(message.search('Sobrenome') > -1) ? <Text style={styles.textValida}>{message}</Text> : null}

                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholderTextColor='#FFF'
                    />
                    {(message.search('E-mail') > -1) ? <Text style={styles.textValida}>{message}</Text> : null}

                    <TextInput
                        placeholder="Senha"
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholderTextColor='#FFF'
                    />
                    {(message.search('Senha') > -1) ? <Text style={styles.textValida}>{message}</Text> : null}

                    {/* </View> */}


                    {/* {(message.search('EMAIL') > -1) | (message.search('SENHA') > -1) | (message.search('NOME') > -1) | (message.search('SOBRENOME') > -1) ? <Text style={styles.text}>{message}</Text> : null} */}


                    <TouchableOpacity
                        style={styles.button}
                        onPress={callSave}
                    >
                        <Text style={styles.textobotao}>CADASTRAR</Text>
                    </TouchableOpacity>

                    {(message.search('Registro') > -1) ? <Text style={styles.text}>{message}</Text> : null}

                </View>

                <View style={styles.logoContainer}>
                    <Image source={require('../../assets/usepill-branco.png')} resizeMode='contain' style={styles.logoBot} ></Image>
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
        width: wp('100%'),
        height: hp('66.6%'),        
    },
    logoContainer: {
        flex: 1,
        width: wp('100%'), 
        height: hp('33.3%'),
        //flexDirection: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        //margin: 'auto'        
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    button: {
        alignItems: "center",
        justifyContent: 'center',
        width: wp('40%'),
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
    textValida: {
        fontSize: 12,
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
        marginTop: 5
    },
    inputContainer: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoBot: {
        //position: 'absolute',
        width: wp('30%'),
        height: hp('30%'),
        marginTop: hp('5%')
    }

});












