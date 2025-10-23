// app/page.js (or pages/index.js)

import Link from 'next/link';
import { Card } from 'components/card';
import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import { RandomQuote } from 'components/random-quote';
import { getNetlifyContext } from 'utils';

// --- Custom article content below ---
const articleTitle = "Best VR Headset for Sim Racing";
const articleContent = `
## **Understanding Sim Racing and VR**

Sim racing (simulated racing) is a realistic way to experience motorsports using advanced hardware like steering wheels, pedals, and motion cockpits. When paired with a **VR headset**, it provides an immersive, true-to-life driving experience that flat screens simply can’t match.

### **Why VR for Sim Racing?**
VR headsets place you directly inside the cockpit. You can look around curves, glance at mirrors, and feel depth perception, giving an edge in both immersion and performance.

---

## **Top 7 VR Headsets for Sim Racing**

### **1. Meta Quest 3**
Lightweight, wireless, and packed with sharp visuals, the Meta Quest 3 is perfect for both casual and competitive sim racers.  
*My brother uses this headset and says the clarity while racing in Assetto Corsa is incredible.*

### **2. HP Reverb G2**
The G2 offers 2160x2160 resolution per eye and superb comfort.  
*My friend swears by it for long endurance races in iRacing.*

### **3. Pimax Crystal**
A premium headset for enthusiasts who crave top-tier performance and ultra-wide FOV.  
*My father says the immersion is unmatched — but setup can be tricky.*

### **4. Valve Index**
Known for its excellent build quality and smooth tracking.  
*My neighbor loves it for the perfect mix of comfort and accuracy.*

### **5. Oculus Rift S**
Budget-friendly yet delivers decent visual quality and tracking.  
*My sister started with this headset and still enjoys casual racing.*

### **6. Varjo Aero**
A high-end option with industry-leading clarity.  
*My coworker says it’s like sitting in a real race car — but expensive.*

### **7. Pico 4**
Lightweight, affordable, and good for those new to sim racing VR.  
*A friend tested it for Project Cars 2 and said it was shockingly smooth.*

---

## **Buying Guide: What to Consider**

- **Resolution:** The higher, the better for reading dashboards and track details.  
- **Field of View:** A wider FOV enhances peripheral awareness.  
- **Comfort:** Lightweight headsets are crucial for long races.  
- **Refresh Rate:** 90Hz or above ensures smooth visuals.  
- **Compatibility:** Make sure it supports your sim (like iRacing, Assetto Corsa, or rFactor 2).

---

## **Final Thoughts**

When it comes to **sim racing**, VR isn’t just a gadget — it’s a full upgrade to your driving experience. Choose based on your comfort, budget, and racing goals.
`;
// -------------------------------------------------------

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16 text-white bg-[#0a2a66] min-h-screen p-6">
            <section>
                <ContextAlert className="mb-6" />
                <h1 className="mb-4 text-4xl font-bold">{articleTitle}</h1>
                <Markdown content={articleContent} />
                <Link
                    href="#"
                    className="btn btn-lg sm:min-w-64 mt-6 text-white border border-white hover:bg-white hover:text-[#0a2a66]"
                >
                    Read More Guides
                </Link>
            </section>

            {!!ctx && (
                <section className="flex flex-col gap-4">
                    <RuntimeContextCard />
                </section>
            )}

            <section className="flex flex-col gap-4">
                <RandomQuote />
            </section>
        </div>
    );
}

function RuntimeContextCard() {
    const ctx = getNetlifyContext();
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return (
            <Card title={title}>
                <p className="text-white">Next.js will rebuild any page you navigate to, including static pages.</p>
            </Card>
        );
    } else {
        const now = new Date().toISOString();
        return (
            <Card title={title}>
                <p className="text-white">This page was statically generated at build time ({now}).</p>
            </Card>
        );
    }
}
