import React from "react";
import {
  HeroBannerSection,
  HeroBannerContainer,
  HeroBannerLTRWrapper,
  HeroBannerLTRHeading,
  HeroBannerLTRText,
  HeroBannerDownloadAppWrapper,
  HeroBannerDownloadAppImg,
  HeroBannerRTLWrapper,
  HeroBannerRTLImgHolder,
  HeroBannerRTLImg,
  HeroBannerBottomWrapper,
  HeroBannerBottomText,
} from "./HeroBannerCss";

import {appStoreImg, googlePlayStoreImg, heroBannerImg} from "assets";
import AuthContainer from "../AuthContainer/AuthContainer";

const HeroBanner = () => {
  return (
    <>
      <HeroBannerSection>
        <HeroBannerContainer>
          <HeroBannerLTRWrapper>
            <HeroBannerLTRHeading>
              There is so much to do on BankOne
            </HeroBannerLTRHeading>
            <HeroBannerLTRText>
              Using BankOne, you can pay for anything you need and access all of
              our banking services on your phone
            </HeroBannerLTRText>
            <HeroBannerDownloadAppWrapper>
              <HeroBannerDownloadAppImg
                src={appStoreImg}
                alt='Apple App Store'
              />
              <HeroBannerDownloadAppImg
                src={googlePlayStoreImg}
                alt='Google Play Store'
              />
            </HeroBannerDownloadAppWrapper>
          </HeroBannerLTRWrapper>
          <HeroBannerRTLWrapper>
            <HeroBannerRTLImgHolder>
              <HeroBannerRTLImg src={heroBannerImg} alt='Hero Banner' />
            </HeroBannerRTLImgHolder>
          </HeroBannerRTLWrapper>
        </HeroBannerContainer>
        <HeroBannerBottomWrapper>
          <HeroBannerBottomText>
            Blah blah blah blah blah blah
          </HeroBannerBottomText>
        </HeroBannerBottomWrapper>
        <AuthContainer></AuthContainer>
      </HeroBannerSection>
    </>
  );
};

export default HeroBanner;
