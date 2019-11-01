import React from "react";
import styled from 'styled-components';

const BaseInput = styled.input`
    padding: 5px;
    background-color: ${props => props.disabled ? 'grey' : 'default'};
    border: ${props =>  props.error ? '1px solid red' : 'default'
};
`

export default BaseInput;
