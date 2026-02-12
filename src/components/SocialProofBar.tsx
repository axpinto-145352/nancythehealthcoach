import { Award, Users, MapPin, Laptop } from 'lucide-react';

const SocialProofBar = () => {
  const items = [
    { icon: Award, text: 'Amen University Certified' },
    { icon: Users, text: '100+ Workshop Attendees' },
    { icon: MapPin, text: 'San Diego Based' },
    { icon: Laptop, text: 'Virtual Sessions Available' },
  ];

  return (
    <section className="bg-nancy-teal py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center space-x-2 text-white">
              <item.icon className="h-5 w-5 text-nancy-gold" />
              <span className="text-sm font-medium whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
