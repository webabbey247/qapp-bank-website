import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 3rem 0 2rem;
  background: var(--primary);
`;

export const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flexwrap: wrap;
  margin: 0;
  padding: 1rem 0;
  > * {
    flex: 1;
  }
`;

export const FooterColumn = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  margin-left: 10px;

  &:first-child {
    margin-left: 0;
  }
`;

export const FooterHeading = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: var(--gray-color);
  margin-bottom: 1.5rem;
  font-family: var(--font-sans);
`;

export const FooterImgWrapper = styled.div`
  margin: 0;
`;

export const FooterImg = styled.img`
  height: 45px;
`;

export const FooterSitemapLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterStyledLink = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--gray-color);
  margin-bottom: 10px;
  font-family: var(--font-sans);
`;

export const FooterContactWrapper = styled.aside`
  margin: 14px 0;
  display: flex;
  flex-direction: column;
`;

export const FooterContactInfo = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--gray-color);
  margin-bottom: 10px;
  font-family: var(--font-sans);
  max-width: 250px;
`;

export const FooterDesc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  color: var(--gray-color);
  font-family: var(--font-sans);
  max-width: 250px;
`;

export const FooterSubscriberForm = styled.form`
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;

export const FooterSubscriberInput = styled.input`
  background-color: var(--input-color);
  border: 1px solid var(--input-color);
  height: 41.33px;
  padding: 0 16px;
  width: 220px;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  color: var(--input-text-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
  font-family: var(--font-sans);

  &.invalid {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E") !important;
    border-color: rgba(220, 53, 69, 0.5) !important;
    color: #dc3545;
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }

  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 22.4px;
    font-family: var(--font-sans);
    color: var(--input-text-color);
    opacity: 0.6;
  }

  &:focus {
    color: var(--input-color);
    background-color: var(--white);
    border: 1px solid var(--input-color);
    border-color: var(--gray-color);
    outline: 0;
    box-shadow: none !important;
  }
`;

export const FooterSubscriberInputBtn = styled.button`
  cursor: pointer;
  border: 1px solid var(--input-color);
  background: var(--input-color);
  height: 41.33px;
  text-align: center;
  font-size: 20px;
  line-height: 25px;
  padding-top: 8px;
  color: var(--input-text-color);
  width: 50px;
  font-weight: 400;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const FooterSocialsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 20px;
`;

export const FooterSocialIcon = styled.a`
  padding: 4px 6px;
  margin-right: 15px;
  color: var(--primary);
  font-size: 14px;
  background: var(--white);
  border: 1px solid var(--white);
  border-radius: 50%;
  display: block;
`;

export const FooterSocialHandle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  color: var(--gray-color);
  font-family: var(--font-sans);
`;

export const FooterCopyrightWrapper = styled.div`
  border-top: 1px solid rgba(252, 254, 254, 0.3);
  padding: 1.5rem 0 0;
`;

export const FooterCopyrightText = styled.p`
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.09em;
  color: var(--gray-color);
  text-align: center;
`;
