import React from 'react';
import {
    ActivityIndicator,
    View
} from 'react-native';
import Colors from '../Estilos/Colores';

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{
                flex: 
                    this.props.flex ?
                    this.props.flex :
                    1
                ,
                justifyContent: 'center'
            }}>
                <ActivityIndicator
                    size={
                        this.props.size ?
                        this.props.size :
                        'large'
                    }
                    color={
                        this.props.color ?
                        this.props.color :
                        Colors.simbolos
                    }
                />
            </View>
        );
    }
}