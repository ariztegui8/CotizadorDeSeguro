import React from 'react';
import PropTypes from 'prop-types';
import {primerMayuscula} from '../helper';

import styled from '@emotion/styled';

const ContenedorResumen = styled.div`
    padding: 15px;
    text-align: center;
    background-color: #fff;
    color: #ca0e0e;
    margin-top: 30px;
    border-radius: 8px;
    border: 2px solid gray;
`

const ListaUl = styled.ul`
    list-style: none;
    
`

const ListaLi = styled.li`
    font-weight: 500;
    color: black;
`

const SpanLi = styled.span`
    padding: 0px 5px;
    color: #ca0e0e;
`

const Resumen = ({datos}) => {

    //Extraer de datos
    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '') return null;

    return (
        <ContenedorResumen>
            <h2>Resumen de Cotizacion</h2>
            <ListaUl>
                <ListaLi>Marca: <SpanLi>{primerMayuscula(marca)}</SpanLi></ListaLi>
                <ListaLi>Modelo: <SpanLi>{primerMayuscula(year)}</SpanLi></ListaLi>
                <ListaLi>Plan: <SpanLi>{primerMayuscula(plan)}</SpanLi></ListaLi>
            </ListaUl>
        </ContenedorResumen>
    )
};

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;
