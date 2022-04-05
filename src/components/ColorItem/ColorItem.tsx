import { Container } from "./styles";

interface ColorItemProps {
    colorCode: string;
}

export function ColorItem({ colorCode }: ColorItemProps) {
    return (
        <Container colorCode={colorCode}>
            {colorCode}

            <div className="colorSample"></div>

            <button className="deleteColor">X</button>
        </Container>
    )
}