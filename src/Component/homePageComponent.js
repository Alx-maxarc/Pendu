import React from 'react';
import pendu from './hanging-rope-1295442_1280.png';
import pendu1 from '../asset/pendu-1bis.png';


function HomePageComponent({onGame}) {

const isLargeScreen = window.innerWidth > 1024;


 const handleClicked = () => {
        onGame(true)
      }
    

  return (
    <div className="home-page" style={{ display: 'flex', flexDirection: 'column', margin: 'auto', height: '70vh', width: '60vw', textAlign: 'center', alignItems: 'center' ,justifyContent: 'center',     border: '5px solid #85642e', borderRadius: "5%", boxShadow: '6px 6px 15px black',
}}>
      <h1>Bienvenue au jeu du pendu</h1>
      <div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{ margin: isLargeScreen ? '20px' : '0px', padding: isLargeScreen ? '20px' : '0px'}}>
        <p>Devine le mot sans te tromper plus de 5 fois sinon c'est perdu.</p>
        <p>A chaque echec la cordu du pendu apparait un peu plus, jusqu'à ce qu'elle soit complète.</p>
        <p style={{ display: isLargeScreen ? 'inline' : 'none'}}>(attention même si la première lettre est un 'e' il peut y avoir un autre 'e' dans le mot)</p>
      </div>
      <div style={{ height: '25vh', width: '15vw', display: isLargeScreen ? 'flex' : 'none', flexDirection: 'row',}}>
        <img src={pendu1} alt="Pendu" style={{ height: '8vh', width: '5vw' }}/>
        <p>=></p>
        <img src={pendu} alt="Pendu"/>
      </div>
      </div>
      <div style={{alignItems: 'center', padding: '10px', justifyContent: 'center'}}>
      <table>
        <tbody>
        <tr>
            <td style={{
              fontSize: '2em',
              borderBottom: '5px solid black',
              padding: '5px',}}
            >M</td>
            <td style={{
              fontSize: '2em',
              borderBottom: '5px solid black',
              padding: '5px',
              userSelect: 'none',
              color: 'transparent'
                }}
            >O</td>
            <td style={{
              fontSize: '2em',
              borderBottom: '5px solid black',
              padding: '5px',
              userSelect: 'none',
              color: 'transparent'}}>U</td>
            <td style={{
              fontSize: '2em',
              borderBottom: '5px solid black',
              padding: '5px',
              userSelect: 'none',
              color: 'transparent'}}>L</td>
            <td style={{
              fontSize: '2em',
              borderBottom: '5px solid black',
              padding: '5px',
              }}>E</td>
        </tr>
        </tbody>
        </table>
    
        <button onClick={handleClicked}
        style={{
          margin: '10px',
          backgroundImage: 'linear-gradient(to left bottom, #c07b0f, #a76b17, #8e5c1b, #764d1d, #5e3f1d)',
          textTransform: 'uppercase',
          boxShadow: ' 0 0 5px rgba(0, 0, 0, 1)',
          padding: '10px 20px', 
          fontSize: '16px', 
          borderRadius: '5px',
          border: '1px #fff'
        }}>jouer</button>
        </div>
    </div>
  );
}

export default HomePageComponent;
