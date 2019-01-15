import App, { container} from 'next/app'

class MyApp extends App {
  
  render() { 

    const { Component} = this.props
    console.log(this.props);
    
    return ( 
      <container>
        <div>
          <p>Estoy en todas las rutas</p>
        </div>
        <Component/>
      </container>
     );
  }
}
 
export default MyApp;