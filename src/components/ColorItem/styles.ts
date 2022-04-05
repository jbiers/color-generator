import styled from "styled-components"

interface Props {
    colorCode: string;
}

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 6fr 0.5fr;
    align-items: center;
    background: var(--very-light-gray);
    font-weight: 600;
    border-radius: 0.188rem;
    width: 100%;
    padding: 1.375rem 4.375rem;
    margin-bottom: 1rem;

    .colorSample {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background: ${(props: Props) => props.colorCode};
    }

    .deleteColor {
        width: 2rem;
        height: 2rem;
    }
`