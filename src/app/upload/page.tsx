'use client'

import UploadForm from "@/components/upload-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { useEffect } from "react"


export default function DiseaseIdentificationPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl mb-2">
          Plant Disease & Pest Identification
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Upload an image of your plant to identify diseases or pests and get expert recommendations for treatment.
        </p>
      </div>

      <UploadForm />

      <div className="mt-12 bg-green-50 rounded-lg p-6 border border-green-200">
        <h2 className="text-xl font-semibold text-green-800 mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl text-green-600">1</span>
            </div>
            <h3 className="font-medium text-green-700 mb-2">Upload Photo</h3>
            <p className="text-sm text-gray-600">Take a clear photo of the affected plant part and upload it.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl text-green-600">2</span>
            </div>
            <h3 className="font-medium text-green-700 mb-2">AI Analysis</h3>
            <p className="text-sm text-gray-600">Our advanced AI system analyzes the image to identify the issue.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl text-green-600">3</span>
            </div>
            <h3 className="font-medium text-green-700 mb-2">Get Solutions</h3>
            <p className="text-sm text-gray-600">Receive expert recommendations for treatment and prevention.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
