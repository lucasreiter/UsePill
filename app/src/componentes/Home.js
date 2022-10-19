//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';




export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.cabecalho}>
          <Image source={require('../../assets/agenda.png')} resizeMode='stretch' style={styles.imgHeader}  ></Image>
          <Text style={styles.textHeader}>O que temos para hoje?</Text>

        </View>

      </View>

      <View style={styles.boxContainer}>

        <View style={styles.box}>
          <TouchableOpacity
            style={styles.inner}
            onPress={() => navigation.navigate("Médicos")}
          >
            <Image source={require('../../assets/medicos.png')} resizeMode='cover'  ></Image>
          </TouchableOpacity>
          <View style={styles.teste}>
            <Text style={styles.texto} >MÉDICOS</Text>
          </View>
        </View>



        <View style={styles.box}>
          <TouchableOpacity
            style={styles.inner}
            onPress={() => navigation.navigate("Medicações")}
          >
            <Image source={require('../../assets/medicamentos.png')} resizeMode='cover'  ></Image>
          </TouchableOpacity>
          <View style={styles.teste}>
            <Text style={styles.texto}>MEDICAMENTOS</Text>
          </View>

        </View>


        <View style={styles.box}>
          <TouchableOpacity
            style={styles.inner}
            onPress={() => navigation.navigate("Dados")}
          >
            <Image source={require('../../assets/ficha.png')} resizeMode='cover'  ></Image>
          </TouchableOpacity>
          <View style={styles.teste}>
            <Text style={styles.texto}>FICHA MÉDICA</Text>
          </View>

        </View>

        <View style={styles.box}>
          <TouchableOpacity
            style={styles.inner}
            onPress={() => navigation.navigate("Listar Tarefas")}
          >
            <Image source={require('../../assets/agendamento.png')} resizeMode='cover'  ></Image>
          </TouchableOpacity>
          <View style={styles.teste}>
            <Text style={styles.texto}>AGENDAMENTOS</Text>
          </View>

        </View>

        <View style={styles.box}>
          <TouchableOpacity
            style={styles.inner}

          >
            <Image source={require('../../assets/nutricao.png')} resizeMode='cover'  ></Image>
          </TouchableOpacity>
          <View style={styles.teste}>
            <Text style={styles.texto}>NUTRIÇÃO</Text>
          </View>

        </View>

        <View style={styles.box}>
          <TouchableOpacity
            style={styles.inner}

          >
            <Image source={require('../../assets/sos.png')} resizeMode='cover'  ></Image>
          </TouchableOpacity>
          <View style={styles.teste}>
            <Text style={styles.texto}>CONTATOS</Text>
          </View>

        </View>


      </View>

    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#83c4d8'

  },
  header: {
    width: wp('100%'),
    height: hp('15%'),
    backgroundColor: '#fbcb76',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15

  },
  cabecalho: {   
    //backgroundColor: '#fbcb76',
    width: wp('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: hp('4%')  
   
  },
  boxContainer: {
    width: wp('100%'),
    height: hp('85%'),
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
    color: '#2b335a',
    marginRight: 20  

  },
  imgHeader: {
    width: wp('20%'),
    height: hp('10%')
  }

});

