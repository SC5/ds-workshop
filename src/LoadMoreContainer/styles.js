import styled, { css } from 'styled-components'
import {
  isCircular,
  withSize,
  withColor,
} from 'styled-utils'

export const LoadMoreContainer = styled.div`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  height: ${p => p.theme.sizes.height};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0px 1.0em;
  cursor: pointer;
  outline: none;
  border: 1px solid;
  border-color: transparent;
  border-radius: ${p => p.theme.sizes.radius};
  box-sizing: border-box;
  line-height: 1.5;
  position: relative;
  user-select: none;
  text-decoration: none;

  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }
`

export const Label = styled.span`
  margin: 0;
  margin-left: 0.5em;
  padding: 0 1em 0 0.5em;
  display: inline-flex;
  border-radius: 0 ${p => p.theme.sizes.radius} ${p => p.theme.sizes.radius} 0;
  height: ${p => (p.theme.sizes.height.split('em')[0] - 0.1 + 'em')};
  line-height: ${p => p.theme.sizes.height};

  ${withSize}
  ${withColor}
`;
