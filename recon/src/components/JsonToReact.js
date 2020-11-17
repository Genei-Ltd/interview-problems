function JsonToReact({ recon, nlp }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: getHTML(recon, nlp)}} />
      <div>{getHTML(recon, nlp)}</div>
    </>
  )
}

function getHTML(el, nlp) {
  const {tokens, reconKeyToSlice} = nlp;
  const {key, tag, val = '', attrs: {src} = {}, children = []} = el;
  var text = [];
  if (val) {
    var {span: {start, end}} = reconKeyToSlice.find(({uuid}) => uuid === key);
    text = tokens.slice(start, end); 
  }
  let html = `<${tag}${src ? ' src=' + src : ''}>`;
  text.map(({textWithWs}, i) => {
    html += `<span data-slice=${start + i}>${textWithWs}</span>`
  })
  children.map((child, i) => {
    html += getHTML(child, nlp)
  });
  html += `</${tag}>`;
  return html;
}

export default JsonToReact
