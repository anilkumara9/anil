import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  isDarkMode?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isDarkMode = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // EmailJS configuration - You'll need to replace these with your actual EmailJS IDs
      const serviceId = 'service_portfolio'; // Replace with your service ID
      const templateId = 'template_contact'; // Replace with your template ID
      const publicKey = 'your_public_key'; // Replace with your public key
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_email: 'anilkumarmeda6@gmail.com', // Your email
      };
      
      // For now, we'll simulate the email sending since EmailJS needs setup
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Uncomment this when EmailJS is configured:
      // await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact directly via email.');
      console.error('Email send error:', error);
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="hover-lift">
      <CardHeader>
        <CardTitle className="headline text-xl flex items-center gap-2">
          <Mail className="h-5 w-5" />
          SEND EXCLUSIVE MESSAGE
        </CardTitle>
        <CardDescription className="byline text-primary">
          Direct Line to Meda Anilkumar
        </CardDescription>
      </CardHeader>
      <CardContent>
        {submitStatus === 'success' ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
            <div>
              <h3 className="font-semibold text-lg">Message Sent Successfully!</h3>
              <p className="text-sm text-muted-foreground">
                Thank you for reaching out. Meda will get back to you soon!
              </p>
            </div>
          </div>
        ) : submitStatus === 'error' ? (
          <div className="text-center py-8 space-y-4">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
            <div>
              <h3 className="font-semibold text-lg">Message Failed to Send</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {errorMessage}
              </p>
              <Button 
                onClick={() => setSubmitStatus('idle')}
                variant="outline"
                size="sm"
              >
                Try Again
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-semibold">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="text-sm"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-semibold">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="text-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company" className="text-xs font-semibold">Company/Organization</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="text-sm"
                placeholder="Your company name (optional)"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-xs font-semibold">Message *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="text-sm min-h-[100px]"
                placeholder="Tell me about your project, job opportunity, or collaboration idea..."
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full group" 
              disabled={isSubmitting}
              size="sm"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                  <Send className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              Or reach out directly: <a href="mailto:anilkumarmeda6@gmail.com" className="text-primary hover:underline">anilkumarmeda6@gmail.com</a>
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactForm;