import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import {Card} from 'react-native-elements';
import EncabezadoApp from './../EncabezadoApp'
import Navegacion from './../Navegacion'
import Colores from '../../Estilos/Colores'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class SobreNosotros extends Component {
    render() {
        return (
            <SafeAreaProvider>
                <EncabezadoApp style={ styles.enc }/>
                
        
          <ScrollView  >
                         <Card containerStyle={styles.Tarjeta}>
          <View   style={ {flex:10} } >
                    <Image 
                        style={ styles.img }
                        source={require("../../../public/Images/HandShakerLogo2.png")}
                    />

                        <Image 
                        style={ styles.imgName }
                        source={require("../../../public/Images/nombreLogo.png")}
                    />

                <Text    style={ styles.Descripcion }>
                HandShaker es una aplicación la cual tiene dos principales misiones. La primera es mejorar la forma en la que los trabajadores independientes se promocionan, logrando así un mayor alcance de clientes lo cual significa una mayor probabilidad de conseguir trabajos y por consecuencia ingresos monetarios. La segunda misión es optimizar la búsqueda de trabajadores independientes, brindando opciones más afines a las necesidades, mayor seguridad y confianza respecto al trabajador contratado.
                </Text>

                </View>  
                </Card>

                <Text    style={ styles.Title }>
                DESARROLLARES
                 </Text>


                <Card containerStyle={styles.Tarjeta}>
            <Card.Image
                source={require("../../../public/Images/Brenda.jpg")}
                resizeMode='contain'
                style={styles.Imagen}
          
                />
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.Text}>
                 Brenda Samantha Avila De La Torre
                </Text>
            </View>


            
        </Card>

        <Card containerStyle={styles.Tarjeta}>
            <Card.Image
                source={require("../../../public/Images/DaniBoy.jpg")}
                resizeMode='contain'
                style={styles.Imagen}
          
                />
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.Text}>
                 Daniel Alberto Castañeda Mejía
                </Text>
            </View>


            
        </Card>


        <Card containerStyle={styles.Tarjeta}>
            <Card.Image
                source={require("../../../public/Images/fotoRene.jpg")}
                resizeMode='contain'
                style={styles.Imagen}
          
                />
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.Text}>
                René Francisco Coss y León Monterde
                </Text>
            </View>


            
        </Card>

        <Card containerStyle={styles.Tarjeta}>
            <Card.Image
                source={require("../../../public/Images/fotoRene.jpg")}
                resizeMode='contain'
                style={styles.Imagen}
          
                />
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.Text}>
                Carlos Eduardo Cervera Flota
                </Text>
            </View>


            
        </Card>



            </ScrollView>


          

            <Navegacion style={ styles.nav }/>

        </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 3
    },
    bg: {
        flex: 1,
        backgroundColor: Colores.fondo,
        padding: 10
    },
    Tarjeta: {
        borderRadius: 20,
        flex: 1,
        backgroundColor: Colores.fondo,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    categories: {
        flexDirection: "row",
        marginBottom: 10
    },
    nav:{
        flex:1
    },
    enc:{
        flex: 1
    },
    home:{
        flex: 10
    },
    img: {
        padding: 10,
        alignSelf: 'center',
        resizeMode: "contain",
        flex: 1,
        height:200,
        width: 200
    },
    imgName: {
        alignSelf: 'center',
        resizeMode: "contain",
        flex: 1,
        height: 100,
        width: 300
    },
    Descripcion: {
        alignSelf: 'center',
        resizeMode: "contain",
        textAlign: 'center',
        fontSize: 18,
        padding: 10,
        flex: 8,
        width: 300
    },
    Title: {
        alignSelf: 'center',
        resizeMode: "contain",
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
        marginTop:10,
       fontWeight: "bold",
        width: 300
    },
    Text: {
        flex: 1,
        color: Colores.etiquetas,
        fontSize: 16,
        paddingHorizontal: 15,
        marginTop: 5,
        fontWeight: "bold",
        textAlign: 'center'
    },
    Imagen: {
        borderRadius: 15
    },
})