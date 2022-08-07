import styled from "styled-components";
import heroImage from "../../images/illustration-hero.svg";

function OSImage() {
    const Image = styled.img`
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    @media (max-width: 700px){
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    `
    return <Image src={heroImage} alt="Illustration of a person listening to music"/>
}

export default OSImage;