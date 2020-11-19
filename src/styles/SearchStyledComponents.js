import styled from "styled-components";

export const SearchContainer = styled.div`
    margin: 30px 0px;
    padding: 20px;
    background: #1B1B1B;
    position: relative;
    justify-content: center;
    align-items: center;
    color: white;
    @media(min-width: 768px){
        padding: 15px;
        margin: 25px;
    }
    @media(min-width: 1024px){
        padding: 20px;
        margin: 70px 100px;
    }
    .text-danger{
        font-size: 16px;
        color: #D3D3D3;
    }
    
`;


export const SearchInput = styled.div`
    width: 100%;
    color: white;
    font-size: 22px;
    font-weight: lighter;
    text-align:center;
    margin: 20px;
    #query{
        width: 60%;
        text-align: center;
        font-size: 18px;
        padding: 0px 10px;
        background: #1B1B1B;
        border-left: none; 
        border-right: none; 
        border-top: none;
        border-bottom: 1px solid;
        border-image: linear-gradient(to right, black, grey, grey, black ) 47% 0%;   
        background-size:100% 1px;
        color: white;
    }
    @media(min-width: 768px){
        font-size: 24px;
        margin: 10px;
        #query{
            padding: 0px 10px;
            font-size: 24px;
        }
    }
    
    @media(min-width: 1024px){
        font-size: 40px;
        margin: 5px 20px;

        #query{
            font-size: 36px;
            font-weight: lighter;
            padding: 0px 20px;
        }
    }
    
`;
export const Parameters = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 0px;
    text-align: center;
    
    .parameter{
        margin: 15px 10px;
        width: 200px;
        text-align: center;
        background: #1B1B1B;
        background-size:100% 1px;
        border-color: grey;
        border-style: solid;
        border-width: thin;
        color: white;
        select.decorated option:checked{
            box-shadow: 0 0 10px 100px #1B1B1B inset;
        } 
    }
    
    @media(min-width: 768px){
        padding: 0px 50px;
        margin: 15px;
        justify-content: space-between;
    }
    @media(min-width: 1024px){
        flex-direction: row;
        padding: 0px 80px;
        font-size: 22px;
        .parameter{
            font-size: 22px;
        }
    }
`;


export const SearchButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    button{
        color: white;
        background: #1B1B1B;
        cursor: pointer;
        font-size: 18px;
        padding: 5px 40px;
        
    }
    
    @media(min-width: 1024px){
        margin: 20px;
        button{
            font-size: 26px;
            padding: 5px 50px;
        }
    }
    
`;

