import { ColorCode } from "./styles";

interface GeneratedColorCodeProps {
    redValue: number;
    greenValue: number;
    blueValue: number;
}

export function GeneratedColorCode(props: GeneratedColorCodeProps) {
    return (
        <ColorCode>
            RGB (
            <span className="rgbRed">{props.redValue}</span>,&nbsp;
            <span className="rgbGreen">{props.greenValue}</span>,&nbsp;
            <span className="rgbBlue">{props.blueValue}</span>)
        </ColorCode>
    )
}