import React from 'react'
import PageTop from '../components/PageTop'

import styled from 'styled-components'

import ContactPartTwo from '../components/ContactPartTwo'
import ContactPartOne from '../components/ContactPartOne'
import SlantingText from '../components/SlantingText'
import Arrow from '../assets/images/down_arrow2.png'


function Contact() {
  return (
    <Container>
      <PageTop text="Hello!" title="Touch with Us" description="We help ambitious business like your 
          generate more profits by building awareness,ndriving web traffic, connecting with customers and growing overall sales" 
      />

      <FormContainer>
        <Form>
          <HeadContainer>
            <Head>
              <Text>
                <SlantingText text="Here we help" />
              </Text>
              <Title>Enquiry Form</Title>
            </Head>
          </HeadContainer>      

          <Top>
            <Section>
              <Label htmlFor="firstname">First name*</Label>
              <InputContainer>
                <Input type="text" placeholder="Enter your firstname" name="firstname" id="firstname"></Input>
              </InputContainer>
            </Section>

            <Section>
              <Label htmlFor="lastname">Last name*</Label>
              <InputContainer>
                <Input type="text" placeholder="Enter your lastname" name="lastname" id="lastname"></Input>
              </InputContainer>
            </Section>

            <Section>
              <Label htmlFor="phone">Phone number*</Label>
              <InputContainer>
                <img src={require("../assets/images/flag.svg").default} alt="flag" />               
                <img src={require("../assets/images/down_arrow2.png")} alt="arrow" className='arrow'/>
                <span>+91 </span>
                <Input type="text" placeholder="Enter your phone number" name="phone" id="phone"></Input>
              </InputContainer>              
            </Section>

            <Section>
              <Label htmlFor="email">Email address*</Label>
              <InputContainer>
                <Input type="email" placeholder="Enter your email" name="email" id="email"></Input>
              </InputContainer>
            </Section>
          </Top>

          <Bottom>
            <Section>
              <Label htmlFor="category1">Project categories*</Label>
              <SelectContainer>
                <Select name="category1" id="category1" image={Arrow}>
                  <option value="" className="disabled" disabled selected hidden>Select your category</option>
                  <option value="webapp">Web app</option>
                  <option value="mobileapp">Mobile app</option>
                  <option value="website">Website</option>
                </Select>
              </SelectContainer>
            </Section>

            <Section>
              <Label htmlFor="category2">Project categories*</Label>
              <SelectContainer>
                <Select name="category2" id="category2" image={Arrow}>
                  <option value="" disabled selected hidden>Select your category</option>
                  <option value="webapp">Web app</option>
                  <option value="mobileapp">Mobile app</option>
                  <option value="website">Website</option>
                </Select>
              </SelectContainer>
            </Section>

            <TextAreaSection>
              <Label htmlFor="message">Message</Label>
              <TextArea placeholder="Type here..." name="message" id="message" rows="6" ></TextArea>
            </TextAreaSection>

            <Button>Next <img src={require("../assets/images/white_arrow.svg").default} alt="arrow" /></Button>
          </Bottom>
        </Form>
      </FormContainer>

      <Content>
        <ContactPartTwo />
        <ContactPartOne />
      </Content>
    </Container>
  )
}

export default Contact


const Container = styled.div`
    padding: 0 0 50px;
`

const FormContainer = styled.div`
    padding: 100px 0;
`

const Form = styled.form`
  width: 70%;
  margin: 0 auto;
`

const HeadContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`

const Head = styled.div`
  position: relative;
`

const Text = styled.div`
  position: absolute;
  left: -60px;
`

const Title = styled.h3`
  
`

const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 46%;
  margin-bottom: 50px;
`

const TextAreaSection = styled(Section)`
  width: 100%;
  
`

const Label = styled.label`
  font-size: 12px;
  color: #60625d;
  margin-bottom: 5px;
`

const Input = styled.input`
  padding: 5px 10px;
  flex-grow:1;
  border:none;
  outline:none;
`
const InputContainer = styled.div`
  display: flex;
  align-items:center;
  height: 50px;
  padding: 20px 10px;
  border-radius: 10px;
  border: 1px solid #c3c5c1;
  &:focus-within{
    outline: none;
    border:2px solid #FCDA69;
  }
  img{
    width:30px;
    border-radius: 50%;
    margin-right: 10px;
    &.arrow{
      width: 10px;
    }
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 20px 10px;
  border-radius: 10px;
  border: 1px solid #c3c5c1;
  &:focus{
    outline: none;
    border:2px solid #FCDA69;
  }
`
const SelectContainer = styled.div`
  display: flex;
  align-items:center;
  height: 50px;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid #c3c5c1;
  &:focus-within{
    outline: none;
    border:2px solid #FCDA69;
  }
`

const Select = styled.select`
  padding: 5px 10px;
  width:100%;
  border: none;
  outline:none;
  color: #60625d;

  -webkit-appearance: none;
  background-image: ${({image})=>`url(${image})`};
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 20px;  
`

const Bottom = styled.div`
  padding-top: 50px;
  border-top: 1px solid #c3c5c1;
  width:100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Button = styled.button`
  background-color: #000;
  color: #fff;
  width:200px;
  padding: 10px;
  border-radius: 10px;
  margin-left: auto;
  display: flex;
  align-items:center;
  justify-content: center;
  font-size:16px;
  img{
    width: 15px;
    margin-left: 20px;
    transform: rotate(45deg);
  }
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FCDA69;
    width: 90%;
    margin: 0 auto;
    border-radius: 50px;
    padding: 50px;
`

