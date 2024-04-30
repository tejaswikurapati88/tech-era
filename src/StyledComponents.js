import Styled from 'styled-components'

export const Heading = Styled.h1`
  color: #1e293b;
  font-size: 30px;
`

export const DetImg = Styled.img`
  margin-right: 30px;
`

export const DetailsContainer = Styled.div`
padding: 80px;
display: flex;
flex-direction: row;
font-family: 'Roboto';
`

export const BgContainer = Styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
`

export const NavBar = Styled.div`
  background-color: ${props => (props.container ? '#ffffff' : '#f1f5f9')}  ;
  display: flex;
  padding: 20px;
  padding-left: ${props => (props.container ? '15px' : '60px')} ;
  flex-direction: ${props => props.container && 'column'} ;
`

export const LogoImg = Styled.img`
  height: 60px;
`
export const MainHeading = Styled.h1`
  color: #1e293b;
  margin-left: 55px;
  font-size: 50px;
`
export const Li = Styled.li`
  list-style-type: none;
  display: inline-block;
`
export const Ul = Styled.ul`
`
export const ListCont = Styled.div`
  display: flex;
  align-items: center;
  margin: 25px;
`
export const CourseName = Styled.p`
  color: #000000;
  font-size: 20px;
  font-weight: bold;
`

export const Image = Styled.img`
  height: 60px;
  margin: 15px;
  max-width: 60px
`
export const Links = Styled.link`
  text-decoration: none;
`
export const FailureButton = Styled.button`
  background-color: #52bbf0;
  color: #ffffff;
  padding: 20px;
  width: 150px;
  cursore: pointer;
  outline: none;
`

export const FailureContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureHeading = Styled.h1`
  font-size: 80px;
  color: #475569;
  font-weight: bold;
`

export const FailureImage = Styled.img`
  height: 400px;
`

export const FailurePara = Styled.p`
  font-size: 20px;
  color: #475569;
`
export const Para = Styled.p`
  font-size: 25px;
  color:  #475569;
`
