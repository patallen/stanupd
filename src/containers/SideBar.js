import React from "react";
import styled from "styled-components";


const SideBarWidget = styled.div`
  color: whitesmoke;
`;

const Logo = SideBarWidget.extend`
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 1.3em;
  font-family: Lato, Helvetica, sans-serif;
  font-weight: bold;
`
const SideBarWrapper = styled.section`
  width: 200px;
  height: 100%;
  background: #004080;
  float: left;
`

const SideBarNav = SideBarWidget.extend`
`;

const NavButton = SideBarWidget.extend`
  padding: 12px 0 12px 16px;
  font-size: 1em;
  transition: 0.1s linear;
  &:hover {
    cursor: pointer;
    background-color: #003770;
  }
`;

const SideBar = (props) => {
    return (
      <SideBarWrapper>
        <Logo>STANDUP.D</Logo>
        <SideBarNav>
          <NavButton>Data Manager</NavButton>
          <NavButton>Collection</NavButton>
          <NavButton>History</NavButton>
        </SideBarNav>
      </SideBarWrapper>
    );
}

export default SideBar
