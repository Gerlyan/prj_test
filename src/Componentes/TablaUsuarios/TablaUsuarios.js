import React from 'react';
import axios from 'axios';
import './TablaUsuarios.css';
// import {Table} from 'react-bootstrap';
import Table from 'react-bootstrap/Table'

class TablaUsuarios extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            estaCargado: false,
            elementos:[]
        }
        this.get_FilasTablaUsuario = this.get_FilasTablaUsuario.bind(this);        
        
    }

    componentDidMount(){    
        //documentación del API // https://jsonplaceholder.typicode.com/
        const url = "https://jsonplaceholder.typicode.com/users";
        axios.get(url).then( 
            (res) => {
                // console.log(res);
                this.setState({
                    error:null,
                    estaCargado: true,
                    elementos: res.data
                });
            },
            //Manejo de errores
            (errores) => {
                this.setState({
                    error:errores,
                    estaCargado: true,
                    elementos: []
                });
            }
        );
    };

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
                            <tr key={index.toString()} >
                                <td className='cColId'>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>                        
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
            <Table striped bordered hover responsive="md">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Nombre de usuario</th>
                        <th>Correo electrónico</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>  
                    {this.get_FilasTablaUsuario()}
                </tbody>
            </Table>
        );
    }
  }

  export default TablaUsuarios;