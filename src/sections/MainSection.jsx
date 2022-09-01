import { Header } from '../components/header/headerStyles';
import { NavBar } from '../components/header/navbar/NavbarStyles';
import Footer from '../components/footer/Footer';
// import pexels-cátia-matos-1072179 from './'
import MainTitle from '../components/mainContent/MainTitle';
// import Main from './components/mainContent/mainSectionStyle';
// import { SecondaryColor } from './themeStyles/colors';
import { SecondaryColor } from '../themeStyles/colors';
// import { StyledSection } from '../components/general/section';
import { StyledSection } from '../components/general/styledDivs';

const MainSection = () => {
  return (
        <StyledSection bgimg={'src/assets/pexels-cátia-matos-1072179.jpg'} bgcolor={SecondaryColor} >
        <Header>
          <NavBar/>
        </Header>
        <MainTitle/>
        <Footer/>
        </StyledSection>
  );
};

export default MainSection;
