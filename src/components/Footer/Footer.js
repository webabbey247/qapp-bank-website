import React from "react";
import {SiteContainer} from "GlobalCss";
import {
  FooterWrapper,
  FooterRow,
  FooterColumn,
  FooterHeading,
  FooterImgWrapper,
  FooterImg,
  FooterContactWrapper,
  FooterContactInfo,
  FooterSitemapLinks,
  FooterStyledLink,
  FooterDesc,
  FooterSubscriberForm,
  FooterSubscriberInput,
  FooterSubscriberInputBtn,
  FooterSocialsWrapper,
  FooterSocialIcon,
  FooterSocialHandle,
  FooterCopyrightWrapper,
  FooterCopyrightText,
} from "./FooterCss";
import {FiSend} from "react-icons/fi";
import {FaLinkedinIn, FaFacebookF, FaInstagram} from "react-icons/fa";

import {whiteDummyLogo} from "assets";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <SiteContainer>
          <FooterRow>
            <FooterColumn>
              <FooterImgWrapper>
                <FooterImg src={whiteDummyLogo} alt='Bank One' />
              </FooterImgWrapper>
              <FooterDesc>Leading the Way in Internet Banking.</FooterDesc>
            </FooterColumn>

            <FooterColumn>
              <FooterHeading>Quick Links</FooterHeading>
              <FooterSitemapLinks>
                <FooterStyledLink>About Us</FooterStyledLink>
                <FooterStyledLink>Loans</FooterStyledLink>
                <FooterStyledLink>Investments</FooterStyledLink>
                <FooterStyledLink>Banking Services</FooterStyledLink>
              </FooterSitemapLinks>
            </FooterColumn>

            <FooterColumn>
              <FooterHeading>Contact Us</FooterHeading>
              <FooterContactWrapper>
                <FooterContactInfo>Call: (237) 681-812-255</FooterContactInfo>
                <FooterContactInfo>Email: info@bankone.com</FooterContactInfo>
                <FooterContactInfo>
                  Address: 92 Raymond Njoku street, Ikoyi, Lagos, Nigeria 23401
                </FooterContactInfo>
              </FooterContactWrapper>
            </FooterColumn>

            <FooterColumn>
              <FooterHeading>Newsletter</FooterHeading>
              <FooterSubscriberForm>
                <FooterSubscriberInput
                  name='subscriberEmail'
                  placeholder='Enter your email address'
                />
                <FooterSubscriberInputBtn>
                  <FiSend />
                </FooterSubscriberInputBtn>
              </FooterSubscriberForm>
              <FooterSocialsWrapper>
                <FooterSocialIcon>
                  <FaLinkedinIn />
                </FooterSocialIcon>
                <FooterSocialIcon>
                  <FaFacebookF />
                </FooterSocialIcon>
                <FooterSocialIcon>
                  <FaInstagram />
                </FooterSocialIcon>
                <FooterSocialHandle>bankoneofficial</FooterSocialHandle>
              </FooterSocialsWrapper>
            </FooterColumn>
          </FooterRow>
          <FooterCopyrightWrapper>
            <FooterCopyrightText>
              &copy; 2021 Powered by QAPP
            </FooterCopyrightText>
          </FooterCopyrightWrapper>
        </SiteContainer>
      </FooterWrapper>
    </>
  );
};

export default Footer;
