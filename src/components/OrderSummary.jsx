import styled from "styled-components";
import backgroundImage1 from "../images/pattern-background-desktop.svg";
import backgroundImage2 from "../images/pattern-background-mobile.svg";

function OrderSummary() {
    const Section = styled.section`
    height: 100vh;
    display: flex;
    background-color: hsl(225, 100%, 94%);
    justify-content: center;
    background-image: url(${backgroundImage1});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
    
    @media (max-width: 700px) {
        background-image: url(${backgroundImage2});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: top;
    }
    
    `
    return (
        <Section>

        </Section>
    );
};

export default OrderSummary;