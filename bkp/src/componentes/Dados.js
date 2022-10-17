import { useState, useEffect } from 'react'
import { Text, TextInput, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import firebase from '../configuracao/firebaseConfig'
import React from 'react'

const database = firebase.firestore()

export default function ListarDados({ navigation }) {
    const [lista, setLista] = useState()

    useEffect(() => {
        database.collection("dados")
            .onSnapshot((query) => {
                const list = []
                query.forEach(doc => {
                    list.push({ ...doc.data(), id: doc.id })
                })
                setLista(list)
            })
    }, [])

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.containerDados}>
                <TextInput
                    placeholder="Nome Completo"
                    style={styles.input}
                    onChangeText={setNome}
                    value={nome}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Data de Nascimento"
                    onChangeText={setDataNasc}
                    value={dataNascimento}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Alergias"
                    onChangeText={setAlergias}
                    value={alergias}
                />

                <TextInput
                    placeholder="Tipo Sanguíneo"
                    style={styles.input}
                    onChangeText={setSangue}
                    value={sangue}

                />

                <TextInput
                    style={styles.input}
                    placeholder="Altura"
                    onChangeText={setAltura}
                    value={altura}
                />


                <TextInput
                    style={styles.input}
                    placeholder="Peso"
                    onChangeText={setPeso}
                    value={peso}
                />
                {/* <FlatList
                    data={lista}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.dados}>


                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Editar Dados', { dados: item })}
                                >
                                    <Text style={styles.texto}>{item.nome}</Text>
                                    <Text>{item.dataNascimento}`</Text>
                                    <Text>{item.alergias}</Text>
                                    <Text>{item.sangue}</Text>
                                    <Text>{item.altura}</Text>
                                    <Text>{item.peso}</Text>
                                </TouchableOpacity>


                            </View>

                        )
                    }}

                /> */}
                </View>

                {/* <FlatList
                    data={lista}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.dados}>


                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Editar Dados', { dados: item })}
                                >
                                    <Text>{item.nome}</Text>
                                    <Text>{item.dataNascimento}</Text>
                                    <Text>{item.alergias}</Text>
                                    <Text>{item.sangue}</Text>
                                    <Text>{item.altura}</Text>
                                    <Text>{item.peso}</Text>
                                </TouchableOpacity>


                            </View>

                        )
                    }}

                /> */}

                <View style={styles.addContainer}>
                    <View style={styles.addMedico}>
                        <Text
                            style={styles.Add}
                            onPress={() => navigation.navigate('Cadastrar Medicos')}
                        >
                            +
                    </Text>

                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B335A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerDados: {
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
    dados: {
        //backgroundColor: '#FBCB76',
        width: 300,
        padding: 15,
        margin: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addContainer: {
        alignItems: 'flex-end'
    },
    addMedico: {
        backgroundColor: '#ef815c',
        width: 90,
        height: 90,
        padding: 15,
        margin: 10,
        borderRadius: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Add: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 50,
    },
    texto: {        
        textDecorationLine: 'underline',
        textDecorationColor: '#fff',
        textDecorationStyle: 'solid',
        marginBottom: 20,

      
        
    }
});

