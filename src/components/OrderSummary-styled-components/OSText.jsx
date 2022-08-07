import styled from "styled-components";

function OSText() {
    const Text = styled.div`

    h1 {
        margin: 30px auto 15px;
        font-weight: 900;
    }

    p {
        margin: 5px 45px;
        line-height: 20px;
        font-size: 0.9rem;
        font-weight: 500;
        color: hsl(224, 23%, 55%);
    }

    `

    return (
        <Text>
            <h1>Order Summary</h1>
            <p>  You can now listen to millions of songs, audiobooks, and podcasts on any 
  device anywhere you like!</p>
        </Text>
    );

}

export default OSText;