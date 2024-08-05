import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dog, Heart, Info } from "lucide-react";

const popularBreeds = [
  { name: "Labrador Retriever", description: "Friendly and outgoing" },
  { name: "German Shepherd", description: "Intelligent and versatile" },
  { name: "Golden Retriever", description: "Gentle and affectionate" },
  { name: "French Bulldog", description: "Adaptable and playful" },
  { name: "Bulldog", description: "Calm and courageous" },
];

const Index = () => {
  const [likedBreeds, setLikedBreeds] = useState(new Set());

  const toggleLike = (breed) => {
    setLikedBreeds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(breed)) {
        newSet.delete(breed);
      } else {
        newSet.add(breed);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-blue-800">Paw-some Pals</h1>
          <p className="text-xl text-gray-600">Discover the wonderful world of dogs</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Happy dogs"
              className="mx-auto object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h2 className="text-3xl font-bold text-white">Loyal Companions</h2>
            </div>
          </div>
          <Card className="flex flex-col justify-center">
            <CardHeader>
              <CardTitle className="text-2xl">Man's Best Friend</CardTitle>
              <CardDescription>Discover why dogs are our perfect companions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Dogs have been by our side for thousands of years, offering unwavering loyalty, 
                love, and companionship. Their diverse breeds, each with unique characteristics, 
                make them suitable for various lifestyles and purposes.
              </p>
              <Button className="w-full">Learn More About Dogs</Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="popular" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="popular">Popular Breeds</TabsTrigger>
            <TabsTrigger value="care">Dog Care Tips</TabsTrigger>
          </TabsList>
          <TabsContent value="popular">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularBreeds.map((breed) => (
                <Card key={breed.name} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex justify-between items-center">
                      <span>{breed.name}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleLike(breed.name)}
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            likedBreeds.has(breed.name) ? "fill-red-500 text-red-500" : "text-gray-500"
                          }`}
                        />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{breed.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="care">
            <Card>
              <CardHeader>
                <CardTitle>Essential Dog Care Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide a balanced diet suitable for their age and size</li>
                  <li>Ensure regular exercise and playtime</li>
                  <li>Schedule routine veterinary check-ups</li>
                  <li>Groom your dog regularly, including brushing their teeth</li>
                  <li>Offer plenty of fresh water and a comfortable sleeping area</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <footer className="text-center text-gray-600">
          <p>© 2023 Paw-some Pals. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
