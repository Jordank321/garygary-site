import { h } from 'hyperapp';
import Section from './Section';
import { GilmondLink, FourComLink } from './Links';

const heading = 'My Experience';
const subtext = "I've done stuff?";
const content = (
  <div>
    <body>I have worked...</body>
    <ul class="wrap">
      <li>
        At {GilmondLink} as a QA Test Professional <em>(10/2017 - 03/2019)</em>
      </li>
      <li>
        At {GilmondLink} (again!) as a Software Engineer
        <em>(04/2019 - 10/2019)</em>
      </li>
      <li>
        At {FourComLink} as a Developer to present day
        <em>(10/2019 - now!)</em>
      </li>
    </ul>
  </div>
);

export default () => Section(heading, content, subtext);
