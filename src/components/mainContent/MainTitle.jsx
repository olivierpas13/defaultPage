import {
  PrimaryTitle,
  SecondaryTitle
} from './mainTitleStyles';

import { FluidContainer } from '../general/styledDivs';

import { Button } from '../general/styledButtons';

const MainTitle = () => {
  return (
    <FluidContainer>
      <PrimaryTitle>
        FAST AND RESPONSIVE <br /> WEBSITE <br /> TITLE
      </PrimaryTitle>
      <SecondaryTitle>
        Create the perfect website
        <br />
        for your business
      </SecondaryTitle>
      <Button primary >Learn more about us</Button>
    </FluidContainer>
  );
};

export default MainTitle;
