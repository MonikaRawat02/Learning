import React from 'react';
import { AlertCircle, BookOpen, BrainCircuit } from 'lucide-react';

const ImportantNotesSection = () => {
  const notes = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Start with Demo',
      text: 'Always begin your trading journey with a practice account before committing real capital.',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Learn Before Investing Real Money',
      text: 'Take time to understand markets, risk management, and platform features thoroughly.',
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: 'Avoid Emotional Decisions',
      text: 'Develop discipline and stick to your learning plan without rushing into live trading.',
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
          Important Notes
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <div key={index} className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-amber-600">
                  {note.icon}
                </div>
                <h3 className="font-semibold text-slate-900">{note.title}</h3>
              </div>
              <p className="text-slate-700 text-sm">{note.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantNotesSection;
