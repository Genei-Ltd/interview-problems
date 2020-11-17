function JsonToReact({ recon, nlp }) {
  return (
    <Tag el={recon} />
  )
}

function Tag({el}) {
  const {tag, children} = el;
  return <div>{tag}</div>
}

export default JsonToReact
