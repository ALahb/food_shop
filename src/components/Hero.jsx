import React from 'react';
import styled from 'styled-components';
import hero from '../assets/hero.jpg';
export default function Hero() {
  return (
    <Section id="home">
      <div className="background">
        <img src={hero} alt="Background Image" />
      </div>
      <div className="content">
        <div className="info">
          <h2>Le Comptoir</h2>
          <em>
            venez découvrir le comptoir avec son nouveau gérant et chef de
            cuisine mr jaziri mohamed qui vien de reprendre ce magnifique
            endroit en famille avec son adorable épouse une convivialité cette
            endroit chaleureux sa carte pleine de saveurs mr jaziri était un
            grand chef dans plusieurs établissements il a récemment acquéri ce
            magnifique restaurant il ya un mois environ où ils nous fais
            découvrir sa belle carte qui nous donne envie c est bubble thé...et
            les week-end vous trouverai également son couscous royale ou encore
            son chakchouka et pliens d autre plat savoureux tous si vous n êtes
            toujours pas venu testée ce restaurant venez vite le chef vous
            attent avec c'est produit 100%frais et fait maison.
          </em>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 90vh;
  width: 100vw;
  position: relative;
  .background {
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .sale {
      position: relative;
      left: 10%;
      img {
        height: 70vh;
      }
      h1 {
        color: white;
        position: absolute;
        top: 25vh;
        left: 15vh;
        font-size: 4.5rem;
        span {
          display: block;
          font-size: 5vw;
        }
      }
    }
    .info {
      position: absolute;
      top: 40%;
      right: 10%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      h2 {
        color: #f9c74f;
        font-size: 4rem;
        letter-spacing: 0.5rem;
      }
      em {
        color: white;
        width: 60%;
        text-align: end;
        font-size: 1.5rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.4rem;
        background-color: #fc4958;
        border: none;
        color: white;
        font-weight: 800;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        display: none;
      }
      .info {
        top: 25%;
        h2 {
          font-size: 2rem;
        }
        em {
          width: 90%;
        }
      }
    }
  }
`;
