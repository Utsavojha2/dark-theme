import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'  

function App() {
  const [input,setInput] = useState(false);

  useEffect(() => {
      document.documentElement.className = `${input ? 'dark-theme' : 'light-theme'}`
  }, [input])
  
  return(  
        <main> 
          <nav>
            <div className="nav-center">
              <h1>Overreacted</h1>
              <div className="ui segment checkBox">
              <div className="ui attached icon form" id="info_input_form">
                <div className="ui toggle checkbox">
                  <input onChange={() => setInput(!input)} type="checkbox" tabIndex="0"/>
                  <label className="coloring black">Toggle</label>
                </div>
              </div>
            </div>
            </div>
          </nav>
          <section className="articles">
            {data.map(el => {
              return <Article key={el.id} {...el} />
            })}
          </section>
        </main>
    )
}

export default App
