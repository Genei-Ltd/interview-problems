function JsonToReact({ recon, nlp }) {
  return (
    <Tag el={recon} />
  )
}

function Tag({el}) {
  const {tag, children} = el;
  return (
    <>
      <div>{tag}</div>
      {children && children.map((child, i) => (
        <Tag key={i} el={child} />
      ))}  
    </>
  )
}

export default JsonToReact
