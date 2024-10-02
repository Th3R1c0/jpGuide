import { Transition } from '@headlessui/react'
import * as Accordion from '@radix-ui/react-accordion'
import { Button } from "@/components/ui/button"
import { Smartphone, Book, Users2, Puzzle, Globe, Hammer, ChevronDown } from 'lucide-react'

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Transition
      show={sidebarOpen}
      enter="transition ease-out duration-300 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <div className="fixed inset-y-0 left-0 w-64 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-lg overflow-y-auto">
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
                      <input type="checkbox" className="form-checkbox text-pink-400" />
                      <span className="ml-2 text-sm text-gray-700">{item}</span>
                    </label>
                  ))}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </Transition>
  )
}

export default Sidebar;