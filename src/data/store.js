// ============================================
// JK COMFORT — Data Store (localStorage CMS)
// ============================================

const KEYS = {
  products: 'jkc_products',
  services: 'jkc_services',
  testimonials: 'jkc_testimonials',
  blog: 'jkc_blog',
  gallery: 'jkc_gallery',
  inquiries: 'jkc_inquiries',
  settings: 'jkc_settings',
};

// ---- Seed Data ----
const SEED = {
  products: [
    { id: 1, name: 'Carrier Superia 365 Inverter', category: 'Split AC', brand: 'Carrier', capacity: '3 kW / 5 kW / 6 kW', energy: '5 Star', price: '₹47,000 - ₹67,500', tag: 'Flagship', description: 'Apple-level engineering meets whisper-quiet cooling. Inverter technology calculated for 365 days of efficiency.', features: ['AI Ambient Learn', 'Inverter Touch', 'PM 2.5 Active Filter', 'Real-time noise optimization', '10-Year Warranty'], image: '' },
    { id: 2, name: 'Carrier Superia 5i Inverter', category: 'Split AC', brand: 'Carrier', capacity: '3 kW / 5 kW / 6 kW', energy: '5 Star', price: '₹49,300 - ₹68,500', tag: 'Best Seller', description: 'Premium variable-speed cooling system with advanced smart IoT control. Whisper-quiet and ultra-efficient.', features: ['IoT Smart Control', 'Voice Control', '5-Star Energy Certified', 'Hospital-grade filtration', '7-Year Warranty'], image: '' },
    { id: 3, name: 'Carrier Superia 4i Inverter', category: 'Split AC', brand: 'Carrier', capacity: '3 kW / 5 kW / 6 kW', energy: '4 Star', price: '₹45,300 - ₹64,500', tag: 'Popular', description: 'Advanced inverter climate control matching instant demand. Reliable comfort optimized for hot Indian summers.', features: ['Instant Cool Turbo', 'Intelligent Defrost', '4-Star Energy Efficient', 'Active PM 2.5 Protection', '5-Year Warranty'], image: '' },
    { id: 4, name: 'Ducted AC Systems', category: 'Central AC', brand: 'Carrier', capacity: '5 Ton - 20 Ton', energy: '4 Star', price: 'Contact for Quote', tag: 'Commercial', description: 'High-capacity, concealed ducted systems for offices, retail, and premium villas. Seamless integration.', features: ['BMS Connectivity', 'Multi-Zone Control', 'Acoustic Insulation', 'High Airflow Static Pressure'], image: '' },
    { id: 5, name: 'Cassette Units', category: 'Cassette AC', brand: 'Toshiba', capacity: '2 Ton - 4 Ton', energy: '5 Star', price: 'Contact for Quote', tag: 'Premium Commercial', description: 'Ceiling-mounted compact cassette ACs. 360-degree uniform airflow distribution for professional spaces.', features: ['360° Air Flow', 'Compact Grid Fit', 'Super Silent Fan', 'Built-in Drain Pump'], image: '' },
    { id: 6, name: 'Toshiba SMMS-u VRF System', category: 'VRF System', brand: 'Toshiba', capacity: '10 HP - 120 HP', energy: '5 Star', price: 'Contact for Quote', tag: 'Enterprise VRF', description: 'Flagship Variable Refrigerant Flow system. Leading efficiency for multi-floor structures and commercial campuses.', features: ['Up to 128 Indoor Units', 'Triple Rotary Compressor', 'IoT Cloud Dashboard', 'BMS protocols integration'], image: '' }
  ],
  services: [
    { id: 1, title: 'Installation', icon: 'Wrench', description: 'Expert installation by certified technicians. Guaranteed within 24 hours of purchase.', highlight: '24hr Guarantee' },
    { id: 2, title: 'Annual Maintenance', icon: 'Shield', description: 'Comprehensive AMC plans covering all repairs, gas refills, and preventive maintenance.', highlight: 'From ₹2,499/yr' },
    { id: 3, title: 'Emergency Repair', icon: 'Zap', description: '24/7 emergency breakdown support. Our technicians reach you within 2 hours anywhere in Hyderabad.', highlight: '2-Hour Response' },
    { id: 4, title: 'Deep Cleaning', icon: 'Wind', description: 'Professional jet-wash and chemical deep cleaning. Improves efficiency and air quality.', highlight: 'From ₹799' },
    { id: 5, title: 'Gas Refilling', icon: 'Droplets', description: 'Genuine refrigerant top-up with leak detection. All refrigerant types handled.', highlight: 'All Types' },
    { id: 6, title: 'IoT Upgrade', icon: 'Wifi', description: 'Retrofit smart WiFi control to any existing AC. App-based scheduling and energy tracking.', highlight: 'Any Brand' },
  ],
  testimonials: [
    { id: 1, name: 'Rajesh Kumar', role: 'CEO, TechVentures Hyderabad', rating: 5, text: 'JK Comfort transformed our 5-floor office. The VRF system they installed has cut our energy bill by 38%. Professional, on-time, and the after-sales support is exceptional.', avatar: 'RK' },
    { id: 2, name: 'Priya Sharma', role: 'Homeowner, Jubilee Hills', rating: 5, text: 'The AeroElite AC they installed is absolutely silent. I forgot it was even running. The WiFi control and monthly energy reports are genuinely useful. Highly recommend!', avatar: 'PS' },
    { id: 3, name: 'Mohammed Farooq', role: 'GM, Grand Hyatt Hyderabad', rating: 5, text: 'Maintaining 180 rooms worth of ACs is complex. JK Comfort\'s AMC team handles it flawlessly. Their predictive maintenance approach has eliminated surprise breakdowns entirely.', avatar: 'MF' },
    { id: 4, name: 'Anita Reddy', role: 'Director, Apollo Hospitals', rating: 5, text: 'In healthcare, climate control is critical. JK Comfort understands that. Their team is certified, responsive, and truly professional. Zero downtime in 3 years of partnership.', avatar: 'AR' },
  ],
  blog: [
    {
      id: 1,
      title: "Why Choose Carrier Air Conditioners for Your Home?",
      category: "Home Cooling",
      date: "2026-05-22",
      author: "JK Comforts Editorial",
      readTime: "8 min",
      image: "/hvac_split_indoor.png",
      excerpt: "Discover why Carrier is the global benchmark for home comfort, combining inverter efficiency, whisper-quiet operations, and premium build quality.",
      content: "INTRODUCTION\nWhen it comes to maintaining a pristine indoor climate, homeowners seek a system that delivers silent operation, uncompromising cooling power, and optimal energy efficiency. For decades, Carrier has stood as the global pioneer in modern air conditioning. Invented by Willis Carrier in 1902, the brand continues to lead the industry in engineering quality, durability, and smart comfort. \n\nAs Hyderabad's premier authorized Carrier AC dealer, JK Comforts brings this legendary engineering right to your doorstep. In this comprehensive guide, we explore why Carrier air conditioners represent the gold standard for premium home cooling.\n\n---\n\nTHE DUAL SILENT ENGINE: INVERTER TECHNOLOGY\nModern homes require high-capacity cooling that dynamically adjusts to external ambient temperatures without spiking electricity bills. \nCarrier’s inverter compressor technology achieves exactly this:\n- **Variable-Speed Modulation:** Standard non-inverter compressors operate on a simple binary cycle (either running at 100% speed or completely off). This constant cycling uses massive amounts of power. Carrier's inverter technology modulates compressor speed dynamically between 10% and 100%, matching the precise thermal load of your room.\n- **Silent Operations:** Thanks to stabilized rotary mechanics and sound-dampening acoustic jackets around the compressor unit, Carrier indoor units operate at a whisper-quiet 21 to 25 decibels—meaning you can enjoy absolute silence during your sleep or work hours.\n\n---\n\nBUILT TO ENDURE: CORROSION RESISTANCE & DURABILITY\nHyderabad’s extreme climate poses massive challenges to HVAC hardware. From intense summer dry heat to high pollution levels in commercial areas, copper coils and condenser fins are constantly exposed to acidic particulates.\nCarrier addresses this with premium engineering:\n1. **100% Genuine Copper Condenser Tubes:** Better heat exchange rates compared to aluminum, ensuring faster cooling times.\n2. **Aqua Clear Protection coating:** Advanced anti-corrosive coating applied directly on the outdoor heat exchangers. This prevents rust, salt accumulation, and chemical erosion, extending the unit's lifespan to well over a decade.\n\n---\n\nSMART COMFORT & HEPA AIR FILTRATION\nToday's homeowners prioritize health and wellness alongside cooling. Carrier’s flagship residential units, such as the Superia Inverter series, come pre-equipped with advanced active filtration technology:\n- **PM 2.5 Active Filters:** Captures microscopic dust particles, allergens, and airborne pollen to clean the indoor air you breathe.\n- **AI Ambient Learn:** Intelligently tracks user temperature selections over weeks and couples this data with local outdoor weather patterns. It then automatically recalibrates airflow speed and target temperature to maximize comfort while minimizing energy waste.\n\n---\n\nWHY AUTHORIZED DEALER SUPPORT IS NON-NEGOTIABLE\nPurchasing a premium cooling system is an investment in your home. To ensure you receive genuine parts, official manufacturer warranty protection, and factory-standard installation, buying from an authorized dealer is essential.\nJK Comforts is the region’s certified partner. When you partner with us, you receive:\n- **Certified Installations:** Improperly installed units use up to 30% more electricity. Our factory-trained engineers align and install every unit to exact specifications.\n- **10-Year Comprehensive Warranty Support:** Direct access to original Carrier components and immediate warranty claim resolution.\n\n---\n\nCONTACT JK COMFORTS FOR A COMPLIMENTARY SITE SURVEY\nReady to experience premium, high-efficiency cooling in your home? Book a free site survey today. Our senior HVAC architects will calculate your room loads and recommend the perfect Carrier setup for your space.\n📞 Call/WhatsApp: +91 93911 38975 / +91 93471 43786\n✉️ Email: contact@jkcomforts.com"
    },
    {
      id: 2,
      title: "Carrier vs Toshiba Air Conditioners: Which One is Best for Your Needs?",
      category: "AC Comparison",
      date: "2026-05-21",
      author: "JK Comforts Technical Director",
      readTime: "10 min",
      image: "/why-us.png",
      excerpt: "A detailed, unbiased comparison of Carrier and Toshiba air conditioners to help you select the ideal model for your home or commercial space.",
      content: "INTRODUCTION\nWhen investing in high-end, premium climate control, two brands inevitably dominate the conversation: Carrier and Toshiba. Both manufacturers represent peak engineering performance, yet they cater to slightly different residential and commercial niches. \n\nAs an authorized dealer for both Carrier and Toshiba, JK Comforts provides an objective, unbiased comparison of their technologies, durability, maintenance profiles, and ideal use cases to help you make an informed decision.\n\n---\n\nCOMPARING CORE TECHNOLOGIES\n\n### 1. Carrier: High-Power American Engineering\nCarrier systems are celebrated for their raw cooling horsepower and robust industrial-grade builds. They are engineered to cool massive spaces quickly and operate flawlessly under high ambient thermal stress.\n- **Highlights:** Superia series, extreme ambient cooling capacity up to 52°C, and highly durable anti-corrosive copper condensers.\n\n### 2. Toshiba: Precision Japanese Innovation\nToshiba systems emphasize micro-efficiency, state-of-the-art electronics, and extreme technological refinement. Their indoor air handling units are virtually silent and feature premium filtration.\n- **Highlights:** Daiseikai & Premium series, Dual-Rotary compressor mechanics, and self-cleaning magic coil systems.\n\n---\n\nINVERTER EFFICIENCY COMPARISON\nBoth brands offer exceptional inverter technology, but their execution differs:\n- **Carrier Hybrid Inverter:** Combines PAM (Pulse Amplitude Modulation) for fast cooling at start-up with PWM (Pulse Width Modulation) to maintain target temperature efficiently. Excellent for quickly chilling hot rooms.\n- **Toshiba Twin-Rotary Compressor:** Utilizes two counter-rotating shafts to reduce friction and mechanical vibration. This creates highly stable operation at very low RPMs, offering unmatched energy savings during long running cycles (such as overnight use).\n\n---\n\nRESIDENTIAL VS COMMERCIAL USE CASES\n\n| Feature / Detail | Carrier Air Conditioners | Toshiba Air Conditioners |\n| :--- | :--- | :--- |\n| **Origin / Design** | American Robust Engineering | Japanese Precision & Electronics |\n| **Ideal For** | High heat loads, large apartments, high durability | Quiet bedrooms, premium luxury villas, server rooms |\n| **Compressor Type** | High-performance Single Rotary / Inverter | Flagship Twin-Rotary Compressor |\n| **Silent Rating** | 24 - 28 dB (Quiet) | 21 - 23 dB (Whisper-Quiet) |\n| **Key Advantage** | Rapid cooling, heavy-duty parts, cost-effective | Ultra energy efficiency, long lifespan, advanced filtration |\n\n---\n\nCOMMERCIAL STRENGTHS\n- **Toshiba VRF (SMMS-u):** The absolute market leader for multi-zone commercial structures. The system can connect up to 128 indoor units to a single outdoor loop, balancing refrigerant dynamically for massive energy savings.\n- **Carrier Ducted / Packaged Systems:** Ideal for open-layout offices, banquet halls, and larger retail spaces that require uniform high-velocity airflow distribution.\n\n---\n\nTHE VERDICT: WHICH SHOULD YOU CHOOSE?\n- **Choose Carrier if:** You want rapid cooling, heavy-duty build strength, and robust components designed for extreme high-heat environments.\n- **Choose Toshiba if:** You want the absolute highest energy savings, whisper-silent operation for your bedrooms, and cutting-edge Japanese electronic controls.\n\nWhichever brand fits your criteria, JK Comforts ensures perfect installation and factory-authorized maintenance support. Let us design your custom home layout.\n📞 Call/WhatsApp: +91 93911 38975 / +91 93471 43786"
    },
    {
      id: 3,
      title: "Best Air Conditioners for Hyderabad Summers: Complete Buying Guide",
      category: "Buying Guide",
      date: "2026-05-20",
      author: "JK Comforts Climate Team",
      readTime: "8 min",
      image: "/gallery_villa.png",
      excerpt: "Beat the extreme Hyderabad heat with our complete residential buying guide, featuring ideal tonnage calculations and peak performance tips.",
      content: "INTRODUCTION\nHyderabad summers are notorious for extreme dry heatwaves, with outdoor temperatures frequently breaching 43°C to 45°C. During these months, an air conditioner is no longer a luxury—it is critical home infrastructure. \n\nHowever, buying the wrong size or efficiency rating leads to poor cooling performance and skyrocketing power bills. JK Comforts presents the definitive local buying guide to prepare your home for the Hyderabad heat.\n\n---\n\nTHE HYDERABAD CLIMATE CHALLENGE\nUnlike coastal cities with high humidity, Hyderabad experiences severe dry heat. High-velocity dry winds and high solar thermal radiation mean that your home’s walls and ceilings store massive amounts of heat. Your AC must have a high sensible heat ratio (SHR) and the capability to run continuously under high ambient thermal stress.\n\n---\n\nSELECTING THE RIGHT AC TONNAGE\n\nSelecting the right capacity (tonnage) is crucial. Under-sizing leads to the compressor running continuously without cooling the room, while over-sizing causes rapid cycle swings and unnecessary electricity draw:\n1. **Up to 100 sq ft (Small Bedroom / Study):** 1.0 Ton Capacity\n2. **100 to 150 sq ft (Standard Bedroom):** 1.5 Ton Capacity\n3. **150 to 250 sq ft (Master Bedroom / Living Room):** 2.0 Ton Capacity\n4. **Top Floor / Sun-facing rooms:** Add an extra 0.5 Ton to compensate for direct roof heating.\n\n---\n\nINVERTER VS NON-INVERTER IN HIGH HEAT\nInverter air conditioners are strongly recommended for Hyderabad. While non-inverter systems draw maximum current on every compressor start, inverter ACs adjust their motor speeds. \nBecause temperatures remain high for over 12 hours a day, an inverter AC running on low speed will save you up to 50% on electricity compared to a fixed-speed system.\n\n---\n\nTOP RECOMMENDATIONS FOR HYDERABAD HOMES\n- **Carrier Superia Inverter Series:** Highly recommended for apartments and independent homes facing direct sunlight. Carrier's heavy-duty outdoor chassis handles dry dust storms and high external heat without tripping.\n- **Toshiba Premium Inverter:** Perfect for master bedrooms and studies. Its incredibly quiet fan allows peaceful sleep, and the advanced air filters eliminate dust spores swept in by Hyderabad's dry summer winds.\n\n---\n\nPRO ENERGY-SAVING TIPS\n- Set your AC to **24°C or 25°C**. Running your AC at 18°C does not cool the room faster—it only forces the compressor to run at maximum load for longer.\n- Clean your air filters every **2 weeks**. Dust blocks airflow, forcing the blower to work harder and increasing power consumption.\n\nEnsure your AC is installed by JK Comforts' certified technicians to guarantee optimal performance. Book your home consultation today!\n📞 Call/WhatsApp: +91 93911 38975 / +91 93471 43786"
    },
    {
      id: 4,
      title: "Commercial HVAC Solutions for Modern Offices: A Complete Guide",
      category: "Commercial HVAC",
      date: "2026-05-19",
      author: "JK Comforts Commercial Team",
      readTime: "9 min",
      image: "/gallery_vrf.png",
      excerpt: "Optimize productivity, reduce energy bills, and select the ultimate commercial cooling configuration for your business or property.",
      content: "INTRODUCTION\nIn a modern workspace, indoor air quality and temperature management directly impact employee comfort, health, and overall productivity. Designing an office HVAC system is a complex engineering task—it requires balancing high-footfall open areas, closed conference rooms, heat-emitting IT server racks, and strict corporate energy budgets.\n\nAt JK Comforts, we specialize in high-capacity corporate HVAC design. This guide breaks down the primary commercial cooling technologies available from Carrier and Toshiba.\n\n---\n\nCOMMERCIAL COOLING SYSTEMS EXPLAINED\n\n### 1. Cassette Air Conditioners\nCeiling-mounted units that blow air in four directions dynamically.\n- **Ideal For:** Open-plan office spaces, retail outlets, and cafeterias.\n- **Advantages:** Concealed layout, quiet fan operation, and uniform draft-free cooling.\n\n### 2. Concealed Ducted Systems\nLarge central indoor units connected to a web of ducting hidden behind false ceilings, distributing air through neat grills.\n- **Ideal For:** Boardrooms, large open desks, and executive suites.\n- **Advantages:** Completely hidden from view, elegant aesthetics, and high air volume distribution.\n\n### 3. VRF Systems (Variable Refrigerant Flow)\nThe gold standard of corporate HVAC engineering. A single outdoor multi-compressor system connects to multiple indoor units (cassettes, wall-mounts, or ducts) throughout the office building.\n- **Ideal For:** Multi-floor office complexes, startups, and co-working spaces.\n- **Advantages:** Individual temperature control in every room, massive power savings of up to 40%, and reduced rooftop space requirements.\n\n---\n\nVRF VS CASSETTE VS DUCTED SYSTEM COMPARISON\n\n| Metric | Cassette Units | Ducted Systems | VRF Systems |\n| :--- | :--- | :--- | :--- |\n| **Aesthetics** | Visible on ceiling | Completely hidden | Mixed (dependant on indoor choice) |\n| **Efficiency** | High (5-Star) | Medium | Exceptional (Variable Refrigerant) |\n| **Installation Cost** | Moderate | High (requires ductwork) | High upfront (very low running cost) |\n| **Zonal Control** | per Cassette | per Duct group | per Individual Room |\n| **Server Room Fit** | Good | Fair | Excellent (24/7 dedicated control) |\n\n---\n\nCHOOSING THE RIGHT HVAC SETUP FOR YOUR OFFICE\n- **Small Offices / Startups (Up to 1500 sq ft):** Combination of multi-split units and cassette ACs.\n- **Mid-Sized Offices (1500 to 5000 sq ft):** Concealed ducted systems for aesthetic comfort.\n- **Large Corporate / Multi-Floor (5000+ sq ft):** Toshiba SMMS-u VRF system. Its advanced inverter control handles diverse room demands effortlessly.\n\n---\n\nPREVENTIVE AMC CONTRACTS FOR BUSINESSES\nOffice systems run 12 to 14 hours a day, 6 days a week. A sudden breakdown can halt work completely. \nJK Comforts provides corporate AMC contracts that include monthly filters wash, electrical health checks, and priority emergency response.\n\nContact our commercial HVAC engineers for an office load calculation and layout blueprint.\n📞 Call/WhatsApp: +91 93911 38975 / +91 93471 43786"
    },
    {
      id: 5,
      title: "5 Signs Your Air Conditioner Needs Immediate Servicing",
      category: "Maintenance",
      date: "2026-05-18",
      author: "JK Comforts Service Manager",
      readTime: "5 min",
      image: "/about-team.png",
      excerpt: "Unusual sounds, weak airflow, rising power bills? Learn the critical warning signs before your AC breaks down completely.",
      content: "INTRODUCTION\nAn air conditioner is a complex mechanical system. Just like a car, it relies on regular lubrication, gas pressure calibration, and deep physical cleaning to perform efficiently. Many homeowners ignore minor signs of wear and tear until the compressor fails entirely—leading to expensive emergency repairs.\n\nTo help you protect your investment, the expert technicians at JK Comforts have compiled the five critical warning signs that indicate your AC needs immediate professional servicing.\n\n---\n\n1. THE SYSTEM IS BLOWING WARM AIR\nIf your AC is running but the air exiting the louvers is warm or lukewarm, it indicates a critical issue:\n- **Possibilities:** A dirty condenser coil blocking heat release, low refrigerant levels, or a failing compressor starting capacitor.\n- **Why wait?** Forcing the AC to run in this state will overheat the compressor, causing permanent motor damage.\n\n---\n\n2. POOR AIRFLOW AND WEAK VENTILATION\nAre some rooms cooling slower, or is the air coming out of the vents extremely weak?\n- **Possibilities:** Heavily clogged air filters, a dust-laden blower wheel, or leaking internal ducts.\n- **Action:** A comprehensive deep jet-wash service by JK Comforts will clean out all internal mold and dust, instantly restoring high-velocity airflow.\n\n---\n\n3. UNUSUAL NOISES (GRINDING, RATTLING, OR SQUEALING)\nModern premium ACs from Carrier and Toshiba are designed to run silently. Any new sound is an alert:\n- **Rattling/Vibration:** Loose panels or worn outdoor fan blades.\n- **Grinding/Squealing:** Defective blower motor bearings or a compressor motor mechanical issue.\n- **Sibilant Hissing:** A critical chemical refrigerant leak.\n\n---\n\n4. HIGH ELECTRICITY BILLS WITHOUT EXPLAINABLE USE\nIf your power bill has suddenly doubled without any change in your daily usage, your AC is operating at very poor efficiency. A dirty compressor coil, low gas pressure, or clogged filters force the compressor to draw up to twice the normal current to achieve the target temperature. Regular annual servicing keeps the system running at its peak certified 5-star rating.\n\n---\n\n5. WATER LEAKAGE FROM THE INDOOR UNIT\nWater dripping down your interior walls is a major emergency that can ruin paint and expensive woodwork. This happens when the condensation drain pipe gets blocked by algae, dust, or mold, forcing water to overflow from the internal drain pan. Our technicians can flush the drain line in minutes, solving the issue completely.\n\n---\n\nBOOK A JK COMFORTS JET-WASH SERVICE TODAY\nDon't wait for your system to break down in the middle of a hot summer day. Secure peace of mind and extend your AC's lifespan with a professional servicing from our expert team.\n📞 Call/WhatsApp: +91 93911 38975 / +91 93471 43786\n✉️ Email: contact@jkcomforts.com"
    },
    {
      id: 6,
      title: "How Inverter Air Conditioners Help Reduce Electricity Bills",
      category: "Technology",
      date: "2026-05-17",
      author: "JK Comforts Tech Lab",
      readTime: "6 min",
      image: "/hvac_schematic.png",
      excerpt: "Demystify variable-speed compressor technology and learn how choosing an inverter AC lowers monthly energy costs by up to 50%.",
      content: "INTRODUCTION\nOne of the most frequent questions we receive from Hyderabad homeowners is: \"What is an inverter air conditioner, and does it actually save money on electricity bills?\" \n\nThe answer is yes. In fact, upgrading to an inverter air conditioner is the single most effective way to lower your household energy bills. In this article, we explain the science behind inverter technology in simple, clear terms and show how it delivers massive long-term financial savings.\n\n---\n\nUNDERSTANDING THE COMPRESSOR: THE AC's ENGINE\nTo understand how an inverter saves power, we must look at how standard non-inverter ACs work:\n- **Non-Inverter ACs (Fixed-Speed):** The compressor is either running at 100% capacity or is turned off entirely. When you turn the AC on, the compressor runs at full speed until the room temperature drops to your set level. It then switches completely off. As the room naturally warms up, the compressor restarts at 100% capacity. \n- **The Power Spike:** This constant restarting process draws massive current, causing severe energy spikes on your electric meter.\n\n- **Inverter ACs (Variable-Speed):** The compressor motor speed is dynamically adjusted. Once the room reaches the target temperature, the compressor does not switch off. Instead, it slows down to a very low speed (10% to 20% capacity), drawing just enough power to maintain the cooled climate. \n\n---\n\nWHY VARIABLES-SPEED SAVES SO MUCH POWER\n- **No Starting Current Spikes:** The compressor starts softly at a low speed, eliminating the massive current draws associated with starting fixed-speed motors.\n- **Prevents Temperature Swings:** Because the compressor is always running at a modulated speed, the room temperature remains perfectly stable, eliminating hot and cold drafts.\n- **High Part-Load Efficiency:** Electric motors operate at their highest thermodynamic efficiency when running under partial load. Carrier and Toshiba inverter models are highly optimized to run continuously at partial capacity.\n\n---\n\nCARRIER & TOSHIBA INVERTER EXAMPLES\n- **Carrier Hybrid Inverter Technology:** Features dual-stage electronic controls that switch dynamically between PAM (high-power mode for fast cooling) and PWM (low-power maintenance mode).\n- **Toshiba Twin-Rotary Inverter:** Uses two counter-balancing rotary shafts. This allows the compressor to spin at incredibly slow speeds (under 10 Hz) without any mechanical vibration, consuming less power than a simple household lightbulb once the room is cooled.\n\n---\n\nTHE FINANCIAL MATH: IS THE UPFRONT PREMIUM WORTH IT?\nWhile inverter ACs have a slightly higher purchase price, the cost difference is typically recovered in **12 to 18 months** through lower electricity bills. Over a typical 10-year lifespan, an inverter AC will save you tens of thousands of rupees.\n\nLet our team help you calculate the exact payback period for your home or office space.\n📞 Call/WhatsApp: +91 93911 38975 / +91 93471 43786"
    },
    {
      id: 7,
      title: "Complete Air Conditioner Buying Guide 2025",
      category: "Buying Guide",
      date: "2026-05-16",
      author: "JK Comforts Chief Architect",
      readTime: "8 min",
      image: "/hvac_ducted_unit.png",
      excerpt: "Navigating features, star ratings, and tonnages. Our definitive guide simplifies choosing the perfect air conditioner for any space.",
      content: "INTRODUCTION\nThe air conditioning market has evolved rapidly over the last few years. Today's buyer is presented with a confusing array of terms: inverter systems, BEE star ratings, ISEER numbers, PM 2.5 active filters, VRF configurations, and smart IoT applications. \n\nTo help you navigate this complex landscape, the HVAC experts at JK Comforts have created the ultimate Air Conditioner Buying Guide.\n\n---\n\nSTEP 1: CALCULATE THE CORRECT CAPACITY (TONNAGE)\nTonnage has nothing to do with the physical weight of the AC unit. It represents the quantity of heat the system can extract from a room in one hour.\n- **Under-sizing** means your room will never stay cooled, and your power bills will spike as the motor runs continuously at 100% capacity.\n- **Over-sizing** causes rapid cycling, leading to poor humidity removal and high energy consumption.\n\nUse our standard size rule:\n- Rooms under **100 sq ft:** 1.0 Ton\n- Rooms **100 to 150 sq ft:** 1.5 Ton\n- Rooms **150 to 250 sq ft:** 2.0 Ton\n- *Note:* If you are on the top floor, have large west-facing windows, or have high-occupancy spaces, add an extra 0.5 Ton of cooling load capacity.\n\n---\n\nSTEP 2: UNDERSTANDING STAR RATINGS & ISEER\nThe BEE (Bureau of Energy Efficiency) star rating system represents the unit's cooling efficiency. This is measured using the **ISEER (Indian Seasonal Energy Efficiency Ratio)**.\n- A **5-Star Inverter AC** has an ISEER rating of 4.5 or higher, making it highly efficient.\n- A **3-Star Inverter AC** typically has an ISEER between 3.8 and 4.4.\n*Recommendation:* If your AC runs for more than 4 hours a day, always invest in a 5-Star system. The long-term power savings will far outweigh the initial price premium.\n\n---\n\nRESIDENTIAL VS COMMERCIAL SELECTION\n\n| Space / Room Type | Recommended System | Best Brand | Key Factor |\n| :--- | :--- | :--- | :--- |\n| **Bedroom** | Split Inverter AC | Toshiba Premium | Whisper-Quiet sleep |\n| **Living Room** | High-Capacity Split | Carrier Superia | Rapid open cooling |\n| **Luxury Penthouse** | Concealed Ducted AC | Carrier Ducted | Concealed, uniform air |\n| **Commercial Office** | VRF System | Toshiba SMMS-u | Multi-zone modular cooling |\n\n---\n\nSTEP 3: COMPRESSOR COIL MATERIAL\nAlways choose **100% copper coils** over aluminum. Copper has significantly better heat exchange properties, is much easier to service and repair, and lasts much longer when coated with advanced anti-corrosive treatments like Carrier's Aqua Clear.\n\n---\n\nSTEP 4: ENSURE PROFESSIONAL INSTALLATION\nAn air conditioner is only as good as its installation. Poor copper pipe bending, incorrect refrigerant gas charge, or misaligned indoor blowers can degrade cooling efficiency by up to 35% from day one. At JK Comforts, every technician is factory-trained and certified.\n\nLet our engineers guide you to the perfect unit for your home or business.\n📞 Call/WhatsApp: +91 93911 38975 / +91 93471 43786"
    },
    {
      id: 8,
      title: "Why Buying AC from an Authorized Dealer Matters",
      category: "Trust & Service",
      date: "2026-05-15",
      author: "JK Comforts Operations Head",
      readTime: "6 min",
      image: "/about.png",
      excerpt: "From valid official warranties to professional installations — here is why where you buy your AC is as important as the model you choose.",
      content: "INTRODUCTION\nWhen shopping for a premium air conditioning system, it is easy to get distracted by cheap online listings or third-party unauthorized sellers. However, where you purchase your air conditioner is just as important as the brand and model you choose. \n\nAir conditioners are sophisticated mechanical and electronic appliances that require certified handling and exact installation. Buying from an unauthorized source can void your manufacturer warranty, lead to poor installation quality, and compromise your safety.\n\nHere is why purchasing your climate control system from an authorized dealer like JK Comforts is absolutely essential.\n\n---\n\n1. GUARANTEED 100% GENUINE PRODUCTS\nAuthorized dealers source all inventory directly from the manufacturer’s factories. This guarantees that your air conditioner, indoor blower, outdoor unit, and installation pipes are 100% original. \nUnauthorized sellers often substitute lower-grade copper piping, generic remote controllers, or refurbished parts to artificially lower their prices.\n\n---\n\n2. VALID MANUFACTURER WARRANTIES\nPremium brands like Carrier and Toshiba offer exceptional multi-year warranties (up to 10 years on inverter compressors). However, **these warranties are only valid if the unit is purchased from and installed by a certified authorized dealer**. \nIf you buy from an unauthorized online platform or third-party vendor, the manufacturer reserves the right to reject all future warranty claims, leaving you to pay for expensive repairs out of pocket.\n\n---\n\n3. FACTORY-CERTIFIED INSTALLATION ENGINEERS\nModern inverter ACs utilize high-pressure refrigerants like R32 and sophisticated electronic control boards. Installing these units requires specialized training, precise tools, and advanced technical knowledge.\n- **The Risk:** Unauthorized installers often lack this training. They may cause tiny gas leaks, bend copper tubes incorrectly (restricting refrigerant flow), or align blowers poorly, leading to mechanical noise.\n- **The Solution:** JK Comforts’ engineers are fully factory-trained and certified by Carrier and Toshiba. We ensure every unit is calibrated to peak operating efficiency.\n\n---\n\n4. DEDICATED AFTER-SALES SERVICE & GENUINE SPARES\nWhen you need emergency repair or routine maintenance, authorized dealers have direct access to the manufacturer’s original spare parts catalog. We do not use generic or copycat components. Our technicians can diagnose and resolve issues quickly using original factory diagnostics.\n\n---\n\nPARTNER WITH HYDERABAD'S TRUSTED AUTHORIZED PARTNER\nFor over two decades, JK Comforts has served Hyderabad as the most trusted authorized dealer for Carrier and Toshiba. We stand behind every unit we sell, providing lifetime professional support.\n\nContact our team today to consult on your home HVAC needs.\n📞 Call/WhatsApp: +91 93911 38975 / +91 93471 43786\n✉️ Email: contact@jkcomforts.com"
    },
    {
      id: 9,
      title: "Best Commercial Air Conditioning Solutions for Restaurants, Retail Stores, and Offices",
      category: "Commercial HVAC",
      date: "2026-05-14",
      author: "JK Comforts Commercial Team",
      readTime: "8 min",
      image: "/hvac_cassette_ceiling.png",
      excerpt: "Discover tailored cooling designs for high-footfall restaurants, boutique retail stores, and multi-zone commercial complexes.",
      content: "INTRODUCTION\nCommercial air conditioning is fundamentally different from residential cooling. Business spaces experience constantly changing heat loads due to heavy foot traffic, high-heat lighting, open entrances, and operating kitchen appliances. Additionally, commercial HVAC systems must run for long hours, making operating efficiency and system reliability critical for business profitability.\n\nAs Hyderabad's premier commercial HVAC specialist, JK Comforts designs custom climate systems for three distinct commercial sectors: restaurants, retail boutiques, and office complexes.\n\n---\n\n1. RESTAURANTS: MANAGING DIVERSE HEAT LOADS\nRestaurants present some of the most complex HVAC design challenges:\n- **The Challenge:** Open kitchens, steam tables, high occupant density, and food aromas that must be extracted without creating cold drafts near customer tables.\n- **The Solution:** A combination of **ceiling-mounted Cassette ACs** for uniform 4-way draft-free airflow in the dining area, coupled with dedicated kitchen ventilation and fresh air intake fans. This creates a comfortable dining climate while keeping food smells confined to the kitchen.\n\n---\n\n2. RETAIL STORES & BOUTIQUES: AESTHETICS & COMFORT\nIn retail, customer comfort is directly tied to dwell time and sales. The cooling system must be highly effective yet virtually invisible to maintain the store’s premium interior design.\n- **The Challenge:** Large display windows that trap solar heat, hot accent lighting, and limited floor space for HVAC hardware.\n- **The Solution:** **Concealed Ducted AC Systems**. The internal fan coils are hidden behind high ceilings, distributing whisper-quiet cooling through sleek, minimalist linear grills. This keeps the aesthetic focus entirely on your merchandise.\n\n---\n\n3. CORPORATE OFFICES: ZONAL EFFICIENCY\nOffices require a highly adaptable cooling setup. Large conference rooms, private executive suites, open bullpen desks, and IT server rooms all have very different thermal demands at different times of the day.\n- **The Solution:** **Toshiba SMMS-u VRF Systems**. VRF technology modulates refrigerant flow dynamically, allowing each room to run its own indoor unit independently. This ensures your server room stays perfectly cooled 24/7, while unoccupied meeting rooms are turned off automatically—saving massive amounts of electricity.\n\n---\n\nTRUST JK COMFORTS FOR YOUR BUSINESS\nAt JK Comforts, we handle everything: thermal load analysis, system design blueprints, equipment supply, certified installation, and comprehensive corporate AMC support.\n\nContact us to schedule a site survey for your commercial property.\n📞 Call/WhatsApp: +91 93911 38975 / +91 93471 43786"
    },
    {
      id: 10,
      title: "Smart Cooling Trends Transforming Modern Homes",
      category: "Technology",
      date: "2026-05-13",
      author: "JK Comforts Tech Lab",
      readTime: "7 min",
      image: "/gallery_cassette.png",
      excerpt: "Explore next-generation residential cooling innovations, including AI-driven ambient learning, IoT smart controls, and air purification filters.",
      content: "INTRODUCTION\nThe humble home air conditioner has undergone a complete technological revolution. Today's premium climate control systems are no longer just simple cooling appliances—they are sophisticated, internet-connected air managers that optimize energy use, track local weather trends, and actively purify the air you breathe.\n\nAs Hyderabad's leading premium HVAC solutions provider, JK Comforts explores the key smart home cooling trends transforming residential comfort.\n\n---\n\n1. AI-DRIVEN TEMPERATURE OPTIMIZATION\nIn the past, users had to constantly adjust their AC remote manually to maintain comfort. Today's flagship Carrier and Toshiba models feature advanced **AI Ambient Learn** algorithms.\n- **How it works:** Microprocessors inside the AC track your temperature preferences over weeks and combine this data with local outdoor weather trends and indoor humidity levels. The system then automatically recalibrates airflow speed, vane direction, and compressor load to deliver the most comfortable, draft-free climate possible with minimal power consumption.\n\n---\n\n2. FULL IOT SMARTPHONE & VOICE CONTROL\nModern premium AC units come pre-equipped with advanced WiFi modules.\n- **App-Based Scheduling:** You can turn your AC on remotely when leaving your office, so your home is perfectly cooled the moment you arrive.\n- **Voice Control Integration:** Fully compatible with premium smart home ecosystems like Amazon Alexa, Google Assistant, and Apple HomeKit, enabling simple hands-free control.\n- **Energy Tracking:** Smart applications provide real-time dashboards showing exactly how many kilowatt-hours your AC is consuming, helping you optimize your monthly bills.\n\n---\n\n3. ADVANCED MEDICAL-GRADE AIR FILTRATION\nWith rising outdoor pollution levels in developing urban areas, indoor air quality has become a top priority.\n- **PM 2.5 Active Filters:** Electrostatic filters capture fine microscopic dust particles, keeping the air clean.\n- **Self-Cleaning Magic Coil:** Flagship Toshiba systems feature a special aqua-resin coated evaporator coil. When turned off, the internal blower runs in reverse for 20 minutes to dry the coil completely, preventing the growth of mold, mildew, and bacteria.\n\n---\n\nUPGRADE YOUR HOME TO NEXT-GEN SMART COOLING\nAre you building a new home or looking to upgrade your existing system? Our team of smart HVAC designers will create a seamless, integrated smart cooling layout tailored specifically to your lifestyle.\n📞 Call/WhatsApp: +91 93911 38975 / +91 93471 43786\n✉️ Email: contact@jkcomforts.com"
    },
  ],
  gallery: [
    { id: 1, title: 'Commercial VRF Installation — Hitech City Tower', category: 'Commercial', year: '2024', image: '/gallery_vrf.png' },
    { id: 2, title: 'Luxury Villa Climate System — Jubilee Hills', category: 'Residential', year: '2024', image: '/gallery_villa.png' },
    { id: 3, title: 'Hospital Grade AMC — Apollo Hospitals', category: 'Healthcare', year: '2023', image: '/gallery_cassette.png' },
    { id: 4, title: 'Hotel Central AC Overhaul — Grand Hyatt', category: 'Hospitality', year: '2023', image: '' },
    { id: 5, title: 'IT Park Multi-Zone System — Gachibowli', category: 'Commercial', year: '2024', image: '' },
    { id: 6, title: 'Residential Complex — Kondapur', category: 'Residential', year: '2024', image: '' },
  ],
  inquiries: [],
  settings: {
    phone: '+91 93911 38975',
    email: 'contact@jkcomforts.com',
    address: 'H.No. 10-2-289/83, Mehar Mansion, Shanti Nagar, Masab Tank, Hyderabad - 500 028. Telangana India',
    workHours: 'Mon–Sat: 8 AM – 8 PM | Hotlines: +91 93911 38975, +91 93471 43786 (24/7)',
    tagline: 'Premium Carrier & Toshiba Climate Control',
  },
};

