import React from 'react'

export default function Profile() {
  return (
    <div className="about">
      <h1>Welcome to My Profile</h1>
      <img
        src="YogaS.jpg"
        alt="author pic"
      />
      <p>
        Halo, kenalin saya Yoga Sadhewo Shalahudin biasa dipanggil Yoga
        . Asal dari Salatiga. Saat ini saya sedang menempuh 
        pendidikan di Universitas Diponegoro jurusan Teknik Komputer.
        Berikut link {' '}
        <a href="https://github.com/YogaSadhewoS" target="_blank" rel="noreferrer">
          Github
        </a>{' '}
        saya.
      </p>
    </div>
  )
}
