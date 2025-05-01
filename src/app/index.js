import React, { useState } from 'react';

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [solution, setSolution] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    setLoading(true);
    setPrediction('');
    setSolution('');

    try {
      const response = await fetch('http://localhost:8000/predict/', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setPrediction(result.disease);
      setSolution(result.solution);
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Try again.');
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Paddy Disease Detection</h1>

      <input type="file" accept="image/*" onChange={handleFileChange} />
      <br /><br />

      {preview && <img src={preview} alt="Preview" width={300} />}

      <br /><br />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Predicting...' : 'Submit'}
      </button>

      {prediction && (
        <div style={{ marginTop: 20 }}>
          <h2>Disease Detected: <span style={{ color: 'red' }}>{prediction}</span></h2>
          <p><strong>Solution:</strong> {solution}</p>
        </div>
      )}
    </div>
  );
}
