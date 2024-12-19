import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  const image =
    "https://images.unsplash.com/photo-1460627390041-532a28402358?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-yellow-400" />
              <span className="text-xl font-bold">actualnews</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/local" className="text-sm font-medium">
                Local
              </Link>
              <Link href="/business" className="text-sm font-medium">
                Business
              </Link>
              <Link href="/technology" className="text-sm font-medium">
                Technology
              </Link>
              <Link href="/entertainment" className="text-sm font-medium">
                Entertainment
              </Link>
              <Link href="/sports" className="text-sm font-medium">
                Sports
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <CalendarDays className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <span className="sr-only">User account</span>
              <div className="h-8 w-8 rounded-full bg-muted" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-6">
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          {/* Main Content */}
          <div className="space-y-6">
            {/* Categories */}
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">
                For you
              </Button>
              <Button variant="ghost" size="sm">
                Following
              </Button>
              <Button variant="ghost" size="sm">
                Trending
              </Button>
            </div>

            {/* Top Stories */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Top Stories</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4 grid md:grid-cols-[200px_1fr] gap-4">
                    <Image
                      src={image}
                      alt="Article thumbnail"
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full aspect-square"
                    />
                    <div className="space-y-2">
                      <h3 className="font-bold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        2 hours ago • 5 min read
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 grid md:grid-cols-[200px_1fr] gap-4">
                    <Image
                      src={image}
                      alt="Article thumbnail"
                      width={200}
                      height={200}
                      className="rounded-lg object-cover w-full aspect-square"
                    />
                    <div className="space-y-2">
                      <h3 className="font-bold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        4 hours ago • 3 min read
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* For You Section */}
            <section>
              <h2 className="text-2xl font-bold mb-4">For you</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-4 space-y-2">
                      <Image
                        src={image}
                        alt="Article thumbnail"
                        width={300}
                        height={200}
                        className="rounded-lg object-cover w-full aspect-video"
                      />
                      <h3 className="font-bold">Lorem ipsum dolor sit amet</h3>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Your Interests */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Your interests</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <Button variant="yellow" className="w-fit">
                      Politics
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="space-y-1">
                        <h3 className="font-medium">
                          Lorem ipsum dolor sit amet
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Button variant="yellow" className="w-fit">
                      Health
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="space-y-1">
                        <h3 className="font-medium">
                          Lorem ipsum dolor sit amet
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="text-sm font-medium">July 15, 2024</div>
              </CardHeader>
              <CardContent>
                <Calendar />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container flex items-center justify-between px-4 py-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-yellow-400" />
            <span className="text-sm font-bold">actualnews</span>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Twitter
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
