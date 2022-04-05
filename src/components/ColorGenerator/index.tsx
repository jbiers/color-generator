import { useEffect, useState } from "react"
import { GeneratedColor } from "../GeneratedColor"
import { GeneratedColorCode } from "../GeneratedColorCode"
import { Container } from "./styles"

interface Colors {
    Number: string;
}

interface ColorGeneratorProps {
    colors: Colors;
    setColors: Function;
}

function generateRGBString(redValue: number, greenValue: number, blueValue: number) {

    return '#'
        + `${redValue.toString(16).length > 1 ? redValue.toString(16) : '0' + redValue.toString(16)}`
        + `${greenValue.toString(16).length > 1 ? greenValue.toString(16) : '0' + greenValue.toString(16)}`
        + `${blueValue.toString(16).length > 1 ? blueValue.toString(16) : '0' + blueValue.toString(16)}`
}

function saveToLocalStorage(rgbValue: string, setCurrentId: Function) {
    if (localStorage.getItem('currentId') === null) {
        localStorage.setItem('currentId', '1')
        setCurrentId(1)
    }

    const idNumber = parseInt(localStorage.getItem('currentId') as string)

    if (localStorage.getItem('colors') === null) {
        localStorage.setItem('colors', JSON.stringify({ [idNumber]: rgbValue }))
        localStorage.setItem('currentId', (idNumber + 1).toString())
        setCurrentId(idNumber + 1)
    } else {
        const currentColors = JSON.parse(localStorage.getItem('colors') as string)

        currentColors[idNumber] = rgbValue
        localStorage.setItem('currentId', (idNumber + 1).toString())
        setCurrentId(idNumber + 1)
        localStorage.setItem('colors', JSON.stringify(currentColors))
    }
}

export function ColorGenerator({ colors, setColors }: ColorGeneratorProps) {
    const [redValue, setRedValue] = useState<number>(0)
    const [greenValue, setGreenValue] = useState<number>(0)
    const [blueValue, setBlueValue] = useState<number>(0)

    const [currentId, setCurrentId] = useState<number>(0)
    const rgbValue = generateRGBString(redValue, greenValue, blueValue)

    useEffect(() => {
        setColors(JSON.parse(localStorage.getItem('colors') as string))
    }, [currentId])

    return (
        <Container>
            <div className="colors">
                <div className="color red">
                    <input type="range" id="red" name="red"
                        min="0" max="255" defaultValue="0" onChange={change => setRedValue(parseInt(change.target.value))} />
                </div>
                <div className="color green">
                    <input type="range" id="red" name="red"
                        min="0" max="255" defaultValue="0" onChange={change => setGreenValue(parseInt(change.target.value))} />
                </div>
                <div className="color blue">
                    <input type="range" id="red" name="red"
                        min="0" max="255" defaultValue="0" onChange={change => setBlueValue(parseInt(change.target.value))} />
                </div>
            </div>

            <GeneratedColor rgbValue={rgbValue} />
            <GeneratedColorCode redValue={redValue} greenValue={greenValue} blueValue={blueValue} />

            <button
                className="addColorBtn"
                onClick={() => saveToLocalStorage(rgbValue, setCurrentId)}>
                Save Color
            </button>
        </Container>
    )
}