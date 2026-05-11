import { Cpu, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="pt-24 pb-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter text-white">
                NEXIS<span className="text-cyan-400">AI</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Specialized AI automation agency helping Indian SMBs focus on growth while we handle the repetitive tasks.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-zinc-600 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-zinc-600 hover:text-white cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-zinc-600 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6 text-sm">Quick Links</h4>
             <ul className="space-y-4 text-sm text-zinc-500">
               <li><a href="#" className="hover:text-cyan-400 transition-colors">Our Solutions</a></li>
               <li><a href="#" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
               <li><a href="#" className="hover:text-cyan-400 transition-colors">Process</a></li>
               <li><a href="#" className="hover:text-cyan-400 transition-colors">Book a Call</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6 text-sm">Solutions</h4>
             <ul className="space-y-4 text-sm text-zinc-500">
               <li><a href="#" className="hover:text-cyan-400 transition-colors">WhatsApp Automation</a></li>
               <li><a href="#" className="hover:text-cyan-400 transition-colors">Medical AI Agents</a></li>
               <li><a href="#" className="hover:text-cyan-400 transition-colors">Document Processing</a></li>
               <li><a href="#" className="hover:text-cyan-400 transition-colors">Internal Knowledge Base</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6 text-sm">Contact Us</h4>
             <ul className="space-y-4 text-sm text-zinc-500">
               <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-cyan-400" /> hi@nexisai.com</li>
               <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-cyan-400" /> +91 98XXX XXXXX</li>
               <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-cyan-400" /> Bangalore, KA | Mumbai, MH</li>
             </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs text-center">
            &copy; {new Date().getFullYear()} NEXIS AI Automation. Built for high performance.
          </p>
          <div className="flex gap-8 text-xs text-zinc-600">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
