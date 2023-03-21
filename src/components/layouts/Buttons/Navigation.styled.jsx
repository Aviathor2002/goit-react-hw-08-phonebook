import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  left: 0;
  bottom: 0;
`;

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
  width: 100px;
  display: block;
  color: white;
  background-color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover:not(.active) {
    background-color: #ddd;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: #fff;
  }

  &.active {
    color: white;
    background-color: #1976d2;
  }
`;
