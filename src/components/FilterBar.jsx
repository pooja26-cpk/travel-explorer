import { useEffect, useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap'

export default function FilterBar({ continents, countries, onFilterChange }) {
  const [continent, setContinent] = useState('All')
  const [country, setCountry] = useState('All')

  useEffect(() => {
    onFilterChange({ continent, country })
  }, [continent, country, onFilterChange])

  return (
    <div className="filter-bar p-3 bg-light rounded-3 shadow-sm">
      <Row className="g-3 align-items-end">
        <Col xs={12} md={6}>
          <Form.Group controlId="filterContinent">
            <Form.Label>Continent</Form.Label>
            <Form.Select value={continent} onChange={(e) => setContinent(e.target.value)}>
              <option value="All">All</option>
              {continents.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="filterCountry">
            <Form.Label>Country</Form.Label>
            <Form.Select value={country} onChange={(e) => setCountry(e.target.value)}>
              <option value="All">All</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </div>
  )
}
