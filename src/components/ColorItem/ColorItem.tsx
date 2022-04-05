import { Container } from "./styles";
import trashImage from '../../assets/trash.svg'

interface ColorItemProps {
    colorCode: string;
    itemId: string;
    setColors: Function
}

function removeItemFromLocalStorage(id: string, setColors: Function) {
    const colors = JSON.parse(localStorage.getItem('colors') as string)
    delete colors[id]
    setColors(colors)
    localStorage.setItem('colors', JSON.stringify(colors))
}

export function ColorItem({ colorCode, itemId, setColors }: ColorItemProps) {
    return (
        <Container colorCode={colorCode} className={itemId}>
            {colorCode}

            <div className="colorSample"></div>

            <button className="deleteColor" onClick={() => {
                removeItemFromLocalStorage(itemId, setColors)
            }}>
                <img src={trashImage} />
            </button>
        </Container>
    )
}