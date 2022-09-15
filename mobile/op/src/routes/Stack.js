import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import stylesVar from '../styles/stylesVar'

import * as Pages from '../pages'

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerTitleAlign: 'center', headerTintColor: stylesVar.toolbarTitle.color, headerStyle:{...stylesVar.toolbar}
        }}>
            <Stack.Screen name='User_Term' component={Pages.User_Term} options={{title:'Termos de Uso', headerShown:false}} />
            <Stack.Screen name='Home' component={Pages.Home} options={{title:'Painel Inicial'}} />
            <Stack.Screen name='Rep_Ocorrencia' component={Pages.Rep_Ocorrencia} options={{title:'Reportar Ocorrência'}} />
            <Stack.Screen name='Chamados' component={Pages.Chamados} options={{title:'Chamados Abertos'}} />
        </Stack.Navigator>
    )
}

const StackHome = createNativeStackNavigator()

const StackHomeButton = () => {
    return(
        <StackHome.Navigator initialRouteName='Home' screenOptions={{
            headerTitleAlign: 'center', headerTintColor: stylesVar.toolbarTitle.color, headerStyle:{...stylesVar.toolbar}
        }}>
            <StackHome.Screen name='Home' component={Pages.Home} options={{title:'Painel Inicial'}} />
            <StackHome.Screen name='Rep_Ocorrencia' component={Pages.Rep_Ocorrencia} options={{title:'Reportar Ocorrência'}} />        
        </StackHome.Navigator>
    )
}

const StackForm = createNativeStackNavigator()

const StackFormButton = () => {
    return(
        <StackForm.Navigator initialRouteName='Chamados' screenOptions={{
            headerTitleAlign: 'center', headerTintColor: stylesVar.toolbarTitle.color, headerStyle:{...stylesVar.toolbar}
        }}>
            <StackForm.Screen name='Chamados' component={Pages.Chamados} options={{title:'Chamados Abertos'}} />
        </StackForm.Navigator>
    )
}

const StackSettings = createNativeStackNavigator()

const StackSettingsButton = () => {
    return(
        <StackSettings.Navigator initialRouteName='Settings' screenOptions={{
            headerShown: true, headerTitleAlign: 'center', headerTintColor: stylesVar.toolbarTitle.color, headerStyle:{...stylesVar.toolbar}
        }}>
            <StackSettings.Screen name='Settings' component={Pages.Settings} options={{title:'Configurações'}} />
            <StackSettings.Screen name='Edit_Profile' component={Pages.Edit_Profile} options={{title:'Editar Perfil'}} />
            <StackSettings.Screen name='Log_Out' component={Pages.Log_Out} options={{headerShown:false}} />
        </StackSettings.Navigator>
    )
}

export { StackHomeButton, StackFormButton, StackSettingsButton }