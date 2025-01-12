"use client";

import Image from "next/image"
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState } from "react"
import { HorizontalTimeline } from "@/components/horizontal-timeline"
import { VisitCounter } from "@/components/visit-counter"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-12 relative pb-16">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <div className="flex justify-center">
            <Image
              src="/final.png"
              alt="Profile"
              width={240}
              height={80}
              className="h-auto rounded-lg"
              priority
            />
          </div>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:fernando.larota@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/luisflarota" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/lflarota/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="inline-block rounded-lg bg-green-800 text-white px-4 py-2 text-4xl font-bold">
              hi, i&apos;m luis
            </h1>
            <p className="text-xl">:)</p>
          </div>
          <div className="prose max-w-none dark:prose-invert">
            <p>
              (trying to) build cool software! went from mining rocks in peru to mining data at tesla. engineering at the core, from mining to software to data products.
            </p>
          </div>
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="space-y-2"
          >
            <div className="flex items-center justify-between space-x-4 px-4">
              <h2 className="text-lg font-semibold">
                coding mistakes i made
              </h2>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                <ul className="list-inside list-disc space-y-2">
                    <li>hardcoded values instead of using variables.</li>
                    <li>coding while thinking. write the logic or flow first.</li>
                    <li>never revisited code in production, even though improvements were possible.</li>
                    <li>terrible at naming scripts (e.g., <code>this_is_the_new_version.py</code>).</li>
                </ul>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
      <HorizontalTimeline />
      <div className="absolute bottom-4 right-4">
        <VisitCounter />
      </div>
    </div>
  )
}

