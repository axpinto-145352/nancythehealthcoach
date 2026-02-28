import { Award, Users, MapPin, Laptop } from 'lucide-react';

const SocialProofBar = () => {
  const items = [
    { icon: Award, text: 'Amen University Certified' },
    { icon: Users, text: '100+ Workshop Attendees' },
    { icon: MapPin, text: 'San Diego Based' },
    { icon: Laptop, text: 'Virtual Sessions Available' },
  ];

  return (
    <section className="bg-nancy-teal py-3 sm:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 sm:gap-x-6 md:gap-x-12">
          {items.map((item, i) => (
            <div key={i} className="flex items-center space-x-1.5 sm:space-x-2 text-white">
              <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-nancy-gold flex-shrink-0" />
              <span className="text-sm sm:text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
