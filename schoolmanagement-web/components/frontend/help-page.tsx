'use client'
import { Mail, MessageCircle, Phone, Search, PhoneIcon as WhatsApp } from "lucide-react";
import Link from "next/link";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function HelpPage() {
  const articles = [
    {
      title: "Getting Started Guide",
      description: "Learn the basics and get up and running quickly",
      link: "#",
    },
    {
      title: "Product Documentation",
      description: "Detailed information about our products and features",
      link: "#",
    },
    {
      title: "Troubleshooting Guide",
      description: "Common issues and how to resolve them",
      link: "#",
    },
    {
      title: "API Documentation",
      description: "Technical documentation for developers",
      link: "#",
    },
  ];

  const faqs = [
    {
      question: "What is QuickSchools?",
      answer:
        "QuickSchools is an online school management software that allows you to manage admissions, student information, scheduling, and grading functionalities anytime and anywhere.",
    },
    {
      question: "How will QuickSchools support my unique educational system?",
      answer:
        "QuickSchools is able to support different kinds of educational systems. Grading criteria, class levels, timetable, and report cards are all customizable within minutes. We will demonstrate it to you during your 30-day trial period.",
    },
    {
      question: "What kind of software programs do I require to run QuickSchools?",
      answer:
        "All you need is a Web browser that can support HTML5 such as Google Chrome, Mozilla Firefox, and Internet Explorer (IE 9 and above).",
    },
    {
      question: "Can I install QuickSchools on my own servers?",
      answer:
        "We currently only provide an online version of our software. In this way, we're able to guarantee availability of our servers, provide support to all users, as well as provide continuous upgrades in an efficient manner.",
    },
    {
      question: "How do I integrate my school's data with QuickSchools?",
      answer:
        "QuickSchools provides a step-by-step flow that will help you import your current data. Your files need to be in Microsoft Excel (.xls) format.",
    },
    {
      question: "Do you offer support to clients?",
      answer:
        "Our technical support can assist you with any technical problems you may face. Support is provided throughout the week by email (support@quickschools.com), by phone, as well as live chat anytime during weekdays. This is absolutely free of charge.",
    },
    {
      question: "Does QuickSchools offer training services?",
      answer:
        "It is our hope that our interface is intuitive and easy to follow from the start. But if you encounter problems, you have access to our live chat support personnel who are always happy to assist you. We're also in the process of providing online videos that will walk you through some of our more involved processes. All in all, you will not need to pay for expensive training.",
    },
    {
      question: "Does QuickSchools offer custom software development?",
      answer:
        "Our philosophy and approach to a shared platform across many schools means that we cannot provide custom development for any specific school. However, we do provide upgrades and enhancements based on demand. So let us know what you need, and if there's a demand for it, we'll see if it's something that we can include in a future release, and at no additional charge.",
    },
    {
      question: "How much does QuickSchools cost?",
      answer:
        "We offer three paid plans. The Gaia Plan at only 99 cents/student/month, the Apollo Plan at only $1.49/student/month, and finally the ultimate service with the Athena plan at $2.99/student/month. For more details go to the Pricing page. All prices are in US Dollars.",
    },
    {
      question: "Are there any hidden fees I should know about?",
      answer:
        "The only fee is the subscription fee. Everything is included with that price, including access to online training materials and support.",
    },
    {
      question: "Will I be bound to any long-term contracts?",
      answer:
        "No. We charge on a monthly basis, and you may terminate the account with a one-month notice.",
    },
    {
      question: "How do you ensure continuous availability of the QuickSchools internet application?",
      answer:
        "We ensure that you have 99% uptime. To deliver this level of reliability, we host our applications on world-class data centers. These are the same data centers that carry traffic for international telcos.",
    },
    {
      question: "How does QuickSchools ensure my school's data is safe from loss?",
      answer:
        "Your school's data is important. At midnight every day, we backup your school's important data to a different physical location. This is fully automatic and you don't have to do anything to activate this service.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We provide our clients with several online credit card payment methods which include Visa, Master Card, and American Express. We accept currency in US dollars and our payment gateway is powered by Stripe.",
    },
    {
      question: "This is an internet application. Is it safe for me to transmit my information via the Web?",
      answer:
        "Your data is treated as importantly as online banks treat financial information, which is why we use the same Secure Sockets Layer (SSL) technology when transmitting information between your computer and our servers.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Keep FAQs always visible, do not filter them
  const filteredFaqs = searchQuery ? faqs : faqs;
  

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-6 text-4xl font-bold">How can we help you?</h1>
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              className="pl-10"
              placeholder="Search for articles, tutorials and more..."
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Helpful Articles</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {filteredArticles.map((article, index) => (
            <Link
              key={index}
              href={article.link}
              className="block rounded-lg border bg-card p-4 transition-colors hover:bg-accent"
            >
              <div className="flex flex-col items-center">
                <div className="mb-2 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">{article.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h3 className="text-sm font-semibold uppercase text-primary">Frequently Asked Questions</h3>
            <h2 className="mt-2 text-3xl font-bold">
              You ask? We <span className="italic">answer</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="flex items-center gap-2">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Still Need Help?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <CardTitle>Email Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Get in touch with our support team via email. 
              </p>
              <Button className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                <Link href="mailto:support@example.com">Send Email</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                <CardTitle>Live Chat</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Chat with our support team in real-time. 
              </p>
              <Button className="w-full" variant="secondary">
                <MessageCircle className="mr-2 h-4 w-4" />
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <WhatsApp className="h-5 w-5 text-primary" />
                <CardTitle>WhatsApp</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">
                Connect with us on WhatsApp or call us directly.
              </p>
              <div className="flex gap-2">
                <Button className="flex-1" variant="outline">
                  <WhatsApp className="mr-2 h-4 w-4" />
                  <Link href="https://wa.me/1234567890">WhatsApp</Link>
                </Button>
                <Button className="flex-1" variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  <Link href="tel:+1234567890">Call Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}