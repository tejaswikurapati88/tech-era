import {
  FailureContainer,
  FailureHeading,
  FailurePara,
  FailureImage,
} from '../../StyledComponents'

const NotFound = () => (
  <FailureContainer>
    <FailureImage
      src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
      alt="not found"
    />
    <FailureHeading>Page Not Found</FailureHeading>
    <FailurePara>
      We are sorry, the page you requested could not be found.
    </FailurePara>
  </FailureContainer>
)

export default NotFound
