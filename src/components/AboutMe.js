import { h } from 'hyperapp';
import Section from './Section';

const heading = "All About Gary Gary";
const subtext = "This is skippable, go on, nothing to see here...";
const content = (<div>
    <body>Why I exist:</body>
    <ul class="wrap">
        <li>Problem solving!</li>
        <li>Creating "things"</li>
        <li>Video games (VR recently)</li>
        <li>Food (eating AND cooking)</li>
        <li>Puzzles, mostly around maths</li>
    </ul>
    
</div>);

export default () => Section(heading, content, subtext)