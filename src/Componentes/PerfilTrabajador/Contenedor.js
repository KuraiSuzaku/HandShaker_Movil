import React from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
//////
import * as Componentes from '../Indice';
//////
export default Contenedor = (props) => {
    const checkPremium = () => {
        let owner;
        if(props.profileUser === props.currentUser)
            owner = true;
        else
            owner = false;
        if(props.isPremium) {
            return(<Componentes.PerfilPremium.Navegacion {...props} owner={owner} />);
        } else {
            return(<Componentes.PerfilTrabajador.Navegacion {...props} />); // <<< Navegación del perfil trabajador normal
        }
    }
    return(
        <View style={Estilos.Contenido}>
            <ScrollView>
                <Componentes.PerfilTrabajador.EncabezadoPerfil 
                    {...props}
                    />
                {checkPremium()}
            </ScrollView>
        </View>
    );
};

// ESTILOS
const Estilos = StyleSheet.create({
    Contenido: {
        flex: 10,
    },
});