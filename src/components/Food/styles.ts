import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
    background-color: ${cores.vermelho};
    color: ${cores.palhaClara};
    max-width: 100%;
    display: flex;
    flex-direction: column;
`

export const Image = styled.img`
    margin: 8px;
`

export const Title = styled.h3`
    font-size: 16px;
    font-weight: 900;
    margin: 0 8px;
`

export const Description = styled.p`
    font-size: 14px;
    margin: 8px 8px 0px 8px;
`

export const AddCartButton = styled(Link)`
    background-color: ${cores.rosa};
    color: ${cores.vermelho};
    border: none;
    padding: 4px 0;
    margin: 8px;
    font-weight: bold;
`