import { useEffect, useState } from 'react'
import { Card, Button, Badge } from 'react-bootstrap'

export default function DestinationCard({ destination, onView, onAddFavorite }) {
  const [imgSrc, setImgSrc] = useState(destination.image)

  useEffect(() => {
    const title = encodeURIComponent(`${destination.name} ${destination.country}`)
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${title}`
    let cancelled = false
    fetch(url)
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (!cancelled && data && (data.originalimage?.source || data.thumbnail?.source)) {
          setImgSrc(data.originalimage?.source || data.thumbnail?.source)
        }
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [destination.name, destination.country])
  return (
    <Card className="destination-card h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={imgSrc}
        alt={destination.name}
        className="destination-card-img"
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400?text=Image+Unavailable' }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <span>{destination.name}</span>
          <Badge bg="warning" text="dark">★ {destination.rating.toFixed(1)}</Badge>
        </Card.Title>
        <Card.Subtitle className="mb-3 text-muted">{destination.country}</Card.Subtitle>
        <div className="d-flex gap-2">
          <Button variant="primary" onClick={() => onView({ ...destination, image: imgSrc })}>View Details</Button>
          <Button variant="outline-success" onClick={() => onAddFavorite({ ...destination, image: imgSrc })}>Add to Favorites</Button>
        </div>
      </Card.Body>
    </Card>
  )
}
