import styled from "styled-components";
import OSImage from "./OSImage";
import OSText from "./OSText";
import OSPlan from "./OSPlan";
import OSChoiceButtons from "./OSChoiceButtons";

function OSCard() {
    const Card = styled.div`
    background-color: white;
    height: 580px;
    width: 370px;
    margin: auto;
    border-radius: 15px;
    text-align: center;

    @media (max-width: 700px) {
        height: 565px;
        width: 330px;
        border-radius: 20px;
    }
    `
    return (
        <Card>
            <OSImage />
            <OSText />
            <OSPlan />
            <OSChoiceButtons />
        </Card>
    );
    
}

export default OSCard;