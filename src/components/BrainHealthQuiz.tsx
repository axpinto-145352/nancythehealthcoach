import { useState } from 'react';
import { ArrowRight, ArrowLeft, Sparkles, Calendar, Download, Brain, Zap, Heart, Shield } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: { label: string; score: number; category: string }[];
}

interface ResultProfile {
  title: string;
  icon: typeof Brain;
  color: string;
  description: string;
  recommendations: string[];
  suggestedService: string;
  servicePrice: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "How often do you experience brain fog?",
    options: [
      { label: "Never", score: 0, category: "focus" },
      { label: "Sometimes", score: 1, category: "focus" },
      { label: "Most days", score: 2, category: "focus" },
      { label: "Constantly", score: 3, category: "focus" },
    ],
  },
  {
    id: 2,
    text: "Do you crave sugar or carbs in the afternoon?",
    options: [
      { label: "Never", score: 0, category: "sugar" },
      { label: "Sometimes", score: 1, category: "sugar" },
      { label: "Daily", score: 2, category: "sugar" },
      { label: "Multiple times", score: 3, category: "sugar" },
    ],
  },
  {
    id: 3,
    text: "How would you rate your ability to focus for 30+ minutes?",
    options: [
      { label: "Easy", score: 0, category: "focus" },
      { label: "Takes effort", score: 1, category: "focus" },
      { label: "Very hard", score: 2, category: "focus" },
      { label: "Nearly impossible", score: 3, category: "focus" },
    ],
  },
  {
    id: 4,
    text: "How's your gut health?",
    options: [
      { label: "Great", score: 0, category: "gut" },
      { label: "Okay", score: 1, category: "gut" },
      { label: "Not good", score: 2, category: "gut" },
      { label: "Terrible", score: 3, category: "gut" },
    ],
  },
  {
    id: 5,
    text: "Are you concerned about cognitive decline (family history)?",
    options: [
      { label: "Not at all", score: 0, category: "protection" },
      { label: "A little", score: 1, category: "protection" },
      { label: "Quite a bit", score: 2, category: "protection" },
      { label: "Very concerned", score: 3, category: "protection" },
    ],
  },
];

const resultProfiles: Record<string, ResultProfile> = {
  focus: {
    title: "The Focus Seeker",
    icon: Zap,
    color: "nancy-teal",
    description: "Your brain is craving focus support. ADHD-like symptoms, brain fog, and attention struggles are telling you something — your brain needs targeted nutrition and lifestyle shifts to perform at its best.",
    recommendations: [
      "Omega-3 fatty acids (EPA/DHA) for neural connectivity",
      "Eliminate processed seed oils that inflame the brain",
      "Morning protein-first breakfast to stabilize dopamine",
    ],
    suggestedService: "90-Day Brain Health Transformation",
    servicePrice: "$597",
  },
  sugar: {
    title: "The Sugar Fighter",
    icon: Heart,
    color: "nancy-coral",
    description: "Sugar has hijacked your brain's reward system. Those afternoon cravings aren't willpower failures — they're biochemical signals. The good news: your brain can rewire in as little as 7 days.",
    recommendations: [
      "7-day sugar elimination to reset dopamine receptors",
      "Chromium and magnesium to reduce cravings",
      "Blood sugar-stabilizing meals every 3-4 hours",
    ],
    suggestedService: "Brain Health Breakthrough Session",
    servicePrice: "$150",
  },
  gut: {
    title: "The Gut Healer",
    icon: Brain,
    color: "nancy-gold",
    description: "Your gut and brain are in constant communication — and right now, they're sending distress signals. Healing your gut is one of the fastest ways to clear brain fog and lift mood.",
    recommendations: [
      "Probiotic-rich foods to rebuild gut microbiome",
      "Eliminate trigger foods causing inflammation",
      "L-glutamine to repair intestinal lining",
    ],
    suggestedService: "90-Day Brain Health Transformation",
    servicePrice: "$597",
  },
  protection: {
    title: "The Brain Protector",
    icon: Shield,
    color: "nancy-teal",
    description: "You're thinking ahead — and that's powerful. Family history doesn't have to be your destiny. Neuroplasticity means your brain can build new pathways at any age with the right inputs.",
    recommendations: [
      "Mediterranean-MIND diet for neuroprotection",
      "Regular cardiovascular exercise (30 min/day)",
      "Cognitive nutrition protocol based on Amen Clinics research",
    ],
    suggestedService: "VIP Brain Health Intensive",
    servicePrice: "$1,497",
  },
};

const BrainHealthQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [categoryScores, setCategoryScores] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const option = questions[currentQuestion].options[optionIndex];

    setTimeout(() => {
      const newAnswers = [...answers, option.score];
      setAnswers(newAnswers);

      const newScores = { ...categoryScores };
      newScores[option.category] = (newScores[option.category] || 0) + option.score;
      setCategoryScores(newScores);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResults(true);
      }
    }, 300);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
      setSelectedOption(null);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setCategoryScores({});
    setShowResults(false);
    setSelectedOption(null);
  };

  const getDominantCategory = (): string => {
    let maxScore = 0;
    let dominant = 'focus';
    for (const [cat, score] of Object.entries(categoryScores)) {
      if (score > maxScore) {
        maxScore = score;
        dominant = cat;
      }
    }
    return dominant;
  };

  const getTotalScore = (): number => {
    return answers.reduce((sum, a) => sum + a, 0);
  };

  const getScorePercentage = (): number => {
    const max = questions.length * 3;
    return Math.round((getTotalScore() / max) * 100);
  };

  if (showResults) {
    const category = getDominantCategory();
    const profile = resultProfiles[category];
    const scorePercent = getScorePercentage();
    const ProfileIcon = profile.icon;

    return (
      <div className="w-full max-w-2xl mx-auto animate-fadeIn">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-nancy-teal to-nancy-teal-light p-6 md:p-8 text-white text-center">
            <ProfileIcon className="h-12 w-12 mx-auto mb-3" />
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
              You're {profile.title}
            </h3>
            <div className="flex items-center justify-center space-x-3 mt-4">
              <span className="text-sm opacity-80">Brain Health Score</span>
              <div className="w-32 h-3 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-nancy-gold rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${100 - scorePercent}%` }}
                />
              </div>
              <span className="font-bold">{100 - scorePercent}/100</span>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <p className="text-nancy-charcoal leading-relaxed mb-6">
              {profile.description}
            </p>

            <div className="bg-nancy-sage rounded-2xl p-5 mb-6">
              <h4 className="font-display font-bold text-nancy-charcoal mb-3 flex items-center">
                <Sparkles className="h-5 w-5 text-nancy-gold mr-2" />
                Your Top 3 Brain Health Moves
              </h4>
              <ul className="space-y-2">
                {profile.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start text-sm text-nancy-charcoal">
                    <span className="text-nancy-teal font-bold mr-2 mt-0.5">{i + 1}.</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-nancy-teal/20 rounded-2xl p-5 mb-6">
              <p className="text-sm text-nancy-gray mb-1">Recommended for you:</p>
              <p className="font-display font-bold text-lg text-nancy-charcoal">
                {profile.suggestedService}
              </p>
              <p className="text-nancy-teal font-semibold">Starting at {profile.servicePrice}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 text-center flex items-center justify-center space-x-2"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Free 15-Min Call</span>
              </a>
              <button className="btn-secondary flex-1 flex items-center justify-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Get Sugar Detox Guide</span>
              </button>
            </div>

            <button
              onClick={resetQuiz}
              className="mt-4 text-sm text-nancy-gray hover:text-nancy-teal transition-colors mx-auto block"
            >
              Retake Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion) / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-nancy-gray">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className="flex space-x-1.5">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-5 sm:w-8 rounded-full transition-all duration-300 ${
                    i < currentQuestion ? 'bg-nancy-teal' :
                    i === currentQuestion ? 'bg-nancy-gold' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="w-full h-1 bg-gray-100 rounded-full mb-8">
            <div
              className="h-full bg-gradient-to-r from-nancy-teal to-nancy-teal-light rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <h3 className="font-display text-xl md:text-2xl font-bold text-nancy-charcoal mb-8 text-left">
            {question.text}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 ${
                  selectedOption === i
                    ? 'border-nancy-teal bg-nancy-teal/5 scale-[0.98]'
                    : 'border-gray-200 hover:border-nancy-teal/50 hover:bg-nancy-sage/50'
                }`}
              >
                <span className="font-medium text-nancy-charcoal">{option.label}</span>
              </button>
            ))}
          </div>

          {currentQuestion > 0 && (
            <button
              onClick={goBack}
              className="flex items-center text-sm text-nancy-gray hover:text-nancy-teal mt-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrainHealthQuiz;
