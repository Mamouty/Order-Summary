import styled from "styled-components";

function OSChoiceButtons() {
    const Button = styled.button`
    display: block;
    margin: 10px auto;
    padding: 15px;
    width: ${props => props.payment ? "290px" : "fit-content"};
    border: none;
    border-radius: 10px;
    background-color: ${props => props.payment ? "hsl(245, 75%, 52%)" : "transparent" };
    font-size: 0.9rem;
    font-weight: 600;
    color: ${props => props.cancel ? "hsl(224, 23%, 55%)" : "white"};
    box-shadow: ${props => props.payment && "0px 15px 20px hsl(245, 75%, 80%)"};
    cursor: pointer;
    transition: 0.7s;

    &:hover{
        background-color: ${props => props.payment && "hsl(245, 75%, 65%)" };
        color: ${props => props.cancel && "black"};
    }
    
    `
    return (
        <>
            <Button payment>Proceed to Payment</Button>
            <Button cancel>Cancel Order</Button>
        </>
    );
}

export default OSChoiceButtons;