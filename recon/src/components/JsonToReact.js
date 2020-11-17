import {useState, useEffect, useRef} from 'react';

function JsonToReact({ recon, nlp }) {
  const [tokenSlice, setTokenSlice] = useState('');
  const [sentence, setSentence] = useState('');
  const foundEl = useRef(null);
  const foundSentence = useRef(null);
  useEffect(() => {
    if (tokenSlice) {
      if (foundEl.current)
        foundEl.current.style.backgroundColor = '';
      var el = document.querySelector(`span[data-slice='${tokenSlice}']`);
      el.style.backgroundColor = 'yellow';
      foundEl.current = el;
    }
  });
  const findSentence = () => {
    if (sentence) {
      if (foundSentence.current)
        foundSentence.current.forEach(el => el.style.backgroundColor = '');
      const sent = document.querySelector(`span[data-sentence='${sentence}']`);
      sent && sent.scrollIntoView();
      const els = document.querySelectorAll(`span[data-sentence='${sentence}']`);
      els.forEach(el => el.style.backgroundColor = 'yellow');
      foundSentence.current = els;
    }
  };
  return (
    <>
      <input type="text" value={tokenSlice} onChange={e => setTokenSlice(e.target.value)} />
      <input type="text" value={sentence} onChange={e => setSentence(e.target.value)} />
      <button onClick={findSentence}>Find Sentence</button>
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
  text.forEach(({textWithWs, sentIdx}, i) => {
    html += `<span data-slice=${start + i} data-sentence=${sentIdx}>${textWithWs}</span>`
  })
  children.forEach((child, i) => {
    html += getHTML(child, nlp)
  });
  html += `</${tag}>`;
  return html;
}

export default JsonToReact
