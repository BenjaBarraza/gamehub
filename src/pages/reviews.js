import { useState } from 'react'
import Image from 'next/image'
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Simulación de 100 juegos
const generateReviews = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Juego ${i + 1}`,
    rating: Math.floor(Math.random() * 5) + 1,
    genre: ["Acción", "Aventura", "RPG", "Estrategia", "Deportes"][Math.floor(Math.random() * 5)],
    releaseDate: `${Math.floor(Math.random() * 28) + 1}/${Math.floor(Math.random() * 12) + 1}/${2010 + Math.floor(Math.random() * 14)}`,
    platform: ["PS5", "Xbox Series X", "PC", "Nintendo Switch"][Math.floor(Math.random() * 4)],
    description: "Una experiencia de juego única con gráficos impresionantes y una jugabilidad innovadora.",
    likes: Math.floor(Math.random() * 1000),
    dislikes: Math.floor(Math.random() * 100),
    comments: [
      { user: `Usuario${Math.floor(Math.random() * 100)}`, avatar: "U", comment: "¡Increíble juego! No puedo dejar de jugarlo." },
      { user: `Gamer${Math.floor(Math.random() * 100)}`, avatar: "G", comment: "Buena historia, pero los controles podrían mejorar." }
    ]
  }))
}

const reviews = generateReviews(100)

export default function GameReviewsDetailed() {
  const [visibleReviews, setVisibleReviews] = useState(10)

  const loadMore = () => {
    setVisibleReviews(prevVisible => Math.min(prevVisible + 10, reviews.length))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Reseñas de Videojuegos</h1>
      <div className="grid grid-cols-1 gap-8">
        {reviews.slice(0, visibleReviews).map((review) => (
          <Card key={review.id} className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl">{review.title}</CardTitle>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">{review.genre}</Badge>
                <Badge variant="outline">{review.platform}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3 h-[300px] relative rounded-lg overflow-hidden">
                  <Image
                    src={`https://api.rawg.io/media/games/${review.id}.jpg`}
                    alt={review.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({review.rating}/5)</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Fecha de lanzamiento: {review.releaseDate}</p>
                  <p className="text-gray-700 mb-4">{review.description}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <Button variant="outline" size="sm">
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      {review.likes}
                    </Button>
                    <Button variant="outline" size="sm">
                      <ThumbsDown className="w-4 h-4 mr-2" />
                      {review.dislikes}
                    </Button>
                  </div>
                  <h3 className="font-semibold mb-2">Comentarios de usuarios:</h3>
                  <div className="space-y-3">
                    {review.comments.map((comment, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Avatar>
                          <AvatarFallback>{comment.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{comment.user}</p>
                          <p className="text-sm text-gray-600">{comment.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {visibleReviews < reviews.length && (
        <div className="mt-8 text-center">
          <Button onClick={loadMore}>Cargar más reseñas</Button>
        </div>
      )}
    </div>
  )
}