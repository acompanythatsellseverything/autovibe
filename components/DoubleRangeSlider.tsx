'use client';

import { useState, useRef, useEffect } from 'react';

interface DoubleRangeSliderProps {
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  onChange: (min: number, max: number) => void;
  label?: string;
}

export default function DoubleRangeSlider({ min, max, minValue, maxValue, onChange, label = 'Cuota mensual' }: DoubleRangeSliderProps) {
  const [minVal, setMinVal] = useState(minValue);
  const [maxVal, setMaxVal] = useState(maxValue);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMinVal(minValue);
    setMaxVal(maxValue);
  }, [minValue, maxValue]);

  const getPercent = (value: number) => {
    if (max === min) return 0;
    return Math.round(((value - min) / (max - min)) * 100);
  };

  useEffect(() => {
    if (maxValRef.current && minValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, maxVal, min, max]);

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+event.target.value, maxVal - 1);
    setMinVal(value);
    onChange(value, maxVal);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+event.target.value, minVal + 1);
    setMaxVal(value);
    onChange(minVal, value);
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-900 font-medium">{label}</span>
        <span className="text-sm text-gray-900">${minVal}-{maxVal}</span>
      </div>
      
      <div className="relative w-full px-2" style={{ paddingTop: '11px', paddingBottom: '7px' }}>
        {/* Track background */}
        <div className="relative w-full" style={{ height: '2px', marginTop: '7px' }}>
          <div className="absolute w-full h-2 rounded-lg bg-gray-200" style={{ top: '-1px', left: '6px', right: '6px', width: 'calc(100% - 12px)' }} />
          <div ref={range} className="absolute h-2 rounded-lg bg-[#FB3B55]" style={{ top: '-1px', left: '6px', width: 'calc(100% - 12px)' }} />
        </div>
        
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={handleMinChange}
          className="absolute w-full appearance-none pointer-events-none z-10 range-input"
          style={{ top: '11px', height: '16px', left: '6px', right: '6px', width: 'calc(100% - 12px)' }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={handleMaxChange}
          className="absolute w-full appearance-none pointer-events-none z-10 range-input"
          style={{ top: '11px', height: '16px', left: '6px', right: '6px', width: 'calc(100% - 12px)' }}
        />
      </div>

      <style jsx>{`
        .range-input {
          background: transparent;
        }
        .range-input::-webkit-slider-thumb {
          appearance: none;
          pointer-events: all;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #2C2C2C;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          margin-top: -5px;
          position: relative;
        }
        .range-input::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #2C2C2C;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .range-input::-ms-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #2C2C2C;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .range-input::-webkit-slider-runnable-track {
          height: 2px;
          background: transparent;
        }
        .range-input::-moz-range-track {
          height: 2px;
          background: transparent;
        }
      `}</style>
    </div>
  );
}

