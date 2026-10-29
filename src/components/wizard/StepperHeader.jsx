import React from 'react';
import { 
  User, 
  Link2, 
  Palette, 
  Image as ImageIcon, 
  Share2, 
  Check 
} from 'lucide-react';

export const WIZARD_STEPS = [
  { id: 1, title: 'Profile', subtitle: 'Name & Handle', icon: User },
  { id: 2, title: 'Links', subtitle: 'Select Links', icon: Link2 },
  { id: 3, title: 'Design', subtitle: 'Colors & Theme', icon: Palette },
  { id: 4, title: 'Photos', subtitle: 'Media & Work', icon: ImageIcon },
  { id: 5, title: 'Publish', subtitle: 'Share & QR', icon: Share2 }
];

export default function StepperHeader({ currentStep, onSelectStep }) {
  const progressPercent = Math.round(((currentStep - 1) / (WIZARD_STEPS.length - 1)) * 100);

  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-4 sm:p-5 shadow-sm">
      {/* Progress Bar Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Step {currentStep} of {WIZARD_STEPS.length}
          </span>
          <span className="text-zinc-300">•</span>
          <span className="text-xs font-semibold text-zinc-800">
            {WIZARD_STEPS[currentStep - 1]?.title}: {WIZARD_STEPS[currentStep - 1]?.subtitle}
          </span>
        </div>
        <span className="text-xs font-bold text-zinc-900 font-mono">
          {progressPercent}% Complete
        </span>
      </div>

      {/* Progress track */}
      <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-zinc-900 transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Stepper Buttons */}
      <div className="grid grid-cols-5 gap-1 sm:gap-2">
        {WIZARD_STEPS.map((step) => {
          const Icon = step.icon;
          const isActive = currentStep === step.id;
          const isDone = currentStep > step.id;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => onSelectStep(step.id)}
              className={`flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-2.5 p-2 rounded-xl text-left transition cursor-pointer group ${
                isActive 
                  ? 'bg-zinc-900 text-white shadow-xs' 
                  : isDone 
                    ? 'bg-zinc-50 hover:bg-zinc-100 text-zinc-800 border border-zinc-200/80' 
                    : 'text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50'
              }`}
            >
              {/* Icon circle */}
              <div 
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : isDone 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-zinc-100 text-zinc-400 group-hover:bg-zinc-200'
                }`}
              >
                {isDone ? (
                  <Check size={14} className="stroke-[2.5]" />
                ) : (
                  <Icon size={14} />
                )}
              </div>

              {/* Step info (hidden on tiny screens, clear on sm) */}
              <div className="hidden sm:block min-w-0">
                <p className={`text-[11px] font-bold tracking-tight truncate leading-tight ${
                  isActive ? 'text-white' : 'text-zinc-900'
                }`}>
                  {step.title}
                </p>
                <p className={`text-[10px] truncate leading-tight ${
                  isActive ? 'text-zinc-300' : 'text-zinc-400'
                }`}>
                  {step.subtitle}
                </p>
              </div>

              {/* Mobile text */}
              <span className={`block sm:hidden text-[10px] font-bold ${
                isActive ? 'text-white' : 'text-zinc-600'
              }`}>
                {step.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
