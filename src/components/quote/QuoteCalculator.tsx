"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, ArrowLeft, MapPin, Building2, Calendar, ShieldCheck, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const propertyTypes = ["1 RK", "1 BHK", "2 BHK", "3 BHK", "Villa", "Office", "Warehouse", "Shop", "Factory"];
const extraServices = ["Packing", "Unpacking", "Storage", "Insurance", "Vehicle Transport", "Labour"];

// Form Schema
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
    defaultValues: {
      services: [],
    }
  });

  const watchPropertyType = watch("propertyType");
  const watchServices = watch("services");

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 7));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (data: QuoteFormValues) => {
    // Generate mock price
    const basePrice = 5000;
    const propertyMultiplier = data.propertyType.includes("BHK") ? parseInt(data.propertyType) * 2000 : 8000;
    const servicesCost = data.services.length * 1500;
    const total = basePrice + propertyMultiplier + servicesCost;
    
    setEstimatedPrice({ min: total - 2000, max: total + 3000 });
    setStep(7); // Final step
    
    // Save to Firebase
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
      console.log("Lead Saved to Firebase!");
    } catch (err) {
      console.error("Error saving lead:", err);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-blue-950 flex items-center gap-2 mb-6">
              <MapPin className="text-orange-500" /> Pickup Location
            </h2>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Where are you moving from?</label>
              <input 
                {...register("pickup")}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Enter city, state or pincode"
              />
              {errors.pickup && <p className="text-red-500 text-sm mt-1">{errors.pickup.message}</p>}
            </div>
            <button type="button" onClick={nextStep} className="w-full bg-blue-950 text-white py-4 rounded-xl font-bold mt-8 flex justify-center items-center gap-2 hover:bg-blue-900 transition-colors">
              Continue <ArrowRight size={20} />
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-blue-950 flex items-center gap-2 mb-6">
              <MapPin className="text-orange-500" /> Destination
            </h2>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Where are you moving to?</label>
              <input 
                {...register("destination")}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Enter city, state or pincode"
              />
              {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>}
            </div>
            <div className="flex gap-4 mt-8">
              <button type="button" onClick={prevStep} className="flex-1 bg-slate-100 text-slate-700 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors">Back</button>
              <button type="button" onClick={nextStep} className="flex-[2] bg-blue-950 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-blue-900 transition-colors">
                Continue <ArrowRight size={20} />
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-blue-950 flex items-center gap-2 mb-6">
              <Building2 className="text-orange-500" /> Property Type
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {propertyTypes.map((type) => (
                <div 
                  key={type}
                  onClick={() => setValue("propertyType", type)}
                  className={`p-4 border rounded-xl cursor-pointer text-center transition-all ${watchPropertyType === type ? 'border-orange-500 bg-orange-50 text-orange-700 font-bold' : 'border-slate-200 hover:border-blue-300 text-slate-600'}`}
                >
                  {type}
                </div>
              ))}
            </div>
            <input type="hidden" {...register("propertyType")} />
            {errors.propertyType && <p className="text-red-500 text-sm mt-1">{errors.propertyType.message}</p>}
            
            <div className="flex gap-4 mt-8">
              <button type="button" onClick={prevStep} className="flex-1 bg-slate-100 text-slate-700 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors">Back</button>
              <button type="button" onClick={nextStep} className="flex-[2] bg-blue-950 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-blue-900 transition-colors">
                Continue <ArrowRight size={20} />
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-blue-950 flex items-center gap-2 mb-6">
              <Calendar className="text-orange-500" /> Moving Date
            </h2>
            <div className="space-y-2">
              <input 
                type="date"
                {...register("movingDate")}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all"
              />
              {errors.movingDate && <p className="text-red-500 text-sm mt-1">{errors.movingDate.message}</p>}
            </div>
            <div className="flex gap-4 mt-8">
              <button type="button" onClick={prevStep} className="flex-1 bg-slate-100 text-slate-700 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors">Back</button>
              <button type="button" onClick={nextStep} className="flex-[2] bg-blue-950 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-blue-900 transition-colors">
                Continue <ArrowRight size={20} />
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-blue-950 flex items-center gap-2 mb-6">
              <ShieldCheck className="text-orange-500" /> Extra Services
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {extraServices.map((service) => (
                <label 
                  key={service}
                  className={`p-4 border rounded-xl cursor-pointer flex items-center gap-3 transition-all ${watchServices?.includes(service) ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-blue-200'}`}
                >
                  <input 
                    type="checkbox" 
                    value={service} 
                    {...register("services")}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className={watchServices?.includes(service) ? "font-semibold text-blue-900" : "text-slate-600"}>{service}</span>
                </label>
              ))}
            </div>
            
            <div className="flex gap-4 mt-8">
              <button type="button" onClick={prevStep} className="flex-1 bg-slate-100 text-slate-700 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors">Back</button>
              <button type="button" onClick={nextStep} className="flex-[2] bg-blue-950 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-blue-900 transition-colors">
                Continue <ArrowRight size={20} />
              </button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-blue-950 flex items-center gap-2 mb-6">
              <User className="text-orange-500" /> Your Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">Full Name</label>
                <input 
                  {...register("name")}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">Phone / WhatsApp</label>
                <input 
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">Email (Optional)</label>
                <input 
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <button type="button" onClick={prevStep} className="flex-1 bg-slate-100 text-slate-700 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors">Back</button>
              <button type="submit" className="flex-[2] bg-orange-500 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-orange-600 shadow-lg shadow-orange-500/30 transition-all">
                Get Estimate <ArrowRight size={20} />
              </button>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="text-center space-y-6 animate-in zoom-in-95 duration-500 py-8">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="text-3xl font-bold text-blue-950">Quote Generated!</h2>
            <p className="text-slate-600 max-w-md mx-auto">
              Based on your requirements, the estimated cost for your relocation is:
            </p>
            <div className="text-4xl md:text-5xl font-extrabold text-orange-500 py-6">
              ₹{estimatedPrice?.min.toLocaleString('en-IN')} - ₹{estimatedPrice?.max.toLocaleString('en-IN')}
            </div>
            <p className="text-sm text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100">
              * This is a preliminary estimate. Our team will contact you shortly to conduct a free survey and provide the final exact quote.
            </p>
            <button type="button" onClick={() => window.location.href='/'} className="w-full bg-blue-950 text-white py-4 rounded-xl font-bold mt-4 hover:bg-blue-900 transition-colors">
              Return Home
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-slate-100 max-w-2xl mx-auto w-full relative overflow-hidden">
      {/* Progress Bar */}
      {step < 7 && (
        <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
          <div 
            className="h-full bg-orange-500 transition-all duration-500 ease-out"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>
      )}
      
      <div className={step < 7 ? "pt-4" : ""}>
        {step < 7 && (
          <div className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-8">
            Step {step} of 6
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          {renderStepContent()}
        </form>
      </div>
    </div>
  );
}
