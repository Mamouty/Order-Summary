import styled from "styled-components";
import musicIcon from "../../images/icon-music.svg";
import PlanPrice from "./PlanPrice";


function OSPlan() {
    const Wrapper = styled.div`
    width: 290px;
    background-color: hsl(225, 100%, 98%);
    margin: 20px auto 30px;
    border-radius: 10px;
    display: flex;

    img {
        width: 45px;
        border: 0;
        margin: auto 0px auto 20px;
    }

    a {
        margin: auto 20px auto auto;
        font-size: 0.75rem;
        font-weight: 600;
        transition: 0.7s;
        
        &:hover {
            text-decoration: none;
        }
    }

    `

    return (
        <Wrapper>
            <img src={musicIcon} alt={"Music icon"}/>
            <PlanPrice />
            <a href="www.frontendmentor.io">Change</a>
        </Wrapper>
    );
}

export default OSPlan;