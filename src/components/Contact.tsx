"use client";

import { m } from "framer-motion";
import { toast, Toaster } from "sonner";
import { useState } from "react";

import { CONTACT_INFO } from "@/data/contact";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { cn } from "@/lib/utils";
import { contactApi } from "@/app/api/Contact";

const inputClass =
  "w-full rounded-2xl border border-border bg-foreground/5 px-4 py-3.5 text-sm text-foreground outline-none transition-all placeholder:text-foreground/35 focus:border-[color-mix(in_oklab,var(--accent-secondary)_45%,transparent)] focus:bg-foreground/[0.07] focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--accent-secondary)_18%,transparent)]";

export function Contact() {

  const [loading, setLoading] = useState(false);

  const [sent, setSent] = useState(false);

  const [lastSubmit, setLastSubmit] = useState(0);

  const [form, setForm] = useState({

    name: "",

    email: "",

    phone: "",

    message: "",
  });

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    const now = Date.now();

    // SPAM PREVENT

    if (now - lastSubmit < 5000) {

      toast.warning(
        "Please wait before sending again"
      );

      return;
    }

    if (loading) return;

    setLoading(true);

    setLastSubmit(now);

    try {

      // VALIDATION

      if (
        !form.name ||
        !form.email ||
        !form.phone ||
        !form.message
      ) {

        toast.error(
          "All fields are required"
        );

        return;
      }

      if (!form.email.includes("@")) {

        toast.error(
          "Enter a valid email"
        );

        return;
      }

      // API

      const sendData = await contactApi({

        name: form.name,

        email: form.email,

        phone: form.phone,

        message: form.message,
      });

      if (sendData) {

        toast.success(
          "Message Sent!",
          {
            description:
              "We’ll get back to you soon.",

            duration: 4000,
          }
        );

        // RESET

        setForm({

          name: "",

          email: "",

          phone: "",

          message: "",
        });

        setSent(true);

        setTimeout(
          () => setSent(false),
          3000
        );

      } else {

        toast.error(
          sendData?.message ||
          "Something went wrong"
        );
      }

    } catch {

      toast.error(
        "Failed to send message"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative border-t border-border py-20 sm:py-24 lg:py-28">

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

            {/* LEFT SIDE */}

            <SectionReveal>

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-bright/90">
                Contact
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
                Let’s build something amazing
              </h2>

              <p className="mt-4 text-base text-foreground/55">
                Share your idea and we’ll respond with a plan.
              </p>

              <div className="mt-10 space-y-4 text-sm">

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="block rounded-2xl border border-border px-4 py-3"
                >
                  {CONTACT_INFO.email}
                </a>

                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="block rounded-2xl border border-border px-4 py-3"
                >
                  {CONTACT_INFO.phone}
                </a>

              </div>

            </SectionReveal>

            {/* FORM */}

            <m.form
              onSubmit={onSubmit}

              className={cn(
                "glass-strong rounded-3xl p-6 sm:p-8 space-y-5",

                loading &&
                "pointer-events-none opacity-80"
              )}
            >

              {/* NAME */}

              <input
                required

                type="text"

                placeholder="Your name"

                value={form.name}

                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }

                className={inputClass}
              />

              {/* EMAIL */}

              <input
                required

                type="email"

                placeholder="Your email"

                value={form.email}

                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }

                className={inputClass}
              />

              {/* PHONE */}

              <input
                required

                type="tel"

                placeholder="Your phone number"

                value={form.phone}

                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }

                className={inputClass}
              />

              {/* MESSAGE */}

              <textarea
                required

                rows={5}

                placeholder="Your message..."

                value={form.message}

                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }

                className={inputClass}
              />

              {/* BUTTON */}

              <m.button
                type="submit"

                disabled={loading}

                className={cn(

                  "w-full rounded-2xl py-3.5 text-sm font-semibold text-white transition-all duration-300",

                  sent &&
                  "bg-gradient-to-r from-sky-500 to-cyan-400 shadow-[0_0_30px_rgba(14,165,233,0.6)]",

                  loading &&
                  "bg-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.4)] cursor-not-allowed",

                  !loading &&
                  !sent &&
                  "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 shadow-[0_0_28px_rgba(168,85,247,0.35)] hover:scale-[1.02]"
                )}

                whileTap={{
                  scale: 0.96,
                }}
              >

                {sent
                  ? "Message Sent ✓"
                  : loading
                  ? "Sending..."
                  : "Send Message"}

              </m.button>

            </m.form>

          </div>

        </div>

      </section>

      <Toaster
        position="bottom-center"
        richColors
      />
    </>
  );
}