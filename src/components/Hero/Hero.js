import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there! <br />
        Welcome to my Portfolio.
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
        quibusdam corporis aliquid explicabo nulla inventore id molestiae quae.
        Quam, tenetur!
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.linkedin.com/in/robinrahman714/")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
