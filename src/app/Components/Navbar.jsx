"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Navbar() {

  const [search, setSearch] = useState("")
  const [q, setQ] = useState("All")
  const [language, setLanguage] = useState("hi")

  const params = useSearchParams()
  let navigate = useRouter()

  function postData(e) {
    e.preventDefault()
    navigate.push(`/?q=${search}&language=${language}`)
    setSearch("")
  }

  useEffect(() => {
    setQ(params.get("q") ?? "All")
    setLanguage(params.get("language") ?? "hi")
  }, [params])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container-fluid">

          <Link className="navbar-brand text-light" href="/">
            NEWS-GUIDE
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link text-light" href="/">HOME</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" href={`/?q=politics&language=${language}`}>POLITICS</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" href={`/?q=News&language=${language}`}>NEWS</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" href={`/?q=technology&language=${language}`}>TECHNOLOGY</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" href={`/?q=science&language=${language}`}>SCIENCE</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" href={`/?q=sports&language=${language}`}>SPORTS</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" href={`/?q=Education&language=${language}`}>EDUCATION</Link>
              </li>

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                MORE
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href={`/?q=entertainment&language=${language}`}>ENTERTAINMENT</Link></li>
                  <li><Link className="dropdown-item" href={`/?q=health&language=${language}`}>HEALTH</Link></li>
                  <li><Link className="dropdown-item" href={`/?q=world&language=${language}`}>WORLD</Link></li>
                  <li><Link className="dropdown-item" href={`/?q=India&language=${language}`}>INDIA</Link></li>
                  <li><Link className="dropdown-item" href={`/?q=Jokes&language=${language}`}>JOKES</Link></li>
                  <li><Link className="dropdown-item" href={`/?q=Nature&language=${language}`}>NATURE</Link></li>
                  <li><Link className="dropdown-item" href={`/?q=Sports&language=${language}`}>AGRICULTURE</Link></li>
                </ul>
              </li>

              {/* Languages */}
              <li className="nav-item dropdown">
                <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
               LANGUAGES
                </a>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" onClick={() => setLanguage("en")}>English</button></li>
                  <li><button className="dropdown-item" onClick={() => setLanguage("fr")}>French</button></li>
                  <li><button className="dropdown-item" onClick={() => setLanguage("de")}>German</button></li>
                  <li><button className="dropdown-item" onClick={() => setLanguage("es")}>Spanish</button></li>
                  <li><button className="dropdown-item" onClick={() => setLanguage("ru")}>Russian</button></li>
                  <li><button className="dropdown-item" onClick={() => setLanguage("hi")}>Hindi</button></li>
                </ul>
              </li>

            </ul>

            {/* Search */}
            <form className="d-flex" role="search" onSubmit={postData}>
              <input
                className="form-control me-2"
                name="search"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>

          </div>
        </div>
      </nav>
    </>
  )
}