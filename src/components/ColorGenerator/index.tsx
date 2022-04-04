import { useState } from "react"
import { GeneratedColor } from "../GeneratedColor"
import { GeneratedColorCode } from "../GeneratedColorCode"
import { Container } from "./styles"

function generateRGBString(redValue: number, greenValue: number, blueValue: number) {

    return '#'
        + `${redValue.toString(16).length > 1 ? redValue.toString(16) : '0' + redValue.toString(16)}`
        + `${greenValue.toString(16).length > 1 ? greenValue.toString(16) : '0' + greenValue.toString(16)}`
        + `${blueValue.toString(16).length > 1 ? blueValue.toString(16) : '0' + blueValue.toString(16)}`
}

export function ColorGenerator() {
    const [redValue, setRedValue] = useState<number>(0)
    const [greenValue, setGreenValue] = useState<number>(0)
    const [blueValue, setBlueValue] = useState<number>(0)

    const rgbValue = generateRGBString(redValue, greenValue, blueValue)

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

        </Container>
    )
}