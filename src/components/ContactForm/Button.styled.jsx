import styled from 'styled-components';
// import { Box } from '../Box';

export const Button = styled.button`
border-radius: ${p => p.theme.radii.normal};
margin: 10px;
padding: 10px;
justify-content: center;
&:hover {
    transform: scale(1.3);
    background-color: ${state => {
      switch (state.name) {
        case 'good':
          return '#6df16d';
        case 'neutral':
          return '#f1ea02';
        case 'bad':
          return '#ff4141';
        default:
          return 'green';
      }
    }};
  }
  `;

