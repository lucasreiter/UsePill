//import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
//import jwt_decode from "jwt-decode";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message'
import Teste from './src/componentes/Teste';
import Login from './src/componentes/Login';
import CadastroUsuarios from './src/componentes/CadastroUsuario';
import Medicos from './src/componentes/Medicos';
import EditarMedicos from './src/componentes/EditarMedicos';
import CadastroDadosPessoais from './src/componentes/CadastroDados'
import CadastroMedicos from './src/componentes/CadastroMedicos';
import ListarMedicos from './src/componentes/Medicos';
import ListarDados from './src/componentes/Dados';
import EditarDados from './src/componentes/EditarDados';
import CadastroMedicacoes from './src/componentes/CadastrarMedicacoes';
import ListarMedicacoes from './src/componentes/Medicacoes';
import EditarMedicacoes from './src/componentes/EditarMedicacoes';
import CadastroConsultas from './src/componentes/CadastrarConsultas';
import EditarConsultas from './src/componentes/EditarConsultas';
import ListarConsultas from './src/componentes/Consultas';
import CadastroContatos from './src/componentes/CadastroContatos';
import EditarContatos from './src/componentes/EditarContatos';
import ListarContatos from './src/componentes/Contatos';
import Home from './src/componentes/Home';
import CadastrarTarefas from './src/componentes/CadastrarTarefa'
import ListaTarefas from './src/componentes/ListaTarefas';
import Perfis from './src/componentes/Perfis';



const Stack = createStackNavigator();


export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        options={{
          title: '',
          headerStyle:  { backgroundColor: '#83C4D8' , headerTintColor: '#FFF' },

          headerShown: false,
        
        }}>
        <Stack.Screen
          name="Teste"
          component={Teste}
          options={{
            headerShown: false,          
          }}
        />

        <Stack.Screen name="Login" component={Login} options={{ headerStyle: { backgroundColor: '#83C4D8',  headerTintColor: '#FFF' }, headerShown: false, title: '' }  } />
        <Stack.Screen name="Cadastro" component={CadastroUsuarios}  options={{ headerStyle: { backgroundColor: '#83C4D8',  headerTintColor: '#FFF' }, title: '' }  } />
        <Stack.Screen name="Cadastrar Médicos" component={CadastroMedicos} options={{ headerStyle: { backgroundColor: '#83C4D8' }, headerTintColor: '#FFF'}} />
        <Stack.Screen name="Editar Médicos" component={EditarMedicos} options={{ headerStyle: { backgroundColor: '#83C4D8' }, headerTintColor: '#FFF' }} />
        <Stack.Screen name="Médicos" component={ListarMedicos} options={{ headerStyle: { backgroundColor: '#83C4D8' }, headerTintColor: '#FFF' }} />
        <Stack.Screen name="Cadastro Dados Pessoais" component={CadastroDadosPessoais} options={{ headerStyle: { backgroundColor: '#2b335a' }, headerTintColor: '#FFF' }} />
        <Stack.Screen name="Dados" component={ListarDados} options={{ headerStyle: { backgroundColor: '#83C4D8' }, headerTintColor: '#FFF' }}  />
        <Stack.Screen name="Editar Dados" component={EditarDados} options={{ headerStyle: { backgroundColor: '#83C4D8' }, headerTintColor: '#FFF' }}  />
        <Stack.Screen name="Cadastrar Medicações" component={CadastroMedicacoes} options={{ headerStyle: { backgroundColor: '#83C4D8' }, headerTintColor: '#FFF' }} />
        <Stack.Screen name="Editar Medicações" component={EditarMedicacoes} options={{ headerStyle: { backgroundColor: '#83C4D8' }, headerTintColor: '#FFF' }} />
        <Stack.Screen name="Medicações" component={ListarMedicacoes} options={{ headerStyle: { backgroundColor: '#83C4D8' }, headerTintColor: '#FFF' }} />
        <Stack.Screen name="Cadastrar Consultas" component={CadastroConsultas} />
        <Stack.Screen name="Editar Consultas" component={EditarConsultas} />
        <Stack.Screen name="Consultas" component={ListarConsultas} />
        <Stack.Screen name="Cadastrar Contatos" component={CadastroContatos} />
        <Stack.Screen name="Editar Contatos" component={EditarContatos} />
        <Stack.Screen name="Contatos" component={ListarContatos} />
        <Stack.Screen name="Menu" component={Home} options={{ headerStyle: { backgroundColor: '#fbcb76' }, headerTintColor: '#2B335A', title: '' }} />
        <Stack.Screen name="Agenda" component={CadastrarTarefas}  options={{ headerStyle: { backgroundColor: '#83C4D8' }, headerTintColor: '#FFF', title: '' }}  />
        <Stack.Screen name="Listar Tarefas" component={ListaTarefas} options={{ headerStyle: { backgroundColor: '#83C4D8' }, headerTintColor: '#FFF' }}  />
        <Stack.Screen name="Perfis" component={Perfis}  options={{ headerStyle: { backgroundColor: '#2b335a' }, headerTintColor: '#FFF', title: '' }} />


      </Stack.Navigator>
      {/* <Stack.Navigator initialRouteName="Teste">
        <Stack.Screen 
        name="Teste" 
        component={Teste} 
        options={{
          title: 'Teste de Rotas',
          headerStyle:{
            backgroundColor: '#121212'
          },
          headerTintColor: '#FFF'

        }}
        />
   
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={CadastroUsuarios} />
        <Stack.Screen name="Cadastrar Medicos" component={CadastroMedicos} options={{headerStyle:{backgroundColor:'#83C4D8'}, headerTintColor: '#FFF'}} />
        <Stack.Screen name="Editar Medicos" component={EditarMedicos} options={{headerStyle:{backgroundColor:'#83C4D8'}, headerTintColor: '#FFF'}} />
        <Stack.Screen name="Medicos" component={ListarMedicos} options={{headerStyle:{backgroundColor:'#83C4D8'}, headerTintColor: '#FFF'}}/>
        <Stack.Screen name="Cadastro Dados Pessoais" component={CadastroDadosPessoais}  options={{headerStyle:{backgroundColor:'#2b335a'}, headerTintColor: '#FFF'}} />        
        <Stack.Screen name="Dados" component={ListarDados} />
        <Stack.Screen name="Editar Dados" component={EditarDados} />
        <Stack.Screen name="Cadastrar Medicacoes" component={CadastroMedicacoes} />
        <Stack.Screen name="Editar Medicacoes" component={EditarMedicacoes} />
        <Stack.Screen name="Medicacoes" component={ListarMedicacoes} />
        <Stack.Screen name="Cadastrar Consultas" component={CadastroConsultas} />
        <Stack.Screen name="Editar Consultas" component={EditarConsultas} />
        <Stack.Screen name="Consultas" component={ListarConsultas} />
        <Stack.Screen name="Cadastrar Contatos" component={CadastroContatos} />
        <Stack.Screen name="Editar Contatos" component={EditarContatos} />
        <Stack.Screen name="Contatos" component={ListarContatos} />
        <Stack.Screen name="Menu" component={Home} options={{headerStyle:{backgroundColor:'#fbcb76'}, headerTintColor: '#2B335A'}} />

       
      </Stack.Navigator> */}
      <Toast />
    </NavigationContainer>
  );
}