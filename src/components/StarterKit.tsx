import { useState } from 'react';
import {
  ArrowLeft,
  Download,
  CheckCircle,
  Brain,
  Apple,
  Moon,
  Droplets,
  Zap,
  Heart,
  Trophy,
  ShoppingCart,
  Clock,
  Lightbulb,
  Leaf,
  Loader2,
} from 'lucide-react';

const KIT_FORM_ID = import.meta.env.VITE_KIT_FORM_ID || '';
const KIT_API_KEY = import.meta.env.VITE_KIT_API_KEY || 'W6yL0_TFEtMcaYILuvUUEQ';

interface StarterKitProps {
  onNavigate: (target: string) => void;
}

const StarterKit = ({ onNavigate }: StarterKitProps) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setError('');

    try {
      if (KIT_FORM_ID) {
        const res = await fetch(
          `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ api_key: KIT_API_KEY, email }),
          }
        );
        if (!res.ok) throw new Error('Subscription failed');
      }
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const days = [
    {
      day: 1,
      title: 'The Clean Sweep',
      icon: ShoppingCart,
      color: 'bg-nancy-teal',
      brainEffect: 'Your brain is still running on residual sugar. Today is about preparation — removing triggers and stocking brain-healthy fuel.',
      meals: {
        breakfast: '3-egg omelet with spinach, mushrooms & avocado',
        lunch: 'Grilled salmon salad with olive oil, walnuts & mixed greens',
        dinner: 'Turkey stir-fry with broccoli, bell peppers & cauliflower rice',
        snack: 'Handful of almonds + celery with almond butter',
      },
      tip: 'Audit your kitchen. Remove anything with added sugar — check labels on sauces, granola, yogurt, and dressings.',
      sugarSwap: 'Swap flavored yogurt (20g sugar) → plain Greek yogurt with cinnamon & berries (3g sugar)',
    },
    {
      day: 2,
      title: 'Cravings Emerge',
      icon: Brain,
      color: 'bg-nancy-coral',
      brainEffect: 'Your dopamine system notices the missing sugar fix. Cravings are your brain demanding its easy reward — not true hunger.',
      meals: {
        breakfast: 'Smoothie: spinach, avocado, protein powder, almond milk, chia seeds',
        lunch: 'Chicken and vegetable soup with a side of mixed greens',
        dinner: 'Baked salmon with roasted sweet potato & steamed asparagus',
        snack: 'Hard-boiled eggs + handful of mixed berries',
      },
      tip: 'When cravings hit, eat a spoonful of almond butter. Fat and protein silence sugar cravings within minutes.',
      sugarSwap: 'Swap energy drinks (27g sugar) → green tea with lemon (0g sugar + L-theanine for calm focus)',
    },
    {
      day: 3,
      title: 'Peak Challenge',
      icon: Zap,
      color: 'bg-nancy-gold',
      brainEffect: 'Peak withdrawal day. Headaches, irritability, and fatigue are signs your brain is downregulating sugar-seeking pathways. This is progress.',
      meals: {
        breakfast: 'Scrambled eggs with sauteed kale, cherry tomatoes & avocado toast (sprouted grain bread)',
        lunch: 'Large salad with grilled chicken, chickpeas, olive oil & lemon dressing',
        dinner: 'Grass-fed beef burger (no bun) with sweet potato fries & side salad',
        snack: 'Apple slices with 2 tbsp almond butter',
      },
      tip: 'Go to bed 30 minutes early tonight. Fatigue amplifies cravings. Sleep is your secret weapon.',
      sugarSwap: 'Swap granola bar (15g sugar) → handful of walnuts + 2 squares dark chocolate 85% (2g sugar)',
    },
    {
      day: 4,
      title: 'The Turning Point',
      icon: Lightbulb,
      color: 'bg-nancy-teal',
      brainEffect: 'Dopamine receptors begin resensitizing. Natural rewards feel more satisfying. Many clients notice their first "clear" afternoon today.',
      meals: {
        breakfast: 'Overnight oats: steel-cut oats, chia seeds, almond milk, walnuts, blueberries (no sweetener)',
        lunch: 'Sardine & avocado toast on sprouted grain bread with arugula',
        dinner: 'Lemon herb chicken with roasted Brussels sprouts & quinoa',
        snack: 'Sliced cucumber with hummus + a few olives',
      },
      tip: 'Introduce 85% dark chocolate (1–2 squares). It satisfies the sweet craving while providing brain-protective flavanols.',
      sugarSwap: 'Swap pasta sauce (12g sugar/serving) → crushed tomatoes with garlic, basil & olive oil (3g sugar)',
    },
    {
      day: 5,
      title: 'Energy Restored',
      icon: Heart,
      color: 'bg-nancy-coral',
      brainEffect: 'Your brain is learning to run on stable fuel. Expect steadier energy, improved focus, and better mood regulation throughout the day.',
      meals: {
        breakfast: 'Veggie frittata with zucchini, onions, bell peppers & fresh herbs',
        lunch: 'Poke bowl: wild salmon, brown rice, avocado, edamame, seaweed, sesame',
        dinner: 'Herb-crusted baked cod with roasted cauliflower mash & sauteed spinach',
        snack: 'Trail mix: pumpkin seeds, almonds, coconut flakes, cacao nibs',
      },
      tip: 'Add a 20-minute walk today. Exercise boosts BDNF — a protein that helps your brain form new connections.',
      sugarSwap: 'Swap fruit juice (36g sugar/glass) → sparkling water with fresh lemon, lime & mint (0g sugar)',
    },
    {
      day: 6,
      title: 'Taste Buds Reset',
      icon: Apple,
      color: 'bg-nancy-gold',
      brainEffect: 'Taste receptors have recalibrated. A blueberry now tastes intensely sweet. This biological change makes low-sugar eating dramatically easier.',
      meals: {
        breakfast: 'Smoked salmon with cream cheese on cucumber rounds, capers & dill',
        lunch: 'Mediterranean bowl: grilled chicken, hummus, roasted vegetables, olives, feta',
        dinner: 'Shrimp and vegetable curry (coconut milk base) with cauliflower rice',
        snack: 'Small bowl of mixed berries with a dollop of coconut cream',
      },
      tip: 'Notice how different whole foods taste now. Your palate has recalibrated — this is your new normal.',
      sugarSwap: 'Swap "healthy" smoothie (40g sugar) → green smoothie: spinach, avocado, protein powder, almond milk (4g sugar)',
    },
    {
      day: 7,
      title: 'Brain Breakthrough',
      icon: Trophy,
      color: 'bg-nancy-teal',
      brainEffect: 'Dopamine sensitivity restored. Blood sugar stabilized. Inflammation declining. Sleep architecture improved. Your brain is running on clean fuel.',
      meals: {
        breakfast: 'Acai bowl: unsweetened acai, berries, banana, granola (sugar-free), chia seeds, coconut',
        lunch: 'Niçoise salad: tuna, eggs, green beans, olives, tomatoes, olive oil dressing',
        dinner: 'Celebration dinner: grilled wild salmon, roasted root vegetables, large leafy green salad',
        snack: 'Dark chocolate (85%) + herbal tea',
      },
      tip: 'Journal how you feel compared to Day 1. This becomes your motivation for maintaining a brain-healthy lifestyle.',
      sugarSwap: 'Swap sugary cereal (18g sugar) → steel-cut oats with cinnamon, walnuts & berries (4g natural sugar)',
    },
  ];

  const shoppingList = {
    proteins: [
      'Wild-caught salmon (2 lbs)',
      'Organic eggs (2 dozen)',
      'Chicken breast or thighs (2 lbs)',
      'Grass-fed ground beef (1 lb)',
      'Canned wild sardines (2 cans)',
      'Turkey breast (1 lb)',
      'Shrimp (1 lb)',
      'Canned tuna (2 cans)',
    ],
    produce: [
      'Spinach (2 bags)',
      'Kale (1 bunch)',
      'Arugula (1 bag)',
      'Avocados (6)',
      'Blueberries (2 pints)',
      'Mixed berries (1 bag frozen)',
      'Broccoli (2 heads)',
      'Sweet potatoes (4)',
      'Bell peppers (4 assorted)',
      'Cauliflower (2 heads)',
      'Zucchini (3)',
      'Asparagus (1 bunch)',
      'Brussels sprouts (1 lb)',
      'Lemons (4)',
      'Limes (4)',
      'Fresh herbs: basil, dill, cilantro',
      'Garlic (1 bulb)',
      'Onions (3)',
      'Cherry tomatoes (1 pint)',
      'Cucumber (2)',
      'Celery (1 bunch)',
      'Bananas (4)',
      'Apples (4)',
    ],
    fats: [
      'Extra virgin olive oil',
      'Almond butter (1 jar)',
      'Walnuts (1 bag)',
      'Almonds (1 bag)',
      'Chia seeds',
      'Flax seeds',
      'Coconut oil',
      'Pumpkin seeds',
    ],
    pantry: [
      'Steel-cut oats',
      'Quinoa',
      'Canned chickpeas (2 cans)',
      'Crushed tomatoes (2 cans)',
      'Coconut milk (2 cans)',
      'Almond milk (unsweetened)',
      'Bone broth (32 oz)',
      'Dark chocolate 85%+ cacao',
      'Green tea bags',
      'Herbal tea (chamomile or peppermint)',
      'Apple cider vinegar',
      'Cinnamon',
      'Turmeric',
      'Hummus (no added sugar)',
    ],
  };

  return (
    <div className="min-h-screen bg-nancy-cream">
      {/* Hero */}
      <div className="bg-gradient-to-br from-nancy-charcoal to-nancy-charcoal/95 pt-24 pb-10 sm:pt-28 sm:pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-nancy-teal rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-nancy-gold rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <button
            onClick={() => onNavigate('')}
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </button>
          <div className="inline-flex items-center bg-nancy-coral text-white text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            FREE DOWNLOAD
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            7-Day Brain Health
            <span className="block text-nancy-teal">Starter Kit</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-3">
            Your complete roadmap to breaking the sugar cycle and giving your brain the fuel it needs to thrive.
          </p>
          <p className="text-sm text-nancy-gold font-medium">
            By Nancy Ryan, EBHCC — Elite Brain Health Coach Certified - Amen University
          </p>
        </div>
      </div>

      {/* What's Inside */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-nancy-charcoal mb-4">
            What's Inside Your Starter Kit
          </h2>
          <p className="text-nancy-gray max-w-xl mx-auto">
            Everything you need to transform your brain health in just one week — no guesswork, no overwhelm.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-16">
          {[
            { icon: Clock, title: 'Day-by-Day Plan', desc: 'Exactly what to eat, do, and expect each day' },
            { icon: Brain, title: 'Brain Timeline', desc: 'What happens in your brain each day off sugar' },
            { icon: ShoppingCart, title: 'Shopping List', desc: 'Printable grocery list with everything you need' },
            { icon: Leaf, title: 'Sugar Swaps', desc: 'Simple swaps for your favorite sugary foods' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 text-center card-hover">
              <div className="w-12 h-12 bg-nancy-teal/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <item.icon className="h-6 w-6 text-nancy-teal" />
              </div>
              <h3 className="font-display font-bold text-nancy-charcoal text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-nancy-gray">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Day-by-Day Plan */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-nancy-charcoal mb-2 text-center">
            Your 7-Day Brain Health Plan
          </h2>
          <p className="text-nancy-gray text-center mb-10">
            Follow this day-by-day guide to reset your brain's relationship with sugar.
          </p>

          <div className="space-y-6">
            {days.map((day) => (
              <div key={day.day} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                {/* Day Header */}
                <div className={`${day.color} px-6 py-4 flex items-center space-x-3`}>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <day.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">
                      Day {day.day}: {day.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  {/* Brain Effect */}
                  <div className="bg-nancy-sage/50 rounded-xl p-4 mb-5 border-l-4 border-nancy-teal">
                    <div className="flex items-start space-x-2">
                      <Brain className="h-4 w-4 text-nancy-teal mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-nancy-teal uppercase tracking-wide mb-1">What's Happening in Your Brain</p>
                        <p className="text-sm text-nancy-charcoal leading-relaxed">{day.brainEffect}</p>
                      </div>
                    </div>
                  </div>

                  {/* Meals */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    {Object.entries(day.meals).map(([meal, food]) => (
                      <div key={meal} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-nancy-teal mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-nancy-charcoal uppercase tracking-wide">{meal}</p>
                          <p className="text-sm text-nancy-gray">{food}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tip & Sugar Swap */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-nancy-gold/10 rounded-lg p-3">
                      <p className="text-xs font-semibold text-nancy-gold uppercase tracking-wide mb-1">
                        <Lightbulb className="h-3 w-3 inline mr-1" />
                        Today's Tip
                      </p>
                      <p className="text-sm text-nancy-charcoal">{day.tip}</p>
                    </div>
                    <div className="bg-nancy-coral/10 rounded-lg p-3">
                      <p className="text-xs font-semibold text-nancy-coral uppercase tracking-wide mb-1">
                        <Droplets className="h-3 w-3 inline mr-1" />
                        Sugar Swap
                      </p>
                      <p className="text-sm text-nancy-charcoal">{day.sugarSwap}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping List */}
        <div className="bg-white rounded-2xl p-5 sm:p-8 mb-10 sm:mb-16 shadow-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-nancy-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <ShoppingCart className="h-7 w-7 text-nancy-teal" />
            </div>
            <h2 className="font-display text-3xl font-bold text-nancy-charcoal mb-2">
              Printable Shopping List
            </h2>
            <p className="text-nancy-gray">Everything you need for the full 7 days — one grocery trip.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Proteins', items: shoppingList.proteins, color: 'border-nancy-coral' },
              { title: 'Produce', items: shoppingList.produce, color: 'border-nancy-teal' },
              { title: 'Healthy Fats', items: shoppingList.fats, color: 'border-nancy-gold' },
              { title: 'Pantry Staples', items: shoppingList.pantry, color: 'border-nancy-teal-light' },
            ].map((category, i) => (
              <div key={i} className={`border-t-4 ${category.color} bg-nancy-cream rounded-lg p-4`}>
                <h3 className="font-display font-bold text-nancy-charcoal mb-3 text-sm">{category.title}</h3>
                <ul className="space-y-1.5">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-start text-xs text-nancy-charcoal">
                      <span className="w-4 h-4 border border-nancy-gray-light rounded mr-2 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Brain Health Timeline Infographic */}
        <div className="bg-nancy-charcoal rounded-2xl p-5 sm:p-8 mb-10 sm:mb-16 text-white">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
              What Happens to Your Brain When You Quit Sugar
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">Your brain's transformation timeline</p>
          </div>

          <div className="relative">
            {/* Timeline Line - visible on mobile (left) and desktop (center) */}
            <div className="absolute left-3 sm:left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-nancy-teal/30 md:-translate-x-1/2" />

            <div className="space-y-6 sm:space-y-8">
              {[
                { time: 'Hours 1–6', title: 'Blood Sugar Stabilizes', desc: 'Without sugar spikes, insulin levels normalize. Your brain begins receiving steady glucose from complex carbohydrates.', color: 'bg-nancy-teal' },
                { time: 'Hours 12–24', title: 'Cravings Peak', desc: 'Dopamine-seeking pathways fire heavily. This is your brain\'s reward system demanding its fix — it will pass.', color: 'bg-nancy-coral' },
                { time: 'Days 2–3', title: 'Withdrawal Phase', desc: 'Headaches, fatigue, and irritability as your brain recalibrates. Sugar-dependent bacteria in your gut begin dying off.', color: 'bg-nancy-gold' },
                { time: 'Days 4–5', title: 'Dopamine Reset Begins', desc: 'Dopamine receptors start upregulating — becoming more sensitive to normal stimulation. Focus and mood begin improving.', color: 'bg-nancy-teal' },
                { time: 'Days 5–7', title: 'Clarity Emerges', desc: 'Neuroinflammation decreases. Brain fog lifts. Energy stabilizes. Taste buds recalibrate — whole foods taste sweeter.', color: 'bg-nancy-coral' },
                { time: 'Week 2+', title: 'Brain Rewired', desc: 'New neural pathways strengthen. Sleep architecture improves. Gut microbiome shifts toward brain-supportive species.', color: 'bg-nancy-gold' },
              ].map((item, i) => (
                <div key={i} className={`md:flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 md:gap-8`}>
                  {/* Mobile: left-aligned with timeline dot; Desktop: alternating */}
                  <div className={`flex-1 pl-8 sm:pl-10 md:pl-0 relative ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {/* Mobile timeline dot */}
                    <div className="md:hidden absolute left-1.5 sm:left-2.5 top-1 w-3 h-3 rounded-full bg-nancy-teal border-2 border-white z-10" />
                    <span className={`inline-block text-xs font-bold ${item.color} text-white px-2 py-0.5 rounded mb-1`}>
                      {item.time}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-nancy-teal border-2 border-white flex-shrink-0 z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Email Capture / CTA */}
        <div className="bg-gradient-to-br from-nancy-teal to-nancy-teal-light rounded-2xl p-5 sm:p-8 text-center text-white">
          {submitted ? (
            <div className="animate-fadeIn py-4">
              <CheckCircle className="h-16 w-16 text-white mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">Your Starter Kit Is on Its Way!</h3>
              <p className="text-white/90 max-w-md mx-auto">
                Check your inbox for the downloadable PDF version of the 7-Day Brain Health Starter Kit.
              </p>
            </div>
          ) : (
            <>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                Get the Printable PDF Version
              </h2>
              <p className="text-white/90 max-w-lg mx-auto mb-6">
                Enter your email to receive the complete 7-Day Brain Health Starter Kit as a beautifully designed, printable PDF — plus weekly brain health tips from Nancy.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3.5 rounded-xl border-2 border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none"
                />
                <button type="submit" disabled={submitting} className="bg-white text-nancy-teal px-6 py-3.5 rounded-xl font-semibold hover:bg-nancy-cream transition-colors flex items-center justify-center space-x-2 whitespace-nowrap disabled:opacity-60">
                  {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
                  <span>{submitting ? 'Sending...' : 'Send It to Me'}</span>
                </button>
              </form>
              {error && <p className="text-red-300 text-xs mt-2">{error}</p>}
              <p className="text-xs text-white/60 mt-3">
                No spam, ever. Just brain health insights from Nancy. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <p className="text-nancy-gray mb-4">
            Want personalized guidance through your sugar detox and beyond?
          </p>
          <a
            href="https://calendly.com/nancythehealthcoach-1/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Book a Free Brain Health Consultation</span>
          </a>
          <div className="mt-6">
            <button
              onClick={() => onNavigate('')}
              className="inline-flex items-center text-nancy-teal hover:text-nancy-teal-light font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarterKit;
