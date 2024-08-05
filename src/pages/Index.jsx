import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const popularBreeds = [
  "Labrador Retriever",
  "German Shepherd",
  "Golden Retriever",
  "French Bulldog",
  "Bulldog",
];

const Index = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">All About Dogs</h1>
        
        <div className="mb-8">
          <img
            src="/placeholder.svg"
            alt="A cute dog"
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
          />
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Man's Best Friend</CardTitle>
            <CardDescription>Learn about our loyal companions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Dogs have been domesticated for thousands of years and are known for their loyalty, 
              companionship, and diverse breeds. They come in various sizes, shapes, and temperaments, 
              making them suitable for different lifestyles and purposes.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Popular Dog Breeds</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              {popularBreeds.map((breed, index) => (
                <li key={index} className="text-gray-700 mb-2">{breed}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
