import React from "react";
import {
  ServicesWrapper,
  ServicesContainer,
  ServicesTopWrapper,
  ServicesTopHeading,
  ServicesTopText,
  ServicesRow,
  ServicesColumn,
  ServicesImgHolder,
  ServicesImg,
  ServicesDesc,
  ServicesDescHeading,
  ServicesDescText,
  ServicesDescCta,
} from "./ServicesCss";

import {openAccountImg, airtimeImg, quickLoanImg, utilityImg} from "assets";
import {FaChevronRight} from "react-icons/fa";

const Services = () => {
  return (
    <>
      <ServicesWrapper>
        <ServicesContainer>
          <ServicesTopWrapper>
            <ServicesTopHeading>Innovative Banking Services</ServicesTopHeading>
            <ServicesTopText>
              Tailored to your lifestyle, designed for your personal and
              business needs.
            </ServicesTopText>
          </ServicesTopWrapper>
          <ServicesRow>
            <ServicesColumn>
              <ServicesImgHolder>
                <ServicesImg src={openAccountImg} alt='Open an Account' />
              </ServicesImgHolder>
              <ServicesDesc>
                <ServicesDescHeading>Open an Account</ServicesDescHeading>
                <ServicesDescText>
                Do you need an account? Open an account for yourself, your children or your businesses at no cost.
                </ServicesDescText>
                <ServicesDescCta>
                  Click here to start <FaChevronRight />
                </ServicesDescCta>
              </ServicesDesc>
            </ServicesColumn>

            <ServicesColumn>
              <ServicesImgHolder>
                <ServicesImg src={quickLoanImg} alt='Quick Loan' />
              </ServicesImgHolder>
              <ServicesDesc>
                <ServicesDescHeading>Quick Loan</ServicesDescHeading>
                <ServicesDescText>
                Get up to N10 million in credit and pay back in 3-12 months and at 3% monthly interest rate. No hidden fees.
                </ServicesDescText>
                <ServicesDescCta>
                  Click here to start <FaChevronRight />
                </ServicesDescCta>
              </ServicesDesc>
            </ServicesColumn>

            <ServicesColumn>
              <ServicesImgHolder>
                <ServicesImg src={utilityImg} alt='Utility Payment' />
              </ServicesImgHolder>
              <ServicesDesc>
                <ServicesDescHeading>Utility Payment</ServicesDescHeading>
                <ServicesDescText>
                Don’t miss out on your favorite show. Pay your utility bill on the go and continue to enjoy your program.
                </ServicesDescText>
                <ServicesDescCta>
                  Click here to start <FaChevronRight />
                </ServicesDescCta>
              </ServicesDesc>
            </ServicesColumn>

            <ServicesColumn>
              <ServicesImgHolder>
                <ServicesImg src={airtimeImg} alt='Airtime Top-Up' />
              </ServicesImgHolder>
              <ServicesDesc>
                <ServicesDescHeading>Airtime Top-Up</ServicesDescHeading>
                <ServicesDescText>
                Your go to place for instant Top-up.
                </ServicesDescText>
                <ServicesDescCta>
                  Click here to start <FaChevronRight />
                </ServicesDescCta>
              </ServicesDesc>
            </ServicesColumn>
          </ServicesRow>
        </ServicesContainer>
      </ServicesWrapper>
    </>
  );
};

export default Services;
