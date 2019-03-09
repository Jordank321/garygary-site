import { h } from 'hyperapp';
import { LinkedInLink, GithubLink } from './Links';

export default ({tooltiptext, copyAction, resetCopyAction}) => (
  <section>
    <h1>Gary Gary</h1>
    <p>
      <em>Who the heck is this guy?</em>
    </p>
    <hr />
    <p>
      <LinkedInLink/>
      <GithubLink/>
      <div class="inline">
        <body id={emailId}>jordankelwick@gmail.com</body>
        <i onclick={() => copyEmailToClipboard(copyAction)} onmouseout={resetCopyAction} on class="fas fa-copy custtooltip">
          <span class="custtooltiptext" textContent={tooltiptext}/>
        </i>
      </div>
    </p>
  </section>
);

function copyEmailToClipboard(copy) {
  selectText(emailId);
  document.execCommand("copy");
  copy()
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

const emailId = "myEmail";