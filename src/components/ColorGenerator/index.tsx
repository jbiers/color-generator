import { GeneratedColor } from "../GeneratedColor";
import { GeneratedColorCode } from "../GeneratedColorCode";
import { Container } from "./styles";

export function ColorGenerator() {
    return (
        <Container>
            <div className="colors">
                <div className="color red">
                    <input type="range" id="red" name="red"
                        min="0" max="255" />
                </div>
                <div className="color green">
                    <input type="range" id="red" name="red"
                        min="0" max="255" />
                </div>
                <div className="color blue">
                    <input type="range" id="red" name="red"
                        min="0" max="255" />
                </div>
            </div>

            <GeneratedColor />
            <GeneratedColorCode />

        </Container>
    )
}