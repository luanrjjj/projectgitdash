import styled from 'styled-components';
import  theme  from '../../styles/theme';
import media from '../../styles/media';
import mixins from '../../styles/mixins';
const { colors } = theme;

const ChartsStyles = styled.div`
.GraphsContainer {
  margin-left:50px;
  max-width: 1200px !important;
  margin-top: 2rem !important;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  justify-content: center;
  padding:20px;
  
  @media (max-width:900px) {
    grid-template-columns:auto;
    
    transform:translate(-10%);
    margin-left:90px;
    
      }

  .chart {
    background-color: rgb(32,32,36);
    max-width: 500px;
    padding: 2rem;
    border-radius: 0.25rem;

    &:hover { 
      top:-2px;
      z-index:999;
      filter: brightness(0.9);
    }
    
    ${media.bp400`
      padding: 2rem 1rem;
    `};


    header {
      
      color:${colors.gray100};
      

      h2 {
        font-size: 1.5rem;
        font-weight:bold;
      }
    }

    p {
      color: ${colors.gray100};
    }
  }
}
`;

export default ChartsStyles;