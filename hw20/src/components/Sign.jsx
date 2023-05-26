import { Link } from 'react-router-dom'
import { Wrapper, SignS, Icon, Img, Text, BodyS, Input, InpNames, InputName, CheckBox, Label, Button, Links, Linkk, A, P } from './styles.js'
import { name, email, password } from './check-inputs.js'
import { ClickBtn, ClickInp } from './work-with-bd.js'
import { useState } from 'react'

export const Sign = (props) => {
  
  return (
    <Wrapper>
      <SignS>
        <Header title={props.title} />
        <Body inputs_plus={props.inputs_plus} checkbox={props.checkbox} button={props.button} lLink={props.lLink} rLink={props.rLink} />
        <Footer buttom={props.buttom} />
      </SignS>
    </Wrapper>
  )
}

export const Header = (props) => {

  return (
    <>
      <Icon>
        <Img src="https://cdn-icons-png.flaticon.com/512/565/565547.png" alt='icon' />
      </Icon>
      <Text>{props.title}</Text>
    </>
  )
} 

export const Body = (props) => {
  const [fName, setFName] = useState('null'),
  [lName, setLName] = useState('null'),
  [emaill, setEmail] = useState('null'),
  [pass, setPass] = useState('null'),
  [check, setCheck] = useState('null'),
  [checkRemem, setCheckRemem] = useState (true)

  return (
    <BodyS>
      <div>
        {props.inputs_plus && 
          <InpNames>
            <InputName placeholder='First Name *' onChange={e => setFName(name(e)? e.target.value : 'null')} />
            <InputName placeholder='Last Name *' onChange={e => setLName(name(e)? e.target.value : 'null')} />
          </InpNames>
        }
        <Input id='email' placeholder='Email Adress *' onChange={e => setEmail(email(e)? e.target.value : 'null')} onClick={e => {if (props.button === 'SIGN IN') ClickInp(e); setEmail(email(e)? e.target.value : 'null')}} />
        <Input id='password' placeholder='Password *' onChange={e => setPass(password(e)? e.target.value : 'null')} onClick={e => {if (props.button === 'SIGN IN') ClickInp(e); setPass(password(e)? e.target.value : 'null')}} />
        <CheckBox>
          <input type="checkbox" onChange={e => {
            if (props.checkbox === 'I want to receive inspiration, marketing promotions and via email.') setCheck(e.target.checked)
            else if (props.checkbox === 'Remember me') setCheckRemem(e.target.checked)
          }} />
          <Label>{props.checkbox}</Label>
        </CheckBox>
        <Button onClick={e => ClickBtn(fName, lName, emaill, pass, check, checkRemem, e.target.innerHTML)} >{props.button}</Button>
        {!props.inputs_plus && 
          <Links>
            <Link to='/forgot-password' ><A>{props.lLink}</A></Link>
            <Link to='/sign-up' ><A>{props.rLink}</A></Link>
          </Links>}
        {props.inputs_plus && 
          <Linkk>
            <Link to='/' ><A>{props.rLink}</A></Link>
          </Linkk>}
      </div>
    </BodyS>
  )
}

export const Footer = () => <P>Copyright © Your Website 2023.</P>