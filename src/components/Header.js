import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
    background-color: #ca0e0e;
    padding: 10px;
    font-weight: bold;
    color: #ffffff;
`;

const TextoHeader = styled.h1`
    font-size: 32px;
    margin: 0;
    text-align: center;
`

const Header = ({titulo}) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
    )
};

Header.propTypes ={
    titulo: PropTypes.string.isRequired
}

export default Header
