import { useState, useEffect } from 'react'
import { Text, TextInput, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import firebase from '../configuracao/firebaseConfig'
import React from 'react'

const database = firebase.firestore()

export default function ListarContatos({ navigation }) {
    const [lista, setLista] = useState()

    useEffect(() => {
        database.collection("contatos")
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
                        <View>
                            <Text
                            onPress={() => navigation.navigate('Editar Contatos', { contatos: item})}
                            >
                                {item.nomeCompleto}
                            </Text>

                        </View>

                    )
                }}
                
                
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
