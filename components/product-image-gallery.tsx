"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"

interface ProductImageGalleryProps {
  images: string[]
  productName: string
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-muted rounded-lg overflow-hidden group">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={`${productName} - 图片 ${currentImage + 1}`}
          fill
          className="object-cover"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="sm"
              className="absolute left-2 top-1/2 -translate-y-1/2 md:opacity-0 md:group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm shadow-lg"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="absolute right-2 top-1/2 -translate-y-1/2 md:opacity-0 md:group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm shadow-lg"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Zoom Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="absolute top-2 right-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm shadow-lg"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[90vw] max-h-[90vh] w-auto h-auto p-2 sm:p-6">
            <div className="relative w-full max-w-[85vw] max-h-[80vh] mx-auto">
              <div className="relative w-full h-0 pb-[100%]">
                <Image
                  src={images[currentImage] || "/placeholder.svg"}
                  alt={`${productName} - 放大图片`}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 70vw, 60vw"
                />
              </div>
              {images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg z-10"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg z-10"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Thumbnail Images */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                index === currentImage ? "border-primary" : "border-border hover:border-primary/50"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${productName} - 缩略图 ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="text-center text-sm text-muted-foreground">
          {currentImage + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
