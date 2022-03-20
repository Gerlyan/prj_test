import React from 'react';
import TablaPronosticoClima from '../TablaPronosticoClima/TablaPronosticoClima';

class InicioApp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div >
                <br></br>
                <h1>Pronóstico del clima</h1>
                <TablaPronosticoClima></TablaPronosticoClima>
            </div>
        );
    }
  }

  export default InicioApp;