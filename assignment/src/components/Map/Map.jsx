import React from 'react'
import './Map.css'

const Map = () => {
  return (
    <div className='map-container' >
        <p>
        Geographical Data
        </p>
        <div className='map' >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1188710335036!2d77.2410203!3d28.656159199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfce26ec085ef%3A0x441e32f4fa5002fb!2sRed%20Fort!5e0!3m2!1sen!2sin!4v1721951043530!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Map