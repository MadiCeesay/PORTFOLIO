export const projects = [
  {
    "slug": "amc-gambia",
    "name": "AMC Gambia",
    "category": "Real estate platform",
    "number": "01",
    "live": "https://amc-gambia.vercel.app/",
    "image": "/images/amc-gambia.png",
    "featured": true,
    "stack": [
      "React",
      "Tailwind CSS"
    ],
    "summary": "A real estate platform that helps people browse properties by location, type, and price. The deployed interface combines buy/rent filters with image-led listings and property navigation.",
    "role": "The supplied CV describes designing and building a responsive real estate platform, including property browsing, listing details, and separate admin and user experiences. Confirmation that AMC is the same deployment is still needed.",
    "sections": [
      {
        "title": "The interface",
        "text": "The real estate work described in my CV brings search, filtering, and image-rich listings together, with a clear path from browsing to property details."
      },
      {
        "title": "Design and implementation",
        "text": "The documented contribution includes responsive layouts, an admin dashboard for managing listings, role-based views, sign-in, and image uploads."
      }
    ],
    "note": "AMCâ€™s relationship to the real estate project in the CV, complete stack, and individual project contribution need confirmation."
  },
  {
    "slug": "car-rental-system",
    "name": "Car Rental System",
    "category": "Car rental web interface",
    "number": "02",
    "live": "https://car-rental-system-eosin.vercel.app/",
    "image": "/images/car-rental-system.png",
    "featured": true,
    "stack": [
      "HTML",
      "CSS"
    ],
    "summary": "A collaborative car rental website for exploring electric vehicles. I co-designed and implemented responsive page layouts and styling in HTML and CSS, collaborating through Git and GitHub.",
    "role": "Co-designed and built the interface with a fellow student developer, contributing to page layout, styling, and overall page structure.",
    "sections": [
      {
        "title": "My contribution",
        "text": "I contributed to the responsive interface, page layout, styling, and overall structure of this collaborative student project."
      },
      {
        "title": "Working together",
        "text": "We used Git and GitHub for version control while collaborating on the interface."
      }
    ],
    "note": "Detailed user flows, design iterations, and project feedback have not yet been documented."
  },
  {
    "slug": "floodwatch-gambia",
    "name": "FloodWatch Gambia",
    "team": "Beyond Syntax",
    "achievement": "2nd Runner-Up — ITCA Hackathon",
    "category": "Community flood reporting platform",
    "number": "03",
    "live": "https://floodwatch-gambia.vercel.app/",
    "image": "/images/floodwatch-gambia.png",
    "featured": true,
    "stack": [],
    "summary": "A community-driven flood reporting platform where citizens can submit flood reports and administrators can review and verify incidents.",
    "role": "Developed with my team, Beyond Syntax, during the ITCA Hackathon, where we finished as 2nd Runner-Up. This was a team achievement; individual technical contributions have not yet been documented here.",
    "sections": [
      {
        "title": "Implemented interface",
        "text": "The deployed homepage presents a flood map, recent community reports, a report-flooding action, and safety guidance. Individual technical contributions and the underlying stack still need documentation."
      }
    ],
    "note": "Design process, contribution, technology stack, and implementation details need confirmation."
  },
  {
    "slug": "lifelink",
    "name": "LifeLink",
    "category": "Blood Donation Coordination Mobile Application",
    "summary": "A mobile application in development to help healthcare facilities coordinate with available blood donors in The Gambia.",
    "status": "In Development",
    "presentation": "mobile",
    "image": "/images/projects/lifelink-homepage.png",
    "imageAlt": "LifeLink mobile homepage with a donor registration button and a message about connecting donors when every minute matters",
    "stack": [],
    "sections": [
      { "title": "Project overview", "text": "LifeLink aims to connect approved healthcare facilities with potentially compatible, available, and geographically relevant blood donors. Its focus is organized coordination, donor privacy, and keeping medical decisions under healthcare professionals’ supervision." },
      { "title": "The problem", "text": "Families often turn to WhatsApp messages, phone calls, and social media to find emergency blood donors. These fragmented channels can make it difficult for healthcare facilities to reach suitable donors and for donors to receive relevant requests." },
      { "title": "The solution", "text": "The planned platform would let approved healthcare facilities create donation requests and privately notify potentially relevant donors using blood group, location, and availability information. Donors would choose whether to respond. Healthcare professionals remain responsible for screening, actual eligibility, compatibility, and medical suitability; the application does not guarantee a match." },
      { "title": "A request in practice", "text": "A healthcare facility needs a particular blood group. In the planned workflow, authorized staff create a request, potentially relevant donors nearby receive private notifications, and interested donors respond so staff can coordinate the next steps." }
    ],
    "features": ["Donor registration and authentication", "Donor availability management", "Consent-based location sharing", "Healthcare facility accounts and approval workflows", "Blood donation requests", "Potential donor matching", "Private donor notifications", "Donor responses", "Donation coordination and tracking", "Privacy-focused access controls"],
    "statusDescription": "LifeLink is under development and is not publicly deployed. The features listed here describe the planned product scope, rather than a claim that every workflow is complete."
  },
  {
    "slug": "fincore",
    "name": "FinCore Micro-Banking Platform",
    "category": "Banking backend · CPS 314 course project",
    "summary": "A containerised banking backend with a REST API, structured JSON error responses, and concurrent transaction processing, built with Java, Spring Boot, PostgreSQL, Docker, and Python/Flask.",
    "stack": ["Java", "Spring Boot", "PostgreSQL", "Docker", "Python / Flask"],
    "role": "Built a containerised banking backend as a CPS 314 course project, implementing a REST API, structured JSON error responses, and concurrent transaction processing.",
    "sections": [
      { "title": "Backend implementation", "text": "The project implements banking functionality through a REST API, with structured JSON error responses and concurrent transaction processing." },
      { "title": "Technology stack", "text": "The CV lists Java, Spring Boot, PostgreSQL, Docker, and Python/Flask for this course project. The backend is containerised." }
    ],
    "note": "A project-specific repository URL, deployment details, screenshots, and testing documentation have not yet been supplied."
  },
  {
    "slug": "skilllink",
    "name": "SkillLink",
    "category": "Local Services Marketplace",
    "summary": "A local services marketplace in development, connecting people with skilled professionals for everyday jobs.",
    "status": "In Development",
    "presentation": "web",
    "image": "/images/projects/skilllink-homepage.png",
    "imageAlt": "SkillLink homepage with professional discovery, a service search field, and a local tradesperson holding a drill",
    "stack": [],
    "sections": [
      { "title": "Project overview", "text": "SkillLink is a digital marketplace being developed to connect customers with local electricians, plumbers, carpenters, cleaners, and tailors. It aims to help customers discover professionals and coordinate service requests while giving skilled workers a way to reach new customers." },
      { "title": "The problem", "text": "Finding a reliable professional often depends on word of mouth. Customers may struggle to compare prices, assess previous work, and communicate what they need. Skilled workers can also find it difficult to reach new customers and secure consistent work." },
      { "title": "The solution", "text": "The planned marketplace brings discovery, service requests, and job coordination into one place. Customers would describe a job, attach images, compare quotations and professional profiles, and choose a provider. Booking, messaging, reviews, and a simulated payment workflow form part of the planned scope." },
      { "title": "A job in practice", "text": "A customer needs a damaged wardrobe repaired. In the planned workflow, they describe the problem and upload photos. Carpenters submit quotations, the customer compares profiles, previous work, feedback, and prices, and both parties coordinate the job through the platform." }
    ],
    "features": ["Customer and professional accounts", "Professional discovery", "Service requests and image attachments", "Professional profiles and portfolios", "Service quotations", "Direct hiring and booking", "Customer-provider messaging", "Job status coordination", "Customer reviews", "Mock / simulated payment workflow — no live payment integration"],
    "statusDescription": "SkillLink is under development and is not publicly deployed. The features listed here describe the planned product scope, rather than a claim that every workflow is complete."
  }
]
