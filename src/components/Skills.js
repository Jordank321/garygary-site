import { h } from 'hyperapp';
import Section from './Section';

const heading = "My Skills";
const subtext = "I have skills?";
const content = (<div>
    <body>Languages I like to code in:</body>
    <ul>
        <li>C# (.Net Core)</li>
        <li>JavaScript/TypeScript</li>
        <li>Golang</li>
        <li>Python</li>
        <li>BrainF**k</li>
    </ul>
    <body>Extra skills = Extra points</body>
    <ul>
        <li>Serverless cloud tech (Azure functions)</li>
        <li>T-SQL (Microsoft SQL Server)</li>
        <li>Docker</li>
        <li>Scripting (Powershell, bash, batch)</li>
        <li>Specflow TDD</li>
    </ul>
</div>);

export default () => Section(heading, content, subtext)