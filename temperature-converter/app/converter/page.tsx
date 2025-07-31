"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Thermometer, ArrowRightLeft, Calculator, Zap, History, RotateCcw } from "lucide-react"

interface ConversionHistory {
  id: string
  input: string
  fromUnit: string
  toUnit: string
  result: string
  timestamp: Date
}

export default function ConverterPage() {
  const [inputValue, setInputValue] = useState("")
  const [fromUnit, setFromUnit] = useState("celsius")
  const [toUnit, setToUnit] = useState("fahrenheit")
  const [result, setResult] = useState("")
  const [history, setHistory] = useState<ConversionHistory[]>([])

  const convertTemperature = () => {
    const value = Number.parseFloat(inputValue)
    if (isNaN(value)) {
      setResult("Please enter a valid number")
      return
    }

    let celsius = value

    // Convert input to Celsius first
    if (fromUnit === "fahrenheit") {
      celsius = ((value - 32) * 5) / 9
    } else if (fromUnit === "kelvin") {
      celsius = value - 273.15
    }

    // Convert from Celsius to target unit
    let convertedValue = celsius
    if (toUnit === "fahrenheit") {
      convertedValue = (celsius * 9) / 5 + 32
    } else if (toUnit === "kelvin") {
      convertedValue = celsius + 273.15
    }

    const resultText = `${convertedValue.toFixed(2)}° ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`
    setResult(resultText)

    // Add to history
    const newEntry: ConversionHistory = {
      id: Date.now().toString(),
      input: `${value}° ${fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)}`,
      fromUnit,
      toUnit,
      result: resultText,
      timestamp: new Date(),
    }
    setHistory((prev) => [newEntry, ...prev.slice(0, 4)]) // Keep only last 5 entries
  }

  const swapUnits = () => {
    setFromUnit(toUnit)
    setToUnit(fromUnit)
    setResult("")
  }

  const clearAll = () => {
    setInputValue("")
    setResult("")
    setHistory([])
  }

  const getUnitSymbol = (unit: string) => {
    switch (unit) {
      case "celsius":
        return "°C"
      case "fahrenheit":
        return "°F"
      case "kelvin":
        return "K"
      default:
        return ""
    }
  }

  const getUnitColor = (unit: string) => {
    switch (unit) {
      case "celsius":
        return "from-sky-500 to-blue-500"
      case "fahrenheit":
        return "from-orange-500 to-red-500"
      case "kelvin":
        return "from-purple-500 to-indigo-500"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Calculator className="h-12 w-12 text-sky-600 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-ping" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-sky-600 to-orange-600 bg-clip-text text-transparent">
              Temperature Converter
            </h1>
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Convert temperatures with scientific precision and instant results
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Converter */}
          <div className="lg:col-span-2">
            <Card className="bg-white/90 dark:bg-black/50 backdrop-blur-md border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-800 dark:text-gray-200 flex items-center justify-center gap-2">
                  <Thermometer className="h-6 w-6 text-orange-500" />
                  Convert Temperature
                </CardTitle>
                <CardDescription className="text-center text-gray-600 dark:text-gray-400">
                  Enter a temperature value and select the units to convert
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Input Section */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="temperature" className="text-lg font-semibold">
                      Temperature Value
                    </Label>
                    <Input
                      id="temperature"
                      type="number"
                      placeholder="Enter temperature"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      className="text-2xl h-14 text-center bg-white/50 dark:bg-black/30 backdrop-blur-sm border-2 focus:border-sky-400"
                    />
                  </div>

                  {/* Unit Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="text-lg font-semibold">From</Label>
                      <Select value={fromUnit} onValueChange={setFromUnit}>
                        <SelectTrigger
                          className={`h-12 bg-gradient-to-r ${getUnitColor(fromUnit)} text-white border-0`}
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="celsius">Celsius (°C)</SelectItem>
                          <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
                          <SelectItem value="kelvin">Kelvin (K)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-lg font-semibold">To</Label>
                      <Select value={toUnit} onValueChange={setToUnit}>
                        <SelectTrigger className={`h-12 bg-gradient-to-r ${getUnitColor(toUnit)} text-white border-0`}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="celsius">Celsius (°C)</SelectItem>
                          <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
                          <SelectItem value="kelvin">Kelvin (K)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    onClick={convertTemperature}
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 via-sky-500 to-orange-500 hover:from-pink-600 hover:via-sky-600 hover:to-orange-600 text-white shadow-lg px-8"
                  >
                    <Zap className="h-5 w-5 mr-2" />
                    Convert
                  </Button>
                  <Button
                    onClick={swapUnits}
                    variant="outline"
                    size="lg"
                    className="border-2 border-sky-300 hover:bg-sky-50 dark:hover:bg-sky-900/20 bg-transparent backdrop-blur-sm"
                  >
                    <ArrowRightLeft className="h-5 w-5 mr-2" />
                    Swap Units
                  </Button>
                  <Button
                    onClick={clearAll}
                    variant="outline"
                    size="lg"
                    className="border-2 border-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 bg-transparent backdrop-blur-sm"
                  >
                    <RotateCcw className="h-5 w-5 mr-2" />
                    Clear All
                  </Button>
                </div>

                {/* Result Display */}
                {result && (
                  <div className="text-center p-8 bg-gradient-to-r from-pink-50/80 via-sky-50/80 to-orange-50/80 dark:from-pink-900/20 dark:via-sky-900/20 dark:to-orange-900/20 rounded-xl border-2 border-gradient-to-r backdrop-blur-sm">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Conversion Result:</p>
                    <p className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-sky-600 to-orange-600 bg-clip-text text-transparent">
                      {result}
                    </p>
                    <div className="flex justify-center gap-2 mt-4">
                      <Badge variant="secondary" className="bg-white/50 dark:bg-black/30">
                        {inputValue} {getUnitSymbol(fromUnit)}
                      </Badge>
                      <ArrowRightLeft className="h-4 w-4 text-gray-500 mt-1" />
                      <Badge variant="secondary" className="bg-white/50 dark:bg-black/30">
                        {result}
                      </Badge>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* History & Quick Reference */}
          <div className="space-y-6">
            {/* Conversion History */}
            <Card className="bg-white/90 dark:bg-black/50 backdrop-blur-md border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <History className="h-5 w-5 text-purple-500" />
                  Recent Conversions
                </CardTitle>
              </CardHeader>
              <CardContent>
                {history.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 text-center py-4">No conversions yet</p>
                ) : (
                  <div className="space-y-3">
                    {history.map((entry) => (
                      <div
                        key={entry.id}
                        className="p-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg"
                      >
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <span className="font-semibold">{entry.input}</span>
                            <ArrowRightLeft className="inline h-3 w-3 mx-2 text-gray-500" />
                            <span className="font-semibold text-blue-600 dark:text-blue-400">{entry.result}</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {entry.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Reference */}
            <Card className="bg-white/90 dark:bg-black/50 backdrop-blur-md border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-xl">Quick Reference</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 rounded-lg">
                    <h4 className="font-semibold text-sky-700 dark:text-sky-300">Water Freezing</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">0°C = 32°F = 273.15K</p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg">
                    <h4 className="font-semibold text-orange-700 dark:text-orange-300">Water Boiling</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">100°C = 212°F = 373.15K</p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                    <h4 className="font-semibold text-green-700 dark:text-green-300">Body Temperature</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">37°C = 98.6°F = 310.15K</p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg">
                    <h4 className="font-semibold text-purple-700 dark:text-purple-300">Absolute Zero</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">-273.15°C = -459.67°F = 0K</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
