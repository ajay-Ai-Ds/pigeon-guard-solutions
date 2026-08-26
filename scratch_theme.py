import os
import re

SRC_DIR = r"c:\Users\thepl\.gemini\antigravity\scratch\pigeon-guard-solutions\src"

def process_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    original = content

    # 1. Replace globals.css if this is globals.css
    if filepath.endswith("globals.css"):
        # We will write globals.css directly
        return

    # Specific component replacements:
    # 2. Navbar.tsx
    if "Navbar.tsx" in filepath:
        # Topbar background: from #1F1F1F to #0B2545
        content = content.replace("bg-[#1F1F1F]", "bg-[#0B2545]")
        content = content.replace("border-[#3A3A3A]", "border-[#133E6F]")
        # Red accents in topbar to Sky Blue #4FC3F7
        content = content.replace("text-[#D61F26]", "text-[#4FC3F7]")
        content = content.replace("hover:text-[#D61F26]", "hover:text-[#4FC3F7]")
        content = content.replace("bg-[#D61F26]", "bg-[#4FC3F7]")
        content = content.replace("border-[#D61F26]", "border-[#4FC3F7]")
        content = content.replace("bg-[#F4F4F4]", "bg-[#F8FAFC]")
        # Main navbar text
        content = content.replace("text-[#1F1F1F]", "text-[#0B2545]")
        # Button styling
        content = content.replace("btn-primary-red", "bg-[#4FC3F7] hover:bg-[#38b6ef] text-[#0B2545] font-extrabold shadow-md")
        content = content.replace("text-[#3A3A3A]", "text-slate-700")

    # 3. HeroCarousel.tsx
    elif "HeroCarousel.tsx" in filepath:
        content = content.replace("bg-[#1F1F1F]", "bg-[#0B2545]")
        content = content.replace("from-[#1F1F1F]/90 via-[#1F1F1F]/40 to-black/20", "from-[#0B2545]/90 via-[#0B2545]/50 to-black/20")
        content = content.replace("bg-[#D61F26]", "bg-[#4FC3F7]")
        content = content.replace("text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md", "text-[#0B2545] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md")
        content = content.replace("text-[#D61F26]", "text-[#4FC3F7]")
        content = content.replace("text-[#F7E5C4]", "text-[#4FC3F7]")
        content = content.replace("border-[#D61F26]", "border-[#4FC3F7]")
        content = content.replace("hover:bg-[#D61F26]", "hover:bg-[#4FC3F7] hover:text-[#0B2545]")
        content = content.replace("hover:border-[#D61F26]", "hover:border-[#4FC3F7]")
        content = content.replace("btn-primary-red", "bg-[#4FC3F7] hover:bg-[#38b6ef] text-[#0B2545] font-extrabold rounded-full")
        content = content.replace("btn-secondary-red", "border-2 border-[#4FC3F7] text-white hover:bg-[#4FC3F7] hover:text-[#0B2545] font-bold rounded-full")

    # 4. Footer.tsx
    elif "Footer.tsx" in filepath:
        content = content.replace("bg-[#1F1F1F]", "bg-[#07182C]")
        content = content.replace("border-[#3A3A3A]", "border-[#133E6F]")
        content = content.replace("text-[#D61F26]", "text-[#4FC3F7]")
        content = content.replace("hover:text-[#D61F26]", "hover:text-[#4FC3F7]")
        content = content.replace("after:bg-[#D61F26]", "after:bg-[#4FC3F7]")
        content = content.replace("bg-[#D61F26]", "bg-[#4FC3F7]")

    # 5. FloatingCTA.tsx
    elif "FloatingCTA.tsx" in filepath:
        content = content.replace("bg-[#1F1F1F]", "bg-[#0B2545]")
        content = content.replace("hover:bg-[#D61F26]", "hover:bg-[#4FC3F7] hover:text-[#0B2545]")
        content = content.replace("from-[#D61F26] to-[#B0171C]", "from-[#4FC3F7] to-[#38b6ef]")
        content = content.replace("bg-gradient-to-br from-[#4FC3F7] to-[#38b6ef] text-white", "bg-[#4FC3F7] text-[#0B2545]")
        content = content.replace("bg-[#D61F26]", "bg-[#4FC3F7]")
        content = content.replace("rgba(214,31,38,0.30)", "rgba(79,195,247,0.35)")
        content = content.replace("rgba(214,31,38,0.40)", "rgba(79,195,247,0.50)")

    # 6. Stats.tsx
    elif "Stats.tsx" in filepath:
        content = content.replace("bg-[#1F1F1F]", "bg-[#0B2545]")
        content = content.replace("border-[#3A3A3A]", "border-[#133E6F]")
        content = content.replace("text-[#D61F26]", "text-[#4FC3F7]")
        content = content.replace("text-[#F7E5C4]", "text-[#4FC3F7]")
        content = content.replace("bg-[#D61F26]", "bg-[#4FC3F7]")
        content = content.replace("from-[#1F1F1F]", "from-[#0B2545]")

    # 7. MarqueeTicker.tsx
    elif "MarqueeTicker.tsx" in filepath:
        content = content.replace("bg-[#D61F26]", "bg-[#0B2545]")
        content = content.replace("bg-[#B0171C]", "bg-[#07182C]")
        content = content.replace("text-[#F7E5C4]", "text-[#4FC3F7]")
        content = content.replace("border-white/10", "border-[#133E6F]")

    # 8. ContactForm.tsx
    elif "ContactForm.tsx" in filepath:
        content = content.replace("bg-[#1F1F1F]", "bg-[#0B2545]")
        content = content.replace("border-[#3A3A3A]", "border-[#133E6F]")
        content = content.replace("text-[#D61F26]", "text-[#4FC3F7]")
        content = content.replace("hover:text-[#D61F26]", "hover:text-[#4FC3F7]")
        content = content.replace("bg-[#D61F26]", "bg-[#4FC3F7] text-[#0B2545]")
        content = content.replace("hover:bg-[#B0171C]", "hover:bg-[#38b6ef]")
        content = content.replace("text-accent-orange", "text-[#0B2545]")
        content = content.replace("border-accent-orange", "border-[#4FC3F7]")
        content = content.replace("focus:border-accent-orange", "focus:border-[#4FC3F7]")
        content = content.replace("focus:ring-accent-orange/20", "focus:ring-[#4FC3F7]/30")
        content = content.replace("bg-orange-50", "bg-sky-50")
        content = content.replace("btn-primary-red", "bg-[#4FC3F7] hover:bg-[#38b6ef] text-[#0B2545] font-extrabold shadow-md")

    # General replacements across all other components and pages
    else:
        # Replace red colors
        content = content.replace("#D61F26", "#0B2545") # for headings/primary
        # If it was text-red on dark or hover, let's make it Sky Blue #4FC3F7
        content = content.replace("text-[#0B2545] hover:text-[#0B2545]", "text-[#0B2545] hover:text-[#4FC3F7]")
        content = content.replace("#B0171C", "#081c35")
        content = content.replace("#8F1016", "#051325")
        content = content.replace("#F4F4F4", "#F8FAFC")
        content = content.replace("#F7E5C4", "#4FC3F7")
        content = content.replace("#7A2E3D", "#0B2545")
        content = content.replace("#C9963E", "#4FC3F7")
        content = content.replace("#5C1D24", "#081c35")
        content = content.replace("#E8C872", "#4FC3F7")
        
        # Badge replacements
        content = content.replace("bg-amber-50", "bg-sky-50")
        content = content.replace("border-amber-200", "border-sky-200")
        content = content.replace("bg-red-50", "bg-sky-50")
        content = content.replace("border-red-100", "border-sky-200")
        content = content.replace("border-red-200", "border-sky-200")
        content = content.replace("bg-orange-50", "bg-sky-50")
        content = content.replace("bg-orange-100", "bg-sky-100")
        
        # Accent orange replacements
        content = content.replace("text-accent-orange", "text-[#4FC3F7]")
        content = content.replace("bg-accent-orange", "bg-[#4FC3F7]")
        content = content.replace("border-accent-orange", "border-[#4FC3F7]")
        content = content.replace("hover:text-accent-orange", "hover:text-[#4FC3F7]")
        content = content.replace("hover:bg-accent-orange", "hover:bg-[#4FC3F7]")
        content = content.replace("hover:border-accent-orange", "hover:border-[#4FC3F7]")
        content = content.replace("focus:ring-accent-orange", "focus:ring-[#4FC3F7]")
        content = content.replace("text-primary-700", "text-[#0B2545]")
        content = content.replace("text-primary-800", "text-[#0B2545]")
        content = content.replace("text-primary-900", "text-[#0B2545]")
        content = content.replace("bg-primary-700", "bg-[#0B2545]")
        content = content.replace("bg-primary-800", "bg-[#0B2545]")
        content = content.replace("bg-primary-900", "bg-[#0B2545]")

    if content != original:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Modified: {filepath}")

def run():
    for root, dirs, files in os.walk(SRC_DIR):
        for file in files:
            if file.endswith((".tsx", ".ts", ".jsx", ".js")):
                process_file(os.path.join(root, file))

run()
