import React from "react";

import {
  HeroAuthContainer,
  HeroAuthHeading,
  HeroAuthLabelWrapper,
  HeroAuthLabel,
  HeroAuthWrapper,
  HeroAuthCta,
} from "./AuthContainerCss";

const AuthContainer = () => {
  return (
    <>
      <HeroAuthContainer>
        <HeroAuthHeading>Online Banking</HeroAuthHeading>
        <HeroAuthLabelWrapper>
          <HeroAuthLabel>Personal</HeroAuthLabel>
          <HeroAuthLabel>Business</HeroAuthLabel>
        </HeroAuthLabelWrapper>
        <HeroAuthWrapper>
          <HeroAuthCta>Login</HeroAuthCta>
          <HeroAuthCta>Register</HeroAuthCta>
        </HeroAuthWrapper>
      </HeroAuthContainer>
    </>
  );
};

export default AuthContainer;
