import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProductItem = ({ product }) => {
  return (
    <Fragment>
      <li className="collection-item">
        <div className="col s12 m6 l4">
          <div className="card">
            <div width="100" className="card-image materialboxed ">
              <img src={`${product.image}`} alt="" />
            </div>
            <span class="card-title">{product.name}</span>
            <div className="card-content">
              <span>
                StartDate:
                <Moment format="MMMM Do YYYY">{product.startDate}</Moment>
              </span>

              <br />
              <span>
                EndDate:
                <Moment format="MMMM Do YYYY">{product.endDate}</Moment>
              </span>
            </div>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

ProductItem.propTypes = {};

export default ProductItem;
