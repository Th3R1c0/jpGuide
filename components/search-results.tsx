'use client'

import { useState } from 'react'
import { Search, Star, ChevronDown, ChevronLeft, ChevronRight, X, Smartphone, Globe, Book, Users, Puzzle, Bookmark, ExternalLink, SlidersHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import NavBarComponent from './nav'
import * as Accordion from '@radix-ui/react-accordion'
import { Users2, Hammer } from 'lucide-react'
import FooterComponent from './Footer'
import Link from 'next/link'

const apps = [
  { id: 1, name: "Kanji Master", platform: "iOS, Android", description: "Learn kanji through interactive lessons and games", rating: 4.8, tags: ["Kanji", "Mobile App", "Intermediate"], gradient: "from-blue-400 to-purple-500", website: "https://example.com/kanji-master", price: "Free" },
  { id: 2, name: "Speak Japanese", platform: "Web", description: "Improve your speaking skills with AI-powered conversations", rating: 4.7, tags: ["Speaking", "Web App", "All Levels"], gradient: "from-green-400 to-teal-500", website: "https://example.com/speak-japanese", price: "$14.99" },
  { id: 3, name: "Grammar Guru", platform: "iOS, Android, Web", description: "Master Japanese grammar rules with comprehensive guides", rating: 4.9, tags: ["Grammar", "Cross-Platform", "Beginner"], gradient: "from-yellow-400 to-orange-500", website: "https://example.com/grammar-guru", price: "Free" },
  { id: 4, name: "Vocab Builder", platform: "Android", description: "Expand your Japanese vocabulary with spaced repetition", rating: 4.6, tags: ["Vocabulary", "Mobile App", "All Levels"], gradient: "from-pink-400 to-red-500", website: "https://example.com/vocab-builder", price: "$7.99" },
  { id: 5, name: "Hiragana Hero", platform: "iOS", description: "Perfect your hiragana writing skills with interactive exercises", rating: 4.5, tags: ["Writing", "Mobile App", "Beginner"], gradient: "from-indigo-400 to-blue-500", website: "https://example.com/hiragana-hero", price: "$4.99" },
  { id: 6, name: "JLPT Prep Pro", platform: "Web", description: "Comprehensive preparation for all JLPT levels", rating: 4.7, tags: ["Test Prep", "Web App", "Advanced"], gradient: "from-purple-400 to-pink-500", website: "https://example.com/jlpt-prep-pro", price: "$12.99" },
]

const getTagIcon = (tag: string) => {
  switch (tag.toLowerCase()) {
    case 'mobile app':
      return <Smartphone className="h-3 w-3 mr-1" />
    case 'web app':
      return <Globe className="h-3 w-3 mr-1" />
    case 'cross-platform':
      return <Puzzle className="h-3 w-3 mr-1" />
    case 'beginner':
    case 'intermediate':
    case 'advanced':
    case 'all levels':
      return <Users className="h-3 w-3 mr-1" />
    default:
      return <Book className="h-3 w-3 mr-1" />
  }
}

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white hidden md:flex bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-lg overflow-y-auto h-full">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Advanced Filters</h2>
        <Accordion.Root type="multiple" defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5", "item-6"]} className="space-y-4">
          {[
            { title: 'Platform/Type', items: ['Mobile Apps', 'Web Apps', 'Desktop Applications', 'Extensions', 'Physical Resources', 'Media'], icon: <Smartphone className="w-5 h-5" /> },
            { title: 'Focus Area/Skills', items: ['Grammar', 'Vocabulary', 'Speaking & Listening', 'Writing', 'Reading', 'Cultural Context'], icon: <Book className="w-5 h-5" /> },
            { title: 'Target Audience', items: ['Beginners', 'Intermediate Learners', 'Advanced Learners', 'Children', 'Business Professionals'], icon: <Users2 className="w-5 h-5" /> },
            { title: 'Specialized Categories', items: ['Test Preparation', 'Flashcard Systems', 'Gamified Learning', 'Immersive Learning', 'Translation & Dictionary Tools'], icon: <Puzzle className="w-5 h-5" /> },
            { title: 'Usage Scenarios', items: ['On-the-Go Learning', 'Study Plans', 'Social Learning'], icon: <Globe className="w-5 h-5" /> },
            { title: 'Supplemental Tools', items: ['Customizable Study Tools', 'Reference Resources'], icon: <Hammer className="w-5 h-5" /> },
          ].map((category, index) => (
            <Accordion.Item key={category.title} value={`item-${index + 1}`}>
              <Accordion.Trigger className="flex items-center justify-between w-full p-2 text-left text-gray-700 hover:bg-gray-100 rounded-md">
                <span className="flex items-center">
                  {category.icon}
                  <span className="ml-2 font-semibold">{category.title}</span>
                </span>
                <ChevronDown className="w-4 h-4" />
              </Accordion.Trigger>
              <Accordion.Content className="mt-2 ml-7 space-y-2">
                {category.items.map((item) => (
                  <label key={item} className="flex items-center">
                    <Checkbox id={`${category.title}-${item}`} />
                    <span className="ml-2 text-sm text-gray-700">{item}</span>
                  </label>
                ))}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  )
}

export function SearchResultsComponent() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [sortOption, setSortOption] = useState("relevance")

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    )
  }

  const resetFilters = () => {
    setActiveFilters([])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
      <NavBarComponent />
      <div className="flex max-w-7xl mx-auto pt-[100px] px-4 sm:px-6 md:px-8">
        <Sidebar />
        <div className="flex-1 md:ml-8">
          {/* Search Bar and Filters */}
          <div className="mb-8">
            <div className="relative mb-4">
              <Input
                type="text"
                placeholder="Search Japanese learning resources..."
                className="w-full pl-12 pr-4 py-2 rounded-full bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {activeFilters.map(filter => (
                <Badge key={filter} variant="secondary" className="px-3 py-1">
                  {filter}
                  <button onClick={() => toggleFilter(filter)} className="ml-2">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              {activeFilters.length > 0 && (
                <Button variant="ghost" onClick={resetFilters} className="text-sm">
                  Reset Filters
                </Button>
              )}
            </div>
          </div>

          {/* Search Results Header */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">{apps.length} results found</p>
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="rating">User Rating</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {apps.map((app) => (
              <Card key={app.id} className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg overflow-hidden">
                <div className={`relative h-24 bg-gradient-to-r ${app.gradient}`}>
                  <span className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {app.price}
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{app.name}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                  <CardDescription>{app.platform}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">{app.description}</p>
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
                  <div className="flex flex-wrap gap-1">
                    {app.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs bg-gray-100 flex items-center">
                        {getTagIcon(tag)}
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href='resource'>
                  <Button variant="outline" size="sm" className="text-xs">
                    View Details
                  </Button></Link>
                  <Button variant="ghost" size="sm" className="text-xs" asChild>
                    <a href={app.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="mr-2">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button variant="outline">
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  )
}