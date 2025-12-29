import { Row, Col } from 'react-bootstrap'
import DestinationCard from './DestinationCard.jsx'

export default function DestinationList({ destinations, onView, onAddFavorite }) {
  return (
    <div className="destination-list">
      <Row className="g-4">
        {destinations.map((d) => (
          <Col key={d.id} xs={12} sm={6} md={4}>
            <DestinationCard destination={d} onView={onView} onAddFavorite={onAddFavorite} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

