import styled from 'styled-components'

export const Container = styled.main`
    width: 45rem;
    margin: 2.438rem auto 0;
    padding: 2.313rem;
    border-radius: 0.188rem;
    background: var(--light-gray);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .colors {
        display: grid;
        grid-template-columns: 10rem 10rem 10rem;
        gap: 1.2rem;
        margin: 0 auto;
        justify-content: center;

        .color {
            height: 3rem;
            width: 10rem;
            border-radius: 0.188rem;
            display: flex;
            justify-content: center;
            align-items: center;

            input {
                width: 85%;
            }
        }   

        .red {
            background: var(--red);
        }

        .green {
            background: var(--green);
        }

        .blue {
            background: var(--blue);
        }
    }

    .addColorBtn {
        margin-top: 1.5rem;
        width: 10rem;
        height: 3rem;
        border: none;
        border-radius: 0.188rem;
        font-weight: bold;

        background: var(--dark-gray);
        color: var(--white);

        transition: 0.2s filter;

        &:hover {
            filter: brightness(0.9);
        }
    }

    @media (max-width: 700px) {
        width: 100%;

        .colors {
            display: grid;
            grid-template-columns: 7rem 7rem 7rem;
            gap: 1rem;
            
            .color {
                width: 7rem;
                input {
                    width: 90%;
                }
            }
        }
    }
`