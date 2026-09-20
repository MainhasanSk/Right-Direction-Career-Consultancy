import React from "react";
import { Link } from "react-router-dom";
import { Compass, ArrowRight, Home } from "lucide-react";
import { siteContent } from "../data/content";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brochure-mesh py-16 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-slate-200 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-rdcc-cyan-ice text-rdcc-blue flex items-center justify-center mx-auto shadow-sm">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-rdcc-blue">
            Error 404
          </span>
          <h1 className="text-3xl font-heading font-extrabold text-rdcc-navy">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            The page you are looking for might have been moved or does not exist. Let us guide you back to the right direction.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Link
            to="/"
            className="w-full py-3 px-6 rounded-xl bg-rdcc-blue hover:bg-rdcc-blue-hover text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/services"
            className="w-full py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 text-rdcc-blue" />
          </Link>
        </div>
      </div>
    </div>
  );
}
