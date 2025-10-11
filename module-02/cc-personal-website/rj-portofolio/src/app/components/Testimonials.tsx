import Image from "next/image";
import { ITestimony } from "@/lib/interface";

const testimonials: ITestimony[] = [
  {
    name: "Emily Carter",
    role: "UX Designer at Creative Studio",
    message:
      "Rangga delivered a smooth and visually appealing user interface with excellent responsiveness. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sarah Lee",
    role: "CEO at Creative Labs",
    message:
      "Our website redesign was a huge success thanks to Rangga. He implemented complex UI animations seamlessly and ensured everything was mobile-friendly.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Maria Gonzalez",
    role: "Freelance Designer",
    message:
      "Rangga's code quality and professionalism are top-notch. He understands design requirements perfectly and translates them into clean, functional front-end solutions.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="container mx-auto pt-24">
      {/* title */}
      <h2 className="text-4xl font-semibold">
        Testimonials<span className="text-lime-500">.</span>
      </h2>

      {/* testimonials */}
      <div className="mt-8 grid gap-16 md:grid-cols-3 ">
        {testimonials.map((testimony, index) => (
          <div
            key={index}
            className="shadow-sm rounded-2xl p-6 border-l-2 border-r-2 border-lime-500"
          >
            <Image
              src={testimony.image}
              alt={testimony.name}
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4 object-cover"
            />
            <p className="italic mb-4">“{testimony.message}”</p>
            <h3 className="text-lg font-semibold">{testimony.name}</h3>
            <p className="text-sm">{testimony.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
