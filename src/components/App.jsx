import { BackgroundStyled } from "./Background/Backgrond.styled";
import Background from "./Background/Background";
import { Header } from "./Header/Header";
import { HeaderStyled, HeaderContentStyled } from "./Header/Header.styled";

export const App = () => {
  return (
    <>
      <BackgroundStyled>
        <Background/>
      </BackgroundStyled>
    </>
  );
};
