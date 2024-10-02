'use client';

import { useState } from 'react'
import { Star, ChevronRight, ChevronLeft, ExternalLink, Download, Smartphone, Globe, Book, Users, DollarSign, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const appDetails = {
  name: "Kanji Master",
  platform: "iOS, Android",
  icon: "/placeholder.svg?height=64&width=64",
  description: "Learn kanji through interactive lessons and games",
  detailedDescription: "Kanji Master is a comprehensive app designed to help you master Japanese kanji characters. With its intuitive interface and adaptive learning system, you'll be reading and writing kanji like a pro in no time. The app offers a variety of engaging exercises, from stroke order practice to context-based quizzes, ensuring a well-rounded learning experience.",
  rating: 4.8,
  reviews: 1234,
  tags: ["Kanji", "Writing", "Reading", "Vocabulary"],
  screenshots: [
    "/placeholder.svg?height=400&width=200&text=Screenshot+1",
    "/placeholder.svg?height=400&width=200&text=Screenshot+2",
    "/placeholder.svg?height=400&width=200&text=Screenshot+3",
  ],
  downloadLinks: {
    appStore: "https://apps.apple.com/example",
    googlePlay: "https://play.google.com/store/example",
    website: "https://example.com/kanji-master",
  },
  features: [
    "Interactive kanji writing practice",
    "Adaptive learning system",
    "Extensive kanji dictionary",
    "Daily study goals and tracking",
    "Gamified learning experience",
  ],
  userReviews: [
    { name: "John D.", rating: 5, text: "This app has revolutionized my kanji learning. Highly recommended!" },
    { name: "Sarah M.", rating: 4, text: "Great app, but I wish it had more advanced level content." },
    { name: "Alex K.", rating: 5, text: "The gamification aspect keeps me motivated to study every day." },
  ],
  relatedApps: [
    { name: "Vocab Builder", icon: "/placeholder.svg?height=48&width=48", rating: 4.6 },
    { name: "Grammar Guru", icon: "/placeholder.svg?height=48&width=48", rating: 4.9 },
    { name: "Speak Japanese", icon: "/placeholder.svg?height=48&width=48", rating: 4.7 },
  ],
  additionalInfo: {
    type: "Mobile App",
    focusArea: "Kanji, Reading, Writing",
    targetAudience: "Beginner to Intermediate",
    pricing: "Free with In-App Purchases",
    lastUpdated: "2023-05-15",
  },
  faqs: [
    { question: "How much does it cost?", answer: "The app is free to download with basic features. Premium features are available through in-app purchases or a monthly subscription." },
    { question: "Does it support offline learning?", answer: "Yes, most features are available offline. You'll need an internet connection to sync progress and download new lessons." },
    { question: "How do I track my progress?", answer: "The app provides detailed statistics and progress tracking for each kanji and overall learning journey." },
  ],
}

export default function AppDetailsPage() {
  return (
    <div className="pt-[100px] bg-gradient-to-br from-pink-100 to-purple-200 p-4">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          {/* Header Section */}
          <div className="flex items-center mb-4">
            <img src={appDetails.icon} alt={appDetails.name} className="w-16 h-16 rounded-xl mr-4" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{appDetails.name}</h1>
              <div className="flex items-center mt-1">
                <Badge variant="secondary" className="mr-2">{appDetails.platform}</Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                  <span className="text-sm text-gray-600">{appDetails.rating} ({appDetails.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="mt-4">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="screenshots">Screenshots</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="related">Related</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="mt-4">
                <p className="text-sm text-gray-700 mb-2">{appDetails.description}</p>
                <p className="text-xs text-gray-600 mb-4">{appDetails.detailedDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {appDetails.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {appDetails.downloadLinks.appStore && (
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                      <Download className="mr-2 h-4 w-4" /> App Store
                    </Button>
                  )}
                  {appDetails.downloadLinks.googlePlay && (
                    <Button size="sm" className="bg-green-500 hover:bg-green-600">
                      <Download className="mr-2 h-4 w-4" /> Google Play
                    </Button>
                  )}
                  {appDetails.downloadLinks.website && (
                    <Button size="sm" variant="outline">
                      <Globe className="mr-2 h-4 w-4" /> Website
                    </Button>
                  )}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="screenshots">
              <div className="mt-4">
                <Carousel className="w-full max-w-xs mx-auto">
                  <CarouselContent>
                    {appDetails.screenshots.map((screenshot, index) => (
                      <CarouselItem key={index}>
                        <Card>
                          <CardContent className="flex aspect-[9/16] items-center justify-center p-2">
                            <img src={screenshot} alt={`Screenshot ${index + 1}`} className="rounded-lg" />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </TabsContent>
            <TabsContent value="features">
              <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">Key Features</h2>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {appDetails.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h2 className="text-lg font-semibold mb-2">Additional Information</h2>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <Smartphone className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-700">{appDetails.additionalInfo.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Book className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-700">{appDetails.additionalInfo.focusArea}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-700">{appDetails.additionalInfo.targetAudience}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-700">{appDetails.additionalInfo.pricing}</span>
                  </div>
                  <div className="flex items-center col-span-2">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-700">Last Updated: {appDetails.additionalInfo.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews">
              <div className="mt-4 space-y-4">
                {appDetails.userReviews.map((review, index) => (
                  <div key={index} className="bg-white bg-opacity-50 rounded-lg p-3">
                    <div className="flex items-center mb-1">
                      <span className="font-semibold text-sm mr-2">{review.name}</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-3 w-3 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">{review.text}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="related">
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {appDetails.relatedApps.map((app, index) => (
                  <div key={index} className="flex items-center bg-white bg-opacity-50 rounded-lg p-3">
                    <img src={app.icon} alt={app.name} className="w-10 h-10 rounded-lg mr-3" />
                    <div>
                      <h3 className="font-semibold text-sm">{app.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400" fill="currentColor" />
                        <span className="ml-1 text-xs text-gray-600">{app.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* FAQs Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {appDetails.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-sm">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-xs">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}