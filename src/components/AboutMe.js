import { h } from 'hyperapp';
import Section from './Section';

const gilmondLink = () => (<a href="https://www.gilmond.com/">Gilmond</a>)

const heading = "All About Gary Gary";
const subtext = "This is skippable, go on, nothing to see here...";
const content = (<div>
    <body>Why I exist:</body>
    <ul class="wrap">
        <li>Problem solving!</li>
        <li>Problem solving... yet again!</li>
    </ul>
    
</div>);

export default () => Section(heading, content, subtext)