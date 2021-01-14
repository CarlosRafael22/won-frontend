import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const modifiersMixin = {
    normal: () => css`
        width: 11rem;
        height: 3.3rem;
    `,

    large: () => css`
        width: 20rem;
        height: 5.9rem;
    `,

    hideOnMobile: () => css`
    ${media.lessThan('medium')`
        width: 5.8rem;
        height: 4.5rem;

        svg {
            height: 4.5rem;
            pointers-event: none;
        }

        .text { display: none }
    `}
    `
}

export const Wrapper = styled.div<LogoProps>`
    color: ${props => props.theme.colors[props.color!]};
    
    ${props => !!props.size && modifiersMixin[props.size]}

    ${props => props.hideOnMobile && modifiersMixin.hideOnMobile}
    
`
