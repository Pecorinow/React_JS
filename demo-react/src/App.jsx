import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Demo1Component } from './demos/1_Base_Component/Demo1Component'
import { Exo1Component } from './exos/1_Creation_Composant/Exo1Component'
import { Demo2 } from './demos/2_Rendu_Conditionnel/Demo2'
import { Exo2Conditionnel } from './exos/2_Rendu_Conditionnel/Exo2Conditionnel'
import { Demo3 } from './demos/3_Collections/Demo3'
import { Exo3 } from './exos/3_Collection/Exo3Collection'
import { Demo4 } from './demos/4_Events/Demo4Events'
import { Demo5 } from './demos/5_State/Demo5'
import { Exo4 } from './exos/4_State/Exo4'
import { Demo6 } from './demos/6_Formulaires/Demo6'
import { Demo6bis } from './demos/6_Formulaires/Demo6bis'
import { Demo6Lib } from './demos/6_Formulaires/Demo6Lib'
import { Exo5 } from './exos/5_Formulaires/Exo5'
import { Demo7 } from './demos/7_Interaction/Demo7'
import { Exo6 } from './exos/6_Interaction/Exo6'
import { LaVie } from './demos/8_CycleDeVie/LaVie'
import { Exo7 } from './exos/7_CycleDeVie/Exo7'
import { Demo9 } from './demos/9_API/Pokedex'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <p>{ new Date().toLocaleDateString('fr') }</p>

      {/* Débat : un remake de la Grande Vadrouille, pour ou contre ? 🛩️🪂 */}

      {/* Tout ce qui est écrit dans le fichier Demo1Component.jsx sera affiché autant de fois dans la page que Demo1Component sera appelé dans cette page-ci.
      => Si écrit ici 2 fois => affiché dans la page 2 fois ! */}

      {/* DEMO 1*/}
      {/* <Demo1Component name = "ultimate frisbee" type="la pleine conscience en milieu ouvert 🥏" difficulty ="3/5"/>
      <Demo1Component name ="kayak" type="la survie sur l'eau" difficulty = "5/5"/> */}

{/* EXO 1 -------------------------------------------*/}
      {/* <Exo1Component name = "Bernadette Chirac" age = "18" /> */}

{/* DEMO 2 ------------------------------------------*/}

      {/*Cas 1 : la personne n'a pas d'animal*/}
      {/* <Demo2 owner="Bernadette Chirac" havePet={false}/> */}

      {/*Cas 2 : la personne a toutes les infos*/}
      {/* <Demo2 owner = "Micheline de la compta" havePet = {true} name ="Princesse Papillon de Lumière" type="chien" image="https://3.bp.blogspot.com/-bh-rgMEFlMU/UsaNkyMhHrI/AAAAAAAAC9U/HnEXoKwVYec/s1600/dog3.jpg"/> */}

      {/*Cas 3 : l'animal n'a pas de nom*/}
      {/* <Demo2 owner="Jonhatan Cohen" havePet={true} type="chat" image="https://i0.wp.com/thediscerningcat.com/wp-content/uploads/2020/12/devon-rex-with-dark-face.jpg?fit=1200%2C800&ssl=1"/> */}

      {/*Cas 4 : l'animal n'a pas d'image'*/}
      {/* <Demo2 owner="Das, Ju-Das" havePet={true} type="chat" name="Satan"/> */}

{/* EXO2 ------------------------------------------- */}
      
      {/* <div className="Exo2"> */}
        {/* Indisponible */}
        {/* <Exo2Conditionnel isAvailable= {false} name="Christine" image ="/src/assets/images/christine.png" description="Christine est un canard mignon tout ce qu'il y a de plus banal, mais attention, ses plumes blanches cachent une personnalité profonde et complexe." price="" promoPrice=""/> */}

        {/* Sans description et sans promo */}
        {/* <Exo2Conditionnel isAvailable= {true} name="Jean-Ralphio" image ="/src/assets/images/jean-ralphio.png" price="35€"/> */}

        {/* Sans promo */}
        {/* <Exo2Conditionnel isAvailable= {true} name="Steven" image ="/src/assets/images/steven.png" description="Depuis son arrivée, Steven nous enchante avec sa passion pour la poésie et son talent de comédien. Romantique dans l'âme, il ne dirait pas non à une belle histoire avec une femelle canard si l'occasion se présentait." price="25€"/> */}

        {/*Avec description et avec promo*/}
        {/* <Exo2Conditionnel isAvailable= {true} name="Arianna Grande" image ="/src/assets/images/arianna-grande.png" description="Pragmatique et la tête bien droite sur ses épaules, Arianna Grande ne recule jamais devant l'effort. Aussi à l'aise pour tenir compagnie aux enfants que pour se battre avec le facteur, elle est une excellente alternative au chien et aux baby-sitters." price="30€" promoPrice="45€"/> */}
      {/* </div> */}

{/* DEMO 3 ------------------------------------------*/}
      {/* <Demo3/> */}

{/* EXO 3 ------------------------------------------*/}
      {/* <Exo3/> */}

{/* DEMO 4 ------------------------------------------*/}
      {/* <Demo4/> */}

{/* DEMO 5 ------------------------------------------*/}
      {/* <Demo5/> */}

{/* EXO 4 ------------------------------------------*/}
      {/* <Exo4/> */}

{/* DEMO 6 ------------------------------------------*/}
      {/* <Demo6/> */}

{/* DEMO 6bis ------------------------------------------*/}
      {/* <Demo6bis/> */}

{/* DEMO 6 Lib ------------------------------------------*/}
      {/* <Demo6Lib/> */}

{/*  EXO 5 ------------------------------------------*/}
      {/* <Exo5/> */}

{/* DEMO 7 ------------------------------------------*/}
      {/* <Demo7/> */}

{/*  EXO 6 ------------------------------------------*/}
      {/* <Exo6/> */}
      {/* TODO PORTFOLIO à refaire en plus beau ! */}

{/* DEMO 8 ------------------------------------------*/}
      {/* <LaVie/> */}

{/* EXO 7 ------------------------------------------*/}
      {/* <Exo7 /> */}

{/* DEMO 9 ------------------------------------------*/}
      <Demo9/>
    </>
  )
}

export default App
