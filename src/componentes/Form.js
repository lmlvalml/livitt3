import React  from "react";
import {useForm} from "react-hook-form";
import { useState } from "react";

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
        render(){
            return(
                <div>
                    <form>
                        <div className="form">
                            <div className="p1">
                                <label>Selecciona cuantas habitaciones quieres  
                                    <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3+">3</option>
                                    </select>
                                </label>
                               
                            </div>
                            <div className="p2">
                                <label>Cuanto piensas pagar al mes? </label>
                                <input className="arriendo" type="range" name="" value="" min="290000" max="1000000" step="100000"  />
                            </div>
                            <div className="p3">
                                <label>Que prefieres? </label>
                                <input className="" type="button" name="Lavadora en el departamento"/>
                                <input className="" type="button" name="Lavanderia en el edificio"/>
                                <input className="" type="button" name="Conexiones para lavadora"/>
                            </div>
                            <div className="p4">
                            <label>Que tal el estacionamiento? </label>
                                <input className="" type="button" name="Con estacionamiento"/>
                                <input className="" type="button" name="Sin estacionamineto"/>
                            </div>
                            <div>
                                <label>Alguna otra caracteristica? </label> 
                                <input className="" type="button" name="Piscina"/>
                                <input className="" type="button" name="Quincho"/>
                                <input className="" type="button" name="GYM"/>
                                <input className="" type="button" name="Bodega"/>
                                <input className="" type="button" name="Aire acondicionado"/>
                                <input className="" type="button" name="Co work"/>
                            </div>
                            <div>
                                <label>Tienes mascotas?</label>
                                <input className="mascota" type="button" name="Perro"/>
                                <input className="mascota" type="button" name="Gato"/>
                                <input className="mascota" type="button" name="No tengo"/>    
                            </div>
                            

                        </div>
                    </form>

                </div>

            )
        }
}
export default Form;