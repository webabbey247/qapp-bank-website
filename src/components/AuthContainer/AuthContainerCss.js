import styled from "styled-components";

export const HeroAuthContainer = styled.div`
  width: 240px;
  height: 240px;
  background: var(--white);
  padding: 1.5rem 0.3rem;
  border: 0.5px solid var(--auth-border);
  box-sizing: border-box;
  box-shadow: 3px 10px 29px var(--box-shadow);
  position: absolute;
  right: 4%;
  margin-top: -10.5rem;
  z-index: 100;
  justify-content: center;
`;

export const HeroAuthHeading = styled.h4`
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: var(--primary);
  font-family: var(--font-manrope);
  margin-top: 0.5rem;
`;

export const HeroAuthLabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 1.5rem 0;
`;

export const HeroAuthLabel = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: var(--orange);
  border-bottom: 2px solid var(--orange);
  font-family: var(--font-manrope);

  &:first-child {
    color: var(--primary);
    margin-right: 15px;
    border: none;
  }
`;

export const HeroAuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1rem 0 0;
  padding: 0 1rem;
`;

export const HeroAuthCta = styled.a`
  text-align: center;
  width: 100%;
  padding: 10px 20px;
  background: transparent;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: var(--primary);
  font-family: var(--font-manrope);
  cursor: pointer;

  &:first-child {
    background: var(--orange);
    color: var(--white);
  }
`;
