import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What's your typical turnaround time?",
      answer: "Most projects are delivered within 3-5 business days. Rush delivery options are available for urgent needs, and we'll always communicate realistic timelines during the planning phase.",
    },
    {
      question: "How many revisions are included?",
      answer: "We include unlimited revisions in all our packages. Your satisfaction is our priority, and we'll keep refining until you're 100% happy with the final result.",
    },
    {
      question: "Do you provide raw footage or project files?",
      answer: "Yes! All packages include final rendered videos plus raw footage and project files upon request. You'll have full ownership and flexibility to use your content however you need.",
    },
    {
      question: "What video formats do you deliver?",
      answer: "We deliver in all major formats optimized for each platform (MP4, MOV, etc.). Whether it's YouTube, Instagram, TikTok, LinkedIn, or your website, we'll provide the perfect format and resolution.",
    },
    {
      question: "Can you help with video strategy and planning?",
      answer: "Absolutely! We offer full-service content strategy including scripting, storyboarding, and optimization recommendations. Our team will guide you through the entire creative process from concept to completion.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about working with us
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/5 border border-white/10 rounded-lg px-6 data-[state=open]:border-primary/50"
              data-testid={`faq-${index}`}
            >
              <AccordionTrigger className="text-white hover:text-primary text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
