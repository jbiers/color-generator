import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--dark-gray);

    h1 {
        margin-top: 5rem;
        font-size: 3.625rem;
        width: 80%;
    }

    @media (max-width: 1080px) {
        h1 {
            margin-top: 2rem;
            line-height: 3rem;
        }
 
        width: 100%;
    }
`