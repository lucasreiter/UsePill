import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import firebase from '../configuracao/firebaseConfig'

const database = firebase.firestore()

export default function ListaTarefas({ navigation }) {
    const [lista, setLista] = useState()

    useEffect(() => {
        database.collection("consultas").onSnapshot((query) => {
            const list = []
            query.forEach(doc => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setLista(list)
        })
    }, [])


    return (
        <View style={styles.container}>
            <View >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={lista}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.evento}>
                                <Text
                                    style={styles.motivoTxt}
                                //onPress={() => navigation.navigate('editar')}
                                >
                                    Dr. {item.medico}
                                </Text>
                                <Text
                                    style={styles.dataTxt}
                                >
                                    {item.data}
                                </Text>
                            </View>
                        )
                    }}
                />

                <View style={styles.addContainer}>
                    <View style={styles.addEvento}>
                        <Text
                            style={styles.Add}
                            onPress={() => navigation.navigate('Agenda')}
                        >
                            +
                    </Text>

                    </View>

                </View>
            </View>
            {/* <TouchableOpacity
            onPress={() => navigation.navigate('Cadastrar Tarefas')}
            style={styles.buttonPlus}
            >
                <Text style={styles.plusIcon}>
                    
                    +</Text>
            </TouchableOpacity> */}
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
    evento: {
        backgroundColor: '#FBCB76',
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
    addEvento: {
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
    motivoTxt: {
        color: '#2B335A',
        fontWeight: 'bold',
        fontSize: 17
    },
    dataTxt: {
        color: 'white',
        fontWeight: 'bold'
    },
    // plusIcon: {
    //     color: '#fff',
    //     fontSize: 30,
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    // buttonPlus: {
    //     position: "absolute",
    //     backgroundColor: '#83c4d8',
    //     bottom: 80,
    //     left: 20,
    //     width: 60,
    //     height: 60,
    //     borderRadius: 50,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },

});
