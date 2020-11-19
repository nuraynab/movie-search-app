import styled from "styled-components";

export const MoviesContainer = styled.div`
    
    margin: 30px 0px;
    padding: 20px;
    background: #1B1B1B;
    
    display: ${({ isFound }) => (isFound === "True" ? "grid" : "none")};
    grid-template-columns: repeat(auto-fit, minmax(50px, 200px));
    grid-auto-rows: minmax(100px, auto);
    grid-row-gap: 1em;
    justify-content: center;

    @media(min-width: 660px){
        margin: 25px;
        padding: 30px;
        grid-column-gap: 4em;
        grid-row-gap: 1em;
        grid-template-columns: repeat(2, minmax(50px, 220px));
    }
    @media(min-width: 1024px){
        margin: 30px 100px;
        padding: 25px 20px;
        grid-column-gap: 2em;
        grid-row-gap: 3em;
        grid-template-columns: repeat(auto-fit, minmax(50px, 270px));
    }
    `;

export const NotFound = styled.div`
    display: ${({ isFound }) => (isFound !== 'False' ? "none" : "flex")};
    margin: 30px 0px;
    padding: 20px;
    background: #1B1B1B;
    justify-content: center;
    color: white;
    h2{
        font-weight: lighter;
    }
    

    @media(min-width: 660px){
        margin: 25px;
        padding: 30px;
    }
    @media(min-width: 1024px){
        margin: 30px 100px;
        padding: 25px 20px;
    }
`;

export const MovieCard = styled.div`
    padding: 10px;
    background: black;
    border-color: white;
    border-style: solid;
    border-width: thin;
    width:200px;
    img{
        width: 200px;
    }
    
    @media(min-width: 768px){
        padding: 10px;
        margin: 10px;
        width: 210px;
        img{
            width: 210px;
        }
    }
    
    @media(min-width: 1024px){
        padding: 15px;
        margin: 10px;
        width: 220px;
        img{
            width: 220px;
        }
    }
`;

export const Title = styled.a`
    color: white;
    font-size: 14px;
    display: block;
    width: 100%;
    text-align: center;
    cursor: pointer;
    padding: 5px;
    @media(min-width: 768px){
        font-size: 20px;
    }
`;
