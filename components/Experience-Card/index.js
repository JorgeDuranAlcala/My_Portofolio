import React from "react";
import Text from "../Text";
import { CardContainer, CardTitle, Subtitle, CardContent, CardDate } from "./styles";

function ExperienceCard() {
    return (
        <CardContainer direction="column" align="center">
            <CardTitle variant="h3" size={32} lineheight={48} fontweight={700}>
                React developer
            </CardTitle>
            <Subtitle variant="subtitle1" size={28} lineheight={42} fontweight={400}>
                Uma krishnam 
            </Subtitle>
            <CardDate variant="subtitle2" size={18} lineheight={27} fontweight={400}>
                Julio 2020 - dic 2020 - 6 meses
            </CardDate>
            <CardContent variant="body1" size={18} lineheight={27} fontweight={400}>
                I builded UI components using react, Material-ui and Typescript to be later used in a project managment App
            </CardContent>
        </CardContainer>
    )
}

export default ExperienceCard;