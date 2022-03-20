import React from 'react';
import './InicioApp.css';
// import TablaPronosticoClima from '../TablaPronosticoClima/TablaPronosticoClima';
import TablaUsuarios from '../TablaUsuarios/TablaUsuarios';


class InicioApp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='ContenidoInicio'>
                <br></br>
                <h1>Usuarios</h1>
                <TablaUsuarios></TablaUsuarios>
            </div>
        );
    }
  }

  export default InicioApp;