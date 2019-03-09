import { app, h } from 'hyperapp';
import '../styles/app.css';
import actions from './actions';
import state from './state';
import Description from './components/Description';
import Skills from './components/Skills';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';
import TeamProjects from './components/TeamProjects';

const view = ({tooltiptext}, {copy, copyReset}) => (
  <div class="container">
    <Description tooltiptext={tooltiptext} copyAction={copy} resetCopyAction={copyReset}/>
    <Skills/>
    <Experience/>
    <AboutMe/>
    <MyProjects/>
    <TeamProjects/>
  </div>
)

const appArgs = [state, actions, view, document.getElementById('app')];

function onMount(main) {
}

let main;

if (process.env.NODE_ENV !== 'production') {
  import('hyperapp-redux-devtools').then((devtools) => {
    console.log(appArgs);
    main = devtools(app)(...appArgs);

    onMount(main);
  });
} else {
  
  main = app(...appArgs);

  onMount(main);
}
