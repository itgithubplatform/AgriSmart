export async function analyzeImage(formData: FormData) {
  const response = await fetch("/api/analyze", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err?.error || "Failed to analyze image");
  }

  return await response.json();
  
}
