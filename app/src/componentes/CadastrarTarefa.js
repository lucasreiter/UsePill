import { Button, StyleSheet, Text, TextInput, View, Platform, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { useEffect, useState } from 'react';
import ListaTarefas from './ListaTarefas';
import { months } from 'moment';
import firebase from '../configuracao/firebaseConfig';
import Toast from 'react-native-toast-message'

const database = firebase.firestore()

export default function CadastrarTarefas({ navigation }) {
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const data = selectedStartDate
        ? selectedStartDate.format('DD-MM-YYYY').toString()
        : '';

    const [motivo, setMotivo] = useState('')
    const [medico, setMedico] = useState('')
 

    function cadastrar() {
        if (motivo === '' || medico === '' || data === '') {
            Toast.show({
                type: 'info',
                text1: 'Atenção!',
                text2: 'Todos os campos devem ser preenchidos.'
            })
        } else {
            database.collection("consultas").add({
                motivo: motivo,
                medico: medico,
                data: data
            })
            navigation.navigate('Listar Tarefas')
        } 
    }


    const renderItem = (item) => item.motivo != '' ?
        <ListaTarefas
        /> : null

    return (
        <View style={styles.container}>
            <CalendarPicker onDateChange={setSelectedStartDate}
                selectedDayColor={'#fbcb76'}
                onMonthChange={''}
                todayBackgroundColor={'#ef815c'}
                previousTitle={'<'}
                nextTitle={'>'}
                weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
                selectMonthTitle={'Selecione o mês de '}
                selectYearTitle={'Selecione o ano'}
                months={["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
                //nextTitleStyle={styles.nextTitleStyle}
                textStyle={styles.text}
            />

            <TextInput
                style={styles.input}
                defaultValue={motivo}
                onChangeText={setMotivo}
                placeholder="Informe o motivo da consulta"
                placeholderTextColor='#FFF'
            />
            <TextInput
                style={styles.input}
                defaultValue={medico}
                onChangeText={setMedico}
                placeholder="Informe o médico"
                placeholderTextColor='#FFF'
            />
            <TextInput
                editable={false}
                style={styles.input}
                defaultValue={data}
                placeholder="Data selecionada"
                placeholderTextColor='#FFF'
            />
            <TouchableOpacity
                style={styles.button}
                onPress={cadastrar}
            >
                <Text style={{ textAlign: 'center' }}>Cadastrar</Text>
            </TouchableOpacity>

            {/* <FlatList
        data={compromissos}
        renderItem={({item}) => renderItem(item)}
     
      /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#83c4d8',
        alignItems: 'center',
    },
    input: {
        marginTop: 18,
        color: '#fff',
        borderBottomColor: '#fff',
        borderBottomWidth: 1.5,
        width: '70%',
        padding: 5


        // //height: 40,
        // width: Dimensions.get('screen').width - 20,
        // borderWidth: 1,
        // borderRadius: 10,
        // padding: 10
    },
    button: {
        //width: Dimensions.get('screen').width - 100,
        width: '40%',
        backgroundColor: '#fbcb76',
        marginVertical: 10,
        padding: 10,
        borderRadius: 30,
        alignContent: 'center'
    },
    text: {
        color: '#2b335a',
        fontWeight: 'bold'
    },
  
});