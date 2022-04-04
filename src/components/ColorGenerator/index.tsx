import { useState } from "react";
import { GeneratedColor } from "../GeneratedColor";
import { GeneratedColorCode } from "../GeneratedColorCode";
import { Container } from "./styles";

export function ColorGenerator() {
    const [red, setRed] = useState<Number>(0)
    const [green, setGreen] = useState<Number>(0)
    const [blue, setBlue] = useState<Number>(0)

    const rgbValue = "#FF0FAF";

    return (
        <Container>
            <div className="colors">
                <div className="color red">
                    <input type="range" id="red" name="red"
                        min="0" max="255" defaultValue="0" onChange={change => setRed(parseInt(change.target.value))} />
                </div>
                <div className="color green">
                    <input type="range" id="red" name="red"
                        min="0" max="255" defaultValue="0" onChange={change => setGreen(parseInt(change.target.value))} />
                </div>
                <div className="color blue">
                    <input type="range" id="red" name="red"
                        min="0" max="255" defaultValue="0" onChange={change => setBlue(parseInt(change.target.value))} />
                </div>
            </div>

            <GeneratedColor rgbValue={rgbValue} />
            <GeneratedColorCode />

        </Container>
    )
}