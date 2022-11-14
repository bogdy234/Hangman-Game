import { FC, ReactElement } from "react";
import {
    BottomLine,
    Container,
    ShortLine,
    TopLine,
    VerticalLine,
} from "./style";

interface HangdrawProps {}

const Hangdraw: FC<HangdrawProps> = (): ReactElement => {
    return (
        <Container>
            <BottomLine>
                <VerticalLine />
                <TopLine />
                <ShortLine />
            </BottomLine>
        </Container>
    );
};

export default Hangdraw;
