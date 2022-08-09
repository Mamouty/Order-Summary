import styled from "styled-components";

function PlanPrice() {
    const PlanNPrice = styled.div`
    margin: 25px 15px;
    display: flex;
    flex-direction: column;
    
    h5, p {
        display: flex;
        margin: 0;
        font-size: 0.9rem;
    }

    h5 {
        font-weight: 900;
    }
    
    p {
        color: hsl(224, 23%, 55%);
    }
    `
    return (
        <PlanNPrice>
            <h5>Annual Plan</h5>
            <p>$59.99/year</p>
        </PlanNPrice>
    );
}

export default PlanPrice;