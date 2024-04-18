import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

function MapApp() {
    const [selectedMarker, setSelectedMarker] = useState(null);

    const markerLocations = [
        { lat: 18.5155, lng: 73.8565, name: 'Dagdusheth Halwai Ganpati Temple', description: 'This is the location of Dagdusheth Halwai Ganpati Temple in Pune.' },
    ];

    const handleMarkerClick = (marker) => {
        setSelectedMarker(marker);
    };

    return (
        <>
            <div className="location-details">
                {selectedMarker && (
                    <>
                        <h2>{selectedMarker.name}</h2>
                        <p>{selectedMarker.description}</p>
                    </>
                )}
            </div>

            <div className='responsive-map'>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.275912961116!2d73.85355797496278!3d18.51642968257634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06fa5b442ff%3A0x9df365f5b648bce1!2sShreemant%20Dagdusheth%20Halwai%20Ganpati%20Mandir!5e0!3m2!1sen!2sin!4v1713416206101!5m2!1sen!2sin"
                    width="100%" height="700" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                
                <Link to="/movies" className="movies-link">Go to Movies Screen</Link> 

                {markerLocations.map((marker, index) => (
                    <div
                        key={index}
                        className="marker"
                        style={{ position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%)`, cursor: 'pointer' }}
                        onClick={() => handleMarkerClick(marker)}
                    >
                        <img src="/marker-icon.png" alt="Marker" style={{ width: '30px', height: 'auto', position: 'absolute', left: '0' }} />

                    </div>
                ))}
            </div>
        </>
    );
}

export default MapApp;
