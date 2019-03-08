import { app, h } from 'hyperapp';
import '../styles/app.css';
import actions from './actions';
import state from './state';
//import view from './components/Description';
import Description from './components/Description';
import Skills from './components/Skills';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import MyProjects from './components/MyProjects';

const view = () => (
  <div class="container">
    <Description/>
    <Skills/>
    <Experience/>
    <AboutMe/>
    <MyProjects/>
  </div>
)

const appArgs = [state, actions, view, document.getElementById('app')];

function onMount(main) {
}

let main;

if (process.env.NODE_ENV !== 'production') {
  import('hyperapp-redux-devtools').then((devtools) => {
    main = devtools(app)(...appArgs);

    onMount(main);
  });
} else {
  main = app(...appArgs);

  onMount(main);
}
