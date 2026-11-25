import { useState } from "react";
import Layout from "@/components/Layout";
import { Upload, Send } from "lucide-react";
import { useLang, type Lang } from "@/i18n";

const T: Record<
  Lang,
  {
    headingLead: string;
    headingAccent: string;
    intro: string;
    thankYou: string;
    successMessage: string;
    nameLabel: string;
    namePlaceholder: string;
    photoLabel: string;
    photoPrompt: string;
    descriptionLabel: string;
    descriptionPlaceholder: string;
    submitButton: string;
  }
> = {
  en: {
    headingLead: "Submit",
    headingAccent: "Information",
    intro: "Fill in the form below to submit information about a martyr or an event.",
    thankYou: "Thank you!",
    successMessage: "Your information has been submitted successfully.",
    nameLabel: "Name",
    namePlaceholder: "Name of the martyr or witness",
    photoLabel: "Photo",
    photoPrompt: "Click to upload a photo",
    descriptionLabel: "Description",
    descriptionPlaceholder: "Write a detailed description of the event...",
    submitButton: "Submit",
  },
  bn: {
    headingLead: "তথ্য",
    headingAccent: "জমা দিন",
    intro: "শহীদ বা ঘটনা সম্পর্কে তথ্য জমা দিতে নিচের ফর্মটি পূরণ করুন।",
    thankYou: "ধন্যবাদ!",
    successMessage: "আপনার তথ্য সফলভাবে জমা হয়েছে।",
    nameLabel: "নাম",
    namePlaceholder: "শহীদ বা সাক্ষীর নাম",
    photoLabel: "ছবি",
    photoPrompt: "ছবি আপলোড করতে ক্লিক করুন",
    descriptionLabel: "বিবরণ",
    descriptionPlaceholder: "ঘটনার বিস্তারিত বিবরণ লিখুন...",
    submitButton: "জমা দিন",
  },
};

const Submit = () => {
  const [submitted, setSubmitted] = useState(false);
  const { lang } = useLang();
  const t = T[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="page-container max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            {t.headingLead} <span className="text-primary text-glow-green">{t.headingAccent}</span>
          </h1>
          <p className="text-muted-foreground mb-10">{t.intro}</p>

          {submitted ? (
            <div className="bg-card border border-primary/30 rounded-lg p-12 text-center animate-fade-in glow-green">
              <p className="text-primary text-2xl font-bold mb-2">{t.thankYou}</p>
              <p className="text-muted-foreground">{t.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
              <div>
                <label className="text-foreground text-sm font-semibold block mb-2">{t.nameLabel}</label>
                <input
                  type="text"
                  required
                  placeholder={t.namePlaceholder}
                  className="w-full bg-card border border-border rounded-lg py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div>
                <label className="text-foreground text-sm font-semibold block mb-2">{t.photoLabel}</label>
                <div className="bg-card border border-dashed border-border rounded-lg p-8 text-center hover:border-primary/40 transition-colors cursor-pointer">
                  <Upload className="mx-auto text-muted-foreground mb-2" size={24} />
                  <p className="text-muted-foreground text-sm">{t.photoPrompt}</p>
                </div>
              </div>

              <div>
                <label className="text-foreground text-sm font-semibold block mb-2">{t.descriptionLabel}</label>
                <textarea
                  required
                  rows={5}
                  placeholder={t.descriptionPlaceholder}
                  className="w-full bg-card border border-border rounded-lg py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Send size={16} />
                {t.submitButton}
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Submit;
