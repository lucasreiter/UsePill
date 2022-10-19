//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';




export default function Perfis({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.textHeader}>SELECIONE O PERFIL</Text>


            </View>


            <View style={styles.boxContainer}>

                <View style={styles.box}>
                    <TouchableOpacity
                        style={styles.inner}
                        onPress={() => navigation.navigate("Menu")}
                    >
                        <Image source={require('../../assets/ana.png')} resizeMode='cover' style={styles.foto}  ></Image>
                    </TouchableOpacity>
                    <View style={styles.teste}>
                        <Text style={styles.texto} >ANA</Text>
                    </View>
                </View>



                <View style={styles.box}>
                    <TouchableOpacity
                        style={styles.inner}
                        onPress={() => navigation.navigate("Menu")}
                    >
                        <Image source={require('../../assets/fernanda.png')} resizeMode='cover' style={styles.foto}  ></Image>
                    </TouchableOpacity>
                    <View style={styles.teste}>
                        <Text style={styles.texto}>FERNANDA</Text>
                    </View>

                </View>


                <View style={styles.box}>
                    <TouchableOpacity
                        style={styles.inner}
                        onPress={() => navigation.navigate("Menu")}
                    >
                        <Image source={require('../../assets/lucas.png')} resizeMode='cover' style={styles.foto}  ></Image>
                    </TouchableOpacity>
                    <View style={styles.teste}>
                        <Text style={styles.texto}>LUCAS</Text>
                    </View>

                </View>

                <View style={styles.box}>
                    <TouchableOpacity
                        style={styles.inner}
                        onPress={() => navigation.navigate("Menu")}
                    >
                        <Image source={require('../../assets/ruan.png')} resizeMode='cover' style={styles.foto}  ></Image>
                    </TouchableOpacity>
                    <View style={styles.teste}>
                        <Text style={styles.texto}>RUAN</Text>
                    </View>

                </View>

            </View>

            <View style={styles.footer}>
            <Image source={require('../../assets/usepill-branco.png')} resizeMode='contain' style={styles.logoBot}  ></Image>


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
    header: {
        width: wp('100%'),
        height: hp('15%'),
        backgroundColor: '#2B335A',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',       
        marginTop: hp('10%')

    }, 
    footer: {
        width: wp('100%'),
        height: hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',

    },
    boxContainer: {
        width: wp('100%'),
        height: hp('75%'),
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    box: {
        width: wp('40%'),
        height: hp('20%'),
        padding: 5,
        borderRadius: 30,
        marginTop: 25,
        justifyContent: 'center',
        //alignItems: 'center'

    },
    inner: {
        flex: 1,
        backgroundColor: '#2b335a',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    teste: {
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#FFF',
        marginTop: 5
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#FFF',

    },
    foto: {
        width: wp('30%'),
        height: hp('15%'),        
    },
    logoBot: {
        //position: 'absolute',
        width: wp('30%'),
        height: hp('30%'),
        marginBottom: hp('28%')
       
    }

});
