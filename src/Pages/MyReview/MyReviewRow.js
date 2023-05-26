import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyReviewRow = ({ myreview, handelDelete}) => {
  const {_id, serviceName, fee, message, email } = myreview;

  const [reviewService, setReviewServices] = useState({});

  useEffect(() => {
    fetch(`https://assignment-11-server-site-selimalahi.vercel.app/all-services/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviewServices(data));
  }, []);
  return (
    <tr>
      <th>
        <label>
          <button  onClick={() => handelDelete(_id)} className="btn btn-ghost">X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {reviewService?.img && (
                <img
                  className="mt-3"
                  src={reviewService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold mt-0">{serviceName}</div>
          </div>
        </div>
      </td>
      <td>
        {fee}
        <br />
      </td>
      {/* <td>Purple</td> */}
      <th>
        <span className="badge badge-ghost badge-sm">{message}</span>
      </th>
      <th>
        <span className="badge badge-ghost badge-sm">{email}</span>
      </th>
      <th>
          <Link  to={`/update/${_id}`}><button className="btn btn-ghost btn-xs">update</button></Link>
        </th>
    </tr>
  );
};

export default MyReviewRow;