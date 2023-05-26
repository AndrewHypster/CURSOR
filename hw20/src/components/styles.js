import styled from "styled-components"
import darkTheme from "./theme/dark";

/** SIGN **/
const Wrapper = styled.div`
min-height:100vh;
align-content: center;
flex-wrap: wrap;
justify-content: center;
display: flex;
`,

SignS = styled.div`
padding: 80px 30px 30px 30px;
text-align: center;
background: ${darkTheme.body};
display: inline;
`,

/** HEADER **/
Icon = styled.div`
width: 45px;
height: 45px;
margin: 8px auto;
align-content: center;
background: ${darkTheme.icon};
border-radius: 50%;
justify-content: center;
display: grid;
`,

Img = styled.img`
width: 25px;
`,

Text = styled.h2`
font-weight: 500;
color: ${darkTheme.title};
`,

/** BODY **/
BodyS = styled.div`
margin: 24px 0 45px;
justify-content: center;
display: flex;
`,

Input = styled.input`
width: 380px;
height: 35px;
margin: 8px 0;
padding: 10px;
color: ${darkTheme.input};
background: ${darkTheme.body};
border: 1px solid ${darkTheme.footer};
border-radius: 5px;
display: block;
`,

InpNames = styled.div`
justify-content: space-between;
display: flex;
`,

InputName = styled.input`
width: 170px;
height: 35px;
margin: 8px 0;
padding: 10px;
color: ${darkTheme.input};
background: ${darkTheme.body};
border: 1px solid ${darkTheme.footer};
border-radius: 5px;
`,

CheckBox = styled.div`
width: 300px;
text-align: left;
display: flex;
`,

Label = styled.label`
margin: 8px;
color: ${darkTheme.title};
font-size: 12px;
`,

Button = styled.h3`
margin: 20px 0 10px;
padding: 8px;
font-weight: 500;
color: ${darkTheme.button};
background: ${darkTheme.buttonBg};
border-radius: 4px;
cursor: pointer;
&:hover {
  color: ${darkTheme.hover.button};
  background: ${darkTheme.hover.buttonBg};
}
`,

Links = styled.div`
font-size: 12px;
justify-content: space-between;
display: flex;
`,

Linkk = styled.div`
font-size: 12px;
justify-content: end;
display: flex;
`,

A = styled.p`
color: ${darkTheme.buttonBg};
&:hover {
  color: ${darkTheme.hover.link};
}
`,

/** FOOTER **/
P = styled.p`
font-size: 10px;
color: ${darkTheme.footer};
`

export { Wrapper, SignS, Icon, Img, Text, BodyS, Input, InpNames, InputName, CheckBox, Label, Button, Links, Linkk, A, P }