import styled from '@emotion/styled';
import React from 'react'

const StyledDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20rem",
  fontSize: "3rem"
});

const Loader = () => {
  return (
    <StyledDiv>
      Loading Questions...
    </StyledDiv>
  )
}

export default Loader
