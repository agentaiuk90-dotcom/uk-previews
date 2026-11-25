/* LocalWeb UK — Parametric 11,520+ Agency Layout Engine (20 x 12 x 6 x 4 x 2 = 11,520) */
(function (global) {
  "use strict";

  const INDUSTRIES = [
    {
      id: "plumber",
      name: "Plumber & Heating",
      short: "Plumbing",
      badge: "Gas Safe Registered",
      sampleBusiness: "Thames Valley Plumbing & Heating",
      tagline: "Precision plumbing, boiler installations & 24/7 emergency leak response.",
      photo: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Emergency Leak & Burst Pipes", "Rapid 60-minute callout across your local postcode with upfront fixed rates.", "From £75"],
        ["Boiler Installs & Upgrades", "A-rated Worcester Bosch & Vaillant installations with 10-year warranties.", "From £1,850"],
        ["Full Bathroom Fitting", "Complete plumbing, wet rooms, underfloor heating & luxury brassware.", "Free Quote"],
        ["Central Heating & Radiators", "Power flushing, smart thermostats & radiator balancing for lower bills.", "From £120"],
        ["Landlord CP12 Certificates", "Annual gas safety inspections and digital certificates issued same day.", "From £65"],
        ["Blocked Drains & Sinks", "High-pressure jetting and CCTV drain diagnostics with zero mess.", "From £85"]
      ]
    },
    {
      id: "electrician",
      name: "Electrician",
      short: "Electrical",
      badge: "NICEIC Approved Contractor",
      sampleBusiness: "Crown & Spark Electrical Ltd",
      tagline: "Certified domestic & commercial electrical engineering, rewires and EV charging.",
      photo: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Full & Partial Rewires", "Modern 18th Edition compliant rewiring with minimal disruption.", "Free Quote"],
        ["Consumer Unit Upgrades", "RCBO surge-protected fuse boards installed and certified in one day.", "From £480"],
        ["EV Home Charger Installs", "OZEV-ready 7kW smart chargers neatly fitted for all electric vehicles.", "From £795"],
        ["EICR Safety Certificates", "Comprehensive electrical testing for homeowners, buyers & landlords.", "From £140"],
        ["Architectural Lighting", "LED downlights, garden lighting & smart home dimming scenes.", "From £180"],
        ["24/7 Fault Finding", "Fast diagnosis and repair of tripping circuits and power loss.", "From £80"]
      ]
    },
    {
      id: "mechanic",
      name: "Mobile Mechanic",
      short: "Auto Repair",
      badge: "IMI Certified Technician",
      sampleBusiness: "Apex Mobile Mechanics UK",
      tagline: "Dealer-level diagnostics, servicing & brake repairs directly at your driveway.",
      photo: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Full & Interim Servicing", "Manufacturer-spec oil, filters & 60-point safety check at home or work.", "From £115"],
        ["Brakes, Discs & Calipers", "OEM-grade brake replacements fitted on your driveway same day.", "From £130"],
        ["OBD2 Engine Diagnostics", "Dealer-level fault scanning, DPF regen & warning light resolution.", "From £55"],
        ["Battery & Alternator", "Heavy-duty Bosch & Yuasa battery supply and mobile fitting.", "From £95"],
        ["Pre-Purchase Inspections", "Independent 100-point vehicle check before you buy a used car.", "From £89"],
        ["Clutch & Suspension", "Springs, shock absorbers, drop links & mechanical repairs.", "Free Quote"]
      ]
    },
    {
      id: "roofer",
      name: "Roofing Specialist",
      short: "Roofing",
      badge: "NFRC Accredited Roofers",
      sampleBusiness: "Heritage Slate & Tile Roofing",
      tagline: "Weatherproof pitched & flat roofing, chimney repairs and storm response.",
      photo: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["New Pitched Roofs", "Natural Welsh slate & clay tile roofs backed by a 20-year guarantee.", "Free Quote"],
        ["EPDM & GRP Flat Roofs", "Seamless fibreglass and rubber flat roofing built to last 30+ years.", "From £950"],
        ["Emergency Storm Repairs", "Slipped tiles, ridge repointing & urgent waterproof sealing.", "From £120"],
        ["Chimney & Leadwork", "Code-4 lead flashing, chimney stack rebuilds & cowl fitting.", "From £240"],
        ["UPVC Fascias & Guttering", "Maintenance-free roofline replacements and seamless gutters.", "From £450"],
        ["Drone Roof Surveys", "High-resolution aerial photo inspection before any work begins.", "Free"]
      ]
    },
    {
      id: "landscaper",
      name: "Landscaping & Gardens",
      short: "Landscaping",
      badge: "BALI Registered Studio",
      sampleBusiness: "Oak & Stone Garden Design",
      tagline: "Bespoke porcelain patios, architectural fencing and year-round garden transformations.",
      photo: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Porcelain & Sandstone Patios", "Precision-laid outdoor living terraces with ACO drainage.", "Free Quote"],
        ["Composite & Timber Decking", "Low-maintenance raised decks with integrated LED step lighting.", "From £1,200"],
        ["Fencing & Pergolas", "Closeboard, slatted cedar screening & bespoke garden structures.", "From £480"],
        ["Turfing & Artificial Grass", "Fresh Rolawn turfing and pet-friendly premium artificial lawns.", "From £390"],
        ["Driveways & Block Paving", "Resin-bound and permeable block driveways built on Type-1 sub-base.", "Free Quote"],
        ["Garden Lighting & Planting", "Architectural borders, mature trees & dusk-to-dawn illumination.", "From £350"]
      ]
    },
    {
      id: "locksmith",
      name: "24/7 Locksmith",
      short: "Locksmith",
      badge: "MLA Approved · DBS Checked",
      sampleBusiness: "RapidKey 24/7 Locksmiths",
      tagline: "Non-destructive 20-minute emergency entry and British Standard anti-snap security.",
      photo: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Emergency Lockouts", "95% non-destructive entry with zero callout fee and 20-min ETA.", "From £65"],
        ["Anti-Snap Cylinder Upgrades", "3-Star Ultion & ABS British Standard BS3621 security locks.", "From £95"],
        ["UPVC & Composite Doors", "Multipoint gearbox repairs, realignment & handle replacements.", "From £85"],
        ["Burglary Repairs & Boarding", "Immediate door securing and insurance-approved lock upgrades.", "From £110"],
        ["Commercial Master Suites", "Restricted key systems and access control for offices & shops.", "Free Quote"],
        ["Smart Lock Installation", "Yale, Nuki & keyless entry systems professionally fitted.", "From £140"]
      ]
    },
    {
      id: "manvan",
      name: "Man & Van Removals",
      short: "Removals",
      badge: "Goods in Transit Insured",
      sampleBusiness: "SwiftMove UK Removals",
      tagline: "Stress-free home moves, student relocations and nationwide same-day courier.",
      photo: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Home & Flat Removals", "Careful blanket-wrapped moves with 1, 2 or 3 uniformed movers.", "From £55/hr"],
        ["Full Packing Service", "Double-walled boxes, wardrobe cartons & fragile item protection.", "From £180"],
        ["Single Item & Furniture", "Sofas, pianos, eBay/Facebook Marketplace collections & delivery.", "From £45"],
        ["Office Relocations", "Weekend IT & desk moves with zero business downtime.", "Free Quote"],
        ["Student Moves", "Fixed-price university term moves across the entire UK.", "From £75"],
        ["Storage Runs & Clearances", "Licensed waste carrier clearances and self-storage drop-offs.", "From £90"]
      ]
    },
    {
      id: "handyman",
      name: "Handyman & Maintenance",
      short: "Handyman",
      badge: "Public Liability £5M",
      sampleBusiness: "Sorted Property Maintenance",
      tagline: "Reliable multi-trade home repairs, carpentry, TV mounting and odd jobs done properly.",
      photo: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Flat-Pack & Joinery", "IKEA wardrobes, shelving, skirting boards & internal doors.", "From £50"],
        ["TV & Heavy Wall Mounting", "Concealed cables, soundbars, mirrors & floating units.", "From £65"],
        ["Silicone, Grout & Tiling", "Mould-free bathroom resealing and splashback tile repairs.", "From £75"],
        ["Painting & Touch-Ups", "Crisp feature walls, woodwork & end-of-tenancy refreshes.", "From £120"],
        ["Plumbing & Tap Swaps", "Leaking traps, kitchen mixers & washing machine hookups.", "From £60"],
        ["Landlord Turnaround", "One-call snagging lists completed between tenants.", "Day Rate"]
      ]
    },
    {
      id: "builder",
      name: "Builder & Extensions",
      short: "Construction",
      badge: "Federation of Master Builders",
      sampleBusiness: "Sterling Build & Extensions",
      tagline: "Architectural rear extensions, loft conversions and structural renovations.",
      photo: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["House Extensions", "Single & double-storey extensions managed from foundations to sign-off.", "Free Quote"],
        ["Loft Conversions", "Dormer, Velux & hip-to-gable master suites adding real value.", "Free Quote"],
        ["Structural Knock-Throughs", "RSJ steel beam installations for open-plan kitchen diners.", "From £2,400"],
        ["Full Renovations", "Turnkey refurbishments with dedicated project management.", "Free Quote"],
        ["Brickwork & Garden Walls", "Period lime repointing, porches & structural masonry.", "From £650"],
        ["Kitchen & Utility Builds", "Complete first-fix to bespoke cabinetry installation.", "Free Quote"]
      ]
    },
    {
      id: "hvac",
      name: "Air Con & Heat Pumps",
      short: "HVAC",
      badge: "F-Gas & MCS Certified",
      sampleBusiness: "NordicAir Climate UK",
      tagline: "Whisper-quiet air conditioning, air-source heat pumps and commercial HVAC.",
      photo: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Home Air Conditioning", "Daikin & Mitsubishi split systems for bedrooms and home offices.", "From £1,290"],
        ["Air Source Heat Pumps", "BUS £7,500 grant-eligible low-carbon heating installations.", "Free Survey"],
        ["Commercial Office HVAC", "VRF/VRV climate control with annual maintenance contracts.", "Free Quote"],
        ["Annual Servicing & F-Gas", "Filter deep-clean, refrigerant check & efficiency tuning.", "From £95"],
        ["MVHR Ventilation", "Fresh filtered air recovery for modern airtight homes.", "Free Quote"],
        ["Emergency Breakdown", "Rapid diagnostics and compressor repairs for commercial units.", "From £110"]
      ]
    },
    {
      id: "cleaning",
      name: "Domestic & Commercial Cleaning",
      short: "Cleaning",
      badge: "100% Deposit Back Guarantee",
      sampleBusiness: "PureSpace Cleaning Co.",
      tagline: "Hotel-standard end-of-tenancy, deep cleans and commercial office care.",
      photo: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["End of Tenancy Cleans", "Agency-approved checklist with 72-hour deposit guarantee.", "From £165"],
        ["Weekly Home Cleaning", "Vetted, uniformed cleaners using eco-safe products.", "From £22/hr"],
        ["Deep Spring Cleans", "Inside appliances, skirting, limescale & full sanitisation.", "From £145"],
        ["Office & Studio Care", "Out-of-hours commercial cleaning tailored to your workspace.", "Custom"],
        ["After-Builders Clean", "Fine plaster dust extraction and window polish post-renovation.", "From £210"],
        ["Oven & Appliance Valet", "Fume-free dip-tank oven restoration to showroom shine.", "From £65"]
      ]
    },
    {
      id: "painter",
      name: "Painter & Decorator",
      short: "Decorating",
      badge: "Dulux Select Decorator",
      sampleBusiness: "Mayfair Finish Decorators",
      tagline: "Dustless spray finishes, heritage wallpapering and exterior masonry protection.",
      photo: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Interior Decorating", "Flawless walls, ceilings & satin woodwork using Farrow & Ball / Dulux.", "Free Quote"],
        ["Airless Spray Painting", "Factory-smooth finishes on kitchens, media walls & new builds.", "From £450"],
        ["Feature Wallpapering", "Precision hanging of designer murals, silk & wide-vinyl papers.", "From £220"],
        ["Exterior Masonry & Sash", "Weather-shield masonry coatings and timber window restoration.", "Free Quote"],
        ["Kitchen Cabinet Respray", "Transform tired cupboards for a fraction of replacement cost.", "From £1,100"],
        ["Commercial Refreshes", "Out-of-hours retail, hospitality & office redecoration.", "Free Quote"]
      ]
    },
    {
      id: "solar",
      name: "Solar & EV Chargers",
      short: "Renewables",
      badge: "MCS & RECC Certified",
      sampleBusiness: "Solstice Energy UK",
      tagline: "High-yield solar PV arrays, Tesla/GivEnergy battery storage and smart EV charging.",
      photo: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Solar PV Installations", "Tier-1 all-black 440W panels with 25-year performance warranty.", "From £4,995"],
        ["Home Battery Storage", "Store cheap off-peak & solar power to slash bills by up to 80%.", "From £2,850"],
        ["Smart EV Chargers", "Solar-divert chargers (Zappi, Hypervolt, Ohme) neatly installed.", "From £849"],
        ["Bird Proofing Mesh", "Discreet black mesh protection preventing pigeon nesting.", "From £420"],
        ["Commercial Rooftop PV", "High-ROI solar arrays for warehouses, farms & offices.", "Free Audit"],
        ["System Health Checks", "Inverter upgrades, thermal imaging & panel cleaning.", "From £140"]
      ]
    },
    {
      id: "carpenter",
      name: "Bespoke Carpentry",
      short: "Joinery",
      badge: "City & Guilds Master Joiner",
      sampleBusiness: "Alder & Grain Joinery",
      tagline: "Made-to-measure alcove cabinetry, fitted wardrobes and architectural staircases.",
      photo: "https://images.unsplash.com/photo-1611021061285-19a87a1964e2?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Fitted Wardrobes", "Floor-to-ceiling shaker & modern flush storage tailored to any room.", "From £1,400"],
        ["Media Walls & Alcoves", "Floating cabinetry, oak shelving & integrated fireplace frames.", "From £950"],
        ["Oak & Engineered Flooring", "Herringbone parquet and solid wood flooring precision-laid.", "From £45/m²"],
        ["Staircase Renovations", "Solid oak treads, glass balustrades & painted spindles.", "Free Quote"],
        ["Internal & Front Doors", "Fire doors, oak veneer sets & heritage ironmongery.", "From £110/door"],
        ["Bespoke Kitchen Fitting", "Precision worktop mitres and custom pantry builds.", "Free Quote"]
      ]
    },
    {
      id: "treesurgeon",
      name: "Tree Surgeon & Arborist",
      short: "Arborist",
      badge: "NPTC Qualified · £10M Insured",
      sampleBusiness: "Canopy Care Arborists",
      tagline: "Safe sectional tree felling, crown reduction, hedge shaping and stump grinding.",
      photo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Crown Reduction & Thinning", "BS3998 pruning to bring back natural light while keeping trees healthy.", "From £220"],
        ["Sectional Tree Felling", "Controlled dismantling in tight gardens with zero property damage.", "Free Quote"],
        ["Stump Grinding", "Deep mechanical stump removal ready for instant replanting or turf.", "From £110"],
        ["Hedge Trimming & Shaping", "Crisp formal hedges, laurel reductions & full green waste removal.", "From £95"],
        ["24/7 Storm Callout", "Urgent clearance of fallen limbs and wind-damaged trees.", "Rapid ETA"],
        ["TPO & Council Checks", "We handle Tree Preservation Order applications on your behalf.", "Included"]
      ]
    },
    {
      id: "pestcontrol",
      name: "Pest Control",
      short: "Pest Control",
      badge: "BPCA Certified · Unmarked Vans",
      sampleBusiness: "ShieldGuard Pest Control",
      tagline: "Discreet, humane eradication of rodents, wasps and insects with proofing guarantees.",
      photo: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Rodent Eradication", "3-visit rat & mouse control plus steel-mesh entry proofing.", "From £145"],
        ["Same-Day Wasp Nests", "Fast single-visit treatment with 100% nest guarantee.", "From £75"],
        ["Commercial Contracts", "Audit-ready BRC/EHO pest management for restaurants & warehouses.", "Monthly"],
        ["Bird & Solar Proofing", "Humane netting, spikes & solar panel pigeon exclusion.", "From £290"],
        ["Bed Bugs & Fleas", "Heat & residual treatments clearing infestations thoroughly.", "From £180"],
        ["Drain Camera Surveys", "Locate rat entry points in broken underground pipes.", "From £135"]
      ]
    },
    {
      id: "carpet",
      name: "Carpet & Upholstery",
      short: "Carpet Care",
      badge: "NCCA Accredited",
      sampleBusiness: "VelvetRevive Carpet Care",
      tagline: "Truck-mounted hot water extraction, stain removal and rapid-dry sofa restoration.",
      photo: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Deep Carpet Extraction", "Removes deep grit, allergens & odours — dry in 2–3 hours.", "From £45/room"],
        ["Sofa & Armchair Cleaning", "Gentle fabric & leather restoration safe for kids and pets.", "From £75"],
        ["Stain & Pet Odour Rescue", "Targeted red wine, coffee & enzyme urine neutralisation.", "From £40"],
        ["Stairs & Landing Bundle", "High-traffic pile revival with optional Scotchgard protection.", "From £55"],
        ["Rug Specialist Care", "Wool, Persian & silk area rug deep cleaning.", "From £60"],
        ["Commercial Office Carpets", "Low-moisture encapsulation cleaning for large floorplates.", "Free Quote"]
      ]
    },
    {
      id: "scaffolding",
      name: "Scaffolding Services",
      short: "Scaffolding",
      badge: "CISRS · NASC Compliant",
      sampleBusiness: "Apex Access Scaffolding",
      tagline: "Safe, punctual domestic & commercial scaffolding with TG20:21 handover certificates.",
      photo: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Domestic Roof & Chimneys", "Neat, neighbour-friendly towers for roofers, painters & solar.", "From £450"],
        ["Temporary Tin Hat Roofs", "Full weatherproof encapsulation for loft conversions & extensions.", "Free Quote"],
        ["Commercial & Site Access", "Multi-lift gantries, hoists & edge protection.", "Free Quote"],
        ["Solar PV Edge Protection", "Rapid 1-day erect and strike packages for solar installers.", "Fixed Rate"],
        ["Alarmed Security Scaffolds", "Perimeter sensors & foam-padded ground standards.", "Included"],
        ["Weekly Safety Inspections", "Statutory 7-day handover tags & full £10M liability cover.", "Included"]
      ]
    },
    {
      id: "garagedoors",
      name: "Garage Doors & Gates",
      short: "Garage Doors",
      badge: "DHF Safety Certified",
      sampleBusiness: "Vanguard Garage Doors UK",
      tagline: "Insulated electric roller doors, sectional doors and automated driveway gates.",
      photo: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Electric Roller Doors", "Space-saving insulated aluminium slats with 2 remote fobs.", "From £1,095"],
        ["Sectional Doors", "Superior thermal seal and contemporary anthracite finishes.", "From £1,495"],
        ["Same-Day Repairs", "Snapped cables, broken springs, motors & remote recoding.", "From £85"],
        ["Automated Driveway Gates", "Timber & aluminium sliding/swing gates with intercoms.", "Free Survey"],
        ["Smart Phone Control", "Open, close and check door status from anywhere via app.", "From £140"],
        ["Old Door Disposal", "Full removal and recycling of your existing frame and door.", "Included"]
      ]
    },
    {
      id: "fencing",
      name: "Fencing & Driveways",
      short: "Fencing",
      badge: "15-Year Timber Guarantee",
      sampleBusiness: "Borderline Fencing & Paving",
      tagline: "Storm-proof concrete post fencing, resin driveways and contemporary cedar slats.",
      photo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      services: [
        ["Closeboard & Feather Edge", "Heavy-duty pressure-treated panels with concrete gravel boards.", "From £95/bay"],
        ["Contemporary Slatted Cedar", "Architectural horizontal screening for modern gardens.", "From £145/bay"],
        ["Resin-Bound Driveways", "SUDS-compliant, weed-free luxury aggregate finishes.", "Free Quote"],
        ["Storm Damage Repairs", "Fast replacement of blown-down posts and panels.", "From £160"],
        ["Bespoke Garden Gates", "Mortise-and-tenon framed side gates with heavy ironmongery.", "From £240"],
        ["Commercial Palisade", "High-security steel mesh and perimeter fencing.", "Free Quote"]
      ]
    }
  ];

  const PALETTES = [
    { id: "obsidian-gold", name: "Obsidian Gold", dark: true, bg: "#09090b", surface: "#121216", surfaceAlt: "#1a1a21", text: "#fafafa", muted: "#a1a1aa", accent: "#f59e0b", accentText: "#09090b", border: "rgba(255,255,255,0.10)" },
    { id: "midnight-cobalt", name: "Midnight Cobalt", dark: true, bg: "#060913", surface: "#0e1526", surfaceAlt: "#162038", text: "#f8fafc", muted: "#94a3b8", accent: "#3b82f6", accentText: "#ffffff", border: "rgba(148,163,184,0.14)" },
    { id: "british-green", name: "British Racing", dark: true, bg: "#05140e", surface: "#0b2219", surfaceAlt: "#123125", text: "#ecfdf5", muted: "#86efac", accent: "#10b981", accentText: "#052e16", border: "rgba(16,185,129,0.18)" },
    { id: "editorial-cream", name: "Editorial Cream", dark: false, bg: "#faf8f4", surface: "#ffffff", surfaceAlt: "#f2ede4", text: "#141413", muted: "#57534e", accent: "#c2410c", accentText: "#ffffff", border: "rgba(20,20,19,0.10)" },
    { id: "nordic-slate", name: "Nordic Slate", dark: false, bg: "#f8fafc", surface: "#ffffff", surfaceAlt: "#eef2f6", text: "#0f172a", muted: "#475569", accent: "#0284c7", accentText: "#ffffff", border: "rgba(15,23,42,0.09)" },
    { id: "carbon-lime", name: "Carbon Electric", dark: true, bg: "#0b0d0c", surface: "#141715", surfaceAlt: "#1c211e", text: "#f4f7f5", muted: "#9ca3af", accent: "#a3e635", accentText: "#0b0d0c", border: "rgba(255,255,255,0.09)" },
    { id: "royal-navy", name: "Royal Navy", dark: false, bg: "#ffffff", surface: "#f4f6fb", surfaceAlt: "#e6ecf7", text: "#0c1938", muted: "#475569", accent: "#1d4ed8", accentText: "#ffffff", border: "rgba(12,25,56,0.10)" },
    { id: "copper-forge", name: "Copper Forge", dark: true, bg: "#100c0a", surface: "#1b1411", surfaceAlt: "#261c17", text: "#faf5f0", muted: "#b8a89d", accent: "#ea580c", accentText: "#ffffff", border: "rgba(255,237,213,0.12)" },
    { id: "emerald-white", name: "Emerald Minimal", dark: false, bg: "#f9fbfa", surface: "#ffffff", surfaceAlt: "#ebf4ef", text: "#0c2017", muted: "#4b6358", accent: "#059669", accentText: "#ffffff", border: "rgba(12,32,23,0.09)" },
    { id: "crimson-pro", name: "Crimson Pro", dark: true, bg: "#0c0a0b", surface: "#171214", surfaceAlt: "#231a1e", text: "#fafafa", muted: "#a8a29e", accent: "#e11d48", accentText: "#ffffff", border: "rgba(255,255,255,0.10)" },
    { id: "sandstone-studio", name: "Sandstone Studio", dark: false, bg: "#f5f2eb", surface: "#ffffff", surfaceAlt: "#e9e3d7", text: "#1c1917", muted: "#57534e", accent: "#1c1917", accentText: "#faf8f4", border: "rgba(28,25,23,0.12)" },
    { id: "violet-future", name: "Violet Studio", dark: true, bg: "#07060d", surface: "#110f1f", surfaceAlt: "#1b1730", text: "#f8fafc", muted: "#a5b4fc", accent: "#8b5cf6", accentText: "#ffffff", border: "rgba(167,139,250,0.18)" }
  ];

  const ARCHITECTURES = [
    { id: "split", name: "Split Architectural", desc: "Asymmetric editorial split with framed photography" },
    { id: "fullbleed", name: "Full-Bleed Editorial", desc: "Cinematic full-width backdrop with glass stat strip" },
    { id: "bento", name: "Bento Showcase", desc: "Modern modular Bento grid hero inspired by Linear" },
    { id: "industrial", name: "Industrial Bold", desc: "High-contrast display typography & geometric accents" },
    { id: "luxury", name: "Luxury Centered", desc: "Refined centered showcase with panoramic frame" },
    { id: "quotefirst", name: "Quote-First Split", desc: "High-converting instant quote card above the fold" }
  ];

  const FONTS = [
    { id: "jakarta", name: "Plus Jakarta + Inter", heading: "'Plus Jakarta Sans', sans-serif", body: "'Inter', sans-serif" },
    { id: "playfair", name: "Playfair + DM Sans", heading: "'Playfair Display', serif", body: "'DM Sans', sans-serif" },
    { id: "space", name: "Space Grotesk + Inter", heading: "'Space Grotesk', sans-serif", body: "'Inter', sans-serif" },
    { id: "outfit", name: "Outfit + Manrope", heading: "'Outfit', sans-serif", body: "'Manrope', sans-serif" }
  ];

  const SURFACES = [
    { id: "glass", name: "Elevated Soft", radius: "24px", btnRadius: "14px" },
    { id: "sharp", name: "Sharp Architectural", radius: "4px", btnRadius: "4px" }
  ];

  const TOTAL_LAYOUTS = INDUSTRIES.length * PALETTES.length * ARCHITECTURES.length * FONTS.length * SURFACES.length; // 11,520

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatId(index) {
    return "UK-" + String(index + 1).padStart(5, "0");
  }

  function parseId(idStr) {
    if (typeof idStr === "number") return Math.max(0, Math.min(TOTAL_LAYOUTS - 1, idStr));
    const m = String(idStr || "").match(/(\d+)/);
    const num = m ? parseInt(m[1], 10) - 1 : 0;
    return Math.max(0, Math.min(TOTAL_LAYOUTS - 1, num));
  }

  function getLayoutByIndex(index) {
    const idx = Math.max(0, Math.min(TOTAL_LAYOUTS - 1, index));
    let n = idx;
    const surface = SURFACES[n % SURFACES.length]; n = Math.floor(n / SURFACES.length);
    const font = FONTS[n % FONTS.length]; n = Math.floor(n / FONTS.length);
    const arch = ARCHITECTURES[n % ARCHITECTURES.length]; n = Math.floor(n / ARCHITECTURES.length);
    const palette = PALETTES[n % PALETTES.length]; n = Math.floor(n / PALETTES.length);
    const industry = INDUSTRIES[n % INDUSTRIES.length];

    return {
      index: idx,
      code: formatId(idx),
      industry,
      palette,
      arch,
      font,
      surface
    };
  }

  function renderCardThumbnail(layout) {
    const { industry: ind, palette: p, arch, surface } = layout;
    const r = surface.id === "sharp" ? "3px" : "10px";
    const br = surface.id === "sharp" ? "2px" : "999px";
    const borderCol = p.border;

    let heroMini = "";
    if (arch.id === "fullbleed") {
      heroMini = `
        <div style="position:relative;height:132px;border-radius:${r};overflow:hidden;border:1px solid ${borderCol};background:#000;">
          <img src="${ind.photo}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;opacity:0.48;" />
          <div style="position:absolute;inset:0;padding:12px;display:flex;flex-direction:column;justify-content:flex-end;background:linear-gradient(to top, ${p.bg}, transparent);">
            <div style="width:42%;height:5px;border-radius:99px;background:${p.accent};margin-bottom:6px;"></div>
            <div style="font-size:11px;font-weight:800;line-height:1.15;color:#fff;font-family:${layout.font.heading};">${escapeHtml(ind.sampleBusiness)}</div>
            <div style="margin-top:6px;display:flex;gap:5px;">
              <span style="padding:3px 7px;border-radius:${br};background:${p.accent};color:${p.accentText};font-size:7px;font-weight:700;">Call Now</span>
              <span style="padding:3px 7px;border-radius:${br};background:rgba(255,255,255,0.16);color:#fff;font-size:7px;">Free Quote</span>
            </div>
          </div>
        </div>`;
    } else if (arch.id === "bento") {
      heroMini = `
        <div style="display:grid;grid-template-columns:1.35fr 1fr;gap:6px;height:132px;">
          <div style="background:${p.surface};border:1px solid ${borderCol};border-radius:${r};padding:10px;display:flex;flex-direction:column;justify-content:space-between;">
            <span style="font-size:7px;font-weight:700;color:${p.accent};text-transform:uppercase;letter-spacing:.06em;">${escapeHtml(ind.short)}</span>
            <div style="font-size:10px;font-weight:800;line-height:1.15;color:${p.text};font-family:${layout.font.heading};">${escapeHtml(ind.sampleBusiness)}</div>
            <span style="display:inline-block;width:fit-content;padding:3px 7px;border-radius:${br};background:${p.accent};color:${p.accentText};font-size:7px;font-weight:700;">Book Today</span>
          </div>
          <div style="display:grid;grid-template-rows:1fr auto;gap:6px;">
            <div style="border-radius:${r};overflow:hidden;border:1px solid ${borderCol};"><img src="${ind.photo}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;" /></div>
            <div style="background:${p.surfaceAlt};border:1px solid ${borderCol};border-radius:${r};padding:5px 7px;font-size:7px;font-weight:700;color:${p.text};display:flex;justify-content:space-between;"><span>★ 4.9</span><span style="color:${p.accent};">24/7</span></div>
          </div>
        </div>`;
    } else if (arch.id === "luxury") {
      heroMini = `
        <div style="height:132px;background:${p.surface};border:1px solid ${borderCol};border-radius:${r};padding:10px;display:flex;flex-direction:column;align-items:center;text-align:center;justify-content:space-between;">
          <div style="font-size:6.5px;letter-spacing:.14em;text-transform:uppercase;color:${p.accent};font-weight:700;">${escapeHtml(ind.badge)}</div>
          <div style="font-size:10.5px;font-weight:800;line-height:1.15;color:${p.text};font-family:${layout.font.heading};max-width:90%;">${escapeHtml(ind.sampleBusiness)}</div>
          <div style="width:100%;height:56px;border-radius:${r};overflow:hidden;border:1px solid ${borderCol};"><img src="${ind.photo}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;" /></div>
        </div>`;
    } else if (arch.id === "quotefirst") {
      heroMini = `
        <div style="display:grid;grid-template-columns:1.15fr 1fr;gap:6px;height:132px;">
          <div style="padding:6px 4px;display:flex;flex-direction:column;justify-content:center;gap:5px;">
            <span style="font-size:6.5px;color:${p.accent};font-weight:700;text-transform:uppercase;">● Available Today</span>
            <div style="font-size:10px;font-weight:800;line-height:1.15;color:${p.text};font-family:${layout.font.heading};">${escapeHtml(ind.sampleBusiness)}</div>
            <div style="height:4px;width:75%;border-radius:99px;background:${p.surfaceAlt};"></div>
          </div>
          <div style="background:${p.surface};border:1px solid ${borderCol};border-radius:${r};padding:8px;display:flex;flex-direction:column;justify-content:space-between;">
            <div style="font-size:7px;font-weight:700;color:${p.text};">Instant Quote</div>
            <div style="height:14px;border-radius:4px;background:${p.surfaceAlt};"></div>
            <div style="height:14px;border-radius:4px;background:${p.surfaceAlt};"></div>
            <div style="height:16px;border-radius:${br};background:${p.accent};color:${p.accentText};font-size:6.5px;font-weight:700;display:flex;align-items:center;justify-content:center;">Get Price →</div>
          </div>
        </div>`;
    } else {
      // split or industrial
      heroMini = `
        <div style="display:grid;grid-template-columns:1.15fr 1fr;gap:8px;height:132px;align-items:stretch;">
          <div style="padding:6px 2px;display:flex;flex-direction:column;justify-content:space-between;">
            <div style="display:flex;align-items:center;gap:4px;">
              <span style="width:6px;height:6px;border-radius:99px;background:${p.accent};"></span>
              <span style="font-size:6.5px;font-weight:700;color:${p.muted};text-transform:uppercase;">${escapeHtml(ind.short)}</span>
            </div>
            <div style="font-size:10.5px;font-weight:800;line-height:1.15;color:${p.text};font-family:${layout.font.heading};">${escapeHtml(ind.sampleBusiness)}</div>
            <div style="display:flex;gap:4px;">
              <span style="padding:4px 7px;border-radius:${br};background:${p.accent};color:${p.accentText};font-size:7px;font-weight:700;">Call Now</span>
              <span style="padding:4px 6px;border-radius:${br};border:1px solid ${borderCol};color:${p.text};font-size:7px;">Prices</span>
            </div>
          </div>
          <div style="border-radius:${r};overflow:hidden;border:1px solid ${borderCol};position:relative;">
            <img src="${ind.photo}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;" />
            <div style="position:absolute;bottom:5px;left:5px;right:5px;background:${p.dark ? 'rgba(0,0,0,0.72)' : 'rgba(255,255,255,0.88)'};backdrop-filter:blur(4px);padding:3px 6px;border-radius:6px;font-size:6.5px;font-weight:700;color:${p.text};">★ 4.9 · Verified UK</div>
          </div>
        </div>`;
    }

    return `
      <div style="background:${p.bg};padding:10px;border-radius:14px;border:1px solid ${borderCol};">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid ${borderCol};">
          <div style="display:flex;gap:4px;">
            <span style="width:6px;height:6px;border-radius:99px;background:${p.muted};opacity:.4;"></span>
            <span style="width:6px;height:6px;border-radius:99px;background:${p.muted};opacity:.4;"></span>
            <span style="width:6px;height:6px;border-radius:99px;background:${p.accent};"></span>
          </div>
          <span style="font-size:7px;color:${p.muted};font-family:monospace;">${layout.code}</span>
        </div>
        ${heroMini}
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:5px;margin-top:8px;">
          ${ind.services.slice(0, 3).map(s => `
            <div style="background:${p.surface};border:1px solid ${borderCol};border-radius:${surface.id === 'sharp' ? '2px' : '6px'};padding:5px;">
              <div style="font-size:6.5px;font-weight:700;color:${p.text};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(s[0])}</div>
              <div style="font-size:6px;color:${p.accent};font-weight:700;margin-top:2px;">${escapeHtml(s[2])}</div>
            </div>
          `).join("")}
        </div>
      </div>`;
  }

  function renderFullPageHTML(layout, custom) {
    const c = custom || {};
    const { industry: ind, palette: p, arch, font, surface } = layout;
    const biz = escapeHtml(c.business || ind.sampleBusiness);
    const city = escapeHtml(c.city || "Manchester");
    const phone = escapeHtml(c.phone || "07700 900482");
    const phoneHref = (c.phone || "07700900482").replace(/[^0-9+]/g, "");
    const email = escapeHtml(c.email || "enquiries@localbusiness.co.uk");
    const domain = escapeHtml(c.domain || biz.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 20) + ".co.uk");
    const logoHtml = c.logoDataUrl
      ? `<img src="${c.logoDataUrl}" alt="${biz}" style="height:36px;max-width:160px;object-fit:contain;" />`
      : `<div style="display:flex;align-items:center;gap:10px;"><span style="width:34px;height:34px;border-radius:${surface.btnRadius};background:${p.accent};color:${p.accentText};display:inline-flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;">${biz.charAt(0)}</span><span style="font-weight:800;font-size:17px;letter-spacing:-.02em;font-family:${font.heading};">${biz}</span></div>`;

    const r = surface.radius;
    const br = surface.btnRadius;

    let heroSection = "";
    if (arch.id === "fullbleed") {
      heroSection = `
      <section style="position:relative;min-height:620px;display:flex;align-items:flex-end;overflow:hidden;background:#000;">
        <img src="${ind.photo}" alt="${biz}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.42;" />
        <div style="position:absolute;inset:0;background:linear-gradient(180deg, rgba(0,0,0,0.35) 0%, ${p.bg} 100%);"></div>
        <div class="container" style="position:relative;z-index:2;padding:110px 24px 64px;">
          <span class="pill" style="background:rgba(255,255,255,0.12);color:#fff;border:1px solid rgba(255,255,255,0.2);">${escapeHtml(ind.badge)} · ${city}</span>
          <h1 style="font-size:clamp(38px,5.6vw,68px);line-height:1.04;font-weight:800;margin:20px 0;max-width:860px;color:#fff;font-family:${font.heading};letter-spacing:-.03em;">Trusted ${escapeHtml(ind.name)} in ${city}</h1>
          <p style="font-size:19px;line-height:1.6;color:rgba(255,255,255,0.82);max-width:620px;margin-bottom:32px;">${escapeHtml(ind.tagline)}</p>
          <div style="display:flex;flex-wrap:wrap;gap:14px;">
            <a href="tel:${phoneHref}" class="btn-primary">Call ${phone}</a>
            <a href="#quote" class="btn-ghost" style="color:#fff;border-color:rgba(255,255,255,0.3);">Request Free Quote →</a>
          </div>
          <div style="margin-top:48px;display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;background:rgba(255,255,255,0.08);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.14);border-radius:${r};padding:20px;">
            <div><div style="font-size:26px;font-weight:800;color:#fff;">4.9 ★</div><div style="font-size:13px;color:rgba(255,255,255,0.7);">Google & Checkatrade</div></div>
            <div><div style="font-size:26px;font-weight:800;color:#fff;">60 min</div><div style="font-size:13px;color:rgba(255,255,255,0.7);">Fast Local Response</div></div>
            <div><div style="font-size:26px;font-weight:800;color:#fff;">£5M</div><div style="font-size:13px;color:rgba(255,255,255,0.7);">Public Liability Cover</div></div>
            <div><div style="font-size:26px;font-weight:800;color:#fff;">12 mo</div><div style="font-size:13px;color:rgba(255,255,255,0.7);">Workmanship Guarantee</div></div>
          </div>
        </div>
      </section>`;
    } else if (arch.id === "bento") {
      heroSection = `
      <section class="container" style="padding:56px 24px 40px;">
        <div class="bento-hero">
          <div style="background:${p.surface};border:1px solid ${p.border};border-radius:${r};padding:40px;display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <span class="pill">${escapeHtml(ind.badge)}</span>
              <h1 style="font-size:clamp(34px,4.5vw,56px);line-height:1.06;font-weight:800;margin:20px 0 16px;font-family:${font.heading};letter-spacing:-.03em;">${escapeHtml(ind.name)} across ${city}.</h1>
              <p style="font-size:17px;color:${p.muted};line-height:1.65;max-width:520px;">${escapeHtml(ind.tagline)}</p>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:32px;">
              <a href="tel:${phoneHref}" class="btn-primary">Call ${phone}</a>
              <a href="#services" class="btn-ghost">View Prices</a>
            </div>
          </div>
          <div style="display:grid;grid-template-rows:1.4fr 1fr;gap:18px;">
            <div style="border-radius:${r};overflow:hidden;border:1px solid ${p.border};min-height:240px;">
              <img src="${ind.photo}" alt="${biz}" style="width:100%;height:100%;object-fit:cover;" />
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;">
              <div style="background:${p.accent};color:${p.accentText};border-radius:${r};padding:22px;display:flex;flex-direction:column;justify-content:space-between;">
                <div style="font-size:12px;font-weight:700;text-transform:uppercase;opacity:.85;">Customer Rating</div>
                <div style="font-size:34px;font-weight:800;line-height:1;">4.9★</div>
                <div style="font-size:12px;opacity:.9;">180+ local reviews</div>
              </div>
              <div style="background:${p.surfaceAlt};border:1px solid ${p.border};border-radius:${r};padding:22px;display:flex;flex-direction:column;justify-content:space-between;">
                <div style="font-size:12px;font-weight:700;color:${p.accent};">● AVAILABLE NOW</div>
                <div style="font-size:20px;font-weight:800;">Same-Day ${city}</div>
                <div style="font-size:12px;color:${p.muted};">No hidden callout fees</div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
    } else if (arch.id === "luxury") {
      heroSection = `
      <section class="container" style="padding:72px 24px 40px;text-align:center;">
        <span class="pill">${escapeHtml(ind.badge)} · Serving ${city}</span>
        <h1 style="font-size:clamp(38px,5.5vw,66px);line-height:1.06;font-weight:800;margin:22px auto 18px;max-width:820px;font-family:${font.heading};letter-spacing:-.025em;">${biz}</h1>
        <p style="font-size:19px;color:${p.muted};line-height:1.65;max-width:620px;margin:0 auto 32px;">${escapeHtml(ind.tagline)}</p>
        <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:14px;margin-bottom:48px;">
          <a href="tel:${phoneHref}" class="btn-primary">Call ${phone}</a>
          <a href="#quote" class="btn-ghost">Book a Free Visit</a>
        </div>
        <div style="border-radius:${r};overflow:hidden;border:1px solid ${p.border};max-height:460px;box-shadow:0 30px 70px rgba(0,0,0,0.22);">
          <img src="${ind.photo}" alt="${biz}" style="width:100%;height:460px;object-fit:cover;" />
        </div>
      </section>`;
    } else if (arch.id === "quotefirst") {
      heroSection = `
      <section class="container" style="padding:64px 24px 48px;">
        <div class="split-hero">
          <div>
            <span class="pill">${escapeHtml(ind.badge)}</span>
            <h1 style="font-size:clamp(36px,4.8vw,58px);line-height:1.06;font-weight:800;margin:20px 0 18px;font-family:${font.heading};letter-spacing:-.03em;">Reliable ${escapeHtml(ind.name)} in ${city}</h1>
            <p style="font-size:18px;color:${p.muted};line-height:1.65;margin-bottom:28px;">${escapeHtml(ind.tagline)}</p>
            <div style="display:flex;flex-wrap:wrap;gap:18px;margin-bottom:28px;font-size:14px;font-weight:600;">
              <span>✓ Upfront Fixed Pricing</span>
              <span>✓ Fully Insured (£5M)</span>
              <span>✓ 12-Month Guarantee</span>
            </div>
            <a href="tel:${phoneHref}" class="btn-primary">Direct Line: ${phone}</a>
          </div>
          <div style="background:${p.surface};border:1px solid ${p.border};border-radius:${r};padding:32px;box-shadow:0 24px 60px rgba(0,0,0,0.16);">
            <div style="font-size:12px;font-weight:700;color:${p.accent};text-transform:uppercase;letter-spacing:.08em;">60-Second Estimate</div>
            <h2 style="font-size:24px;font-weight:800;margin:6px 0 18px;font-family:${font.heading};">Get a Free ${city} Quote</h2>
            <form onsubmit="event.preventDefault();this.querySelector('button').textContent='✓ Request Received — We Will Call Shortly!';">
              <input class="field" placeholder="Your Name" required />
              <input class="field" placeholder="Phone Number or Postcode" required />
              <textarea class="field" rows="3" placeholder="Briefly describe what you need help with..."></textarea>
              <button type="submit" class="btn-primary" style="width:100%;justify-content:center;border:none;cursor:pointer;">Request Callback →</button>
            </form>
          </div>
        </div>
      </section>`;
    } else {
      // split or industrial
      const accentBar = arch.id === "industrial" ? `<div style="width:56px;height:5px;background:${p.accent};margin-bottom:18px;"></div>` : "";
      heroSection = `
      <section class="container" style="padding:64px 24px 48px;">
        <div class="split-hero">
          <div>
            ${accentBar}
            <span class="pill">${escapeHtml(ind.badge)} · ${city}</span>
            <h1 style="font-size:clamp(36px,4.8vw,60px);line-height:1.05;font-weight:800;margin:20px 0 18px;font-family:${font.heading};letter-spacing:-.03em;">${escapeHtml(ind.name)} You Can Rely On in ${city}.</h1>
            <p style="font-size:18px;color:${p.muted};line-height:1.65;margin-bottom:30px;">${escapeHtml(ind.tagline)}</p>
            <div style="display:flex;flex-wrap:wrap;gap:12px;">
              <a href="tel:${phoneHref}" class="btn-primary">Call ${phone}</a>
              <a href="#quote" class="btn-ghost">Get a Free Quote</a>
            </div>
            <div style="margin-top:28px;display:flex;align-items:center;gap:14px;font-size:13px;color:${p.muted};">
              <span style="color:${p.accent};font-size:16px;">★★★★★</span>
              <span><strong style="color:${p.text};">4.9 / 5.0</strong> from 160+ verified ${city} customers</span>
            </div>
          </div>
          <div style="position:relative;">
            <div style="border-radius:${r};overflow:hidden;border:1px solid ${p.border};box-shadow:0 28px 65px rgba(0,0,0,0.22);">
              <img src="${ind.photo}" alt="${biz}" style="width:100%;height:460px;object-fit:cover;display:block;" />
            </div>
            <div style="position:absolute;bottom:18px;left:18px;right:18px;background:${p.dark ? 'rgba(10,10,14,0.84)' : 'rgba(255,255,255,0.92)'};backdrop-filter:blur(14px);border:1px solid ${p.border};border-radius:${surface.id === 'sharp' ? '4px' : '16px'};padding:14px 18px;display:flex;justify-content:space-between;align-items:center;">
              <div><div style="font-size:13px;font-weight:800;">Fast Local Callout</div><div style="font-size:12px;color:${p.muted};">Covering ${city} & surrounding postcodes</div></div>
              <span style="padding:6px 12px;border-radius:999px;background:${p.accent};color:${p.accentText};font-size:12px;font-weight:800;">Open Today</span>
            </div>
          </div>
        </div>
      </section>`;
    }

    return `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${biz} — ${escapeHtml(ind.name)} in ${city}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500;600;700;800&family=Manrope:wght@400;600;700;800&family=Outfit:wght@600;700;800&family=Playfair+Display:wght@700;800&family=Plus+Jakarta+Sans:wght@600;700;800&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin: 0; background: ${p.bg}; color: ${p.text}; font-family: ${font.body}; -webkit-font-smoothing: antialiased; }
    a { color: inherit; text-decoration: none; }
    .container { max-width: 1160px; margin: 0 auto; }
    .pill { display: inline-flex; align-items: center; gap: 8px; padding: 7px 14px; border-radius: 999px; font-size: 12px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; background: ${p.surfaceAlt}; color: ${p.accent}; border: 1px solid ${p.border}; }
    .btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 14px 26px; border-radius: ${br}; background: ${p.accent}; color: ${p.accentText}; font-weight: 700; font-size: 15px; transition: transform .15s, opacity .15s; }
    .btn-primary:hover { transform: translateY(-1px); opacity: .94; }
    .btn-ghost { display: inline-flex; align-items: center; gap: 8px; padding: 14px 24px; border-radius: ${br}; border: 1px solid ${p.border}; background: transparent; color: ${p.text}; font-weight: 700; font-size: 15px; }
    .split-hero { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; }
    .bento-hero { display: grid; grid-template-columns: 1.2fr 1fr; gap: 18px; }
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .card { background: ${p.surface}; border: 1px solid ${p.border}; border-radius: ${r}; padding: 28px; transition: transform .18s, border-color .18s; }
    .card:hover { transform: translateY(-3px); border-color: ${p.accent}; }
    .field { width: 100%; padding: 13px 15px; border-radius: ${surface.id === 'sharp' ? '4px' : '12px'}; border: 1px solid ${p.border}; background: ${p.bg}; color: ${p.text}; font-family: inherit; font-size: 14px; margin-bottom: 12px; }
    details { background: ${p.surface}; border: 1px solid ${p.border}; border-radius: ${r}; padding: 18px 22px; margin-bottom: 12px; }
    summary { font-weight: 700; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; }
    @media (max-width: 860px) {
      .split-hero, .bento-hero, .grid-3 { grid-template-columns: 1fr; }
      .nav-links { display: none !important; }
    }
  </style>
