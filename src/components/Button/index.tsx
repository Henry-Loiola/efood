import React from 'react'
import { BotaoContainer } from './styles'

export type Props = {
    type?: 'link' | 'tag'
    title?: string
    to?: string
    children: string
    onCLick?: () => void
}

const Botao = ({ to, children, type = 'tag' }: Props) => {
    return (
        <BotaoContainer type={type} to={to as string}>
            {children}
        </BotaoContainer>
    )
}

export default Botao