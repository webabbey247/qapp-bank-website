import styled from "styled-components";
import {SiteContainer} from "GlobalCss";

export const ServicesWrapper = styled.section`
  padding: 8rem 0 6rem;
`;

export const ServicesContainer = styled(SiteContainer)`
  width: min(100%, 68rem);
`;

export const ServicesTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export const ServicesTopHeading = styled.h2`
  font-weight: 800;
  font-size: 32px;
  line-height: 64px;
  text-align: center;
  letter-spacing: -0.03em;
  color: var(--text-header-color);
  font-family: var(--font-manrope);
`;

export const ServicesTopText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.02em;
  color: var(--text-color);
  max-width: 350px;
  font-family: var(--font-manrope);
`;

export const ServicesRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flexwrap: wrap;
  margin: 0;
  padding: 0;
  > * {
    flex: 1;
  }
`;

export const ServicesColumn = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }
`;

export const ServicesImgHolder = styled.figure`
  margin: 0;
  padding: 0;
`;

export const ServicesImg = styled.img`
  width: 250px;
  height: 200px;
`;

export const ServicesDesc = styled.div`
  padding: 1.5rem 0;
`;

export const ServicesDescHeading = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: -0.03em;
  color: var(--text-header-color);
  margin-bottom: 1rem;
  font-family: var(--font-manrope);
`;

export const ServicesDescText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: var(--text-color-2);
  margin-bottom: 1rem;
  max-width: 230px;
  height: 80px;
  font-family: var(--font-manrope);
`;

export const ServicesDescCtaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ServicesDescCta = styled.a`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: var(--orange);
  font-family: var(--font-manrope);
`;

export const ServicesDescCtaIcon = styled.svg`
  font-size: 13px;
  color: var(--orange);
  margin-left: 10px;
  margin-top: 5px;
`;
