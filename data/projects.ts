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
    title: "Agentic AI System for Detecting Code Smells",
    description:
      "Advanced tool that analyzes Java code for code smells. Features integration with GitHub & Bitbucket, static analysis, LLM-powered insights, and detailed reporting dashboards.",
    tech: ["Django", "React.js", "LLM", "Agentic AI", "Static Analysis"],
    githubUrl: "https://github.com/ZiadTom/Agent-AI-System-for-Detect-Code-Smells-and-Predict-Bug-in-Java-Language",
  },
  {
    id: 2,
    title: "Meshwar",
    description:
      "Scalable RESTful APIs for a ride-sharing platform using ASP.NET Core, Clean Architecture, Domain-Driven Design (DDD), and CQRS pattern.",
    tech: ["ASP.NET Core", "C#", "EF Core", "LINQ"],
    apiDocsUrl: "https://swag.meshwar.mr/swagger/index.html",
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
    title: "Alsham Dough",
    description:
      "Supplier website for food businesses — restaurants, bakeries, pizzerias, and cafés. Offering a centralized catalog of food ingredients and packaging supplies to simplify daily kitchen sourcing.",
    tech: ["Next.js", "TypeScript", "Payload CMS", "PostgreSQL"],
    liveUrl: "https://website.alshamdough.com/",
  },
]