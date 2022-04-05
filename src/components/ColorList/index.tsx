import { ColorItem } from "../ColorItem/ColorItem";
import { Container } from "./styles";

interface Colors {
    Number: string;
}

interface ColorListProps {
    colors: Colors;
    setColors: Function;
}

export function ColorList({ colors, setColors }: ColorListProps) {
    if (colors === null) {
        return (
            <Container>

            </Container>
        )
    }
    //
    return (
        <Container>
            {Object.keys(colors).reverse().map(key => {
                return (
                    <ColorItem setColors={setColors} colorCode={colors[key as keyof Colors]} itemId={key}></ColorItem>
                )
            })}
        </Container>
    )
}
