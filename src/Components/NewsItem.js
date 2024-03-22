import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
        <div style={{display: "flex", justifyContent: "flex-end", position: "absolute", right: "0"}}>
        <span className="badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1"}}>
                {source}
              </span>
              </div>
          <img
            src={
              !imageUrl
                ? "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_3018,w_5365,x_0,y_361/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1707095348/GettyImages-1978655641_oenleg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;
