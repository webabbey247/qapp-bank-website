import styled from "styled-components";
import {SiteContainer} from "GlobalCss";

export const HeroBannerSection = styled.section`
  padding: 3rem 0;
  background: var(--white);
  height: 100vh;
`;

export const HeroBannerContainer = styled(SiteContainer)`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const HeroBannerLTRWrapper = styled.div`
  width: 40%;
  padding-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeroBannerLTRHeading = styled.h2`
  max-width: 400px;
  font-weight: 800;
  font-size: 60px;
  line-height: 75px;
  letter-spacing: -0.03em;
  color: var(--primary);
  font-family: var(--font-manrope);
  margin-top: -5rem;
`;

export const HeroBannerLTRText = styled.p`
  max-width: 400px;
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  letter-spacing: -0.02em;
  color: #090c14;
  font-family: var(--font-manrope);
  margin: 1.5rem 0;
`;

export const HeroBannerDownloadAppWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin: 10px;
  width: 100%;
  max-width: 400px;
`;

export const HeroBannerDownloadAppImg = styled.img`
  width: 180px;
  height: 58px;
  margin: 0 10px;
  &:first-child {
    margin-left: 0;
  }
`;

export const HeroBannerRTLWrapper = styled.div`
  width: 60%;
`;

export const HeroBannerRTLImgHolder = styled.figure`
  margin: 0;
  padding: 0;
  z-index: 10;
  position: relative;
`;

export const HeroBannerRTLImg = styled.img`
  height: 630px;
  width: 100%;
`;

export const HeroBannerBottomWrapper = styled.div`
  padding: 1.5rem 2rem;
  background: var(--primary);
  margin-top: -3.3rem;
  z-index: 100;
  position: relative;
`;
export const HeroBannerBottomText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  letter-spacing: -0.02em;
  color: var(--gray-color);
  padding-left: 3rem;
`;
