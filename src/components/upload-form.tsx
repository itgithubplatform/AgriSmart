"use client"

import type React from "react"

import { useState } from "react"
import { Upload, X, Loader2, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { analyzeImage } from "@/lib/actions"
import { cn } from "@/lib/utils"

export default function UploadForm() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [results, setResults] = useState<{
    disease: string
    confidence: number
    description: string
    treatment: string[] | undefined
  } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)
    setResults(null)

    const file = e.target.files?.[0]
    if (!file) return

    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file (JPEG, PNG, etc.)")
      return
    }

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size should be less than 5MB")
      return
    }

    setSelectedImage(file)

    // Create preview
    const reader = new FileReader()
    reader.onload = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedImage) {
      setError("Please select an image to upload")
      return
    }

    setIsUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("image", selectedImage)

      const result = await analyzeImage(formData);
      console.log("Analysis result:", result);
      setResults(result)
    } catch (err) {
      setError("Failed to analyze image. Please try again.")
      console.error(err)
    } finally {
      setIsUploading(false)
    }
  }

  const resetForm = () => {
    setSelectedImage(null)
    setPreview(null)
    setResults(null)
    setError(null)
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Upload Plant Image</h2>
            <form onSubmit={handleSubmit}>
              <div
                className={cn(
                  "border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors",
                  preview ? "border-green-300 bg-green-50" : "border-gray-300",
                )}
                onClick={() => document.getElementById("image-upload")?.click()}
              >
                {preview ? (
                  <div className="relative w-full aspect-square max-h-[300px] overflow-hidden rounded-md">
                    <Image src={preview || "/placeholder.svg"} alt="Preview" fill className="object-contain" />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation()
                        resetForm()
                      }}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <>
                    <Upload className="h-12 w-12 text-green-500 mb-4" />
                    <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PNG, JPG, JPEG (max 5MB)</p>
                  </>
                )}
                <input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start gap-2 text-red-800">
                  <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <div className="mt-6">
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  disabled={!selectedImage || isUploading}
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    "Identify Disease/Pest"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold text-green-800 mb-4">Analysis Results</h2>

          {!results && !isUploading ? (
            <div className="text-center py-12 text-gray-500">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-gray-400" />
              </div>
              <p>Upload an image to see analysis results</p>
            </div>
          ) : isUploading ? (
            <div className="text-center py-12">
              <Loader2 className="h-12 w-12 animate-spin text-green-500 mx-auto mb-4" />
              <p className="text-gray-600">Analyzing your image...</p>
              <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
            </div>
          ) : results ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 bg-green-100 p-3 rounded-md">
                <Check className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800">{results.disease}</p>
                  <p className="text-xs text-green-700">Confidence: {results.confidence}%</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-1">Description</h3>
                <p className="text-sm text-gray-600">{results.description}

                </p>
              </div>

              {results.treatment && (
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Recommended Treatment</h3>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {results.treatment.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : null}
        </CardContent>
      </Card>
    </div>
  )
}
