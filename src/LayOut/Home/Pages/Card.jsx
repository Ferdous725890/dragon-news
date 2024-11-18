import moment from 'moment';
import React from 'react';
import { FaShareSquare, FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  const { _id, author, title, thumbnail_url, details, rating, total_view } = card;

  return (
    <div className="mb-14 p-5 border border-gray-300 rounded-lg shadow-lg">
      {/* Author and Actions */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img
            className="w-14 h-14 rounded-full bg-gray-400 mr-3"
            src={author?.img || "https://via.placeholder.com/150"}
            alt={`${author?.name || "Unknown Author"}'s Avatar`}
          />
          <div>
            <h2 className="font-semibold text-lg">{author?.name || "Unknown Author"}</h2>
            <p className="text-gray-500 text-sm">
              {author?.published_date
                ? moment(author.published_date).format("YYYY, MMM DD")
                : moment().format("YYYY, MMM DD")}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-gray-600">
          <FaBookmark className="cursor-pointer hover:text-gray-800" />
          <FaShareSquare className="cursor-pointer hover:text-gray-800" />
        </div>
      </div>

      {/* Title and Thumbnail */}
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <img
        className="w-full h-[500px] object-cover mb-4"
        src={thumbnail_url}
        alt={title}
      />

      {/* Details */}
      <p className="text-gray-700 mb-4">{details}</p>
      <div className="flex justify-between items-center text-gray-600">
        <p>Rating: <span className="font-semibold">{rating?.number || "N/A"}</span></p>
        <p>Views: <span className="font-semibold">{total_view || 0}</span></p>
      </div>

      {/* Read More Link */}
      <div className="mt-4">
        <Link
          to={`/news/${_id}`}
          className="text-blue-600 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
