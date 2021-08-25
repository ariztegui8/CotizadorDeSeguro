import React, { useState } from 'react';
import {obtenerDiferenciaYear, calcularMarca, obtenerPlan} from '../helper';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const Campo = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
    font-weight: 500;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    border: 2px solid gray;
    -webkit-appearance: none;
    padding: 10px;
    border-radius: 8px;
    outline: none;
    `;

const Button = styled.button`
    background-color: #ca0e0e;
    font-size: 16px;
    width: 100%;
    padding: 15px;
    border-radius: 8px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    margin-top: 30px;
    transition: background-color .3s ease;
    
    &:hover{
        background-color: #a01010;
    }
`

const InputRadio = styled.input`
    margin: 0 15px;
`

const Error = styled.div `
    background-color: #f35959;
    color: #801212;
    padding: 15px;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
`


const Formulario = ({guardarResumen, guardarCargando}) => {

    const [datos, guardarDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, guardarError] = useState(false);


    //Extraer los valores del state
    const {marca, year, plan} = datos;


    //Leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = (e)=>{
        guardarDatos({
            ...datos, 
            [e.target.name] : e.target.value
        })
    }


    //Cuando el usuario presiona submit
    const cotizarSeguro = (e)=>{
        e.preventDefault();
        
        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        //Una base de 2000
        let resultado = 2000;

        //Obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(year);
   

        //Por cada año restar el 3%
        resultado -= ((diferencia * 3) * resultado) / 100;


       //Incremento de las marcas por porcentaje
        resultado = calcularMarca(marca) * resultado;
    


        //Basico aumenta 20%
        //Completo 60%
        const incrementoPlan = obtenerPlan(plan);
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

        guardarCargando(true);

        setTimeout(()=>{

            //Elimina el spinner
            guardarCargando(false);

            //Pasa la informacion al componente principal
            guardarResumen({
                cotizacion: Number(resultado),
                datos
            });

        }, 2000);

       


        //Total
    }


    return (
        <form
            onSubmit={cotizarSeguro}
        >

            {error ? <Error>Todos los campos son obligatorios</Error> : null}
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="chevrolet">Chevrolet</option>
                    <option value="citroen">Citroen</option>
                    <option value="fiat">Fiat</option>
                    <option value="ford">Ford</option>
                    <option value="peugeot">Peugeot</option>
                    <option value="renault">Renault</option>
                    <option value="toyota">Toyota</option>
                    <option value="volkswagen">Volkswagen</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select
                     name="year"
                     value={year}
                     onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === 'basico'}
                    onChange={obtenerInformacion}
                /> Basico

                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === 'completo'}
                    onChange={obtenerInformacion}
                /> Completo
            </Campo>

            <Button type="submit">Cotizar</Button>
        </form>
    )
};

Formulario.propTypes = {
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}

export default Formulario
