import styled from 'styled-components';

export const StatisticTitel = styled.h3`
  color: #fd9222;
  font-size: 22px;
  margin-bottom: 20px;
  letter-spacing: 0.05em;
`;

export const StatisticList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const StatisticItem = styled.li`
  width: 185px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid #fd9222;
  border-radius: 25px;
`;
