import React from 'react'
import { ApresentacaoCategoria, ApresentacaoContainer, ApresentacaoPrato } from './styles'

export type Props = {
    type: string
    name: string
    image: string
}

const Apresentacao = ({ type, name, image }: Props) => (
    <ApresentacaoContainer style={{ backgroundImage: `url(${image})` }}>
        <div className="container">
            <ApresentacaoCategoria>{type}</ApresentacaoCategoria>
            <ApresentacaoPrato>{name}</ApresentacaoPrato>
        </div>
    </ApresentacaoContainer>
)

export default Apresentacao