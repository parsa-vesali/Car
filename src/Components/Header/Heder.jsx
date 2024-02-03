import React from 'react'
import HeaderSlider from '../sliders/HeaderSlider/HeaderSlider';
import SearchBar from '../SearchBar/SearchBar';
import "./Header.css";


export default function Heder() {
  return (
  <header className='header'>
      <HeaderSlider />
      <SearchBar />
  </header>
  );
}
