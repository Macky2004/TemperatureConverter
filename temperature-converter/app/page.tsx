"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Thermometer, ArrowRight, Zap, Globe, BookOpen, Target, CheckCircle, Star, Calculator } from "lucide-react"
import Link from "next/link"

export default function IntroductionPage() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Thermometer className="h-16 w-16 text-orange-500 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-ping" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-sky-600 to-orange-600 bg-clip-text text-transparent animate-pulse">
              Temperature Converter
            </h1>
          </div>
          <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Master the art of temperature conversion with precision, elegance, and scientific accuracy
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300">
              <Zap className="h-3 w-3 mr-1" />
              Instant Conversion
            </Badge>
            <Badge variant="secondary" className="bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300">
              <Globe className="h-3 w-3 mr-1" />
              Universal Standards
            </Badge>
            <Badge
              variant="secondary"
              className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300"
            >
              <Target className="h-3 w-3 mr-1" />
              Scientific Precision
            </Badge>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-pink-500 via-sky-500 to-orange-500 hover:from-pink-600 hover:via-sky-600 hover:to-orange-600 text-white shadow-2xl"
          >
            <Link href="/converter" className="flex items-center gap-2">
              Start Converting
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Introduction Section */}
        <Card className="mb-12 bg-white/80 dark:bg-black/40 backdrop-blur-md border-0 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl text-center bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              <BookOpen className="inline h-8 w-8 mr-3 text-sky-600" />
              Understanding Temperature Conversion
            </CardTitle>
            <CardDescription className="text-center text-lg text-gray-600 dark:text-gray-400">
              The foundation of scientific measurement and everyday applications
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 text-lg">
            <p className="text-xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-200">
              Temperature conversion is the cornerstone of scientific communication and practical applications
              worldwide.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-xl">
                <h3 className="text-2xl font-bold text-pink-700 dark:text-pink-300 mb-3">Celsius (°C)</h3>
                <p>
                  The metric standard used globally, where water freezes at 0°C and boils at 100°C under standard
                  atmospheric pressure.
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/20 dark:to-sky-800/20 rounded-xl">
                <h3 className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-3">Fahrenheit (°F)</h3>
                <p>
                  Primarily used in the United States, where water freezes at 32°F and boils at 212°F under standard
                  conditions.
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl">
                <h3 className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-3">Kelvin (K)</h3>
                <p>
                  The absolute temperature scale used in scientific applications, starting from absolute zero at 0K
                  (-273.15°C).
                </p>
              </div>
            </div>

            <p>
              Temperature conversion bridges the gap between different measurement systems, enabling seamless
              communication across cultures, professions, and scientific disciplines. Whether you're interpreting
              weather forecasts, following international recipes, or conducting scientific research, accurate
              temperature conversion is essential.
            </p>

            <p>
              Our advanced converter employs precise mathematical formulas: °F = (°C × 9/5) + 32 and K = °C + 273.15,
              ensuring scientific-grade accuracy for all your conversion needs. The tool handles extreme temperatures
              from absolute zero to industrial high-heat applications.
            </p>
          </CardContent>
        </Card>

        {/* Uses Section */}
        <Card className="mb-12 bg-white/80 dark:bg-black/40 backdrop-blur-md border-0 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl text-center bg-gradient-to-r from-sky-600 to-pink-600 bg-clip-text text-transparent">
              <Globe className="inline h-8 w-8 mr-3 text-orange-600" />
              Practical Applications & Uses
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-500" />
                  Professional Applications
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Medical & Healthcare:</strong> Body temperature monitoring, pharmaceutical storage,
                      medical equipment calibration
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Engineering & Manufacturing:</strong> Material testing, quality control, industrial
                      process monitoring
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Scientific Research:</strong> Laboratory experiments, data analysis, international
                      collaboration
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Meteorology:</strong> Weather forecasting, climate studies, atmospheric research
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-500" />
                  Everyday Applications
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Culinary Arts:</strong> Recipe conversion, oven temperature settings, food safety
                      guidelines
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Travel & Tourism:</strong> Understanding local weather, packing decisions, comfort
                      planning
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Education:</strong> Physics problems, chemistry calculations, geography studies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Home & Garden:</strong> HVAC settings, plant care, seasonal preparations
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How to Use Section */}
        <Card className="mb-12 bg-white/80 dark:bg-black/40 backdrop-blur-md border-0 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl text-center bg-gradient-to-r from-orange-600 to-sky-600 bg-clip-text text-transparent">
              <Target className="inline h-8 w-8 mr-3 text-pink-600" />
              How to Use Our Converter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-xl">
                <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Enter Value</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Input your temperature value in the designated field
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/20 dark:to-sky-800/20 rounded-xl">
                <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="font-bold text-sky-700 dark:text-sky-300 mb-2">Select Units</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Choose your source and target temperature scales
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Convert</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Click the convert button for instant results</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Get Results</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  View your precise conversion with scientific accuracy
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <Card className="mb-12 bg-white/80 dark:bg-black/40 backdrop-blur-md border-0 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              <Zap className="inline h-8 w-8 mr-3 text-orange-600" />
              Benefits & Advantages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Lightning Fast</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Instant conversions with real-time calculations and immediate results display
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Precision Accuracy</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Scientific-grade calculations with proper decimal precision and rounding
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Universal Access</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Works on all devices with responsive design and accessibility features
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-pink-500/10 via-sky-500/10 to-orange-500/10 dark:from-pink-900/20 dark:via-sky-900/20 dark:to-orange-900/20 backdrop-blur-md border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-sky-600 to-orange-600 bg-clip-text text-transparent">
                Ready to Start Converting?
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Experience the power of precise temperature conversion with our advanced tool
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-pink-500 via-sky-500 to-orange-500 hover:from-pink-600 hover:via-sky-600 hover:to-orange-600 text-white shadow-2xl text-lg px-8 py-4"
              >
                <Link href="/converter" className="flex items-center gap-3">
                  <Calculator className="h-6 w-6" />
                  Launch Converter
                  <ArrowRight className="h-6 w-6" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center bg-white/70 dark:bg-black/30 backdrop-blur-md rounded-lg p-8 shadow-lg">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              <strong>Disclaimer:</strong> This website is created by
            </p>
            <div className="text-gray-800 dark:text-gray-200 space-y-2">
              <p className="font-semibold text-2xl bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Madhan Kumar K
              </p>
              <p className="text-sm">
                <strong>Email:</strong>{" "}
                <a href="mailto:itskm2004@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  itskm2004@gmail.com
                </a>
              </p>
              <p className="text-sm">
                <strong>Phone:</strong>{" "}
                <a href="tel:8248501659" className="text-blue-600 dark:text-blue-400 hover:underline">
                  8248501659
                </a>
              </p>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
              © 2024 Temperature Converter. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
