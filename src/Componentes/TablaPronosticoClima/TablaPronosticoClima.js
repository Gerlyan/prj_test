import React from 'react';
import axios from 'axios';
// import {Table} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
/**
 * Sugerencias
 * 1. Que limiten la cantidad de elementos de la tabla mediante los "props" de entrada del componente
 * 2. Agregar una nueva columnas a la tabla, segun la respuesta del json
 * 3. Crear un nuevo componente para el "Pronóstico de hoy" y renderizarlo en el componente InicioApp después del elemento TablaPronosticoClima
 * 3.1. Componente para el "Pronóstico de hoy" puede ser simple con etiquetas vacias al iniciar, y use un botón que realice la consulta al API y llené la información del componente.
 * 3.2. Usar estados para mantener la infomación actual del propóstico que se consultó.
 */

class TablaPronosticoClima extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            estaCargado: false,
            elementos:[]
        }
        this.get_FilasTablaPronostico = this.get_FilasTablaPronostico.bind(this);
        this.get_FilasTablaUsuario = this.get_FilasTablaUsuario.bind(this);        
        
    }

    componentDidMount(){
        // console.log('hola');
        // fetch("https://localhost:44369/weatherforecast/").then(
        //     (respuesta) => respuesta.json()).then(
        //         (resultado) => {
        //             //console.log(resultado);
        //             this.setState({
        //                 error:null,
        //                 estaCargado: true,
        //                 elementos: resultado
                        
        //             });
        //         },
        //         //Manejo de errores
        //         (errores) =>{
        //             this.setState({
        //                 error:errores,
        //                 estaCargado: true,
        //                 elementos: []
        //             });
        //         }
        //     )

        // {'header':{"Access-Control-Allow-Origin": "*",
        // 'Access-Control-Allow-Methods': 'GET',
        // 'Access-Control-Allow-Credentials':'false',
        // 'Content-Type':'application/json'}
        // }        

        // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        // console.log('hola');
        // const url = "https://localhost:44369/weatherforecast/";
        // const headersGet = {
        //     'rejectUnauthorized': 'false',
        //     'Access-Control-Allow-Origin':'true'
        // };        
        // axios.get(url,headersGet).then( 
        //     res => {
        //         console.log(res);
        //             // this.setState({
        //             //     error:null,
        //             //     estaCargado: true,
        //             //     elementos: res                        
        //             // });
        //     });

        const headersGet = {
            'mode': 'no-cors',
            'headers': {
            	'Access-Control-Allow-Origin': '*',
        	}
        };
        const url = "http://192.168.0.5:62710/weatherforecast";
        axios.get(url,headersGet).then( 
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
        


        // //documentación del API // https://jsonplaceholder.typicode.com/
        // const url = "https://jsonplaceholder.typicode.com/users";
        // axios.get(url).then( 
        //     (res) => {
        //         // console.log(res);
        //         this.setState({
        //             error:null,
        //             estaCargado: true,
        //             elementos: res.data
        //         });
        //     },
        //     //Manejo de errores
        //     (errores) => {
        //         // console.log(res);
        //         this.setState({
        //             error:errores,
        //             estaCargado: true,
        //             elementos: []
        //         });
        //     }
        // );
    };

    get_FilasTablaPronostico(){
        // let lista_items = [{"fecha":"2022-03-20T12:20:48.0849785-06:00","temperaturaC":40,"pronostico":"Soleado","humedad":80},{"fecha":"2022-03-21T12:20:48.0879478-06:00","temperaturaC":-5,"pronostico":"Ventoso","humedad":10},{"fecha":"2022-03-22T12:20:48.0879524-06:00","temperaturaC":20,"pronostico":"Ventoso","humedad":40},{"fecha":"2022-03-23T12:20:48.0879528-06:00","temperaturaC":42,"pronostico":"Nublado","humedad":84},{"fecha":"2022-03-24T12:20:48.087953-06:00","temperaturaC":50,"pronostico":"Soleado","humedad":100},{"fecha":"2022-03-25T12:20:48.0879532-06:00","temperaturaC":-2,"pronostico":"Soleado","humedad":4},{"fecha":"2022-03-26T12:20:48.0879535-06:00","temperaturaC":39,"pronostico":"Tormentoso","humedad":78},{"fecha":"2022-03-27T12:20:48.0879537-06:00","temperaturaC":49,"pronostico":"Soleado","humedad":98},{"fecha":"2022-03-28T12:20:48.087954-06:00","temperaturaC":-10,"pronostico":"Nublado","humedad":20},{"fecha":"2022-03-29T12:20:48.0879542-06:00","temperaturaC":9,"pronostico":"Parcialmente nublado","humedad":18}];
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
    get_FilasTablaUsuario(){
        if (this.state.error == null){
            if (!(this.state.estaCargado))
                return <tr><td>Cargando....</td></tr>
            else
            {
                let lista_items = this.state.elementos;
                lista_items = lista_items.map(            
                    (item,index) =>{
                        return (
                            <tr key={index.toString()}>
                                <th>{item.id}</th>
                                <th>{item.name}</th>
                                <th>{item.username}</th>
                                <th>{item.email}</th>
                                <th>{item.address.suite}</th>                        
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
                    {/* {this.get_FilasTablaUsuario()} */}
                </tbody>
            </Table>
        );
    }
  }

  export default TablaPronosticoClima;