import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Colores from '../../Estilos/Colores'
import Job from './Job'
import PremiumWorkerC from './PremiumWorkerC'
import IndividualCategory from './IndividualCategory'
import { PremiumWorker } from "./../../Classes/PremiumWorker"
import Works from "./Works.json"
import { Category } from "./../../Classes/Category"

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            premiumWorker: null,
            category: null
        }
    }

    setPremiumWorker(pw){
        this.setState({premiumWorker:pw});
    }

    RandomWorker(){
        let PremiumWorkers = new PremiumWorker();  
        PremiumWorkers.GetPremiumWorkers().then(res=>{
            // console.log(res[0]);
            // console.log("==============================");
            // console.log(res[0].Name);
            this.setPremiumWorker(res[1]);
        })
    }

    category(){
        cat = new Category();
        console.log("Categorias")
        cat.GetAll()
            .then( (res) => {
                
                res.forEach(element => {
                    console.log("CATEGORIA Nombre "+element.Name);
                        element.Categories.forEach(profesiones => {
                            Trabajador=  new PremiumWorker();
                            Trabajador.GetPremiumWorkersWithProfession(profesiones.Name).then( (trabajadoresWithProfession) => {
                                trabajadoresWithProfession.forEach(premiumWorker => {
                                   console.log("trabajador de "+premiumWorker.Name+" nombre profesion " + profesiones.Name+ " foto " + premiumWorker.ProfilePicture.Path )
                               });
                                
                            });                   
 
                            console.log("       profesion "+profesiones.Name )
                            console.log("       imagen "+profesiones.ImageProfession.Path )
                        });

                });                   
            }); 
    }
      

    render() {
       // this.RandomWorker();
        this.state.category ?
        this.category()
                         : this.category()
                        this.state.category = 0
        return (
            <ScrollView style={ styles.bg }>
                {
                    // this.state.premiumWorker ?
                    // <PremiumWorkerC premiumWorker={ this.state.premiumWorker }/> :
                    //     this.RandomWorker() 
                    
                    
                }
                {
                    


                }
                <Text style={ styles.subtitle }>Categorías</Text>
                <Categories/>
                <Text style={ styles.subtitle }>Trabajos</Text>
                {/* <Job jobTitle="Consultores"/>
                <Job jobTitle="Técnicos"/>
                <Job jobTitle="Jardineros"/> */}
                {
                    data.categories[3].works.map(item =>
                        <Job jobTitle={ item.name } key={ item.name } uri={ item.uri } workers={ item.workers.slice(0, 3) }/>)
                }
                
            </ScrollView>
        )
    }
}

function Categories(){
    return(
        <ScrollView horizontal={true} style={ styles.categories }>
            { data.categories.map(item => 
                <IndividualCategory name={ item.name } key={ item.name } uri={ item.uri }/>) 
            }
        </ScrollView>
    )
}

const data = {
    categories: [
        {
            name: "Postres",
            uri: "https://blog.rappi.com/wp-content/uploads/2018/11/recetas-postres-caseros.jpg",
            workers: [
                {
                    name: "Juan"
                }
            ]
        },
        {
            name: "Moda",
            uri: "https://audaces.com/wp-content/uploads/2020/08/Estilos-de-moda-Cu%C3%A1l-es-el-tuyo.jpg",
            workers: [
                {
                    name: "Carlos"
                }
            ]
        },
        {
            name: "Comida",
            uri: "https://cdn.kiwilimon.com/articuloimagen/30434/28870.jpg",
            workers: [
                {
                    name: "Eduardo"
                }
            ]
        },
        {
            name: "Hogar",
            uri:"http://econanosolutions.com/nanonews/wp-content/uploads/2016/08/hogar1-825x510.jpg",
            works: [
                {
                    name: "Fontanería",
                    workers: [
                        {
                            name: "Diego",
                            uri: "https://lamenteesmaravillosa.com/wp-content/uploads/2018/09/hombre-creido-pensando-que-sabe.jpg"
                        }
                    ],
                    uri: "https://www.fontaneria.mx/item/?file=20200115123141Fontanero_en_Guadalajara.jpg&width=800&l=20190604122326logo.png"
                },
                {
                    name: "Jardinería",
                    workers: [
                        {
                            name: "Juan",
                            uri: "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"
                        }
                    ],
                    uri: "https://conceptodefinicion.de/wp-content/uploads/2015/05/jardineria-.jpg"
                }
            ],
        },
        {
            name: "Otros",
            uri: "https://www.vippng.com/png/detail/396-3969462_menu-button-png-icono-de-tres-puntos.png",
            workers: [
                {
                    name: "Marian"
                }
            ]
        }
    ],
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: Colores.fondo,
        padding: 10
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
    

})