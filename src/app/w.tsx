"use client"
import Lottie from "lottie-react";
import LoadingAnimation from "../../public/lottie/loading.json"
export default function Loading() {
  return (
    <main className="w-full h-screen grid place-items-center bg-black">
      <Lottie 
        loop={true}
        animationData={LoadingAnimation} 
      />
    </main>
  )
}