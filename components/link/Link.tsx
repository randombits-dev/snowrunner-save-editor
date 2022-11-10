import React from "react";
import styled from "styled-components";

const LinkContainer = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const Link = ({url, children}) => {
  const goToUrl = () => {
    window.location.href = url;
  }

  return <LinkContainer onClick={goToUrl}>{children}</LinkContainer>
}

export default Link
