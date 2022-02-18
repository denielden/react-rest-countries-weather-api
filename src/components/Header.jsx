import styled from 'styled-components';
import MoonIcon from './MoonIcon';

const Header = ({ theme, toggleTheme }) => {
   return(
      <header>
         <ContainerDiv>
            <h1>Where in the world?</h1>
            <ThemeButton onClick={toggleTheme}>
               <MoonIcon theme={theme} />
               Dark mode
            </ThemeButton>
         </ContainerDiv>
      </header>
   );
}

const ContainerDiv = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   h1 {
      @media (max-width: 800px) {
         font-size: 1.2rem;
      }
	}
`;
const ThemeButton = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   color: var(--text);
   font-size: 1.25rem;
   font-weight: 400;
   @media (max-width: 1080px) {
      font-size: 1rem;
   }
   svg {
      width: 1rem;
      height: 1.1rem;
      fill: var(--text);
      margin-right: .5rem;
   }
`;

export default Header;