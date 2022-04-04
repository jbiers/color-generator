import styled from 'styled-components'

export const Container = styled.header`
    font-size: 3rem;
    line-height: 3rem;
    justify-content: center;
    align-items: center;
    text-align: center;

    display: flex;

    width: 80%;
    margin: 0 auto;

    h1 {
        border: 1px solid black;
        margin-top: 3rem;
    }

    @media (max-width: 1080px) {
        width: 100%;
        font-size: 2rem;
    }
`