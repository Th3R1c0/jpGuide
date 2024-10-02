'use client'

import { useState } from 'react'
import { Menu, Search, Star, ChevronLeft, ChevronRight, Home, Grid, TrendingUp, Info, Mail, Smartphone, Globe, Book, VolumeX, Puzzle, GraduationCap, Users2, ChevronDown, Hammer, MonitorSmartphone, ExternalLink, Bookmark } from 'lucide-react'
import { Transition } from '@headlessui/react'
import * as Accordion from '@radix-ui/react-accordion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import NavBarComponent from './nav'
import Sidebar from './sidebar'
import FooterComponent from './Footer'
import { FileText, Code, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { CaretDownIcon } from '@radix-ui/react-icons'

export function AppDirectory() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    )
  }

  const featuredApps = [
    { name: "Kanji Master", description: "Learn Japanese kanji characters through interactive lessons and games. Includes exercises and quizzes to test knowledge and track progress. Comprehensive kanji dictionary and writing practice tool.", rating: 4.8, color: "from-blue-400 to-purple-500" },
    { name: "Speak Japanese", description: "Improve speaking skills with AI-powered language practice. Engage in conversations with native speakers and get feedback on pronunciation. Track progress and set goals.", rating: 4.7, color: "from-green-400 to-teal-500" },
    { name: "Grammar Guru", description: "Master Japanese grammar rules with comprehensive lessons and exercises. Learn sentence structure, verb conjugation, and more. Interactive quizzes to test understanding.", rating: 4.9, color: "from-yellow-400 to-orange-500" },
    { name: "Vocab Builder", description: "Expand Japanese vocabulary with engaging tools and games. Learn new words, phrases, and idioms in context. Track progress and set goals.", rating: 4.6, color: "from-pink-400 to-red-500" },
    { name: "Hiragana Hero", description: "Perfect hiragana writing with interactive practice exercises. Learn correct stroke order and practice reading. Fun and engaging for all levels.", rating: 4.5, color: "from-indigo-400 to-blue-500" },
  ]

  const popularResources = [
    { name: "Duolingo", description: "Learn languages through fun games and interactive lessons", platform: "iOS, Android" },
    { name: "Rosetta Stone", description: "Immerse yourself in language learning with interactive courses", platform: "Web, iOS, Android" },
    { name: "Busuu", description: "Learn a language with community feedback and personalized lessons", platform: "Web, iOS, Android" },
    { name: "Memrise", description: "Learn vocabulary with spaced repetition and interactive exercises", platform: "Web, iOS, Android" },
    { name: "Tandem", description: "Practice a language with native speakers through text, voice, and video chat", platform: "iOS, Android" },
    { name: "HelloTalk", description: "Practice a language with native speakers through text, voice, and video chat", platform: "iOS, Android" },
  ]

  return (
    <div className="min-h-screen bg-pink-50">
      <NavBarComponent />

      <main className="pt-16">
        <div className='p-8 md:p-12 lg:p-16 bg-gradient-to-b to-pink-100 from-purple-200'>
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Discover the Best Japanese Learning Apps</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6">Explore a world of language learning resources tailored just for you</p>
            <div className="relative max-w-3xl mx-auto">
              <Input
                type="text"
                disabled
                placeholder="Search for Japanese learning resources..."
                className="w-full pl-12 pr-10 bg-white text-bold"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {[{ label: 'Mobile Apps', icon: <MonitorSmartphone className="h-4 w-4 mr-1" /> },
              { label: 'Web Apps', icon: <Globe className="h-4 w-4 mr-1" /> },
              { label: 'Grammar Guides', icon: <Book className="h-4 w-4 mr-1" /> },
              { label: 'Vocabulary Tools', icon: <FileText className="h-4 w-4 mr-1" /> },
              { label: 'Extensions', icon: <Code className="h-4 w-4 mr-1" /> },
              { label: 'Test Preparation', icon: <CheckCircle className="h-4 w-4 mr-1" /> },
            ].map(({ label, icon }) => (
              <Link href='/search' key={label}>
                <Button
                  onClick={() => toggleFilter(label)}
                  variant={activeFilters.includes(label) ? "secondary" : "outline"}
                  className="rounded-full flex items-center"
                >
                  {icon} {label}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Apps</h2>
            <p className="text-lg text-gray-600 mb-6">Discover our handpicked selection of top-rated Japanese learning applications</p>
            <Carousel className="w-full">
              <CarouselContent>
                {featuredApps.map((app, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg overflow-hidden">
                      <div className={`relative h-24 bg-gradient-to-r ${app.color}`}>
                        <span className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                          Free
                        </span>
                      </div>
                      <CardHeader>
                        <CardTitle className="flex justify-between items-start">
                          <span>{app.name}</span>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                        </CardTitle>
                        <CardDescription className="line-clamp-3">{app.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= Math.floor(app.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">{app.rating}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Link href='/search'>
                          <Button variant="outline" size="sm" className="text-xs">
                            View Details
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm" className="text-xs" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            Visit Website
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularResources.map((resource, index) => (
                <Card key={index} className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg overflow-hidden">
                  <div className={`relative h-24 bg-gradient-to-r from-blue-400 to-purple-500`}>
                    <span className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      Free
                    </span>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span>{resource.name}</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{resource.platform}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">{resource.description}</p>
                    <div className="flex items-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-300" fill="currentColor" />
                      ))}
                      <span className="ml-2 text-sm">5.0</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link href='/search'>
                      <Button variant="outline" size="sm" className="text-xs">
                        View Details
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm" className="text-xs" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        Visit Website
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

      <Button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed left-0 top-1/2 transform -translate-y-1/2 rounded-r-md shadow-lg"
        variant="secondary"
      >
        {sidebarOpen ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
      </Button>

      <FooterComponent />
    </div>
  )
}