import styled, { css } from 'styled-components'

const hasBorder = ({ hasBorder }) => {
  if (!hasBorder) return
  return css`
    border: 10px solid red;
  `
}
export const Image = styled.div`
  ${hasBorder}
`
