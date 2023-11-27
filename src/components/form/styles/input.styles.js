import styled from 'styled-components';

export const NumberVerifcationWrapper = styled.div`
  position: relative;
  cursor: text;
  display: flex;
  min-height: 56px;
  width: 100%;
  margin: 0px;
  border: medium none;
  color: rgb(34, 34, 34);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: rgb(176, 176, 176) 0px 0px 0px 1px inset;
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  align-items: center;
`;

export const NumberVerificationInput = styled.input`
  width: calc(100% - 18px);
  border: medium none;
  outline: currentcolor none medium;
  padding: 0px;
  margin: 0px -18px 0px 18px;
  min-height: 1px;
  color: inherit;
  background-color: transparent;
  font-family: inherit;
  font-size: 18px;
  font-weight: inherit;
  line-height: 20px;
  appearance: none;
  letter-spacing: 18px;
`;
