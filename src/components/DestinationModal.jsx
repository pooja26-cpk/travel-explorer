import { Modal, Image, Badge } from 'react-bootstrap'

export default function DestinationModal({ show, destination, onClose }) {
  if (!destination) return null
  return (
    <Modal show={show} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {destination.name} — {destination.country} <Badge bg="warning" text="dark" className="ms-2">★ {destination.rating.toFixed(1)}</Badge>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          src={destination.image}
          alt={destination.name}
          fluid
          className="mb-3 rounded-3"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/1200x800?text=Image+Unavailable' }}
        />
        <p className="lead">{destination.description}</p>
      </Modal.Body>
    </Modal>
  )
}
