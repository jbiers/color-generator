import styled from "styled-components"

interface Props {
    color?: string;
}

export const Color = styled.div.attrs(props => ({
    style: {
        background: props.color,
    },
}))`
   margin: 3.125rem auto;

    width: 14.125rem;
    height: 14.125rem;
    border-radius: 50%;
`

