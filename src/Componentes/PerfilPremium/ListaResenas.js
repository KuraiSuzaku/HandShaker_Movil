import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Componentes from './Indice';

export default ListaResenas = ({ resenas }) => {
    return(
        <View>
            <Text style={Estilos.Titulo}>
                Reseñas
            </Text>
            {
                resenas.map((r, i) => (
                    <Componentes.Resena
                        {...r}
                        />
                ))
            }
        </View>
    );
}

const Estilos = StyleSheet.create({
    Titulo: {    
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 12,
        marginLeft: 26,
    },
})