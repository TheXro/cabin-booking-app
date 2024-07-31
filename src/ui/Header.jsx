import styled from "styled-components"


const StyledHeader = styled.header` 
    background-color:var(--color-grey-00);
    padding: 1.2rem 4.8rem;
    border-bottom:2px solid var(--color-grey-100);
`;


function Header() {
  return (
    <StyledHeader>Header</StyledHeader>
  )
}

export default Header