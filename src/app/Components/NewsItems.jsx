import React from 'react'

export default function NewsItems(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card">

        <img
          src={props.pic || "/images/no-image.png"}
          onError={(e) => e.target.src = "/images/no-image.png"}
          height={200}
          className="card-img-top"
          alt="news"
        />

        <div className="card-body">
          <h5 className="card-title">{props.source}</h5>

          <p>{new Date(props.date).toLocaleDateString()}</p>

          <p className="card-text">{props.description}</p>

          <a href={props.url} className="btn btn-primary" target="_blank">
            Read more
          </a>
        </div>

      </div>
    </div>
  )
}