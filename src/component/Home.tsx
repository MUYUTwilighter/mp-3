import styled from "styled-components";

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Span = styled.span`
    color: #BBBBBB;
`;

export default function Home() {
    return <>
        <h1>Xingyu Zhou <Span>- be a coder, not a codee</Span></h1>
        <hr/>
        <ImgContainer><img src="/portrait.png" alt="Portrait of Xingyu Zhou"/></ImgContainer>
        <p>
            I am Xingyu Zhou, currently studying at Metropolitan College of Boston University for master degree in
            Computer
            Information System. I once have served as a back-end developer at JD.com, and still looking forward to be a
            professional back-end developer in the future, as well as a good coder capable of full stack.
        </p>
    </>
}