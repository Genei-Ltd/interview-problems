function JsonToReact({ recon, nlp }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{__html: getHTML(recon, nlp)}} />
      <div>{getHTML(recon, nlp)}</div>
    </>
  )
}

function getHTML(el, nlp) {
  const {reconKeyToSlice} = nlp;
  const {key, tag, val = '', attrs: {src} = {}, children = []} = el;
  if (val) {
    const {span: {start, end}} = reconKeyToSlice.find(({uuid}) => uuid === key);
  }
  let html = `<${tag}${src ? ' src=' + src : ''}>${val}`;
  children.map((child, i) => {
    html += getHTML(child, nlp)
  });
  html += `</${tag}>`;
  return html;
}

export default JsonToReact
