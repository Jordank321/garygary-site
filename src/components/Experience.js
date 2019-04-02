import { h } from 'hyperapp';
import Section from './Section';
import { GilmondLink } from './Links';

const heading = "My Experience";
const subtext = "I've done stuff?";
const content = (<div>
    <body>I have worked...</body>
    <ul class="wrap">
        <li>At {GilmondLink} as a QA Test Professional <em>(10/2017 - 03/2019)</em></li>
        <li>At {GilmondLink} (again!) as a Software Developer to present day <em>(04/2018 - now!)</em></li>
    </ul>
</div>);

export default () => Section(heading, content, subtext)