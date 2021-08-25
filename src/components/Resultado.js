import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const Mensaje = styled.p`
    background-color: #fff;
    color: #ca0e0e;
    margin-top: 20px;
    padding: 10px;
    text-align: center;
    border-radius: 8px;
    border: 2px solid gray;
    font-weight: 500;
`

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: 10px;
    border: 2px gray solid;
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    border-radius: 8px;
`

const TextoCotizacion = styled.p`
    color: black;
    padding: 10px;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    
`

const SpanResultado = styled.span`
    padding: 0px 5px;
    color: #ca0e0e;
`

const Resultado = ({cotizacion}) => {


    return (
        
            (cotizacion === 0)
            ? <Mensaje>Elige Marca, Año y Tipo de Seguro</Mensaje> 
            : 
                (
                    <ResultadoCotizacion className="animate__backInUp">    
                        <TextoCotizacion>El total es: $ <SpanResultado>{cotizacion}</SpanResultado></TextoCotizacion>
                    </ResultadoCotizacion>
                )
        
    )
};

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado
