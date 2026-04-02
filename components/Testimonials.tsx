"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { FadeIn } from "@/components/FadeIn";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Example Inc.",
    avatar: "/images/avatars/avatar-1.png",
    rating: 5,
    text: "Working with this developer was a game-changer. Their expertise in modern web technologies and commitment to quality resulted in a product that exceeded our expectations. I can't recommend them enough.",
  },
  {
    name: "Jane Smith",
    role: "CTO, Tech Solutions",
    avatar: "/images/avatars/avatar-2.png",
    rating: 5,
    text: "The attention to detail and the ability to translate complex requirements into a seamless user experience is outstanding. A true professional and a pleasure to work with.",
  },
  {
    name: "Samuel Green",
    role: "Project Manager, Innovate Co.",
    avatar: "/images/avatars/avatar-3.png",
    rating: 5,
    text: "From start to finish, the project was handled with exceptional skill and clear communication. The final product was delivered on time and was of the highest quality. I look forward to our next collaboration.",
  },
];

export function Testimonials() {
  return (
    <section className="section-gap" id="testimonials">
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow="Testimonials"
            title="What my clients are saying"
            description="I've had the pleasure of working with some amazing people. Here's what they have to say about my work."
            centered
          />
        </FadeIn>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="panel h-full p-8">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold" style={{ color: "var(--foreground)" }}>{testimonial.name}</h4>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                  "{testimonial.text}"
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
