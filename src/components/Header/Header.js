import React from "react";

import {
  HeaderSection,
  HeaderLTRLinkWrapper,
  HeaderNav,
  HeaderLTR,
  HeaderLTRLink,
  HeaderRTL,
  HeaderRTLLogoHolder,
  HeaderRTLLogo,
} from "./HeaderCss";

import {themeDummyLogo} from "assets";

const Header = () => {
  return (
    <>
      <HeaderSection>
        <HeaderNav>
          <HeaderLTR>
            <HeaderLTRLinkWrapper>
              <HeaderLTRLink>Home</HeaderLTRLink>
              <HeaderLTRLink>Internet Banking</HeaderLTRLink>
              <HeaderLTRLink>Loans</HeaderLTRLink>
              <HeaderLTRLink>Investments</HeaderLTRLink>
              <HeaderLTRLink>Cards</HeaderLTRLink>
            </HeaderLTRLinkWrapper>
          </HeaderLTR>
          <HeaderRTL>
            <HeaderRTLLogoHolder>
              <HeaderRTLLogo src={themeDummyLogo} alt='Bank One Logo' />
            </HeaderRTLLogoHolder>
          </HeaderRTL>
        </HeaderNav>
      </HeaderSection>
    </>
  );
};

export default Header;
