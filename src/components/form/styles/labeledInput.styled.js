import styled from 'styled-components';

export const LabeledInputLabel = styled.div`
  display: block;
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const LabeledTextInput = styled.input`
  width: 100%;
  min-width: 0px;
  border-radius: 0.375rem;
  color: currentColor;
  background-color: inherit;
  border-width: 1px;
  border-color: rgb(40, 45, 51);
  position: relative;
  z-index: 10;
  font-size: 18px;
  line-height: 1.5rem;
  padding: 0.5rem 0.75rem;
  box-shadow: none;
  cursor: pointer;
  &:hover {
    border-color: hsl(246, 7%, 45%);
  }
  &:active,
  &:focus,
  &:focus-visible {
    border-color: rgb(0, 171, 85);
  }
`;

export const LabeledTextAreaInput = styled.textarea`
  width: 100%;
  min-width: 0px;
  border-radius: 0.375rem;
  color: currentColor;
  background-color: inherit;
  border-width: 1px;
  border-color: rgb(40, 45, 51);
  position: relative;
  z-index: 10;
  font-size: 18px;
  line-height: 1.5rem;
  padding: 0.5rem 0.75rem;
  box-shadow: none;
  cursor: pointer;
  &:hover {
    border-color: hsl(246, 7%, 45%);
  }
  &:active,
  &:focus,
  &:focus-visible {
    border-color: rgb(0, 171, 85);
  }
`;
