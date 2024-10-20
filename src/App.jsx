import React from 'react'
import './App.css'

const App = () => {
  return (
    <>
      <header class="header">
        <div class="container">
          <nav class="nav">

            <div class="menu">
              <a href="">Детям</a>
              <a href="">Взрослым</a>
              <a href="">Фотозоны</a>
            </div>

            <button className="btn2">click</button>

          </nav>
        </div>
      </header>

      <section>
        <div className="contaener">
          <div className="wrapper">
            
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="wrap">
            <div className="card">
              <img src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65bcd006cea62c64ad96ddf7_65bcd0fbcea62c64ad98bbf0/scale_1200" alt="" />
              <h2>коньяк</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <h3>100$</h3>
              <button className='btn2'>buy now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App