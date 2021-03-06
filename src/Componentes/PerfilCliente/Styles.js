import { StyleSheet } from 'react-native';
import Colors from '../../Estilos/Colores';

const Styles = StyleSheet.create({
    Content: {
        flex: 8,
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: Colors.fondo,
    },
    SectionContainer: {
        borderTopWidth: 1,
        borderColor: Colors.separador,
    },
    ProfileImage: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 50,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Label: {
        color: Colors.label,
        fontWeight: 'bold',
        paddingVertical: 5,
        paddingLeft: 5,
        fontSize: 13,
    },
    SectionLabel: {
        alignSelf:'center',
        color: Colors.negro,
    },
    InfoLabel: {
        fontSize: 10,
        textAlign: 'center',
        fontWeight: 'normal',
    },
    Input: {
        color: Colors.etiquetas,
        backgroundColor: Colors.blanco,
        marginHorizontal: 5,
        paddingHorizontal: 20/2,
        paddingVertical: 2,
        borderRadius: 25/2,
        height: 25,
        fontSize: 12,
        maxWidth: 300,
    },
    Button: {
        backgroundColor: Colors.fondoBotonOscuro,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginVertical: 10,
        alignSelf: 'center',
        alignContent: 'center',
    },
    ButtonLabel: {
        color: Colors.letrasSobreNegro,
        fontWeight: 'bold',
        fontSize: 15,
    },
    TabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    Tab: {
        borderBottomWidth: 2,
        width: 205,
    },
    TabLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
        paddingVertical: 2,
    },
    ActiveTab: {
        color: Colors.simbolos,
        borderColor: Colors.simbolos,
    }
});

export default Styles;