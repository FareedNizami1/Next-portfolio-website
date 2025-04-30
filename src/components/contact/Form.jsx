'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "FareedNizami",
      from_name: data.fullName,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };

  const sendEmail = (templateParams) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => toast.success('Message sent successfully!'),
        () => toast.error('Failed to send message. Please try again.')
      );
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0,}}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="backdrop-blur-md bg-white/3 p-8 rounded-2xl shadow-xl max-w-lg w-full mx-auto border border-cyan-500/30"

    >

      <div className="space-y-5">
        <motion.div
          whileFocus={{ scale: 1.1 }}
          className="flex flex-col"
        >
          <input
            type="text"
            placeholder="Full Name"
            {...register('fullName', { required: 'Full Name is required' })}
            className="bg-[#121212] border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
          />
          {errors.fullName && <span className="text-red-500 text-sm mt-1">{errors.fullName.message}</span>}
        </motion.div>

        <motion.div
          whileFocus={{ scale: 1.05 }}
          className="flex flex-col"
        >
          <input
            type="email"
            placeholder="Email"
            {...register('email', { required: 'Email is required' })}
            className="bg-[#121212] border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition"
          />
          {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
        </motion.div>

        <motion.div
          whileFocus={{ scale: 1.05 }}
          className="flex flex-col"
        >
          <textarea
            placeholder="Message (min 50 characters)"
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 50,
                message: 'Message must be at least 50 characters',
              },
            })}
            rows={5}
            className="bg-[#121212] border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-cyan-400 transition"
          />
          {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl transition"
        >
          Send Message
        </motion.button>
      </div>
    </motion.form>
  );
}
