import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left"  && "10px"};
    right: ${props => props.direction === "right"  && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    overflow: hidden;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.backgroundColor};
`;

const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`;

const Image = styled.img`
    height: 103%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper> 
                <Slide backgroundColor="f4fafd">
                    <ImageContainer>
                        <Image src="https://wallpapercave.com/wp/wp4244900.jpg" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide backgroundColor="fcf1ed">
                    <ImageContainer>
                        <Image src="https://wallpapercave.com/wp/wp4244900.jpg" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide backgroundColor="fbf0f4">
                    <ImageContainer>
                        <Image src="https://wallpapercave.com/wp/wp4244900.jpg" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
