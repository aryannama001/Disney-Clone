import styled from "styled-components";

const Login = () => {
    return (
        <Container>
            <BgImage />
            <Content>
                <CTA>
                    <CTALogo src="images/cta-logo-one.svg" />
                    <SignUp >Login</SignUp>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellendus ipsa voluptate odit labore libero sed molestiae velit dolorum beatae.</Description>
                    <CTALogo src="images/cta-logo-two.png"></CTALogo>
                </CTA>
            </Content>
        </Container>
    );
}

const Container = styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;
`;

const Content = styled.div`
margin-bottom:10vw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding: 80px 40px;
height:100%;

`;

const BgImage = styled.div`
height:100%;
background-size:cover;
background-repeat:no-repeat;
background-position:top;
position:absolute;
top:0;
right:0;
left:0;
background-image:url("/images/login-background.jpg");
z-index:-1;
`;

const CTA = styled.div`
max-width: 650px;
width: 100%;
display: flex;
flex-direction: column;
`;

const CTALogo = styled.img`
margin-bottom: 12px;
max-width:640px;
min-height: 1px;
display: block;
width: 100%;
`;

const SignUp = styled.a`
background-color: #1a1ae3;
color: #f9f9f9;
font-weight: bold;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size:18px;
padding: 16px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover{
    background-color: blue;
}
`;

const Description = styled.p`
font-size: 12px;
margin: 0 0 24px;
letter-spacing: 1.5px;
line-height: 1.5;
`;
export default Login