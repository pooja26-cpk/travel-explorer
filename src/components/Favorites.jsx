import { Row, Col, Card, Button, Badge } from 'react-bootstrap'

export default function Favorites({ favorites, onRemoveFavorite }) {
  if (!favorites.length) return null
  return (
    <div className="favorites-section mt-5">
      <h2 className="section-title">Favorites</h2>
      <Row className="g-4">
        {favorites.map((d) => (
          <Col key={d.id} xs={12} sm={6} md={4}>
            <Card className="destination-card h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={d.image}
                alt={d.name}
                className="destination-card-img"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400?text=Image+Unavailable' }}
              />
              <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-center">
                  <span>{d.name}</span>
                  <Badge bg="warning" text="dark">★ {d.rating.toFixed(1)}</Badge>
                </Card.Title>
                <Card.Subtitle className="mb-3 text-muted">{d.country}</Card.Subtitle>
                <div className="d-flex gap-2">
                  <Button variant="outline-danger" onClick={() => onRemoveFavorite(d)}>Remove</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