</head>
<body>
  <header style="position:sticky;top:0;z-index:40;background:${p.dark ? 'rgba(9,9,11,0.82)' : 'rgba(255,255,255,0.86)'};backdrop-filter:blur(16px);border-bottom:1px solid ${p.border};">
    <div class="container" style="padding:16px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;">
      ${logoHtml}
      <nav class="nav-links" style="display:flex;gap:28px;font-size:14px;font-weight:600;color:${p.muted};">
        <a href="#services">Services</a>
        <a href="#process">How It Works</a>
        <a href="#reviews">Reviews</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a href="tel:${phoneHref}" class="btn-primary" style="padding:10px 18px;font-size:13px;">Call ${phone}</a>
    </div>
  </header>

  ${heroSection}

  <section style="border-top:1px solid ${p.border};border-bottom:1px solid ${p.border};background:${p.surface};">
    <div class="container" style="padding:22px 24px;display:flex;flex-wrap:wrap;justify-content:space-between;gap:16px;font-size:13px;font-weight:700;color:${p.muted};">
      <span>✓ ${escapeHtml(ind.badge)}</span>
      <span>✓ Transparent Fixed Quotes</span>
      <span>✓ Fully Insured up to £5M</span>
      <span>✓ 12-Month Guarantee</span>
      <span>✓ Local to ${city}</span>
    </div>
  </section>

  <section id="services" class="container" style="padding:84px 24px;">
    <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:18px;margin-bottom:40px;">
      <div>
        <span class="pill">What We Do</span>
        <h2 style="font-size:clamp(28px,3.6vw,42px);font-weight:800;margin:14px 0 0;font-family:${font.heading};letter-spacing:-.025em;">Our ${escapeHtml(ind.short)} Services</h2>
      </div>
      <p style="max-width:420px;color:${p.muted};margin:0;line-height:1.6;">Every job includes a clear written quote before we begin, tidy workmanship, and our full 12-month guarantee.</p>
    </div>
    <div class="grid-3">
      ${ind.services.map(s => `
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
            <span style="width:40px;height:40px;border-radius:${surface.id === 'sharp' ? '4px' : '12px'};background:${p.surfaceAlt};color:${p.accent};display:inline-flex;align-items:center;justify-content:center;font-weight:800;">✓</span>
            <span style="font-size:12px;font-weight:700;padding:5px 10px;border-radius:999px;background:${p.surfaceAlt};color:${p.accent};">${escapeHtml(s[2])}</span>
          </div>
          <h3 style="font-size:19px;font-weight:800;margin:0 0 10px;font-family:${font.heading};">${escapeHtml(s[0])}</h3>
          <p style="font-size:14px;line-height:1.6;color:${p.muted};margin:0;">${escapeHtml(s[1])}</p>
        </div>
      `).join("")}
    </div>
  </section>

  <section id="process" style="background:${p.surface};border-top:1px solid ${p.border};border-bottom:1px solid ${p.border};">
    <div class="container" style="padding:80px 24px;">
      <span class="pill">Simple 3-Step Process</span>
      <h2 style="font-size:clamp(28px,3.4vw,40px);font-weight:800;margin:14px 0 36px;font-family:${font.heading};">How We Work in ${city}</h2>
      <div class="grid-3">
        <div class="card" style="background:${p.bg};"><div style="font-size:13px;font-weight:800;color:${p.accent};">01 / ENQUIRE</div><h3 style="margin:10px 0 8px;font-size:20px;font-family:${font.heading};">Fast, Clear Quote</h3><p style="color:${p.muted};font-size:14px;line-height:1.6;margin:0;">Call or message us with your postcode. We give honest advice and a clear fixed price — no pushy sales.</p></div>
        <div class="card" style="background:${p.bg};"><div style="font-size:13px;font-weight:800;color:${p.accent};">02 / COMPLETE</div><h3 style="margin:10px 0 8px;font-size:20px;font-family:${font.heading};">Punctual Execution</h3><p style="color:${p.muted};font-size:14px;line-height:1.6;margin:0;">We arrive on time, protect your home, use quality parts and leave everything spotless.</p></div>
        <div class="card" style="background:${p.bg};"><div style="font-size:13px;font-weight:800;color:${p.accent};">03 / GUARANTEE</div><h3 style="margin:10px 0 8px;font-size:20px;font-family:${font.heading};">Signed Off & Covered</h3><p style="color:${p.muted};font-size:14px;line-height:1.6;margin:0;">You only pay when completely satisfied, backed by our 12-month workmanship warranty.</p></div>
      </div>
    </div>
  </section>

  <section id="reviews" class="container" style="padding:84px 24px;">
    <span class="pill">Verified Local Reviews</span>
    <h2 style="font-size:clamp(28px,3.4vw,40px);font-weight:800;margin:14px 0 36px;font-family:${font.heading};">What ${city} Customers Say</h2>
    <div class="grid-3">
      <div class="card"><div style="color:${p.accent};margin-bottom:12px;">★★★★★</div><p style="font-size:15px;line-height:1.65;margin:0 0 18px;">"Arrived within the hour, explained everything clearly and charged the exact price quoted. Wouldn't use anyone else in ${city}."</p><div style="font-size:13px;font-weight:700;">James Thornton · ${city}</div></div>
      <div class="card"><div style="color:${p.accent};margin-bottom:12px;">★★★★★</div><p style="font-size:15px;line-height:1.65;margin:0 0 18px;">"Spotless work from start to finish. Polite, punctual and far more reasonable than the big national companies."</p><div style="font-size:13px;font-weight:700;">Sarah Patel · ${city}</div></div>
      <div class="card"><div style="color:${p.accent};margin-bottom:12px;">★★★★★</div><p style="font-size:15px;line-height:1.65;margin:0 0 18px;">"Booked on Monday, completed Tuesday morning to a brilliant standard. Highly recommend ${biz}."</p><div style="font-size:13px;font-weight:700;">David & Claire Hughes · ${city}</div></div>
    </div>
  </section>

  <section id="faq" class="container" style="padding:0 24px 84px;max-width:860px;">
    <h2 style="font-size:32px;font-weight:800;margin:0 0 24px;font-family:${font.heading};">Frequently Asked Questions</h2>
    <details open><summary>Do you charge a callout fee in ${city}? <span>+</span></summary><p style="color:${p.muted};line-height:1.6;margin:12px 0 0;">No hidden callout charges — we agree a transparent price upfront before starting any work.</p></details>
    <details><summary>Are you fully insured and qualified? <span>+</span></summary><p style="color:${p.muted};line-height:1.6;margin:12px 0 0;">Yes, we carry £5M public liability insurance and hold ${escapeHtml(ind.badge)} credentials.</p></details>
    <details><summary>How quickly can you attend? <span>+</span></summary><p style="color:${p.muted};line-height:1.6;margin:12px 0 0;">For urgent issues we offer same-day callouts across ${city}; routine bookings are usually available within 24–48 hours.</p></details>
  </section>

  <section id="quote" class="container" style="padding:0 24px 84px;">
    <div style="background:${p.accent};color:${p.accentText};border-radius:${r};padding:48px 36px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:24px;">
      <div style="max-width:560px;">
        <h2 style="font-size:clamp(26px,3.6vw,40px);font-weight:800;margin:0 0 10px;font-family:${font.heading};">Ready to book ${biz}?</h2>
        <p style="margin:0;font-size:16px;opacity:.9;">Call us directly for immediate availability or email for a written quote today.</p>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:12px;">
        <a href="tel:${phoneHref}" style="padding:15px 26px;border-radius:${br};background:${p.accentText};color:${p.accent};font-weight:800;font-size:15px;">Call ${phone}</a>
        <a href="mailto:${email}?subject=Quote%20Request" style="padding:15px 24px;border-radius:${br};border:1px solid currentColor;font-weight:700;font-size:15px;">Email Us</a>
      </div>
    </div>
  </section>

  <footer style="border-top:1px solid ${p.border};padding:28px 24px;font-size:13px;color:${p.muted};">
    <div class="container" style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;">
      <span>© 2026 ${biz}. Serving ${city} & surrounding UK areas.</span>
      <span>${domain} · Design ${layout.code}</span>
    </div>
  </footer>
</body>
</html>`;
  }

  global.UKLayoutEngine = {
    INDUSTRIES,
    PALETTES,
    ARCHITECTURES,
    FONTS,
    SURFACES,
    TOTAL_LAYOUTS,
    formatId,
    parseId,
    getLayoutByIndex,
    renderCardThumbnail,
    renderFullPageHTML
  };
})(window);
