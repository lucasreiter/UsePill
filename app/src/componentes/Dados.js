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
            <View style={styles.containerDados}>

                {/* <FlatList
                        data={lista}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.dados}>

                                    <TouchableOpacity
                                    onPress={() => navigation.navigate('Editar Dados', { dados: item })}
                                >
                                    <Text>Nome: {item.nome}</Text>
                                    <Text>Data de Nascimento: {item.dataNascimento}</Text>
                                    <Text>Alegrgias: {item.alergias}</Text>
                                    <Text>Tipo Sanguíneo: {item.sangue}</Text>
                                    <Text>Altura: {item.altura}</Text>
                                    <Text>Peso: {item.peso}</Text>
                                </TouchableOpacity>

                                </View>                              
                                                            
                            )
                        }}

                    /> */}

                <FlatList
                    data={lista}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.dados}>


                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Editar Dados', { dados: item })}
                                >
                                    <Text style={styles.texto}>Nome: {item.nome}</Text>

                                </TouchableOpacity>


                            </View>
                        )
                    }}
                />

                <FlatList
                    data={lista}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.dados}>


                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Editar Dados', { dados: item })}
                                >
                                    <Text style={styles.texto}>Data de Nascimento: {item.dataNascimento}</Text>

                                </TouchableOpacity>

                            </View>
                        )
                    }}
                />

                <FlatList
                    data={lista}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.dados}>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Editar Dados', { dados: item })}
                                >
                                    <Text style={styles.texto}>Alergias: {item.alergias}</Text>

                                </TouchableOpacity>

                            </View>
                        )
                    }}
                />

                <FlatList
                    data={lista}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.dados}>


                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Editar Dados', { dados: item })}
                                >
                                    <Text style={styles.texto}>Tipo Sanguíneo: {item.sangue}</Text>

                                </TouchableOpacity>

                            </View>
                        )
                    }}
                />

                <FlatList
                    data={lista}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.dados}>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Editar Dados', { dados: item })}
                                >
                                    <Text style={styles.texto}>Altura: {item.altura}</Text>
                                </TouchableOpacity>

                            </View>
                        )
                    }}
                />

                <FlatList
                    data={lista}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.dados}>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Editar Dados', { dados: item })}
                                >
                                    <Text style={styles.texto}>Peso: {item.peso}</Text>
                                </TouchableOpacity>

                            </View>
                        )
                    }}
                />




            </View>
 
            <View style={styles.addContainer}>
                { lista ? null : <View style={styles.addMedico}>
                    <Text
                        style={styles.Add}
                        onPress={() => navigation.navigate('Cadastro Dados Pessoais')}
                    >
                        +
                    </Text>
                </View>}
                
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
        //flexDirection: 'column',
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
        color:'#2B335A',
        fontWeight: 'bold',
        fontSize: 18

    }
});

