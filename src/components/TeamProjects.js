import { h } from 'hyperapp';
import Section from './Section';
import { GasShipperLink } from './Links';

const heading = "Team Projects!";
const content = (<div>
    <ul>
        <li><GasShipperLink/> - A system that makes messaging in the gas industry simple whilst providing all the data needed to make effective gas trading descisions</li>
    </ul>
</div>);

export default () => Section(heading, content, null)