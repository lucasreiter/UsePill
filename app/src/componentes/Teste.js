import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Teste({ navigation }) {
  return (
    <View >
      <Text>Página de Teste</Text>



      <Button
        style
        title='Login'
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        style
        title='Cadastro Usuario'
        onPress={() => navigation.navigate('Cadastro')}
      />
      <Button
        style
        title='Cadastro de Medicos'
        onPress={() => navigation.navigate('Cadastrar Medicos')}
      />

      <Button
        style
        title='Listar Médicos'
        onPress={() => navigation.navigate('Medicos')}
      />

      <Button
        style
        title='Cadastro Dados'
        onPress={() => navigation.navigate('Cadastro Dados Pessoais')}
      />

      <Button
        style
        title='Listar Dados'
        onPress={() => navigation.navigate('Dados')}
      />
      <Button
        style
        title='Cadastrar Medicacoes'
        onPress={() => navigation.navigate('Cadastrar Medicacoes')}
      />
      <Button
        style
        title='Listar Medicacoes'
        onPress={() => navigation.navigate('Medicacoes')}
      />

      <Button
        style
        title='Cadastrar Consultas'
        onPress={() => navigation.navigate('Cadastrar Consultas')}
      />
      <Button
        style
        title='Listar Consultas'
        onPress={() => navigation.navigate('Consultas')}
      />
      <Button
        style
        title='Cadastrar Contatos'
        onPress={() => navigation.navigate('Cadastrar Contatos')}
      />
      <Button
        style
        title='Listar Contatos'
        onPress={() => navigation.navigate('Contatos')}
      />
      <Button
        style
        title='Menu'
        onPress={() =>  navigation.navigate('Menu')}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 20,
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
