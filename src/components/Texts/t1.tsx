import { StyledT1 } from "@/src/styles";

type T1Props = {
    text: string;  
};

export default function T1({ text }: T1Props) {
    return (
        <StyledT1>{text}</StyledT1>  
    );
}
