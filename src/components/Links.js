import { h } from 'hyperapp';

export function NewTabLink(linkhref, linktext, htmlclass) {
  return (<a href={linkhref} target="_blank" class={htmlclass} text={linktext}/>);
}

export function TwitterLink(){
  return NewTabLink('https://twitter.com/LeGaryGary', null, 'fab fa-twitter-square fa-2x');
}

export function GilmondLink() {
  return NewTabLink('https://www.gilmond.com', 'Gilmond');
}

export function FourComLink() {
  return NewTabLink('https://www.4com.co.uk', '4Com');
}

export function PiHouseProjectLink() {
  return NewTabLink('https://github.com/Jordank321/pihouse', 'PiHouse');
}

export function StupifyProjectLink() {
  return NewTabLink('https://github.com/Jordank321/Stupify', 'Stupify');
}

export function GaryLangProjectLink() {
  return NewTabLink('https://github.com/Jordank321/GaryLang', 'GaryLang');
}

export function ThisWebsiteProject() {
  return NewTabLink('https://github.com/Jordank321/garygary-site', 'This website!');
}

export function LinkedInLink() {
  return NewTabLink('https://www.linkedin.com/in/garygary', null, 'fab fa-linkedin fa-2x');
}

export function GithubLink() {
  return NewTabLink('https://github.com/Jordank321', null, 'fab fa-github-square fa-2x');
}

export function GasShipperLink() {
  return NewTabLink('https://www.gilmond.com/products/risk-manager/gas-shipper', 'Gas Shipper');
}
