function JsonToReact({ recon, nlp }) {
  return (
    <div>{getHTML(recon)}</div>
  )
}

function getHTML(el) {
  const {tag, val = '', children = []} = el;
  let html = `<${tag}>${val}`;
  children.map((child, i) => {
    html += getHTML(child)
  });
  html += `<${tag}>`;
  return html;
}

export default JsonToReact
