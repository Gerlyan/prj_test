import React from 'react';
import axios from 'axios';
import './TablaPronosticoClima.css';
// import {Table} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'

class TablaPronosticoClima extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            estaCargado: false,
            elementos:[]
        }
        this.get_FilasTablaPronostico = this.get_FilasTablaPronostico.bind(this);        
    }

    componentDidMount(){
        const url = "http://localhost/weatherforecast";
        axios.get(url).then( 
            (res) => {
                console.log('exito');
                console.log(res.data);
                     this.setState({
                         error:null,
                         estaCargado: true,
                         elementos: res.data                        
                     });
            },
            (errores) => {
                console.log('error');
                this.setState({
                    error:errores,
                    estaCargado: true,
                    elementos: []
                });
            }                        
        );

    };

    get_FilasTablaPronostico(){
        if (this.state.error = null){
            if (!(this.state.estaCargado))
                return <tr><td>Cargando....</td></tr>
            else
            {
                let lista_items = this.state.elementos;
                lista_items = lista_items.map(            
                    (item,index) =>{
                        return (
                            <tr key={index.toString()}>
                                <th>{(index+1).toString()}</th>
                                <th>{item.fecha}</th>
                                <th>{item.temperaturaC}</th>
                                <th>{item.pronostico}</th>
                                <th>{item.humedad}</th>                        
                            </tr>                                
                        );                
                    }
                );
                return lista_items;
            }
        }
        else
        {
            let salidaEr= null;
            try {
                salidaEr = <tr><td>Ocurrió un problema en la consulta al API: {this.state.error.message}</td></tr>
            } catch (er) {
                salidaEr = null;
            }
            return salidaEr
            
        }
    }    

    render(){
        return (
            <Table striped bordered hover responsive="md" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fecha</th>
                        <th>Temperatura °C</th>
                        <th>Pronóstico</th>
                        <th>Humedad</th>
                    </tr>
                </thead>
                <tbody>  
                    {this.get_FilasTablaPronostico()}
                </tbody>
            </Table>
        );
    }
  }

  export default TablaPronosticoClima;