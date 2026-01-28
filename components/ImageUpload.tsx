'use client';

import { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Upload, Image as ImageIcon, X, Loader2, Check } from 'lucide-react';
import { AIAnalysis } from '@/lib/types';

interface ImageUploadProps {
  onAnalysisComplete: (analysis: AIAnalysis, imageUrl: string) => void;
}

export default function ImageUpload({ onAnalysisComplete }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): boolean => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      setError('Please upload a JPG, JPEG, or PNG image');
      return false;
    }

    if (file.size > maxSize) {
      setError('File size must be less than 10MB');
      return false;
    }

    setError(null);
    return true;
  };

  const mockAIAnalysis = async (): Promise<AIAnalysis> => {
    // Simulate AI processing with progress
    setProgress(0);
    const steps = [
      { delay: 200, progress: 20, message: 'Loading image...' },
      { delay: 400, progress: 45, message: 'Analyzing furniture...' },
      { delay: 600, progress: 70, message: 'Identifying style...' },
      { delay: 400, progress: 90, message: 'Finding matches...' },
      { delay: 200, progress: 100, message: 'Complete!' },
    ];

    for (const step of steps) {
      await new Promise(resolve => setTimeout(resolve, step.delay));
      setProgress(step.progress);
    }

    // Mock AI analysis results
    const mockResults: AIAnalysis[] = [
      { detected: 'Modern Gray Sofa', category: 'Sofa', style: 'Modern', color: 'Gray', confidence: 0.85 },
      { detected: 'Mid-Century Leather Chair', category: 'Chair', style: 'Mid-Century', color: 'Brown', confidence: 0.92 },
      { detected: 'Scandinavian Oak Table', category: 'Table', style: 'Scandinavian', color: 'Beige', confidence: 0.88 },
      { detected: 'Industrial Metal Desk', category: 'Desk', style: 'Industrial', color: 'Black', confidence: 0.79 },
      { detected: 'Rustic Wooden Bed', category: 'Bed', style: 'Rustic', color: 'Brown', confidence: 0.91 },
    ];

    return mockResults[Math.floor(Math.random() * mockResults.length)];
  };

  const processFile = async (file: File) => {
    if (!validateFile(file)) return;

    // Create preview
    const reader = new FileReader();
    reader.onload = async (e) => {
      const imageUrl = e.target?.result as string;
      setPreview(imageUrl);
      setIsAnalyzing(true);

      try {
        // Simulate AI analysis
        const analysis = await mockAIAnalysis();
        onAnalysisComplete(analysis, imageUrl);
      } catch (err) {
        setError('Failed to analyze image. Please try again.');
      } finally {
        setIsAnalyzing(false);
        setProgress(0);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleReset = () => {
    setPreview(null);
    setError(null);
    setIsAnalyzing(false);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png"
        onChange={handleFileInput}
        className="hidden"
      />

      <AnimatePresence mode="wait">
        {!preview ? (
          <motion.div
            key="upload"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`
              relative border-2 border-dashed rounded-3xl p-6 text-center transition-all duration-300 cursor-pointer
              ${isDragging
                ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-blue-50 scale-105 shadow-2xl'
                : 'border-gray-300 hover:border-purple-400 hover:bg-gradient-to-br hover:from-gray-50 hover:to-purple-50 hover:shadow-xl'
              }
            `}
            onClick={() => fileInputRef.current?.click()}
          >
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                backgroundImage: 'radial-gradient(circle, purple 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />

            <div className="relative space-y-4">
              <motion.div
                animate={{
                  y: isDragging ? -10 : [0, -5, 0],
                }}
                transition={{
                  duration: isDragging ? 0.3 : 2,
                  repeat: isDragging ? 0 : Infinity,
                }}
                className="flex justify-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-lg">
                  {isDragging ? (
                    <ImageIcon className="w-12 h-12 text-white" />
                  ) : (
                    <Upload className="w-12 h-12 text-white" />
                  )}
                </div>
              </motion.div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {isDragging ? 'Drop it here!' : 'Upload your furniture image'}
                </h3>
                <p className="text-gray-600 mb-6">
                  Drag & drop or click to browse
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Choose File
                </Button>
              </motion.div>

              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 pt-4">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>JPG, PNG</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Max 10MB</span>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-gray-200 shadow-2xl bg-white">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-auto max-h-[500px] object-contain"
              />

              {/* Analysis Overlay */}
              <AnimatePresence>
                {isAnalyzing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-blue-900/90 backdrop-blur-sm flex items-center justify-center"
                  >
                    <div className="text-center text-white max-w-md px-8">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="w-20 h-20 mx-auto mb-6"
                      >
                        <Loader2 className="w-20 h-20" />
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl font-bold mb-3"
                      >
                        AI Analyzing...
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/80 mb-6"
                      >
                        Identifying furniture style, color, and material
                      </motion.p>

                      {/* Progress Bar */}
                      <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <p className="text-sm text-white/70 mt-2">{progress}% Complete</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {!isAnalyzing && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    size="lg"
                    className="w-full rounded-full border-2 border-gray-200 hover:border-purple-200 hover:bg-purple-50 transition-all"
                  >
                    <X className="w-5 h-5 mr-2" />
                    Upload Different Image
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-2xl text-red-700 flex items-center space-x-3"
          >
            <X className="w-5 h-5 flex-shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
