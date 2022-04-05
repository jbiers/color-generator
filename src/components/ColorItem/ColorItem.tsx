import { Container } from "./styles";

interface ColorItemProps {
    colorCode: string;
    itemId: string;
}

export function ColorItem({ colorCode, itemId }: ColorItemProps) {
    return (
        <Container colorCode={colorCode} className={itemId}>
            {colorCode}

            <div className="colorSample"></div>

            <button className="deleteColor">X</button>
        </Container>
    )
}