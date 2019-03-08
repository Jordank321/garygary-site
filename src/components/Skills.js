import { h } from 'hyperapp';
import Section from './Section';

const heading = "My Skills";
const subtext = "I have skills?";
const content = (<div>
    <body>Languages I like to code in:</body>
    <ul>
        <li>C#</li>
        <li>Golang</li>
        <li>JavaScript (TypeScript)</li>
        <li>Python</li>
        <li>BrainF**k</li>
    </ul>
    <body>Extra skills = Extra points</body>
    <ul>
        <li>Specflow</li>
        <li>T-SQL (Microsoft SQL Server)</li>
        <li>Scripting (Powershell, bash, batch)</li>
    </ul>
</div>);

export default () => Section(heading, content, subtext)