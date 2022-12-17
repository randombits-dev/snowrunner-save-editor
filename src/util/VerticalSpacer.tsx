import styled from "styled-components";

type Props = {
  size: number;
}

const VerticalSpacer = styled.div`
  padding: ${(props: Props) => props.size + 'px'}
`
export default VerticalSpacer
