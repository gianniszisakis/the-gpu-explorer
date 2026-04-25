import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <ProfileCard />
      <Gallery />
    </div>
  );
}
