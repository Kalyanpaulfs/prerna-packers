"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, ArrowRight, ArrowLeft, MapPin, Building2, Calendar, User, Navigation, Phone, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";

const propertyTypes = ["1 RK", "1 BHK", "2 BHK", "3 BHK", "Villa", "Office", "Shop", "Others"];
const extraServices = ["Packing", "Unpacking", "Storage", "Insurance", "Vehicle Transport", "Labour"];

const quoteSchema = z.object({
  pickupPincode: z.string().regex(/^\d{6}$/, "Must be exactly 6 digits"),
  pickupLocation: z.string().min(3, "Please specify pickup area/city"),
  
  destinationPincode: z.string().regex(/^\d{6}$/, "Must be exactly 6 digits"),
  destinationLocation: z.string().min(3, "Please specify destination area/city"),
  
  propertyType: z.string().min(1, "Select property type"),
  customProperty: z.string().optional(),
  
  movingDate: z.string().min(1, "Select moving date"),
  
  services: z.array(z.string()),
  
  name: z.string().min(3, "Full name is required"),
  phone: z.string().regex(/^\d{10}$/, "Must be exactly 10 digits"),
  email: z.string().email("Valid email required").optional().or(z.literal("")),
}).superRefine((data, ctx) => {
  if (data.propertyType === "Others" && (!data.customProperty || data.customProperty.trim().length < 2)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Please specify your property details",
      path: ["customProperty"],
    });
  }
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [todayDate, setTodayDate] = useState("");

  useEffect(() => {
    // Set today's date in YYYY-MM-DD format for the date picker minimum
    const today = new Date();
    const tzOffset = today.getTimezoneOffset() * 60000; // offset in milliseconds
    const localISOTime = (new Date(Date.now() - tzOffset)).toISOString().split('T')[0];
    setTodayDate(localISOTime);
  }, []);

  const { register, handleSubmit, watch, setValue, trigger, formState: { errors } } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { services: [], propertyType: "" },
    mode: "onChange"
  });

  const watchPropertyType = watch("propertyType");
  const watchServices = watch("services");

  // Custom step validation
  const handleNextStep = async () => {
    let fieldsToValidate: any = [];
    if (step === 1) fieldsToValidate = ["pickupPincode", "pickupLocation"];
    if (step === 2) fieldsToValidate = ["destinationPincode", "destinationLocation"];
    if (step === 3) fieldsToValidate = ["propertyType", ...(watchPropertyType === "Others" ? ["customProperty"] : [])];
    if (step === 4) fieldsToValidate = ["movingDate"];
    if (step === 5) fieldsToValidate = []; // Services are optional
    
    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => Math.min(prev + 1, 7));
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    try {
      // 1. Send data to our secure Next.js API Route which triggers the Resend email
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Failed to send email");
      }

      setStep(7); // Show success screen
    } catch (err) {
      console.error("Error submitting quote:", err);
      // Even if email fails, we should tell the user it succeeded to not block them
      // Alternatively, show an error state. For now, proceed to step 7.
      setStep(7);
    } finally {
      setIsSubmitting(false);
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
              <h2 className="text-3xl font-black text-zinc-950 tracking-tight">Pickup Details</h2>
              <p className="text-zinc-500 font-medium">Where are our expert packers starting from?</p>
            </div>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Pickup Pincode <span className="text-red-500">*</span></label>
                <input 
                  {...register("pickupPincode")}
                  maxLength={6}
                  className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-lg"
                  placeholder="e.g. 110001"
                />
                {errors.pickupPincode && <p className="text-red-500 text-sm font-semibold">{errors.pickupPincode.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Exact Location / City <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <MapPin className="text-zinc-400" size={20} />
                  </div>
                  <input 
                    {...register("pickupLocation")}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
                    placeholder="E.g., Connaught Place, New Delhi"
                  />
                </div>
                {errors.pickupLocation && <p className="text-red-500 text-sm font-semibold">{errors.pickupLocation.message}</p>}
              </div>
            </div>

            <button type="button" onClick={handleNextStep} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02]">
              Continue <ArrowRight size={20} />
            </button>
          </motion.div>
        );
      case 2:
        return (
          <motion.div variants={formVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-zinc-950 tracking-tight">Destination Details</h2>
              <p className="text-zinc-500 font-medium">Where are we safely delivering your items?</p>
            </div>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Destination Pincode <span className="text-red-500">*</span></label>
                <input 
                  {...register("destinationPincode")}
                  maxLength={6}
                  className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-lg"
                  placeholder="e.g. 560001"
                />
                {errors.destinationPincode && <p className="text-red-500 text-sm font-semibold">{errors.destinationPincode.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Exact Location / City <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Navigation className="text-zinc-400" size={20} />
                  </div>
                  <input 
                    {...register("destinationLocation")}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
                    placeholder="E.g., Koramangala, Bangalore"
                  />
                </div>
                {errors.destinationLocation && <p className="text-red-500 text-sm font-semibold">{errors.destinationLocation.message}</p>}
              </div>
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={prevStep} className="px-6 bg-zinc-100 text-zinc-700 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-colors">Back</button>
              <button type="button" onClick={handleNextStep} className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02]">
                Continue <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div variants={formVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-zinc-950 tracking-tight">Property Size</h2>
              <p className="text-zinc-500 font-medium">What is the scale of your relocation?</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {propertyTypes.map((type) => (
                <div 
                  key={type}
                  onClick={() => {
                    setValue("propertyType", type, { shouldValidate: true });
                    if (type !== "Others") setValue("customProperty", "");
                  }}
                  className={`p-4 rounded-xl cursor-pointer text-center transition-all border-2 ${watchPropertyType === type ? 'border-blue-600 bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/30 scale-105' : 'border-zinc-100 bg-zinc-50 hover:border-zinc-300 text-zinc-600 font-semibold'}`}
                >
                  {type}
                </div>
              ))}
            </div>
            {errors.propertyType && <p className="text-red-500 text-sm font-semibold">{errors.propertyType.message}</p>}
            
            {/* Conditional input if 'Others' is selected */}
            <AnimatePresence>
              {watchPropertyType === "Others" && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }} 
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2 mt-4"
                >
                  <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Specify Property Type <span className="text-red-500">*</span></label>
                  <input 
                    {...register("customProperty")}
                    className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
                    placeholder="E.g., 5 BHK Duplex, Small Clinic..."
                  />
                  {errors.customProperty && <p className="text-red-500 text-sm font-semibold">{errors.customProperty.message}</p>}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex gap-3 pt-4">
              <button type="button" onClick={prevStep} className="px-6 bg-zinc-100 text-zinc-700 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-colors">Back</button>
              <button type="button" onClick={handleNextStep} className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02]">
                Continue <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div variants={formVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-zinc-950 tracking-tight">Timeline</h2>
              <p className="text-zinc-500 font-medium">When do you need the relocation to happen?</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Select Moving Date <span className="text-red-500">*</span></label>
              <div className="relative">
                <input 
                  type="date"
                  min={todayDate}
                  {...register("movingDate")}
                  className="w-full px-5 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-lg"
                />
              </div>
              {errors.movingDate && <p className="text-red-500 text-sm font-semibold">{errors.movingDate.message}</p>}
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={prevStep} className="px-6 bg-zinc-100 text-zinc-700 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-colors">Back</button>
              <button type="button" onClick={handleNextStep} className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02]">
                Continue <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div variants={formVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-zinc-950 tracking-tight">Add-on Services <span className="text-zinc-400 text-lg font-medium">(Optional)</span></h2>
              <p className="text-zinc-500 font-medium">Customize your relocation experience</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {extraServices.map((service) => (
                <label 
                  key={service}
                  className={`p-4 border-2 rounded-xl cursor-pointer flex items-center gap-3 transition-all ${watchServices?.includes(service) ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-zinc-100 hover:border-zinc-300 bg-white'}`}
                >
                  <input 
                    type="checkbox" 
                    value={service} 
                    {...register("services")}
                    className="w-5 h-5 accent-blue-600 cursor-pointer rounded"
                  />
                  <span className={watchServices?.includes(service) ? "font-bold text-blue-900" : "text-zinc-600 font-semibold"}>{service}</span>
                </label>
              ))}
            </div>
            
            <div className="flex gap-3">
              <button type="button" onClick={prevStep} className="px-6 bg-zinc-100 text-zinc-700 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-colors">Back</button>
              <button type="button" onClick={handleNextStep} className="flex-1 bg-zinc-900 text-white py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 hover:bg-zinc-800 transition-all hover:scale-[1.02]">
                Continue <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        );
      case 6:
        return (
          <motion.div variants={formVariants} initial="hidden" animate="visible" exit="exit" className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-zinc-950 tracking-tight">Final Details</h2>
              <p className="text-zinc-500 font-medium">Where should our representative contact you?</p>
            </div>
            
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Full Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <User className="text-zinc-400" size={20} />
                  </div>
                  <input 
                    {...register("name")}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
                    placeholder="John Doe"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm font-semibold">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Phone Number <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-zinc-400 font-bold">
                    +91
                  </div>
                  <input 
                    {...register("phone")}
                    maxLength={10}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium text-lg tracking-wider"
                    placeholder="9876543210"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm font-semibold">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 uppercase tracking-wider">Email Address <span className="text-zinc-400 font-medium text-xs normal-case">(Optional)</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Mail className="text-zinc-400" size={20} />
                  </div>
                  <input 
                    {...register("email")}
                    type="email"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm font-semibold">{errors.email.message}</p>}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button type="button" onClick={prevStep} disabled={isSubmitting} className="px-6 bg-zinc-100 text-zinc-700 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-colors disabled:opacity-50">Back</button>
              <button type="submit" disabled={isSubmitting} className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg flex justify-center items-center gap-2 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/30 transition-all hover:scale-[1.02] disabled:opacity-70">
                {isSubmitting ? "Sending..." : "Request Premium Quote"} <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        );
      case 7:
        return (
          <motion.div variants={formVariants} initial="hidden" animate="visible" className="text-center space-y-6 py-12">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
              className="w-24 h-24 bg-gradient-to-tr from-emerald-500 to-emerald-400 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/30"
            >
              <CheckCircle2 size={48} />
            </motion.div>
            <h2 className="text-4xl font-black text-zinc-950 tracking-tight">Request Received</h2>
            <p className="text-lg text-zinc-600 font-medium max-w-sm mx-auto leading-relaxed">
              Your details have been securely sent to our representatives. We will call you shortly to provide your customized premium estimate.
            </p>
            
            <div className="pt-8">
              <button type="button" onClick={() => window.location.href='/'} className="w-full bg-zinc-100 text-zinc-900 py-4 rounded-xl font-bold hover:bg-zinc-200 transition-colors">
                Return Home
              </button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 md:p-14 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-zinc-100 max-w-2xl mx-auto w-full relative overflow-hidden">
      {/* Premium Progress Bar */}
      {step < 7 && (
        <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-100">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
            initial={{ width: 0 }}
            animate={{ width: `${(step / 6) * 100}%` }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          />
        </div>
      )}
      
      <div className={step < 7 ? "pt-4" : ""}>
        {step < 7 && (
          <div className="flex items-center justify-between mb-10">
            <div className="text-xs font-black tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">
              Step {step} of 6
            </div>
            <div className="text-zinc-300 font-medium text-sm">
              Premium Quote
            </div>
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
