import { useEffect, useMemo, useState } from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from './components/SearchBar.jsx';
import FilterBar from './components/FilterBar.jsx';
import DestinationList from './components/DestinationList.jsx';
import DestinationModal from './components/DestinationModal.jsx';
import Favorites from './components/Favorites.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import destinationsData from './data/destinations.json';
import './App.css';

export default function App() {
  const [destinations] = useState(destinationsData)
  const [searchText, setSearchText] = useState('')
  const [filters, setFilters] = useState({ continent: 'All', country: 'All' })
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem('travelExplorer-favorites')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [modalDestination, setModalDestination] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    localStorage.setItem('travelExplorer-favorites', JSON.stringify(favorites))
  }, [favorites])

  const continents = useMemo(() => {
    const set = new Set(destinations.map((d) => d.continent))
    return Array.from(set).sort()
  }, [destinations])

  const countries = useMemo(() => {
    const base = filters.continent === 'All' ? destinations : destinations.filter((d) => d.continent === filters.continent)
    const set = new Set(base.map((d) => d.country))
    return Array.from(set).sort()
  }, [destinations, filters])

  const applyFilters = (list, currentFilters, query) => {
    let out = list
    if (currentFilters.continent !== 'All') out = out.filter((d) => d.continent === currentFilters.continent)
    if (currentFilters.country !== 'All') out = out.filter((d) => d.country === currentFilters.country)
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      out = out.filter((d) => d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q))
    }
    return out
  }

  const filteredDestinations = useMemo(() => applyFilters(destinations, filters, searchText), [destinations, filters, searchText])

  const handleSearch = (value) => {
    setSearchText(value)
  }

  const handleFilter = (next) => {
    setFilters(next)
  }

  const handleAddFavorite = (destination) => {
    setFavorites((prev) => {
      if (prev.find((d) => d.id === destination.id)) return prev
      return [...prev, destination]
    })
  }

  const handleRemoveFavorite = (destination) => {
    setFavorites((prev) => prev.filter((d) => d.id !== destination.id))
  }

  const openModal = (destination) => {
    setModalDestination(destination)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Container className="py-4 flex-grow-1">
        <section className="hero text-center my-5">
          <h1 className="display-4">Travel Destination Explorer</h1>
          <p className="lead">Discover amazing places around the world</p>
        </section>

        <SearchBar onSearch={handleSearch} />
        <FilterBar continents={continents} countries={countries} onFilterChange={handleFilter} />

        <h2 id="destinations" className="section-title text-center my-4">Destinations</h2>
        <DestinationList
          destinations={filteredDestinations}
          onView={openModal}
          onAddFavorite={handleAddFavorite}
        />

        <h2 id="favorites" className="section-title text-center my-4">Favorites</h2>
        <Favorites favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />

        <DestinationModal show={showModal} destination={modalDestination} onClose={closeModal} />
      </Container>
      <Footer />
    </div>
  );
}