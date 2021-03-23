import React from "react";
import Text from "../Text";
import {
  CardContainer,
  CardTitle,
  Subtitle,
  CardContent,
  CardDate,
} from "./styles";
import { format, formatDistance } from "date-fns";

function ExperienceCard({
  title,
  employerName,
  startDate,
  endDate,
  experienceDesc: {
    json: {
      content: [
        {
          content: [{ value: desc }],
        },
      ],
    },
  },
}) {
  return (
    <CardContainer direction="column" align="center">
      <CardTitle variant="h3" size={32} lineHeight={48} fontWeight={700}>
        {title}
      </CardTitle>
      <Subtitle variant="subtitle1" size={28} lineHeight={42} fontWeight={400}>
        {employerName}
      </Subtitle>
      <CardDate variant="subtitle2" size={14} lineHeight={27} fontWeight={400}>
        {format(new Date(startDate), "MMM yyyy")} -{" "}
        {format(new Date(endDate), "MMM yyyy")} -{" "}
        {formatDistance(new Date(startDate), new Date(endDate))}
      </CardDate>
      <CardContent variant="body1" size={18} lineHeight={27} fontWeight={400}>
        {desc}
      </CardContent>
    </CardContainer>
  );
}

export default ExperienceCard;
