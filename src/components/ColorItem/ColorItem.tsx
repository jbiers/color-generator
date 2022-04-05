import { Container } from "./styles";

interface ColorItemProps {
    colorCode: string;
}

export function ColorItem(props: ColorItemProps) {
    return (
        <Container>
            {props.colorCode}
        </Container>
    )
}