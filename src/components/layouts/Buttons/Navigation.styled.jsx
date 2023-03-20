import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
`;

export const Item = styled.li`
  float: left;
`;

export const Link = styled(NavLink)`
  display: block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover:not(.active) {
    background-color: #ddd;
  }

  &.active {
    color: white;
    background-color: #4caf50;
  }
`;
