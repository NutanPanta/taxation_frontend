import { Card, Typography } from '@mui/material';
import styled from 'styled-components';

export const SelectLabel = styled.label`
  display: block;
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  margin-bottom: 1.4rem;
`;

export const SelectButton = styled.button`
  display: flex;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(145, 158, 171, 0.32);
  border-radius: 0.375rem;
  height: 42px;
  padding: 0.5rem 0.75rem;
  background-color: transparent;
  background-image: none;
  color: inherit;
  width: 100%;
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectIconWrapper = styled.div`
  color: currentcolor;
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  display: flex;
  align-items: center;
`;

export const SelectIcon = styled.svg`
  width: 100%;
  height: 100%;
`;

export const SelectValue = styled(Typography)`
  font-size: 18px;
  line-height: 1.5;
  color: inherit;
`;

export const SelectArrow = styled.div`
  color: currentcolor;
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  display: flex;
  align-items: center;
  color: rgba(145, 158, 171, 0.32);
`;

export const SelectDetailsContainer = styled.div`
  overflow-y: auto;
  position: absolute;
  z-index: 1041;
  left: 0;
  right: 0;
`;

export const SelectDetailsWrapper = styled(Card)`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  overflow-y: auto;
  height: 250px;
  min-width: auto;
  margin-top: 10px;
`;

export const SelectDetail = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 21px;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  height: 2.25rem;
  cursor: pointer;
  border-radius: 0.25rem;
  &:hover {
    background-color: rgba(145, 158, 171, 0.08);
  }
`;
