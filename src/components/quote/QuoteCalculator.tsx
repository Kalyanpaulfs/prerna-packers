"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, ArrowLeft, MapPin, Building2, Calendar, ShieldCheck, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";

const propertyTypes = ["1 RK", "1 BHK", "2 BHK", "3 BHK", "Villa", "Office", "Warehouse", "Shop", "Factory"];
const extraServices = ["Packing", "Unpacking", "Storage", "Insurance", "Vehicle Transport", "Labour"];

const quoteSchema = z.object({
  pickup: z.string().min(3, "Pickup address is required"),
  destination: z.string().min(3, "Destination address is required"),
  propertyType: z.string().min(1, "Select property type"),
  movingDate: z.string().min(1, "Select moving date"),
  services: z.array(z.string()),
  name: z.string().min(3, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required").optional().or(z.literal("")),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [estimatedPrice, setEstimatedPrice] = useState<{ min: number; max: number } | null>(null);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { services: [] }
  });

  const watchPropertyType = watch("propertyType");
  const watchServices = watch("services");

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 7));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (data: QuoteFormValues) => {
    const basePrice = 5000;
    const propertyMultiplier = data.propertyType.includes("BHK") ? parseInt(data.propertyType) * 2000 : 8000;
    const servicesCost = data.services.length * 1500;
    const total = basePrice + propertyMultiplier + servicesCost;
    
    setEstimatedPrice({ min: total - 2000, max: total + 3000 });
    setStep(7);
    
    try {
      const { db } = await import('@/lib/firebase');
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
      
      await addDoc(collection(db, "leads"), {
        ...data,
        status: "New",
        estimatedMin: total - 2000,
        estimatedMax: total + 3000,
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("Error saving lead:", err);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div variants={formVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-zinc-950">Pickup Location</h2>
              <p className="text-sm text-zinc-500">Where are we starting from?</p>
            </div>
            <div className="space-y-2 relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <MapPin className="text-zinc-400" size={20} />
              </div>
              <input 
                {...register("pickup")}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100 transition-all outline-none"
                placeholder="Enter city, state or pincode"
              />
              {errors.pickup && <p className="text-red-500 text-xs font-medium mt-2">{errors.pickup.message}</p>}
            </div>
            <button type="button" onClick={nextStep} className="w-full bg-zinc-950 text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors">
              Continue <ArrowRight size={18} />
            </button>
          </motion.div>
        );
      case 2:
        return (
          <motion.div variants={formVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-zinc-950">Destination</h2>
              <p className="text-sm text-zinc-500">Where are you moving to?</p>
            </div>
            <div className="space-y-2 relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <MapPin className="text-zinc-400" size={20} />
              </div>
              <input 
                {...register("destination")}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100 transition-all outline-none"
                placeholder="Enter city, state or pincode"
              />
              {errors.destination && <p className="text-red-500 text-xs font-medium mt-2">{errors.destination.message}</p>}
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={prevStep} className="px-6 bg-white border border-zinc-200 text-zinc-700 py-4 rounded-xl font-semibold hover:bg-zinc-50 transition-colors">Back</button>
              <button type="button" onClick={nextStep} className="flex-1 bg-zinc-950 text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors">
                Continue <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div variants={formVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-zinc-950">Property Size</h2>
              <p className="text-sm text-zinc-500">Select the type of property you're moving</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {propertyTypes.map((type) => (
                <div 
                  key={type}
                  onClick={() => setValue("propertyType", type)}
                  className={`p-4 rounded-xl cursor-pointer text-center transition-all border ${watchPropertyType === type ? 'border-zinc-900 bg-zinc-900 text-white font-medium shadow-md' : 'border-zinc-200 bg-white hover:border-zinc-300 text-zinc-600'}`}
                >
                  {type}
                </div>
              ))}
            </div>
            <input type="hidden" {...register("propertyType")} />
            {errors.propertyType && <p className="text-red-500 text-xs font-medium">{errors.propertyType.message}</p>}
            
            <div className="flex gap-3">
              <button type="button" onClick={prevStep} className="px-6 bg-white border border-zinc-200 text-zinc-700 py-4 rounded-xl font-semibold hover:bg-zinc-50 transition-colors">Back</button>
              <button type="button" onClick={nextStep} className="flex-1 bg-zinc-950 text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors">
                Continue <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div variants={formVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-zinc-950">Timeline</h2>
              <p className="text-sm text-zinc-500">When are you planning to move?</p>
            </div>
            <div className="space-y-2">
              <input 
                type="date"
                {...register("movingDate")}
                className="w-full px-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100 transition-all outline-none"
              />
              {errors.movingDate && <p className="text-red-500 text-xs font-medium">{errors.movingDate.message}</p>}
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={prevStep} className="px-6 bg-white border border-zinc-200 text-zinc-700 py-4 rounded-xl font-semibold hover:bg-zinc-50 transition-colors">Back</button>
              <button type="button" onClick={nextStep} className="flex-1 bg-zinc-950 text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors">
                Continue <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div variants={formVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-zinc-950">Add-on Services</h2>
              <p className="text-sm text-zinc-500">Select any additional services you might need</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {extraServices.map((service) => (
                <label 
                  key={service}
                  className={`p-4 border rounded-xl cursor-pointer flex items-center gap-3 transition-all ${watchServices?.includes(service) ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-200 hover:border-zinc-300 bg-white'}`}
                >
                  <input 
                    type="checkbox" 
                    value={service} 
                    {...register("services")}
                    className="w-5 h-5 accent-zinc-900 cursor-pointer"
                  />
                  <span className={watchServices?.includes(service) ? "font-semibold text-zinc-900" : "text-zinc-600 font-medium"}>{service}</span>
                </label>
              ))}
            </div>
            
            <div className="flex gap-3">
              <button type="button" onClick={prevStep} className="px-6 bg-white border border-zinc-200 text-zinc-700 py-4 rounded-xl font-semibold hover:bg-zinc-50 transition-colors">Back</button>
              <button type="button" onClick={nextStep} className="flex-1 bg-zinc-950 text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2 hover:bg-zinc-800 transition-colors">
                Continue <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        );
      case 6:
        return (
          <motion.div variants={formVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-zinc-950">Final Details</h2>
              <p className="text-sm text-zinc-500">Where should we send your estimate?</p>
            </div>
            <div className="space-y-4">
              <div>
                <input 
                  {...register("name")}
                  className="w-full px-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100 transition-all outline-none"
                  placeholder="Full Name"
                />
                {errors.name && <p className="text-red-500 text-xs font-medium mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <input 
                  {...register("phone")}
                  className="w-full px-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100 transition-all outline-none"
                  placeholder="Phone Number"
                />
                {errors.phone && <p className="text-red-500 text-xs font-medium mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <input 
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100 transition-all outline-none"
                  placeholder="Email Address (Optional)"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={prevStep} className="px-6 bg-white border border-zinc-200 text-zinc-700 py-4 rounded-xl font-semibold hover:bg-zinc-50 transition-colors">Back</button>
              <button type="submit" className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all">
                Generate Estimate <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        );
      case 7:
        return (
          <motion.div variants={formVariants} initial="hidden" animate="visible" className="text-center space-y-6 py-10">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="w-20 h-20 bg-zinc-950 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-zinc-200"
            >
              <CheckCircle2 size={40} />
            </motion.div>
            <h2 className="text-3xl font-bold text-zinc-950 tracking-tight">Quote Generated</h2>
            <p className="text-zinc-500 max-w-sm mx-auto">
              Based on your precise requirements, your estimated moving cost is:
            </p>
            <div className="text-4xl md:text-5xl font-bold text-zinc-950 py-4 tracking-tighter">
              ₹{estimatedPrice?.min.toLocaleString('en-IN')} - ₹{estimatedPrice?.max.toLocaleString('en-IN')}
            </div>
            <p className="text-xs text-zinc-400 font-medium">
              * Subject to final survey. We will contact you shortly.
            </p>
            <button type="button" onClick={() => window.location.href='/'} className="w-full bg-zinc-100 text-zinc-900 py-4 rounded-xl font-semibold mt-8 hover:bg-zinc-200 transition-colors">
              Return Home
            </button>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100 max-w-xl mx-auto w-full relative overflow-hidden">
      {/* Progress Indicator */}
      {step < 7 && (
        <div className="absolute top-0 left-0 w-full h-1 bg-zinc-50">
          <motion.div 
            className="h-full bg-zinc-900"
            initial={{ width: 0 }}
            animate={{ width: `${(step / 6) * 100}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
      )}
      
      <div className={step < 7 ? "pt-4" : ""}>
        {step < 7 && (
          <div className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-8">
            Step {step} of 6
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            {renderStepContent()}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}
