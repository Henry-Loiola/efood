import styled from 'styled-components'
import fundo from '../../assets/hero.png'
import { breakpoints, cores } from '../../styles'

export const HeaderStyle = styled.header`
    background-image: url(${fundo});
    height: 163px;
    align-items: center;
    
    .container {
        max-width: 1024px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;

        @media (max-width: ${breakpoints.tablet}) {
            padding: 39px 10px;
        }

        @media (max-width: ${breakpoints.mobile}) {
            display: inline-block
        }
}
`

export const Logo = styled.img`
    max-width: 125px;
    height: 57.5px;
    width: 100%;
    @media (max-width: ${breakpoints.mobile}) {
        margin: 15px;
    }
`

export const LinkRestaurantes = styled.a`
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    color: ${cores.vermelho};
    margin-top: 39px;
    @media (max-width: ${breakpoints.mobile}) {
        margin-top: 0;
    }
`

export const TextoCart = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-top: 39px;
    cursor: pointer;

    @media (max-width: ${breakpoints.mobile}) {
        margin-top: 0;
    }
`