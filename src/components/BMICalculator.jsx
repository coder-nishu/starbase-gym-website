import { useState } from 'react';

const BMICalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [weightUnit, setWeightUnit] = useState('kg');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weight, setWeight] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    let weightInKg;
    let heightInMeters;

    // Convert weight to kg
    if (weightUnit === 'kg') {
      weightInKg = parseFloat(weight);
    } else if (weightUnit === 'lbs') {
      weightInKg = parseFloat(weight) * 0.453592;
    }

    // Convert height to meters
    if (heightUnit === 'cm') {
      heightInMeters = parseFloat(height) / 100;
    } else if (heightUnit === 'm') {
      heightInMeters = parseFloat(height);
    } else if (heightUnit === 'ft') {
      // feet + inches
      const feet = parseFloat(heightFeet) || 0;
      const inches = parseFloat(heightInches) || 0;
      const totalInches = (feet * 12) + inches;
      heightInMeters = totalInches * 0.0254;
    }

    if (!weightInKg || !heightInMeters || heightInMeters <= 0) return;

    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(1));

    // Determine BMI category
    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory('Normal Weight');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setHeightFeet('');
    setHeightInches('');
    setBmi(null);
    setCategory('');
  };

  const getBMIColor = () => {
    if (!bmi) return 'text-gray-400';
    const value = parseFloat(bmi);
    if (value < 18.5) return 'text-blue-400';
    if (value < 25) return 'text-green-400';
    if (value < 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <>
      {/* Vertical Tab Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-1/2 right-0 -translate-y-1/2 bg-[#FF6B00] hover:bg-[#e66000] text-white px-3 py-6 rounded-l-xl shadow-2xl transition-all duration-300 hover:shadow-[#FF6B00]/50 z-40 flex flex-col items-center gap-2 group"
        style={{ writingMode: 'vertical-rl' }}
        aria-label="BMI Calculator"
      >
        <svg className="w-6 h-6 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <span className="text-xs font-bold uppercase tracking-wider">BMI CALC</span>
      </button>

      {/* BMI Calculator Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-96 max-w-full bg-[#0B0B0B] border-l-2 border-[#FF6B00] shadow-2xl z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        {/* Header */}
        <div className="bg-linear-to-r from-[#FF6B00] to-[#FF8533] p-6 sticky top-0 z-10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-black font-['Oswald'] text-white uppercase">BMI Calculator</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-white/90 text-sm">Track your fitness journey with us</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Input Fields */}
          <div className="space-y-4">
            {/* Weight Input */}
            <div>
              <label className="block text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">
                Weight
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter weight"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] focus:bg-white/10 transition-all"
                />
                <select
                  value={weightUnit}
                  onChange={(e) => setWeightUnit(e.target.value)}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF6B00] focus:bg-white/10 transition-all cursor-pointer"
                >
                  <option value="kg" className="bg-[#0B0B0B]">kg</option>
                  <option value="lbs" className="bg-[#0B0B0B]">lbs</option>
                </select>
              </div>
            </div>

            {/* Height Input */}
            <div>
              <label className="block text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">
                Height
              </label>
              <div className="flex gap-2 mb-2">
                <select
                  value={heightUnit}
                  onChange={(e) => {
                    setHeightUnit(e.target.value);
                    setHeight('');
                    setHeightFeet('');
                    setHeightInches('');
                  }}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF6B00] focus:bg-white/10 transition-all cursor-pointer"
                >
                  <option value="cm" className="bg-[#0B0B0B]">Centimeters (cm)</option>
                  <option value="m" className="bg-[#0B0B0B]">Meters (m)</option>
                  <option value="ft" className="bg-[#0B0B0B]">Feet & Inches</option>
                </select>
              </div>
              
              {heightUnit === 'ft' ? (
                <div className="flex gap-2">
                  <div className="flex-1">
                    <input
                      type="number"
                      value={heightFeet}
                      onChange={(e) => setHeightFeet(e.target.value)}
                      placeholder="Feet"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] focus:bg-white/10 transition-all"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="number"
                      value={heightInches}
                      onChange={(e) => setHeightInches(e.target.value)}
                      placeholder="Inches"
                      max="11"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>
              ) : (
                <input
                  type="number"
                  step={heightUnit === 'm' ? '0.01' : '1'}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder={`Enter height in ${heightUnit}`}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] focus:bg-white/10 transition-all"
                />
              )}
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateBMI}
            disabled={!weight || (heightUnit === 'ft' ? (!heightFeet && !heightInches) : !height)}
            className="w-full py-4 bg-[#FF6B00] hover:bg-[#e66000] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-black uppercase tracking-wider rounded-lg transition-all duration-300 hover:-translate-y-1 disabled:hover:translate-y-0"
          >
            Calculate BMI
          </button>

          {/* Result */}
          {bmi && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="text-center">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Your BMI</p>
                <p className={`text-6xl font-black font-['Oswald'] ${getBMIColor()}`}>
                  {bmi}
                </p>
                <p className={`text-xl font-bold mt-2 ${getBMIColor()}`}>
                  {category}
                </p>
              </div>

              {/* BMI Scale */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Underweight</span>
                  <span>Normal</span>
                  <span>Overweight</span>
                  <span>Obese</span>
                </div>
                <div className="h-3 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-full relative">
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-full shadow-lg"
                    style={{
                      left: `${Math.min(Math.max(((parseFloat(bmi) - 10) / 30) * 100, 0), 100)}%`
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>10</span>
                  <span>20</span>
                  <span>30</span>
                  <span>40</span>
                </div>
              </div>

              {/* Motivation Message */}
              <div className="bg-[#FF6B00]/10 border border-[#FF6B00]/30 rounded-lg p-4">
                <h4 className="text-[#FF6B00] font-bold text-sm uppercase tracking-wider mb-2">
                  💪 Let Us Help You!
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {parseFloat(bmi) < 18.5 && "Build muscle mass with our strength training programs and nutrition guidance."}
                  {parseFloat(bmi) >= 18.5 && parseFloat(bmi) < 25 && "Maintain your healthy weight with our fitness programs and expert trainers!"}
                  {parseFloat(bmi) >= 25 && parseFloat(bmi) < 30 && "Our cardio classes and personal training will help you reach your optimal weight."}
                  {parseFloat(bmi) >= 30 && "Transform your life with our comprehensive weight loss programs, nutrition plans, and dedicated trainers."}
                </p>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetCalculator}
                className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold uppercase tracking-wider rounded-lg transition-all duration-200"
              >
                Calculate Again
              </button>
            </div>
          )}

          {/* Info Cards */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">BMI Categories</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Underweight</span>
                <span className="text-blue-400 font-semibold">&lt; 18.5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Normal Weight</span>
                <span className="text-green-400 font-semibold">18.5 - 24.9</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Overweight</span>
                <span className="text-yellow-400 font-semibold">25 - 29.9</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Obese</span>
                <span className="text-red-400 font-semibold">≥ 30</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-linear-to-r from-[#FF6B00] to-[#FF8533] rounded-xl p-6 text-center">
            <h4 className="text-white font-black text-lg uppercase mb-2">Ready to Transform?</h4>
            <p className="text-white/90 text-sm mb-4">Join STARBASE and achieve your fitness goals!</p>
            <button className="px-6 py-3 bg-white text-[#FF6B00] font-bold uppercase tracking-wider rounded-lg hover:bg-gray-100 transition-all duration-300">
              Get Started Now
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        />
      )}
    </>
  );
};

export default BMICalculator;
