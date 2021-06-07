import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Colores from '../../Estilos/Colores'
import Job from './Job'
import PremiumWorkerC from './PremiumWorkerC'
import IndividualCategory from './IndividualCategory'
import { PremiumWorker } from "./../../Classes/PremiumWorker"
import { Category } from "./../../Classes/Category"
import FilterByCategory from './FilterByCategory'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.handleCategorySelected = this.handleCategorySelected.bind(this)
        this.handleCategories = this.handleCategories.bind(this)
        this.handleProfesiones = this.handleProfesiones.bind(this)
        this.state={
            premiumWorker: null,
            categories: [],
            profesiones: [],
            categorySelected: 'Todas'
        }
        // Esta es la peor practica posible y se debería evitar a toda costa
        this.category();
        
        
    }

    setPremiumWorker(pw){
        this.setState({premiumWorker:pw});
    }

    handleCategorySelected (text){
        this.setState({ categorySelected: text })
        this.profesiones()
    }

    handleProfesiones(profesiones){
        this.setState({ profesiones: profesiones })
        ////console.log(profesiones)
    }

    RandomWorker(){
        let PremiumWorkers = new PremiumWorker();  
        PremiumWorkers.GetPremiumWorkers().then(res=>{
            // //console.log(res[0]);
            // //console.log("==============================");
            // //console.log(res[0].Name);
            this.setPremiumWorker(res[1]);
        })
    }

    handleCategories(categories){
        this.setState({ categories: categories })
    }

    category(){
        ////console.log("===== Categorias =====")
        Cat = new Category();
        Cat.GetAll().then((categorias) => {
            ////console.log(categorias)
            this.handleCategories(categorias)        
        }); 
    }

    inicioProfesiones(){
        //console.log("aqui 5")
        Cat = new Category();
        Cat.GetAll().then((categorias) => {
            categorias.forEach(categoria => {
                ////console.log("-----> CATEGORIA: " + categoria.Name + " <-----");
                
                    // //console.log("Aqui")
                    // //console.log(categoria.Categories)
                    this.handleProfesiones(categoria.Categories)
                
            })
        })
    }
      
    profesiones(){
        //console.log("aqui 2")
        Cat = new Category();
        Cat.GetAll().then((categorias) => {
            categorias.forEach(categoria => {
                ////console.log("-----> CATEGORIA: " + categoria.Name + " <-----");
                if(categoria.Name == this.state.categorySelected){
                    // //console.log("Aqui")
                    // //console.log(categoria.Categories)
                    this.handleProfesiones(categoria.Categories)
                    categoria.Categories.forEach(profesiones => {
                        // Trabajador =  new PremiumWorker();

                        // Trabajador.GetPremiumWorkersWithProfession(profesiones.Name).then((trabajadoresWithProfession) => {
                        //     trabajadoresWithProfession.forEach(trabajador => {
                        //         ////console.log("trabajador de "+trabajador.Name+" nombre profesion " + profesiones.Name+ " foto " + trabajador.ProfilePicture.Path )
                        //     });  
                        // }); 
                        // //console.log("Profesion "+profesiones.Name )
                        ////console.log("Imagen "+profesiones.ImageProfession.Path )

                    });
                }
            });            
        }); 
    }

    render() {
        // this.category()
        // this.RandomWorker();
        // this.state.category ?
        // // this.category()
        // //                  : this.category()
        // //                 this.state.category = 0
        return (
            // <FilterByCategory/>
            <ScrollView style={ styles.bg }>
                {
                    this.state.premiumWorker ?
                    <PremiumWorkerC premiumWorker={ this.state.premiumWorker }/> :
                        this.RandomWorker()     
                }

                <Text style={ styles.subtitle }>Categorías</Text>
                <Categories categories={ this.state.categories } handleCategorySelected={ this.handleCategorySelected }/>
                <Text style={ styles.subtitle }>Trabajos: { this.state.category }</Text>
                {
                    this.state.profesiones.map(item => 
                        <Job jobTitle={ item.Name } profesiones={ item } navigation={ this.props.navigation } key={ item.Name } uri={ 'https://reactnative.dev/img/tiny_logo.png'/*item.ImageProfession.Path*/ } /*workers={ item.workers.slice(0, 3) }*/ />)
                }
            </ScrollView>
        )
    }
}

function Categories(props){
    return(
        <ScrollView horizontal={true} style={ styles.categories }>
            { props.categories.map(item => 
                <IndividualCategory name={ item.Name } key={ item.Name } handleCategory={ props.handleCategorySelected } uri='https://reactnative.dev/img/tiny_logo.png'/>) 
            }
        </ScrollView>
    )
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