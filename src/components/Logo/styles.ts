import styled from 'styled-components'

import { LogoProps } from '.'

export const Wrapper = styled.div<LogoProps>`
    color: ${props => props.theme.colors[props.color!]}
`
