import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
    max-width: 1024px;
    margin: 80px auto;
    @media (max-width: ${breakpoints.tablet}) {
        margin: 20px 10px;
    }
    @media (max-width: ${breakpoints.mobile}) {
        margin: 20px 10px;
    }
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 60px;
    row-gap: 48px;

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;
    }
    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
        margin: 0 10px;
        row-gap: 10px;
    }
`