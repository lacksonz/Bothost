import ReactJson from 'react-json-view'

function JsonEditor() {
  const sampleJson = {
    name: 'Lacksons Stuff',
    version: '1.0.0',
    author: 'Tommy'
  }

  return (
    <section className="card">
      <h2>🧾 JSON Designer</h2>
      <ReactJson src={sampleJson} theme="monokai" collapsed={false} />
    </section>
  )
}

export default JsonEditor
