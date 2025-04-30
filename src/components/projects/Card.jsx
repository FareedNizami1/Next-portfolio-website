'use client'
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Card = ({ name, description, date, demoLink }) => {
  return (
    <Link href={demoLink} target={'_blank'}>
    <StyledWrapper>
      <div className="card hover:scale-110 ease-in duration-500">
        <div className="info-container">
          <h2 className="card-title">{name}</h2>
          <p className="card-description sm:inline-block">{description}</p>
          <div className="divider" />
          <p className="card-date sm:card-date-lg">
            {new Date(date).toDateString()}
          </p>
        </div>
      </div>
    </StyledWrapper>
    </Link>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 190px;
    height: 254px; /* Adjust height for single column */
    background: #07182E;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
    opacity: 0.8;
    cursor: pointer;
    
  }

  .info-container {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    width: 100%;
  }

  .card-title {
    color: white;
    font-size: 1.2em;
    margin-bottom: 5px;

  }

  .card-description {
    color: #888;
    font-size: 0.8em;
    margin-bottom: 10px;
  }

  .divider {
    width: 100%;
    border-bottom: 1px dashed #444;
    margin-bottom: 10px;
  }

  .card-date {
    color: #888;
    font-size: 0.7em;
  }

  .card-date-lg {
    font-size: 0.9em;
  }

  .card::before {
    content: '';
    position: absolute;
    width: 100px;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }
  .card:hover:before {
    background-image: linear-gradient(180deg, rgb(225,186,3), rgb(127,252,3));
    
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .card::after {
    content: '';
    position: absolute;
    background: #07182E;
    inset: 5px;
    border-radius: 15px;
  }
`;

export default Card;