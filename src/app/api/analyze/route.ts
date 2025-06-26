// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();
//     const file = formData.get("image") as File;

//     if (!file || !file.type.startsWith("image/")) {
//       return NextResponse.json({ error: "Invalid image file" }, { status: 400 });
//     }

//     // Convert the image to a Blob and send to FastAPI
//     const buffer = Buffer.from(await file.arrayBuffer());

//     const fastApiFormData = new FormData();
//     fastApiFormData.append("file", new Blob([buffer], { type: file.type }), file.name);

//     // Ensure the API URL and key are correct
//     const response = await fetch("http://localhost:8000/predict/", {
//       method: "POST",
//       headers: {
//         "x-api-key": "3d8f7a6c-b913-4f25-a1c7-efaa73a2b9e1",  // Replace with your API key
//       },
//       body: fastApiFormData,
//     });

//     const result = await response.json();

//     // Handle result and forward to frontend response
//     return NextResponse.json(result);
//   } catch (error) {
//     console.error("Error forwarding image to FastAPI:", error);
//     return NextResponse.json({ error: "Internal server Error" }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get("image") as File

    if (!file || !file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Invalid image file" }, { status: 400 })
    }

    // Convert the image to a Blob and send to FastAPI
    const buffer = Buffer.from(await file.arrayBuffer())

    const fastApiFormData = new FormData()
    fastApiFormData.append("file", new Blob([buffer], { type: file.type }), file.name)

    const response = await fetch("http://localhost:8000/predict/", {
      method: "POST",
      body: fastApiFormData,
    });

    

    const result = await response.json()
    return NextResponse.json(result)
  } catch (error) {
    console.error("Error forwarding image to FastAPI:", error)
    return NextResponse.json({ error: "Internal server Error" }, { status: 500 })
  }
}
