import styled from "styled-components";

export const MovieContainer = styled.div`
    justify-content: center;
    margin: 30px 0px;
    padding: 20px 70px;
    background: #1B1B1B;
    color: white;
    @media(min-width: 768px){
        display: grid;
        padding: 30px;
        margin: 50px;
        grid-template-columns: repeat(2, 1fr);
    }
    @media(min-width: 1024px){
        padding: 50px 100px;
        margin: 70px;
        grid-auto-rows: min(100px, auto);; 
        grid-template-columns: repeat(3, 1fr);

}`;


export const Poster = styled.div`
    
    img {
        width: 230px;
        margin: auto;
        display:block;
        display: ${({ hasPoster }) => (hasPoster ? "block" : "none")};
    }
    
    
    @media(min-width: 768px){
        grid-column-start: 1;
        grid-row-start: 1;
        img {
            width: 230px;
        }
    }
    
    @media(min-width: 1024px){
        img {
            width: 300px;
        }
    }
`;

export const DescriptionBox = styled.div`
    li {
        list-style-type: none;
    }
    strong{
        font-size: 16px;
    }
    h2 {
        font-size: 18px;
        text-align: center;
    }
    
    @media(min-width: 768px){
        grid-column-start: ${({ hasPoster }) => (hasPoster ? "2" : "1")};
        grid-column-end: 3;
        grid-row-start:1;
        
    }
    @media(min-width: 1024px){
        li {
            margin: 15px;
            list-style-type: none;
        }
        strong{
            font-size: 18px;
        }
    }
`;

export const AboutBox = styled.div`
    
    font-size: 16px;
    text-align: center;
    h3{
        font-size: 18px;
    }
    a{
        margin: 15px 30px;
        color: white;
        display: flex;
        width: 180px;
        height: 30px;
        text-decoration: none;
        background: #1B1B1B;
        justify-content: center;
        align-items: center;
        border-color: grey;
        border-style: solid;
        border-width: thin;
        
        
    }
    @media(min-width: 768px){
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start-2;
        a{
            margin: 15px 0px;
        }
        text-align: left;


    }
    @media(min-width: 1024px){
        font-size: 18px;
        h3{
            font-size: 22px;
        }
    }

`;