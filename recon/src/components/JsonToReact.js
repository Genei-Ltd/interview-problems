function JsonToReact({ recon, nlp }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: getHTML(recon)}} />
      <div>{getHTML(recon)}</div>
    </>
  )
}

function getHTML(el) {
  const {tag, val = '', attrs: {src} = {}, children = []} = el;
  let html = `<${tag}${src ? ' src=' + src : ''}>${val}`;
  children.map((child, i) => {
    html += getHTML(child)
  });
  html += `</${tag}>`;
  return html;
}

export default JsonToReact
