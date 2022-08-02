import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";

const API_URL = `https://api.kanye.rest/`

const App = () => {
  const [kanye, setKanye] = useState('')

  const apiRequest = async () => {
    await fetch(API_URL)
      .then((res) => res.json())
      .then((res) => JSON.stringify(res))
      .then((res) => setKanye(res))
  }

  useEffect(() => {
    apiRequest()
  }, [])

  return(
    kanye.length > 0 &&
    <div>
      <p>{ kanye }</p>
    </div>
  )
}

export default App
