import {Link} from 'react-router-dom'
import './index.css'
import {Li, ListCont, CourseName, Image} from '../../StyledComponents'

const Courses = props => {
  const {itemDetails} = props
  const {id, logoUrl, name} = itemDetails
  return (
    <Li>
      <Link className="link" to={`/courses/${id}`}>
        <ListCont>
          <Image src={logoUrl} alt={name} />
          <CourseName>{name}</CourseName>
        </ListCont>
      </Link>
    </Li>
  )
}

export default Courses
