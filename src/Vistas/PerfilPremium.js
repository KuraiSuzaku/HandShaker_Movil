import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//////
import Colores from '../Estilos/Colores';
import * as Componentes from '../Componentes/Indice';
//////
export default PerfilPremium = () => {
    // PRUEBA
    const props = {
      currentUser: 'example@handshaker.com',
      profileUser: 'example@handshaker.com',
      imagenFondo : require('../../public/Images/test.jpg'),
      avatar : require('../../public/Profile/user.png'),
      valoracion : 2.5,
      nombre : 'María José Arellano',
      titulo : 'Lic. Diseño Gráfico',
      descripcion : 'Me dedico a crear páginas y aplicaciones',
      isPremium : true,
      publicaciones : [
                        { 
                          fecha: '12/03/2020',
                          contenido: 'Creando mi perfil de HandShaker',
                          imagen: require('../../public/Images/test.jpg')
                        },
                        {
                          fecha: '28/02/2021',
                          contenido: 'Lamento informar que estamos y estaremos muy retrasados en el desarrollo de nuestro proyecto'
                        },
                        {
                          fecha: '20/03/2021',
                          contenido: 'Si no es una cosa es otraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                        }
                      ],
      contacto : {
                    correo: 'a17310020@cet.mx',
                    telefono: '36-52-01-45',
                    celular: '+52 33-18-07-29-45',
                    domicilio: 'Calle Paseo de Los Brezos 727C, Tabachines, 45188 Zapopan, Jal.'
                  },
      costos : [
                {
                  titulo: 'Logo',
                  icono: (require('../../public/Icons/icon32.png')),
                  descripcion: 'Cuando estés satisfecho con tu logo personalizado, Puedes descargarlo como un archivo vectorial de alta calidad que puedes usar para tu página web, tarjetas de visita, mercancía o donde quieras.',
                  precio: 800
                },
                {
                  titulo: 'Marketing',
                  icono: require('../../public/Icons/icon32.png'),
                  descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet quis at mi congue id tempus, arcu. Amet interdum massa ut vel lectus quam sit diam feugiat.',
                  precio: 5000
                }
                ],
      resenas : [
                  {
                    nombre: 'Carlos Eduardo Cervera Flota',
                    valoracion: 5,
                    comentario: 'Me parecio excelente su trabajo',
                    fecha: '10/12/2020',
                    avatar: require('../../public/Profile/user.png'),
                  },
                  {
                    nombre: 'Daniel Alberto Castañeda Mejía',
                    valoracion: 3,
                    comentario: 'Odie cada momento y cada aspecto de su ser.\n0/100 si pudiera la despediria yo mismo.',
                    fecha: '10/12/2020',
                    avatar: require('../../public/Profile/user.png'),
                  }
                ],
      multimedia :  [
                      {
                        imagen: require('../../public/Images/test.jpg')
                      },
                      {
                        imagen: require('../../public/Images/test.jpg')
                      },
                      {
                        imagen: require('../../public/Images/test.jpg')
                      },
                      {
                        imagen: require('../../public/Images/test.jpg')
                      },
                      {
                        imagen: require('../../public/Images/test.jpg')
                      }
                    ]
    }
    //////
    return(
      <SafeAreaProvider style={Estilos.ContenedorApp}>
        <Componentes.EncabezadoApp />
        <Componentes.PerfilTrabajador.Contenedor
            {...props}
            />
        <Componentes.Navegacion />
      </SafeAreaProvider>
    );
}
// ESTILOS
const Estilos = StyleSheet.create({
  ContenedorApp: {
      flex: 1,
      backgroundColor: Colores.fondo,
  },
})