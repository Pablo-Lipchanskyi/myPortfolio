import { Header } from "./Header/Header";
import { HeaderStyled, HeaderContentStyled } from "./Header/Header.styled";

export const App = () => {
  return (
    <>
      <HeaderStyled>
        <HeaderContentStyled>
          <Header />
         </HeaderContentStyled> 
      </HeaderStyled>
    </>
  );
};
