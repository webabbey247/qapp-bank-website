import styled from "styled-components";
import {SiteContainer} from "GlobalCss";

export const HeaderSection = styled.header`
  margin: 0;
  background: var(--primary);
  height: 60px;
  top: 0px;
  position: sticky;
  z-index: 1020;
`;

export const HeaderContainer = styled(SiteContainer)`
  width: min(100%, 75rem);
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderLTR = styled.div`
  border-bottom-left-radius: 9px;
  width: 70%;
  padding: 0 6.5rem;
  margin-top: 1rem;
`;

export const HeaderLTRLinkWrapper = styled.div`
  width: min(100%, 75rem);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const HeaderLTRLink = styled.a`
  font-weight: 400;
  font-size: 13px;
  line-height: 25px;
  color: var(--white);
  font-family: var(--font-sans);
  margin-left: 2rem;

  &:first-child {
    margin-left: 0;
  }
`;

export const HeaderRTL = styled.div`
  width: 30%;
  height: 60px;
  border-bottom: 60px solid var(--white);
  border-left: 60px solid transparent;
  z-index: 12;
  position: relative;
`;

export const HeaderRTLLogoHolder = styled.figure`
  margin: 0;
  padding: 0;
  margin-top: 1rem;
`;

export const HeaderRTLLogo = styled.img`
  width: 236px;
  height: 40px;
  margin: auto;
  display: block;
`;
