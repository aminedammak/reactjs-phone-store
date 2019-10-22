import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    background: transparent;
    border: 2px solid var(--lightBlue);
    border-color: ${anyvariable => anyvariable.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    
    box - shadow: none;
    border - radius: 3px;
    color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"}; 
    &:not([disabled]) {
        &: hover{
        background: var(--lightBlue);
        color: white;
        }
    }
    &[disabled] {
        color: var(--mainGrey);
        border-color: var(--mainGrey);
    }
}
`