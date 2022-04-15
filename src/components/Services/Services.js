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
                  Need an account? Open an account for your business, your child
                  or yourself.
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
                  Free is the new cool. Zero transfer fees. Zero SMS charge.
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
                  Want a snap action? Get a QAPP mobile app for the fastest and
                  most.
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
                  Skip the queues and get all the answers you need right from
                  your phone.
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
