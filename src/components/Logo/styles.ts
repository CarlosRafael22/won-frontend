import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const modifiersMixin = {
    normal: () => css`
        width: 11rem;
        height: 3.3rem;
    `,

    large: () => css`
        width: 20rem;
        height: 5.9rem;
    `
}

export const Wrapper = styled.div<LogoProps>`
    color: ${props => props.theme.colors[props.color!]};
    
    ${props => !!props.size && modifiersMixin[props.size]}
`