// ---- API ----
function get(key) {
  try {
    const raw = localStorage.getItem(KEYS[key]);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}

function set(key, data) {
  localStorage.setItem(KEYS[key], JSON.stringify(data));
}

function init() {
  Object.keys(SEED).forEach(key => {
    if (!localStorage.getItem(KEYS[key])) {
      set(key, SEED[key]);
    } else {
      if (key === 'settings') {
        // Force update settings to guarantee new phone numbers take effect instantly
        set('settings', SEED.settings);
      }
      if (key === 'blog') {
        // Force update blog to guarantee all 10 new premium articles are loaded instantly
        set('blog', SEED.blog);
      }
      if (key === 'gallery') {
        const current = JSON.parse(localStorage.getItem(KEYS[key]) || '[]');
        if (current.length > 0 && !current[0].hasOwnProperty('image')) {
          set('gallery', SEED.gallery);
        }
      }
    }
  });
}

export function getProducts() { return get('products') || SEED.products; }
export function getServices() { return get('services') || SEED.services; }
export function getTestimonials() { return get('testimonials') || SEED.testimonials; }
export function getBlog() { return get('blog') || SEED.blog; }
export function getGallery() { return get('gallery') || SEED.gallery; }
export function getInquiries() { return get('inquiries') || []; }
export function getSettings() { return get('settings') || SEED.settings; }

export function saveProducts(data) { set('products', data); }
export function saveServices(data) { set('services', data); }
export function saveTestimonials(data) { set('testimonials', data); }
export function saveBlog(data) { set('blog', data); }
export function saveGallery(data) { set('gallery', data); }
export function saveInquiry(inquiry) {
  const list = getInquiries();
  list.unshift({ ...inquiry, id: Date.now(), date: new Date().toISOString() });
  set('inquiries', list);
}
export function saveSettings(data) { set('settings', data); }

// Initialize on import
init();