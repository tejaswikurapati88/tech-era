import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {
  BgContainer,
  NavBar,
  MainHeading,
  Ul,
  FailureButton,
  FailureContainer,
  FailureHeading,
  FailureImage,
  FailurePara,
} from '../../StyledComponents'
import NavBarComp from '../NavBarComp'
import Courses from '../Courses'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'LOADER',
  initail: 'INITIAL',
}

class Home extends Component {
  state = {courseList: [], apiStatus: apiStatusConstants.initail}

  componentDidMount() {
    this.getCoursesList()
  }

  getCoursesList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const response = await fetch('https://apis.ccbp.in/te/courses')
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.courses.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))
      this.setState({
        courseList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccess = () => {
    const {courseList} = this.state
    return (
      <NavBar container>
        <MainHeading>Courses</MainHeading>
        <Ul>
          {courseList.map(eachItem => (
            <Courses itemDetails={eachItem} key={eachItem.id} />
          ))}
        </Ul>
      </NavBar>
    )
  }

  onRetry = () => {
    this.getCoursesList()
  }

  renderFailure = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailurePara>
        We cannot seem to find the page you are looking for
      </FailurePara>
      <FailureButton onClick={this.onRetry}>Retry</FailureButton>
    </FailureContainer>
  )

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderDisplay = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccess()
      case apiStatusConstants.failure:
        return this.renderFailure()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <BgContainer>
        <NavBarComp />
        {this.renderDisplay()}
      </BgContainer>
    )
  }
}

export default Home
