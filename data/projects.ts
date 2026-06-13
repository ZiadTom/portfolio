export type Project = {
  id: number
  title: string
  description: string
  tech: string[]
  githubUrl?: string
  liveUrl?: string
  apiDocsUrl?: string
  imageUrl?: string
  period?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Agentic AI System for Detect Code Smells",
    description:
      "Advanced tool that analyzes Java code for code smells. Features integration with GitHub & Bitbucket, static analysis, LLM-powered insights, and detailed reporting dashboards.",
    tech: ["Django", "React.js", "LLM", "Agentic AI", "Static Analysis"],
    githubUrl: "https://github.com/ZiadTom/Agent-AI-System-for-Detect-Code-Smells-and-Predict-Bug-in-Java-Language",
  },
  {
    id: 2,
    title: "Ride-Sharing App",
    description:
      "Scalable RESTful APIs for a ride-sharing platform using ASP.NET Core, Clean Architecture, Domain-Driven Design (DDD), and CQRS pattern.",
    tech: ["ASP.NET Core", "C#", "EF Core", "Linq"],
    githubUrl: "",
    apiDocsUrl: "https://uberswag.koaacreative.com/swagger/index.html",
  },
  {
    id: 3,
    title: "MechanicShop Management System",
    description:
      "Complete workshop management application including customer management, work orders, repair scheduling and invoicing.",
    tech: ["ASP.NET Core", "Clean Architecture", "CQRS", "JWT", "Blazor WASM"],
    githubUrl: "https://github.com/ZiadTom/MechanicShop",
  },
  {
    id: 4,
    title: "Beit DIY App",
    description:
      "Contracting marketplace for UAE connecting property owners with verified service providers. Built with Supabase (PostgreSQL backend), Row Level Security (RLS), matching algorithm and comprehensive admin dashboard.",
    tech: ["Supabase", "PostgreSQL"],
    githubUrl: "",
  },
]