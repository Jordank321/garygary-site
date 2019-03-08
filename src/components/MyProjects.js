import { h } from 'hyperapp';
import Section from './Section';
import { PiHouseProjectLink, StupifyProjectLink, GaryLangProjectLink, ThisWebsiteProject } from './Links';

const heading = "Projects!";
const subtext = "Atleast, the interesting and functining ones";
const content = (<div>
    <ul>
        <li><PiHouseProjectLink/> - Voice activated Raspberry pi home automation system</li>
        <li><StupifyProjectLink/> - A messaging bot for the community gaming platform Discord</li>
        <li><GaryLangProjectLink/> - A (semi failed but very interesting) attempt into constructing a compiler for an esoteric langauge straight from the hellscape of my imagination</li>
        <li><ThisWebsiteProject/></li>
    </ul>
</div>);

export default () => Section(heading, content, subtext)