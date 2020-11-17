function JsonToReact({ recon, nlp }) {
  return (
    <div dangerouslySetInnerHTML={{__html: getHTML(recon)}} />
  )
}

function getHTML(el) {
  const {tag, children} = el;
  let html = `<${tag}>`;
  {children && children.map((child, i) => (
    html += getHTML(child)
  ))}  
  html += `<${tag}>`;
  return html;
}

export default JsonToReact
