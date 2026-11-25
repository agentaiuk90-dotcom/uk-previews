/* LocalWeb UK — Awwwards / Land-book Caliber Parametric Layout Engine (11,520 Zero-Repeat Designs)
   20 UK Industries x 12 Distinct Architectures x 12 Curated Palettes x 4 Editorial Font Systems = 11,520 */
(function (global) {
  "use strict";

  const INDUSTRIES = [
    {
      id: "plumber", name: "Plumbing & Heating", short: "Plumbing", badge: "Gas Safe #648291",
      biz: ["Thames & Crown Plumbing", "Alder Heating Studio", "Kensington Boiler Co."],
      tagline: "Architectural bathroom plumbing, high-efficiency boiler systems & rapid 60-minute callouts.",
      photos: [
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Boiler Installations", "A-rated Vaillant & Worcester Bosch systems with 10-year warranty.", "£1,850+"], ["Emergency Leak Response", "60-minute arrival across local postcodes, zero hidden callout fees.", "From £75"], ["Luxury Bathroom Fitting", "Wet rooms, concealed brassware & underfloor heating.", "Bespoke"], ["Smart Heating & Flushing", "Power flushing, Hive/Nest controls & radiator balancing.", "From £140"]]
    },
    {
      id: "electrician", name: "Electrical Engineering", short: "Electrical", badge: "NICEIC Approved",
      biz: ["Volta & Finch Electrical", "Mayfair Spark Studio", "Gridline Electrical UK"],
      tagline: "Precision architectural lighting, 18th Edition rewires & smart EV charging installations.",
      photos: [
        "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Architectural Lighting", "Recessed LED profiles, Lutron dimming & garden illumination.", "From £320"], ["EV Home Charging", "7kW Hypervolt, Zappi & Ohme chargers neatly installed.", "From £795"], ["Consumer Unit Upgrades", "RCBO surge-protected fuse boards certified in one day.", "From £480"], ["EICR Safety Reports", "Full landlord & homeowner testing certificates.", "From £145"]]
    },
    {
      id: "mechanic", name: "Automotive & Mobile", short: "Automotive", badge: "IMI Master Tech",
      biz: ["Apex Mobile Motorsport", "Sterling Auto Diagnostics", "Veloce Mobile Mechanics"],
      tagline: "Dealer-grade OBD diagnostics, OEM brake servicing & driveway maintenance for prestige & daily cars.",
      photos: [
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Full Manufacturer Service", "Warranty-safe OEM parts & 65-point inspection at your door.", "From £135"], ["Brakes, Discs & Calipers", "Brembo & Bosch braking upgrades fitted same day.", "From £140"], ["Dealer-Level Diagnostics", "ECU fault scanning, DPF regeneration & live telemetry.", "From £60"], ["Pre-Purchase Inspection", "Comprehensive 110-point used car audit before you buy.", "From £95"]]
    },
    {
      id: "roofer", name: "Roofing & Slate", short: "Roofing", badge: "NFRC Accredited",
      biz: ["Heritage Slate & Lead", "Crownline Roofing UK", "Northgate Flat Roofs"],
      tagline: "Natural Welsh slate roofs, seamless GRP flat roofing and heritage Code-4 leadwork.",
      photos: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Welsh Slate & Clay Roofs", "20-year structural warranty on complete pitched replacements.", "Free Survey"], ["EPDM & GRP Flat Roofs", "Seamless architectural flat roofs built to last 35+ years.", "From £980"], ["Chimney & Leadwork", "Traditional lead flashing, repointing & ridge sealing.", "From £260"], ["Drone Roof Audits", "4K aerial inspection report before any work begins.", "Complimentary"]]
    },
    {
      id: "landscaper", name: "Landscape Architecture", short: "Landscaping", badge: "BALI Registered",
      biz: ["Oak & Stone Landscapes", "Botanica Outdoor Living", "Cotswold Garden Studio"],
      tagline: "Bespoke porcelain terraces, architectural cedar screening and outdoor kitchen sanctuaries.",
      photos: [
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Italian Porcelain Patios", "Laser-levelled outdoor terraces with concealed slot drainage.", "Bespoke"], ["Cedar Pergolas & Decking", "Millboard composite decks with integrated LED step lights.", "From £1,400"], ["Resin & Stone Driveways", "SUDS-compliant resin-bound driveways on Type-1 sub-base.", "Free Design"], ["Architectural Planting", "Mature specimen trees, lighting & irrigation systems.", "From £650"]]
    },
    {
      id: "builder", name: "Design & Build", short: "Construction", badge: "FMB Master Builder",
      biz: ["Kensington Build Co.", "Monolith Extensions", "Harbour & Arch Builders"],
      tagline: "Architectural rear extensions, loft master suites and full structural refurbishments.",
      photos: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Glass Rear Extensions", "Open-plan kitchen extensions with structural steel & glazing.", "Turnkey"], ["Loft Conversions", "Dormer & mansard suites adding 20%+ property value.", "Turnkey"], ["Full Refurbishments", "End-to-end project management with weekly stage sign-offs.", "Bespoke"], ["Structural Steelwork", "RSJ beams, load-bearing knock-throughs & building control.", "From £2,400"]]
    },
    {
      id: "carpenter", name: "Bespoke Joinery", short: "Joinery", badge: "Master Craftsman",
      biz: ["Alder & Grain Joinery", "Workshop 14 Cabinetry", "Finchley Bespoke Wood"],
      tagline: "Handcrafted alcove cabinetry, floor-to-ceiling shaker wardrobes and solid oak staircases.",
      photos: [
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Fitted Wardrobes", "Spray-finished shaker & flush doors made to the millimetre.", "From £1,500"], ["Architectural Media Walls", "Fluted oak panelling, floating shelves & hidden cabling.", "From £1,100"], ["Herringbone Flooring", "Engineered European oak laid with acoustic underlay.", "From £52/m²"], ["Staircase Renovations", "Solid oak treads, frameless glass & custom handrails.", "Bespoke"]]
    },
    {
      id: "painter", name: "Interior Decorating", short: "Decorating", badge: "Dulux Select Pro",
      biz: ["Atelier Finish Decorators", "Belgravia Paint Studio", "PureCoat Interiors"],
      tagline: "Dustless HVLP spray finishes, heritage Farrow & Ball interiors and artisanal wallpapering.",
      photos: [
        "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Fine Interior Painting", "Zero-brushmark walls, ceilings & satin joinery.", "Free Quote"], ["Airless Spray Finishes", "Factory-smooth cabinetry, panelling & new builds.", "From £480"], ["Kitchen Respraying", "Transform solid wood kitchens in 3 days with 2K lacquer.", "From £1,150"], ["Designer Wallpapering", "Silk, linen & panoramic mural hanging to perfection.", "From £240"]]
    },
    {
      id: "solar", name: "Solar & Clean Energy", short: "Renewables", badge: "MCS & RECC Certified",
      biz: ["Solstice Energy UK", "Helios Solar & Storage", "GridZero Renewables"],
      tagline: "All-black 450W solar arrays, Tesla Powerwall storage and solar-divert EV charging.",
      photos: [
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["All-Black Solar PV", "Tier-1 monocrystalline panels with 25-year yield warranty.", "From £4,995"], ["Home Battery Storage", "GivEnergy & Tesla storage cutting electricity bills up to 82%.", "From £2,850"], ["Smart EV Integration", "Charge your car directly from excess rooftop sunshine.", "From £849"], ["Commercial Solar", "High-ROI rooftop arrays for UK warehouses & offices.", "Free Audit"]]
    },
    {
      id: "hvac", name: "Climate & Air Con", short: "HVAC", badge: "F-Gas & MCS Certified",
      biz: ["NordicAir Climate UK", "AeroPure Cooling", "Verge Heat Pumps"],
      tagline: "Whisper-quiet Daikin & Mitsubishi air conditioning and grant-eligible air-source heat pumps.",
      photos: [
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Bedroom & Studio Air Con", "19dB whisper-quiet inverter heating & cooling units.", "From £1,290"], ["Air Source Heat Pumps", "£7,500 BUS government grant-ready installations.", "Free Survey"], ["Commercial VRF Systems", "Precision office climate control & maintenance plans.", "Bespoke"], ["Annual F-Gas Servicing", "Deep sanitisation, coil clean & efficiency certification.", "From £95"]]
    },
    {
      id: "locksmith", name: "Security & Locksmith", short: "Security", badge: "MLA Approved · 24/7",
      biz: ["VaultKey Security UK", "RapidEntry 24/7", "Sentinel Locksmiths"],
      tagline: "20-minute non-destructive emergency access, 3-Star Ultion cylinders and smart entry systems.",
      photos: [
        "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["20-Min Emergency Entry", "Non-destructive lock opening with zero callout fee.", "From £65"], ["3-Star Anti-Snap Locks", "British Standard BS3621 insurance-approved cylinders.", "From £95"], ["Smart Access & Biometrics", "Keyless Yale, Nuki & architectural smart locks.", "From £150"], ["UPVC Door Realignment", "Multipoint gearbox repairs & full seal restoration.", "From £85"]]
    },
    {
      id: "cleaning", name: "Luxury Cleaning", short: "Cleaning", badge: "100% Deposit Guarantee",
      biz: ["PureSpace Atelier", "Mayfair Home Care", "Aura Commercial Clean"],
      tagline: "Hotel-grade end-of-tenancy cleans, after-builders detailing and executive studio care.",
      photos: [
        "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["End of Tenancy Detail", "Inventory-clerk approved checklist with 72h guarantee.", "From £175"], ["After-Builders Polish", "Fine plaster extraction & architectural glass detailing.", "From £220"], ["Executive Office Care", "Discreet out-of-hours workspace sanitisation.", "Custom"], ["Regular Home Concierge", "Vetted, uniformed specialists using botanical products.", "From £24/hr"]]
    },
    {
      id: "manvan", name: "White-Glove Removals", short: "Removals", badge: "Fully Insured Transit",
      biz: ["SwiftMove Concierge", "Atlas UK Removals", "MetroVan Express"],
      tagline: "Blanket-wrapped home relocations, fine furniture transport and same-day nationwide logistics.",
      photos: [
        "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Home & Apartment Moves", "Uniformed 2–3 person teams with full furniture disassembly.", "From £60/hr"], ["Full Packing Concierge", "Double-walled cartons, wardrobe boxes & fragile wrap.", "From £195"], ["Fine Art & Single Items", "Dedicated white-glove delivery across Great Britain.", "From £55"], ["Commercial IT Moves", "Zero-downtime weekend office relocations.", "Free Quote"]]
    },
    {
      id: "handyman", name: "Property Concierge", short: "Maintenance", badge: "£5M Insured · Vetted",
      biz: ["Sorted London & UK", "CraftFix Maintenance", "Bespoke Home Care"],
      tagline: "Multi-trade property care, gallery wall mounting, precision joinery and landlord turnarounds.",
      photos: [
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Media & Art Mounting", "Concealed TV cables, heavy mirrors & floating cabinetry.", "From £70"], ["Precision Joinery", "Internal doors, shelving, panelling & flat-pack builds.", "From £65"], ["Silicone & Tile Rescue", "Crisp mould-free bathroom resealing & grouting.", "From £80"], ["Landlord Snagging Day", "Full between-tenancy checklist finished in one visit.", "Day Rate"]]
    },
    {
      id: "treesurgeon", name: "Arboriculture & Trees", short: "Arborist", badge: "NPTC · £10M Insured",
      biz: ["Canopy Studio Arborists", "Silvan Tree Care UK", "Crown & Root Surgery"],
      tagline: "BS3998 crown sculpting, precision sectional felling and mechanical stump grinding.",
      photos: [
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Crown Reduction", "Natural light restoration while preserving tree vitality.", "From £240"], ["Sectional Dismantling", "Zero-impact rigging in tight urban gardens.", "Free Survey"], ["Stump Grinding", "Deep clearance ready for immediate turf or paving.", "From £120"], ["TPO Applications", "We manage council conservation paperwork for you.", "Included"]]
    },
    {
      id: "pestcontrol", name: "Discreet Pest Control", short: "Pest Control", badge: "BPCA Certified",
      biz: ["ShieldGuard Environmental", "Aegis Pest Solutions", "ClearHome UK"],
      tagline: "Unmarked-van rapid rodent eradication, structural proofing and BRC commercial compliance.",
      photos: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Rodent Proofing & Control", "3-visit eradication plus steel-mesh entry sealing.", "From £155"], ["Same-Day Wasp Nests", "Guaranteed single-visit removal across your postcode.", "From £75"], ["Solar Pigeon Proofing", "Invisible black steel mesh protecting rooftop arrays.", "From £320"], ["Commercial Audits", "EHO & BRC compliant monthly contracts for hospitality.", "Monthly"]]
    },
    {
      id: "carpet", name: "Textile & Carpet Care", short: "Carpet Care", badge: "NCCA Accredited",
      biz: ["VelvetRevive Textiles", "Loom & Fibre Studio", "PureSteam UK"],
      tagline: "Truck-mounted hot extraction, heirloom wool rug restoration and rapid-dry sofa care.",
      photos: [
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Deep Carpet Extraction", "Allergen & deep-grit removal — touch-dry in 2 hours.", "From £48"], ["Fine Upholstery Care", "Linen, velvet & aniline leather restoration.", "From £85"], ["Persian & Wool Rugs", "pH-neutral gentle wash preserving natural dyes.", "From £65"], ["Stain & Odour Rescue", "Targeted wine, coffee & pet enzyme treatment.", "From £45"]]
    },
    {
      id: "scaffolding", name: "Access & Scaffolding", short: "Scaffolding", badge: "CISRS · NASC",
      biz: ["Apex Access Systems", "Vanguard Scaffolding UK", "Skyline Access Ltd"],
      tagline: "Punctual domestic towers, full temporary tin-hat roofs and TG20:21 commercial gantries.",
      photos: [
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Domestic Roof Access", "Neat, neighbour-respectful towers erected in 1 day.", "From £450"], ["Temporary Tin-Hat Roofs", "Weatherproof encapsulation for loft & extension builds.", "Free Quote"], ["Solar Edge Protection", "Rapid 1-day erect & strike packages for PV teams.", "Fixed Rate"], ["Commercial Gantries", "Full CAD design & 7-day statutory safety tags.", "Bespoke"]]
    },
    {
      id: "garagedoors", name: "Architectural Doors", short: "Garage Doors", badge: "DHF Certified",
      biz: ["Vanguard Doors & Gates", "Hörmann Studio UK", "Bespoke Entry Co."],
      tagline: "Insulated anthracite sectional doors, silent roller systems and automated driveway gates.",
      photos: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Insulated Roller Doors", "Space-saving aluminium slats with smartphone control.", "From £1,150"], ["Sectional Garage Doors", "42mm thermal core in 20+ architectural RAL colours.", "From £1,550"], ["Automated Entry Gates", "Bespoke sliding & swing gates with video intercom.", "Free Survey"], ["Same-Day Repairs", "Broken springs, motors & remote recoding.", "From £85"]]
    },
    {
      id: "fencing", name: "Fencing & Driveways", short: "Fencing", badge: "15-Year Guarantee",
      biz: ["Borderline Architectural", "Cedar & Stone UK", "Crown Paving Co."],
      tagline: "Contemporary slatted cedar screening, storm-proof concrete fencing and resin driveways.",
      photos: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85"
      ],
      services: [["Slatted Cedar Screening", "Architectural horizontal timber privacy walls.", "From £145/bay"], ["Closeboard & Concrete", "Storm-proof heavy-duty panels with gravel boards.", "From £98/bay"], ["Resin-Bound Driveways", "Permeable, weed-free luxury aggregate surfacing.", "Free Quote"], ["Bespoke Side Gates", "Mortise-and-tenon gates with black architectural ironmongery.", "From £260"]]
    }
  ];

  // 12 Curated Awwwards / Land-book Palettes (6 Crisp Editorial Light + 6 Luxury Dark)
  const PALETTES = [
    { id: "swiss-paper", name: "Swiss Paper", mode: "light", bg: "#FFFFFF", surface: "#F6F6F7", surfaceAlt: "#ECECEE", text: "#0E0E10", muted: "#62626A", accent: "#E11D48", accentText: "#FFFFFF", border: "rgba(14,14,16,0.10)" },
    { id: "kinfolk-bone", name: "Kinfolk Bone", mode: "light", bg: "#F5F2EB", surface: "#FFFFFF", surfaceAlt: "#EAE4D7", text: "#181614", muted: "#635D55", accent: "#9A3412", accentText: "#FFFFFF", border: "rgba(24,22,20,0.11)" },
    { id: "linear-obsidian", name: "Linear Obsidian", mode: "dark", bg: "#060608", surface: "#101116", surfaceAlt: "#181A22", text: "#F7F8FA", muted: "#8E93A4", accent: "#6366F1", accentText: "#FFFFFF", border: "rgba(255,255,255,0.09)" },
    { id: "british-studio", name: "British Studio", mode: "dark", bg: "#07120E", surface: "#0E1E18", surfaceAlt: "#162D24", text: "#F2FBF7", muted: "#8DB5A4", accent: "#34D399", accentText: "#052016", border: "rgba(52,211,153,0.16)" },
    { id: "nordic-alabaster", name: "Nordic Alabaster", mode: "light", bg: "#F8FAFC", surface: "#FFFFFF", surfaceAlt: "#EDF2F7", text: "#0B1324", muted: "#526075", accent: "#0F172A", accentText: "#FFFFFF", border: "rgba(11,19,36,0.09)" },
    { id: "amber-atelier", name: "Amber Atelier", mode: "dark", bg: "#0A0908", surface: "#141210", surfaceAlt: "#201C18", text: "#FAF7F2", muted: "#A39B91", accent: "#F59E0B", accentText: "#0A0908", border: "rgba(250,247,242,0.10)" },
    { id: "cobalt-agency", name: "Cobalt Agency", mode: "light", bg: "#FFFFFF", surface: "#F4F7FC", surfaceAlt: "#E5ECF8", text: "#0A142F", muted: "#53627C", accent: "#2563EB", accentText: "#FFFFFF", border: "rgba(10,20,47,0.09)" },
    { id: "carbon-volt", name: "Carbon Volt", mode: "dark", bg: "#0B0C0B", surface: "#141614", surfaceAlt: "#1E221E", text: "#F5F7F5", muted: "#939B93", accent: "#BEF264", accentText: "#0B0C0B", border: "rgba(255,255,255,0.09)" },
    { id: "sage-editorial", name: "Sage Editorial", mode: "light", bg: "#F4F6F3", surface: "#FFFFFF", surfaceAlt: "#E4EAE2", text: "#141D16", muted: "#536357", accent: "#166534", accentText: "#FFFFFF", border: "rgba(20,29,22,0.10)" },
    { id: "espresso-gold", name: "Espresso Gold", mode: "dark", bg: "#120E0C", surface: "#1C1613", surfaceAlt: "#28201C", text: "#FAF5EE", muted: "#B5A495", accent: "#D4A373", accentText: "#120E0C", border: "rgba(212,163,115,0.18)" },
    { id: "slate-architect", name: "Slate Architect", mode: "light", bg: "#F3F4F6", surface: "#FFFFFF", surfaceAlt: "#E5E7EB", text: "#111827", muted: "#4B5563", accent: "#0284C7", accentText: "#FFFFFF", border: "rgba(17,24,39,0.09)" },
    { id: "midnight-violet", name: "Midnight Violet", mode: "dark", bg: "#080710", surface: "#121022", surfaceAlt: "#1D1936", text: "#F8F8FC", muted: "#A5A3C7", accent: "#A855F7", accentText: "#FFFFFF", border: "rgba(168,85,247,0.18)" }
  ];

  // 12 Genuinely Distinct Awwwards-Level Page Architectures
  const ARCHITECTURES = [
    { id: "swiss", name: "Swiss Editorial", radius: "0px", btnRadius: "0px" },
    { id: "kinfolk", name: "Kinfolk Magazine", radius: "18px", btnRadius: "999px" },
    { id: "bento", name: "Linear Bento OS", radius: "24px", btnRadius: "12px" },
    { id: "fullbleed", name: "Cinematic Full-Bleed", radius: "20px", btnRadius: "999px" },
    { id: "split50", name: "50/50 Gallery Split", radius: "0px", btnRadius: "6px" },
    { id: "poster", name: "Bold Type Poster", radius: "16px", btnRadius: "999px" },
    { id: "quote", name: "Interactive Estimator", radius: "20px", btnRadius: "12px" },
    { id: "industrial", name: "Neo-Industrial Grid", radius: "4px", btnRadius: "4px" },
    { id: "panoramic", name: "Luxury Panoramic", radius: "24px", btnRadius: "999px" },
    { id: "saas", name: "Stripe Precision", radius: "16px", btnRadius: "10px" },
    { id: "asymmetric", name: "Asymmetric Atelier", radius: "12px", btnRadius: "999px" },
    { id: "darkroom", name: "Gallery Showcase", radius: "14px", btnRadius: "8px" }
  ];

  const FONTS = [
    { id: "jakarta", name: "Plus Jakarta + Inter", heading: "'Plus Jakarta Sans', sans-serif", body: "'Inter', sans-serif", serif: "'Instrument Serif', serif" },
    { id: "serif", name: "Instrument Serif + Inter", heading: "'Instrument Serif', serif", body: "'Inter', sans-serif", serif: "'Instrument Serif', serif" },
    { id: "syne", name: "Syne + Manrope", heading: "'Syne', sans-serif", body: "'Manrope', sans-serif", serif: "'Playfair Display', serif" },
    { id: "space", name: "Space Grotesk + DM Sans", heading: "'Space Grotesk', sans-serif", body: "'DM Sans', sans-serif", serif: "'Instrument Serif', serif" }
  ];

  // 20 * 12 * 12 * 4 = 11,520 exact non-repeating layouts!
  const TOTAL_LAYOUTS = INDUSTRIES.length * ARCHITECTURES.length * PALETTES.length * FONTS.length;

  function esc(str) {
    return String(str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function formatId(idx) {
    return "UK-" + String(idx + 1).padStart(5, "0");
  }

  function parseId(val) {
    if (typeof val === "number") return Math.max(0, Math.min(TOTAL_LAYOUTS - 1, val));
    const m = String(val || "").match(/(\d+)/);
    return Math.max(0, Math.min(TOTAL_LAYOUTS - 1, m ? parseInt(m[1], 10) - 1 : 0));
  }

  function getLayoutByIndex(index) {
    const idx = Math.max(0, Math.min(TOTAL_LAYOUTS - 1, index));
    let n = idx;
    const font = FONTS[n % FONTS.length]; n = Math.floor(n / FONTS.length);
    const palette = PALETTES[n % PALETTES.length]; n = Math.floor(n / PALETTES.length);
    const arch = ARCHITECTURES[n % ARCHITECTURES.length]; n = Math.floor(n / ARCHITECTURES.length);
    const industry = INDUSTRIES[n % INDUSTRIES.length];

    const photo = industry.photos[(idx + ARCHITECTURES.indexOf(arch)) % industry.photos.length];
    const bizName = industry.biz[idx % industry.biz.length];

    return { index: idx, code: formatId(idx), industry, arch, palette, font, photo, bizName };
  }

  /* Tall, ultra-realistic Land-book / OnePageLove gallery thumbnail card (with hover pan!) */
  function renderGalleryThumbnail(layout) {
    const { industry: ind, palette: p, arch, font, photo, bizName } = layout;
    const r = arch.radius === "0px" ? "2px" : "10px";
    const br = arch.btnRadius === "0px" ? "2px" : "999px";
    const hStyle = `font-family:${font.heading};color:${p.text};`;

    let heroBlock = "";
    if (arch.id === "fullbleed" || arch.id === "darkroom") {
      heroBlock = `
        <div style="position:relative;height:185px;overflow:hidden;border-radius:${r};background:#000;">
          <img src="${photo}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;opacity:.52;" />
          <div style="position:absolute;inset:0;padding:14px;display:flex;flex-direction:column;justify-content:space-between;background:linear-gradient(180deg,rgba(0,0,0,.15),rgba(0,0,0,.85));">
            <div style="display:flex;justify-content:space-between;align-items:center;font-size:7px;color:rgba(255,255,255,.85);">
              <span style="font-weight:700;">${esc(bizName)}</span>
              <span style="padding:2px 6px;border-radius:${br};background:${p.accent};color:${p.accentText};font-weight:700;">Book Now</span>
            </div>
            <div>
              <div style="font-size:6.5px;letter-spacing:.12em;text-transform:uppercase;color:${p.accent};font-weight:700;">${esc(ind.badge)}</div>
              <div style="font-size:15px;font-weight:800;line-height:1.05;color:#fff;margin-top:4px;font-family:${font.heading};">${esc(ind.name)}<br/>Crafted for UK Homes.</div>
              <div style="margin-top:8px;display:flex;gap:5px;">
                <span style="padding:4px 9px;border-radius:${br};background:${p.accent};color:${p.accentText};font-size:7px;font-weight:700;">Get Free Quote</span>
                <span style="padding:4px 9px;border-radius:${br};border:1px solid rgba(255,255,255,.3);color:#fff;font-size:7px;">4.9 ★ Rated</span>
              </div>
            </div>
          </div>
        </div>`;
    } else if (arch.id === "swiss" || arch.id === "industrial") {
      heroBlock = `
        <div style="border-bottom:1px solid ${p.border};padding-bottom:10px;">
          <div style="display:flex;justify-content:space-between;font-size:6.5px;text-transform:uppercase;letter-spacing:.08em;color:${p.muted};border-bottom:1px solid ${p.border};padding-bottom:6px;margin-bottom:10px;">
            <span style="font-weight:800;color:${p.text};">${esc(bizName)}</span>
            <span style="color:${p.accent};font-weight:700;">● UK / 24-7</span>
          </div>
          <div style="font-size:16px;font-weight:800;line-height:1.0;letter-spacing:-.04em;${hStyle}">${esc(ind.short.toUpperCase())}<br/><span style="color:${p.accent};">PRECISION.</span></div>
          <div style="display:grid;grid-template-columns:1fr 1.25fr;gap:8px;margin-top:10px;align-items:end;">
            <div style="font-size:6.5px;line-height:1.45;color:${p.muted};">
              ${esc(ind.tagline.slice(0, 72))}...
              <div style="margin-top:7px;display:inline-block;padding:4px 8px;background:${p.accent};color:${p.accentText};font-weight:700;font-size:6.5px;">CALL 07700 900482 →</div>
            </div>
            <div style="height:82px;overflow:hidden;border:1px solid ${p.border};"><img src="${photo}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;" /></div>
          </div>
        </div>`;
    } else if (arch.id === "bento") {
      heroBlock = `
        <div style="display:grid;grid-template-columns:1.3fr 1fr;gap:6px;">
          <div style="background:${p.surface};border:1px solid ${p.border};border-radius:${r};padding:11px;display:flex;flex-direction:column;justify-content:space-between;min-height:165px;">
            <div style="font-size:6.5px;font-weight:700;color:${p.accent};">${esc(ind.badge)}</div>
            <div style="font-size:13.5px;font-weight:800;line-height:1.1;${hStyle}">${esc(bizName)}</div>
            <div style="display:flex;gap:4px;">
              <span style="padding:4px 8px;border-radius:${br};background:${p.accent};color:${p.accentText};font-size:6.5px;font-weight:700;">Call Now</span>
              <span style="padding:4px 7px;border-radius:${br};background:${p.surfaceAlt};color:${p.text};font-size:6.5px;">Pricing</span>
            </div>
          </div>
          <div style="display:grid;grid-template-rows:1.35fr 1fr;gap:6px;">
            <div style="border-radius:${r};overflow:hidden;border:1px solid ${p.border};"><img src="${photo}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;" /></div>
            <div style="background:${p.accent};color:${p.accentText};border-radius:${r};padding:8px;display:flex;flex-direction:column;justify-content:space-between;">
              <span style="font-size:6px;font-weight:700;opacity:.85;">GOOGLE RATING</span>
              <span style="font-size:14px;font-weight:800;line-height:1;">4.9 ★</span>
            </div>
          </div>
        </div>`;
    } else if (arch.id === "kinfolk" || arch.id === "panoramic") {
      heroBlock = `
        <div style="text-align:center;padding-top:4px;">
          <div style="font-size:6px;letter-spacing:.18em;text-transform:uppercase;color:${p.muted};">${esc(ind.badge)}</div>
          <div style="font-size:15px;font-weight:700;line-height:1.08;margin:6px auto 8px;max-width:92%;${hStyle}">${esc(bizName)}</div>
          <div style="display:inline-flex;gap:5px;margin-bottom:10px;">
            <span style="padding:3px 9px;border-radius:999px;background:${p.accent};color:${p.accentText};font-size:6.5px;font-weight:700;">Enquire</span>
            <span style="padding:3px 9px;border-radius:999px;border:1px solid ${p.border};color:${p.text};font-size:6.5px;">Portfolio</span>
          </div>
          <div style="height:102px;border-radius:${r};overflow:hidden;border:1px solid ${p.border};"><img src="${photo}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;" /></div>
        </div>`;
    } else if (arch.id === "quote" || arch.id === "saas") {
      heroBlock = `
        <div style="display:grid;grid-template-columns:1.1fr 1fr;gap:8px;align-items:stretch;">
          <div style="padding:6px 2px;display:flex;flex-direction:column;justify-content:space-between;">
            <span style="font-size:6px;font-weight:700;color:${p.accent};padding:2px 6px;border-radius:999px;background:${p.surfaceAlt};width:fit-content;">● Same-Day UK</span>
            <div style="font-size:13px;font-weight:800;line-height:1.1;${hStyle}">${esc(bizName)}</div>
            <div style="font-size:6.5px;color:${p.muted};line-height:1.4;">Upfront fixed pricing &amp; 12-month workmanship guarantee.</div>
          </div>
          <div style="background:${p.surface};border:1px solid ${p.border};border-radius:${r};padding:9px;display:flex;flex-direction:column;gap:5px;justify-content:center;">
            <div style="font-size:7px;font-weight:800;color:${p.text};">60-Sec Quote</div>
            <div style="height:13px;border-radius:4px;background:${p.surfaceAlt};"></div>
            <div style="height:13px;border-radius:4px;background:${p.surfaceAlt};"></div>
            <div style="height:16px;border-radius:${br};background:${p.accent};color:${p.accentText};font-size:6.5px;font-weight:700;display:flex;align-items:center;justify-content:center;">Get Instant Price →</div>
          </div>
        </div>
        <div style="margin-top:8px;height:66px;border-radius:${r};overflow:hidden;border:1px solid ${p.border};"><img src="${photo}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;" /></div>`;
    } else {
      // split50, poster, asymmetric
      heroBlock = `
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;height:178px;align-items:stretch;">
          <div style="display:flex;flex-direction:column;justify-content:space-between;padding:4px 0;">
            <div style="font-size:6.5px;font-weight:800;color:${p.accent};text-transform:uppercase;">${esc(ind.short)}</div>
            <div>
              <div style="font-size:14px;font-weight:800;line-height:1.08;${hStyle}">${esc(bizName)}</div>
              <div style="font-size:6.5px;color:${p.muted};margin-top:5px;line-height:1.4;">${esc(ind.tagline.slice(0, 62))}...</div>
            </div>
            <span style="width:fit-content;padding:4px 9px;border-radius:${br};background:${p.accent};color:${p.accentText};font-size:6.5px;font-weight:700;">Book Visit →</span>
          </div>
          <div style="border-radius:${r};overflow:hidden;border:1px solid ${p.border};"><img src="${photo}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;" /></div>
        </div>`;
    }

    // Second fold (revealed smoothly on hover pan just like Land-book!)
    const secondFold = `
      <div style="margin-top:10px;padding-top:10px;border-top:1px solid ${p.border};">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;">
          <span style="font-size:7px;font-weight:800;color:${p.text};">Core Services</span>
          <span style="font-size:6px;color:${p.accent};font-weight:700;">Fixed UK Rates</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;">
          ${ind.services.map(s => `
            <div style="background:${p.surface};border:1px solid ${p.border};border-radius:${arch.radius === '0px' ? '2px' : '7px'};padding:6px;">
              <div style="font-size:6.5px;font-weight:700;color:${p.text};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${esc(s[0])}</div>
              <div style="font-size:6px;color:${p.accent};font-weight:700;margin-top:2px;">${esc(s[2])}</div>
            </div>
          `).join("")}
        </div>
      </div>`;

    return `
      <div class="lb-viewport" style="background:${p.bg};">
        <div class="lb-scroll-inner" style="padding:12px;">
          ${heroBlock}
          ${secondFold}
        </div>
      </div>`;
  }

  /* Full Agency-Grade £50k-Caliber Live Website Renderer */
  function renderFullPageHTML(layout, custom) {
    const c = custom || {};
    const { industry: ind, palette: p, arch, font, photo, bizName } = layout;
    const biz = esc(c.business || bizName);
    const city = esc(c.city || "London & Manchester");
    const phone = esc(c.phone || "07700 900482");
    const phoneHref = (c.phone || "07700900482").replace(/[^0-9+]/g, "");
    const email = esc(c.email || "enquiries@localbusiness.co.uk");
    const domain = esc(c.domain || biz.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 22) + ".co.uk");
    const r = arch.radius;
    const br = arch.btnRadius;
    const isDark = p.mode === "dark";

    const logoHtml = c.logoDataUrl
      ? `<img src="${c.logoDataUrl}" alt="${biz}" style="height:36px;max-width:170px;object-fit:contain;" />`
      : `<div style="display:flex;align-items:center;gap:10px;"><span style="width:32px;height:32px;border-radius:${br === '0px' ? '0px' : '9px'};background:${p.accent};color:${p.accentText};display:inline-flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;">${biz.charAt(0)}</span><span style="font-weight:800;font-size:16px;letter-spacing:-.02em;font-family:${font.heading};">${biz}</span></div>`;

    let hero = "";
    if (arch.id === "swiss" || arch.id === "industrial") {
      hero = `
      <section class="container" style="padding:54px 28px 64px;border-bottom:1px solid ${p.border};">
        <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:${p.muted};margin-bottom:28px;">
          <span>01 / ${esc(ind.badge)}</span>
          <span style="color:${p.accent};">● AVAILABLE IN ${city.toUpperCase()}</span>
        </div>
        <h1 style="font-size:clamp(46px,7.5vw,92px);line-height:.95;font-weight:800;letter-spacing:-.045em;margin:0 0 36px;font-family:${font.heading};">
          ${esc(ind.name)}<br/><span style="color:${p.accent};">Built to Last.</span>
        </h1>
        <div class="grid-2" style="align-items:end;">
          <div>
            <p style="font-size:19px;line-height:1.6;color:${p.muted};max-width:480px;margin:0 0 28px;">${esc(ind.tagline)}</p>
            <div style="display:flex;flex-wrap:wrap;gap:12px;">
              <a href="tel:${phoneHref}" class="btn-primary">Call ${phone} →</a>
              <a href="#services" class="btn-ghost">View Fixed Rates</a>
            </div>
            <div style="margin-top:36px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding-top:24px;border-top:1px solid ${p.border};">
              <div><div style="font-size:28px;font-weight:800;">4.9★</div><div style="font-size:12px;color:${p.muted};">210+ Reviews</div></div>
              <div><div style="font-size:28px;font-weight:800;">60m</div><div style="font-size:12px;color:${p.muted};">Rapid ETA</div></div>
              <div><div style="font-size:28px;font-weight:800;">£5M</div><div style="font-size:12px;color:${p.muted};">Insured Cover</div></div>
            </div>
          </div>
          <div style="border:1px solid ${p.border};overflow:hidden;border-radius:${r};">
            <img src="${photo}" alt="${biz}" style="width:100%;height:420px;object-fit:cover;display:block;" />
          </div>
        </div>
      </section>`;
    } else if (arch.id === "fullbleed" || arch.id === "darkroom") {
      hero = `
      <section style="position:relative;min-height:84vh;display:flex;align-items:flex-end;background:#000;overflow:hidden;">
        <img src="${photo}" alt="${biz}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.46;" />
        <div style="position:absolute;inset:0;background:linear-gradient(180deg, rgba(0,0,0,.22) 0%, rgba(0,0,0,.6) 55%, ${p.bg} 100%);"></div>
        <div class="container" style="position:relative;z-index:2;padding:120px 28px 68px;width:100%;">
          <span class="pill" style="background:rgba(255,255,255,.12);color:#fff;border-color:rgba(255,255,255,.22);">${esc(ind.badge)} · ${city}</span>
          <h1 style="font-size:clamp(42px,6.5vw,82px);line-height:1.0;font-weight:800;margin:22px 0;max-width:900px;color:#fff;font-family:${font.heading};letter-spacing:-.035em;">${biz}</h1>
          <p style="font-size:20px;line-height:1.6;color:rgba(255,255,255,.82);max-width:620px;margin:0 0 34px;">${esc(ind.tagline)}</p>
          <div style="display:flex;flex-wrap:wrap;gap:14px;">
            <a href="tel:${phoneHref}" class="btn-primary">Direct Line: ${phone}</a>
            <a href="#quote" class="btn-ghost" style="color:#fff;border-color:rgba(255,255,255,.32);">Request Written Quote →</a>
          </div>
        </div>
      </section>`;
    } else if (arch.id === "bento") {
      hero = `
      <section class="container" style="padding:44px 28px 56px;">
        <div class="bento-grid">
          <div style="background:${p.surface};border:1px solid ${p.border};border-radius:${r};padding:44px;display:flex;flex-direction:column;justify-content:space-between;min-height:460px;">
            <div>
              <span class="pill">${esc(ind.badge)}</span>
              <h1 style="font-size:clamp(36px,4.8vw,58px);line-height:1.04;font-weight:800;margin:22px 0 18px;font-family:${font.heading};letter-spacing:-.03em;">${esc(ind.name)} in ${city}.</h1>
              <p style="font-size:17px;color:${p.muted};line-height:1.65;max-width:480px;">${esc(ind.tagline)}</p>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:12px;margin-top:32px;">
              <a href="tel:${phoneHref}" class="btn-primary">Call ${phone}</a>
              <a href="#services" class="btn-ghost">Explore Pricing</a>
            </div>
          </div>
          <div style="display:grid;grid-template-rows:1.35fr 1fr;gap:18px;">
            <div style="border-radius:${r};overflow:hidden;border:1px solid ${p.border};"><img src="${photo}" alt="${biz}" style="width:100%;height:100%;object-fit:cover;display:block;" /></div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;">
              <div style="background:${p.accent};color:${p.accentText};border-radius:${r};padding:26px;display:flex;flex-direction:column;justify-content:space-between;">
                <span style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;">Verified Score</span>
                <div style="font-size:42px;font-weight:800;line-height:1;">4.9★</div>
                <span style="font-size:12px;opacity:.9;">190+ local UK reviews</span>
              </div>
              <div style="background:${p.surfaceAlt};border:1px solid ${p.border};border-radius:${r};padding:26px;display:flex;flex-direction:column;justify-content:space-between;">
                <span style="font-size:11px;font-weight:800;color:${p.accent};">● SAME-DAY SLOTS</span>
                <div style="font-size:21px;font-weight:800;font-family:${font.heading};">${city}</div>
                <span style="font-size:12px;color:${p.muted};">12-month guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>`;
    } else if (arch.id === "kinfolk" || arch.id === "panoramic") {
      hero = `
      <section class="container" style="padding:76px 28px 56px;text-align:center;">
        <div style="font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:${p.muted};font-weight:600;">${esc(ind.badge)} &nbsp;·&nbsp; ${city}</div>
        <h1 style="font-size:clamp(44px,6.4vw,80px);line-height:1.03;font-weight:400;margin:24px auto 22px;max-width:860px;font-family:${font.serif};letter-spacing:-.02em;">${biz} — <em>refined ${esc(ind.short.toLowerCase())}</em> for discerning UK homes.</h1>
        <p style="font-size:18px;color:${p.muted};line-height:1.7;max-width:580px;margin:0 auto 36px;">${esc(ind.tagline)}</p>
        <div style="display:flex;justify-content:center;flex-wrap:wrap;gap:14px;margin-bottom:54px;">
          <a href="tel:${phoneHref}" class="btn-primary">Speak With Us · ${phone}</a>
          <a href="#quote" class="btn-ghost">Arrange a Private Survey</a>
        </div>
        <div style="border-radius:${r};overflow:hidden;border:1px solid ${p.border};max-height:520px;">
          <img src="${photo}" alt="${biz}" style="width:100%;height:520px;object-fit:cover;display:block;" />
        </div>
      </section>`;
    } else if (arch.id === "quote" || arch.id === "saas") {
      hero = `
      <section class="container" style="padding:64px 28px 60px;">
        <div class="grid-2" style="align-items:center;">
          <div>
            <span class="pill">${esc(ind.badge)} · ${city}</span>
            <h1 style="font-size:clamp(38px,5.2vw,64px);line-height:1.05;font-weight:800;margin:22px 0 18px;font-family:${font.heading};letter-spacing:-.035em;">Modern ${esc(ind.name)} with transparent UK pricing.</h1>
            <p style="font-size:18px;color:${p.muted};line-height:1.65;margin:0 0 28px;">${esc(ind.tagline)}</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;font-size:14px;font-weight:600;margin-bottom:28px;">
              <div>✓ Fixed Written Quotes</div>
              <div>✓ £5M Public Liability</div>
              <div>✓ 12-Month Warranty</div>
              <div>✓ Zero Callout Fee</div>
            </div>
            <a href="tel:${phoneHref}" class="btn-primary">Call ${phone}</a>
          </div>
          <div style="background:${p.surface};border:1px solid ${p.border};border-radius:${r};padding:34px;box-shadow:0 30px 70px rgba(0,0,0,${isDark ? '.45' : '.08'});">
            <div style="font-size:11px;font-weight:800;color:${p.accent};text-transform:uppercase;letter-spacing:.1em;">Instant Callback Estimator</div>
            <h2 style="font-size:24px;font-weight:800;margin:8px 0 20px;font-family:${font.heading};">Get a Free ${city} Quote</h2>
            <form onsubmit="event.preventDefault();this.querySelector('button').textContent='✓ Request Received — Expect a Call Within 15 Mins!';">
              <input class="field" placeholder="Full Name" required />
              <input class="field" placeholder="UK Phone or Postcode" required />
              <select class="field">${ind.services.map(s => `<option>${esc(s[0])} (${esc(s[2])})</option>`).join("")}</select>
              <button type="submit" class="btn-primary" style="width:100%;justify-content:center;border:none;cursor:pointer;">Request Fixed Quote →</button>
            </form>
          </div>
        </div>
      </section>`;
    } else {
      // split50, poster, asymmetric
      hero = `
      <section class="container" style="padding:56px 28px 64px;">
        <div class="grid-2" style="align-items:center;">
          <div>
            <span class="pill">${esc(ind.badge)}</span>
            <h1 style="font-size:clamp(40px,5.4vw,68px);line-height:1.03;font-weight:800;margin:22px 0 20px;font-family:${font.heading};letter-spacing:-.035em;">${biz}</h1>
            <p style="font-size:18px;color:${p.muted};line-height:1.68;margin:0 0 32px;">${esc(ind.tagline)}</p>
            <div style="display:flex;flex-wrap:wrap;gap:12px;">
              <a href="tel:${phoneHref}" class="btn-primary">Call ${phone}</a>
              <a href="#services" class="btn-ghost">Our Services →</a>
            </div>
          </div>
          <div style="border-radius:${r};overflow:hidden;border:1px solid ${p.border};">
            <img src="${photo}" alt="${biz}" style="width:100%;height:500px;object-fit:cover;display:block;" />
          </div>
        </div>
      </section>`;
    }

    // Distinct middle section style depending on architecture
    const servicesSection = (arch.id === "swiss" || arch.id === "industrial" || arch.id === "kinfolk")
      ? `
      <section id="services" class="container" style="padding:84px 28px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:20px;margin-bottom:44px;">
          <h2 style="font-size:clamp(30px,4vw,48px);font-weight:800;margin:0;font-family:${font.heading};letter-spacing:-.03em;">Services &amp; Guide Pricing</h2>
          <span style="font-size:13px;color:${p.muted};">Transparent rates across ${city}</span>
        </div>
        <div style="border-top:1px solid ${p.border};">
          ${ind.services.map((s, i) => `
            <div style="display:grid;grid-template-columns:60px 1.2fr 1.6fr auto;gap:20px;align-items:center;padding:28px 0;border-bottom:1px solid ${p.border};" class="spec-row">
              <span style="font-family:monospace;font-size:13px;color:${p.accent};font-weight:700;">0${i + 1}</span>
              <strong style="font-size:20px;font-family:${font.heading};">${esc(s[0])}</strong>
              <span style="font-size:15px;color:${p.muted};line-height:1.5;">${esc(s[1])}</span>
              <span style="font-size:14px;font-weight:800;padding:8px 14px;border-radius:${br};background:${p.surfaceAlt};color:${p.text};white-space:nowrap;">${esc(s[2])}</span>
            </div>
          `).join("")}
        </div>
      </section>`
      : `
      <section id="services" class="container" style="padding:84px 28px;">
        <div style="margin-bottom:40px;">
          <span class="pill">What We Deliver</span>
          <h2 style="font-size:clamp(30px,4vw,46px);font-weight:800;margin:14px 0 0;font-family:${font.heading};letter-spacing:-.03em;">Tailored ${esc(ind.short)} Solutions</h2>
        </div>
        <div class="grid-2">
          ${ind.services.map(s => `
            <div style="background:${p.surface};border:1px solid ${p.border};border-radius:${r};padding:32px;display:flex;flex-direction:column;justify-content:space-between;gap:18px;">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <h3 style="font-size:21px;font-weight:800;margin:0;font-family:${font.heading};">${esc(s[0])}</h3>
                <span style="font-size:12px;font-weight:800;padding:6px 12px;border-radius:999px;background:${p.surfaceAlt};color:${p.accent};">${esc(s[2])}</span>
              </div>
              <p style="font-size:15px;line-height:1.65;color:${p.muted};margin:0;">${esc(s[1])}</p>
            </div>
          `).join("")}
        </div>
      </section>`;

    return `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${biz} — ${esc(ind.name)} in ${city}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800&family=Manrope:wght@400;600;700;800&family=Playfair+Display:wght@700;800&family=Plus+Jakarta+Sans:wght@600;700;800&family=Space+Grotesk:wght@600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin: 0; background: ${p.bg}; color: ${p.text}; font-family: ${font.body}; -webkit-font-smoothing: antialiased; }
    a { color: inherit; text-decoration: none; }
    .container { max-width: 1200px; margin: 0 auto; }
    .pill { display: inline-flex; align-items: center; gap: 8px; padding: 7px 14px; border-radius: 999px; font-size: 11px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; background: ${p.surfaceAlt}; color: ${p.accent}; border: 1px solid ${p.border}; }
    .btn-primary { display: inline-flex; align-items: center; gap: 8px; padding: 15px 28px; border-radius: ${br}; background: ${p.accent}; color: ${p.accentText}; font-weight: 700; font-size: 15px; transition: opacity .15s, transform .15s; }
    .btn-primary:hover { opacity: .92; transform: translateY(-1px); }
    .btn-ghost { display: inline-flex; align-items: center; gap: 8px; padding: 15px 26px; border-radius: ${br}; border: 1px solid ${p.border}; color: ${p.text}; font-weight: 700; font-size: 15px; }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 36px; }
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
    .bento-grid { display: grid; grid-template-columns: 1.15fr 1fr; gap: 18px; }
    .field { width: 100%; padding: 14px 16px; border-radius: ${r === '0px' ? '0px' : '12px'}; border: 1px solid ${p.border}; background: ${p.bg}; color: ${p.text}; font-family: inherit; font-size: 14px; margin-bottom: 12px; }
    @media (max-width: 860px) {
      .grid-2, .grid-3, .bento-grid { grid-template-columns: 1fr; }
      .spec-row { grid-template-columns: 1fr !important; gap: 8px !important; }
      .nav-links { display: none !important; }
    }
  </style>
</head>
<body>
  <header style="position:sticky;top:0;z-index:40;background:${isDark ? 'rgba(6,6,8,0.82)' : 'rgba(255,255,255,0.86)'};backdrop-filter:blur(16px);border-bottom:1px solid ${p.border};">
    <div class="container" style="padding:16px 28px;display:flex;align-items:center;justify-content:space-between;gap:16px;">
      ${logoHtml}
      <nav class="nav-links" style="display:flex;gap:30px;font-size:14px;font-weight:600;color:${p.muted};">
        <a href="#services">Services</a>
        <a href="#reviews">Reviews</a>
        <a href="#quote">Contact</a>
      </nav>
      <a href="tel:${phoneHref}" class="btn-primary" style="padding:10px 20px;font-size:13px;">${phone}</a>
    </div>
  </header>

  ${hero}
  ${servicesSection}

  <section id="reviews" style="background:${p.surface};border-top:1px solid ${p.border};border-bottom:1px solid ${p.border};">
    <div class="container" style="padding:84px 28px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;margin-bottom:40px;">
        <h2 style="font-size:clamp(28px,3.6vw,42px);font-weight:800;margin:0;font-family:${font.heading};">Trusted across ${city}</h2>
        <span style="font-weight:700;color:${p.accent};">★★★★★ 4.9 / 5.0 Verified</span>
      </div>
      <div class="grid-3">
        <div style="background:${p.bg};border:1px solid ${p.border};border-radius:${r};padding:28px;"><p style="font-size:15px;line-height:1.7;margin:0 0 20px;">"Exceptional standard of work from start to finish. Punctual, spotless and priced exactly as quoted."</p><strong style="font-size:13px;">Oliver Bennett · ${city}</strong></div>
        <div style="background:${p.bg};border:1px solid ${p.border};border-radius:${r};padding:28px;"><p style="font-size:15px;line-height:1.7;margin:0 0 20px;">"Responded the same morning and resolved the issue in under two hours. Truly head and shoulders above the rest."</p><strong style="font-size:13px;">Hannah Clarke · ${city}</strong></div>
        <div style="background:${p.bg};border:1px solid ${p.border};border-radius:${r};padding:28px;"><p style="font-size:15px;line-height:1.7;margin:0 0 20px;">"Clear communication, zero mess left behind and a full 12-month guarantee. Highly recommended."</p><strong style="font-size:13px;">Marcus &amp; Priya Patel · ${city}</strong></div>
      </div>
    </div>
  </section>

  <section id="quote" class="container" style="padding:84px 28px;">
    <div style="background:${p.accent};color:${p.accentText};border-radius:${r};padding:56px 42px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:28px;">
      <div style="max-width:560px;">
        <h2 style="font-size:clamp(28px,4vw,46px);font-weight:800;margin:0 0 12px;font-family:${font.heading};line-height:1.05;">Ready to work with ${biz}?</h2>
        <p style="margin:0;font-size:17px;opacity:.9;">Call directly for same-day availability or email for a clear written quote.</p>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:12px;">
        <a href="tel:${phoneHref}" style="padding:16px 28px;border-radius:${br};background:${p.accentText};color:${p.accent};font-weight:800;font-size:15px;">Call ${phone}</a>
        <a href="mailto:${email}?subject=Quote%20Enquiry" style="padding:16px 26px;border-radius:${br};border:1px solid currentColor;font-weight:700;font-size:15px;">Email Us</a>
      </div>
    </div>
  </section>

  <footer style="border-top:1px solid ${p.border};padding:28px;font-size:13px;color:${p.muted};">
    <div class="container" style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;">
      <span>© 2026 ${biz} · ${city}</span>
      <span>${domain} · Edition ${layout.code}</span>
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
    TOTAL_LAYOUTS,
    formatId,
    parseId,
    getLayoutByIndex,
    renderGalleryThumbnail,
    renderFullPageHTML
  };
})(window);
