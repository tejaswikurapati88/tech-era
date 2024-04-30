import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {
  FailureButton,
  FailureContainer,
  FailureHeading,
  FailureImage,
  FailurePara,
  Para,
  Heading,
  DetImg,
  DetailsContainer,
} from '../../StyledComponents'

import NavBarComp from '../NavBarComp'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITAIL',
  inProgress: 'LOADING',
}

class CourseItemDetails extends Component {
  state = {courseDetails: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const fetchDetailsUrl = `https://apis.ccbp.in/te/courses/${id}`
    const response = await fetch(fetchDetailsUrl)
    if (response.ok === true) {
      const data = await response.json()
      const details = data.course_details
      const updatedDetails = {
        id: details.id,
        description: details.description,
        imageUrl: details.image_url,
        name: details.name,
      }
      this.setState({
        courseDetails: updatedDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccDetails = () => {
    const {courseDetails} = this.state
    return (
      <DetailsContainer>
        <DetImg src={courseDetails.imageUrl} alt={courseDetails.name} />
        <div>
          <Heading>{courseDetails.name}</Heading>
          <Para>{courseDetails.description}</Para>
        </div>
      </DetailsContainer>
    )
  }

  onRetryDet = () => {
    this.getDetails()
  }

  renderDetailsFailure = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailurePara>
        We cannot seem to find the page you are looking for
      </FailurePara>
      <FailureButton onClick={this.onRetryDet}>Retry</FailureButton>
    </FailureContainer>
  )

  renderDetailsLoader = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderDetials = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccDetails()
      case apiStatusConstants.failure:
        return this.renderDetailsFailure()
      case apiStatusConstants.inProgress:
        return this.renderDetailsLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <NavBarComp />
        {this.renderDetials()}
      </>
    )
  }
}

export default CourseItemDetails
