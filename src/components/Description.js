import { h } from 'hyperapp';
import { LinkedInLink, GithubLink } from './Links';

export default () => (
  <section>
    <h1>Gary Gary</h1>
    <p>
      <em>Who the heck is this guy done?</em>
    </p>
    <hr />
    <p>
      <LinkedInLink/>
      <GithubLink/>
      <div class="inline">
        <body id={emailId}>jordankelwick@gmail.com</body>
        <i onclick={copyEmailToClipboard} class="fas fa-copy col-xs-6"></i>
      </div>
    </p>
  </section>
);

function copyEmailToClipboard() {
  selectText(emailId);
  document.execCommand("copy");
}

// very good text selector from https://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse
function selectText(node) {
  node = document.getElementById(node);

  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  } else {
    console.warn("Could not select text in node: Unsupported browser.");
  }
}

// reset tooltip
function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

const emailId = "myEmail";