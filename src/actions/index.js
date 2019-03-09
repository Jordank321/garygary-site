export default {
    copy: (/* event (e) */) => ({ tooltiptext }) => ({ tooltiptext: "Copied!" }),
    copyReset: () => ({ tooltiptext }) => ({ tooltiptext: "Copy to Clipboard" })
};
