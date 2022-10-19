import { useState, useEffect } from 'react'
import { Text, TextInput, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import firebase from '../configuracao/firebaseConfig'
import React from 'react'

const database = firebase.firestore()

export default function ListarMedicacoes({ navigation }) {
    const [lista, setLista] = useState()

    useEffect(() => {
        database.collection("medicacoes")
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
                <FlatList
                    data={lista}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.medicacoes}>
                                <Text
                                    style={styles.itens}
                                    onPress={() => navigation.navigate('Editar Medicações', { medicacoes: item })}
                                >
                                    {item.medicamento}
                                </Text>

                            </View>



                        )
                    }}
                />
                <View style={styles.addContainer}>
                    <View style={styles.addMedicacoes}>
                        <Text
                            style={styles.Add}
                            onPress={() => navigation.navigate('Cadastrar Medicações')}
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
    addContainer: {
        alignItems: 'flex-end'
    },  
    medicacoes: {
        backgroundColor: '#FBCB76',
        width: 300,
        padding: 15,
        margin: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addMedicacoes: {
        backgroundColor: '#ef815c',
        width: 90,
        height: 90,
        padding: 15,
        margin: 10,
        borderRadius: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itens: {
        color: '#2B335A',
        fontWeight: 'bold',
        fontSize: 17
    },
    Add: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 50
    }

});

