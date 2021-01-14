import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints} from 'styled-media-query'

type Breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: Breakpoint,
  greaterThan?: Breakpoint
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${lessThan && media.lessThan(lessThan)`
      display: block;
    `}

    ${greaterThan && media.greaterThan(greaterThan)`
      display: block;
    `}
  `}
`
