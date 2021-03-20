import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//////
import {
  PerfilPremium
} from './src/Movil/Vistas/Indice';
//////
export default App = () => {
  // PRUEBA
  const imagenFondo = require('./public/Images/test.jpg');
  const avatar = require('./public/Profile/user.png');
  const valoracion = 2.5;
  const nombre = 'María Jośe Arellano';
  const titulo = 'Lic. Diseño Gráfico';
  const descripcion = 'Me dedico a crear páginas y aplicaciones';
  const publicaciones = [
                          { 
                            fecha: '12/03/2020',
                            contenido: 'Creando mi perfil de HandShaker',
                            imagen: require('./public/Images/test.jpg')
                          },
                          {
                            fecha: '28/02/2021',
                            contenido: 'Lamento informar que estamos y estaremos muy retrasados en el desarrollo de nuestro proyecto'
                          }
                        ];
  //////
  return (
    <NavigationContainer>
      <PerfilPremium 
        imagenFondo={imagenFondo}
        avatar={avatar}
        valoracion={valoracion}
        nombre={nombre}
        titulo={titulo}
        descripcion={descripcion}
        publicaciones={publicaciones}
        />
    </NavigationContainer>
  );
};
