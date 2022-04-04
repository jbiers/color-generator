import { Color } from "./styles"

interface GeneratedColorProps {
    rgbValue: String;
}

export function GeneratedColor(props: GeneratedColorProps) {

    return (
        <Color color={props.rgbValue as string} />
    )
}