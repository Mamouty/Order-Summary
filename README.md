# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

![](./public/images/Frontend%20Mentor%20Order%20summary%20card.png)


### Links

- [My solution](https://www.frontendmentor.io/solutions/order-summary-card-using-react-and-styledcomponents-IlOC3g6Q26)
- [Live site](https://mamouty.github.io/order-summary/)

## My process

### Built with

- HTML5
- CSS3
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Through this challenge I got to put in practice how to adapt a styled-component based on props. In the lines of codes below you can see how I styled the two buttons using their props:
```js
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
}
```
### Continued development

I found Styled-Components such a convenient and helpful way to add CSS to the React components, this is why I want to focus more on how to use them for the next projects.

### Useful resources

- [GitHub "fatal: remote origin already exists"](https://stackoverflow.com/questions/10904339/github-fatal-remote-origin-already-exists) - This helped me fix the problem I had when trying to push this project to my remote repository on github.
- [Deploy a React app to github-pages](https://github.com/gitname/react-gh-pages) - I followed the steps listed in this page to deploy this project.

## Author

- Frontend Mentor - [@Mamouty](https://www.frontendmentor.io/profile/Mamouty)
- LinkedIn - [Mahmoud Guefri](https://www.linkedin.com/in/mahmoud-guefri-6b0269193/)

