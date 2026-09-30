import React from 'react';
import './AshleyBirthdayPage.css';

export default function AshleyBirthdayPage() {
  return (
    <main className='birthday-page'>
      <div className='birthday-glow birthday-glow--one' aria-hidden='true' />
      <div className='birthday-glow birthday-glow--two' aria-hidden='true' />

      <section className='birthday-card' aria-labelledby='birthday-heading'>
        <h1 id='birthday-heading'>Happy 31st Birthday Ash!</h1>
        <div className='birthday-photo-frame'>
          <img
            className='birthday-photo'
            src='/ashley-and-matt.jpg'
            alt='Ashley and Matt together'
          />
        </div>
        <p className='birthday-love-note'>I love you!</p>
      </section>
    </main>
  );
}
