import { h } from 'hyperapp';

export default (heading, content, subtext) => (
    <section>
        <h2>{heading}</h2>
        {subtext && (<p>
            <em>{subtext}</em>
        </p>)}
        <hr />
        {content}
    </section>
)