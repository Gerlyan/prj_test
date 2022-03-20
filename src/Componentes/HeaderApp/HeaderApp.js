import React from 'react';
import NavBarApp from './NavBarApp/NavBarApp';

const logo = "https://analisis.cr/wp-content/uploads/2020/09/logo_menu.png";

class HeaderApp extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return (
            <header className="App-header">
                <div width="100%">
                    <img src={logo} className="logo"></img>        
                </div>                
                <NavBarApp></NavBarApp>
            </header>
        );
    }
  }

  export default HeaderApp;