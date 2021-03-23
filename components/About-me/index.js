import React from "react";
import { AboutMeText } from "./styles";
import Text from "../Text";

export default function AboutMe({ aboutMe }) {
  return (
    <AboutMeText variant="body1" size={20} fontWeight={300}>
      <Text fontWeight={600}>
        I'm a{" "}
        <Text variant="caption" secondary="true">
          freelancer
        </Text>
      </Text>
      {aboutMe}
    </AboutMeText>
  );
}
