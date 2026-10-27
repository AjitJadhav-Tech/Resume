// Single source of truth for the site's content. Edit this file to update the portfolio.
// Client names are intentionally kept confidential on the website.

export const profile = {
  name: 'Ajit Jadhav',
  role: 'Generative AI Engineer',
  headline: 'I design and ship production-grade agentic AI systems, from architecture to deployment.',
  location: 'Pune, India',
  email: 'ajit.jadhav.ai@outlook.com',
  phone: '+91 9421424227',
  linkedin: 'https://www.linkedin.com/in/ai-ajitjadhav',
  github: 'https://github.com/AjitJadhav-Tech',
  resumePdf: 'Ajit-Jadhav-Resume.pdf',
  about: [
    'I am a Generative AI Engineer with 4.5 years of experience building AI and cloud systems that run in production, not just in notebooks. My focus is agentic AI: the harness around the model that makes it reliable, including planning loops, tool gateways, memory, guardrails, evaluation and observability.',
    'I have delivered multi-agent platforms for enterprise clients in the automotive and manufacturing space on AWS Bedrock and AgentCore, with measurable gains in cost, accuracy and latency. My background in big data and infrastructure means I think about the whole system, from GPU clusters to the user-facing response.',
    'I am now looking for a lead role with ownership of AI architecture, from design through deployment.',
  ],
};

export const impact = [
  { value: '4.5+', label: 'Years building AI & cloud systems' },
  { value: '96%', label: 'Retrieval accuracy in production RAG' },
  { value: '1000+', label: 'Daily AI interactions served' },
  { value: '<500ms', label: 'Response latency at scale' },
  { value: '70%', label: 'Reduction in manual effort' },
  { value: '25%', label: 'Cost savings delivered' },
];

export const competencies = [
  {
    title: 'Agentic AI & Harness Engineering',
    icon: 'agent',
    blurb: 'Agent = LLM + Harness. Loops, tools, memory and control that make agents dependable.',
    skills: [
      'Agent Harness Engineering', 'Agent Loops & Planning', 'Tool Design & Tool Gateway', 'Memory & State Persistence',
      'Sandboxed Execution', 'LLM & Agent Evaluation', 'LangGraph', 'Strands Agents', 'LangChain', 'MCP', 'A2A',
      'Agent Skills', 'Supervisor, Swarm & Planner-Executor', 'Human-in-the-Loop', 'Agent Routing', 'Ollama',
    ],
  },
  {
    title: 'Generative AI',
    icon: 'spark',
    blurb: 'Retrieval, context and output control for accurate, grounded answers.',
    skills: [
      'Advanced RAG', 'Hybrid Search', 'Reranking', 'GraphRAG', 'Vector Databases', 'Context Engineering',
      'Prompt Caching', 'Structured Outputs', 'Multimodal & Voice AI', 'LiteLLM Model Routing', 'Guardrails',
    ],
  },
  {
    title: 'ML & Model Engineering',
    icon: 'model',
    blurb: 'Understanding models from tokens up, and serving them efficiently.',
    skills: [
      'Transformers & Attention', 'Tokenization', 'Embeddings', 'Fine-Tuning (LoRA, QLoRA, PEFT)',
      'Quantization & Distillation', 'Model Serving', 'Inference Optimization (vLLM)',
    ],
  },
  {
    title: 'AWS Cloud & AI',
    icon: 'cloud',
    blurb: 'Secure, observable, serverless-first AI platforms on AWS.',
    skills: [
      'Amazon Bedrock', 'AgentCore', 'SageMaker AI', 'Amazon Nova Sonic', 'Amazon Nova Act', 'Textract', 'Transcribe',
      'Kendra', 'OpenSearch Serverless', 'Lambda', 'ECS/Fargate', 'API Gateway', 'DynamoDB', 'Cognito', 'IAM', 'KMS',
      'WAF', 'CloudWatch', 'VPC', 'Amazon Lex', 'Amazon Polly', 'Kiro', 'Terraform', 'AWS CDK',
    ],
  },
];

export type Stage = { label: string; nodes: string[] };
export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  client: string;
  period: string;
  role: string;
  summary: string;
  problem: string;
  approach: string[];
  stack: string[];
  results: { value: string; label: string }[];
  architecture: Stage[];
};

export const projects: Project[] = [
  {
    slug: 'nexus',
    name: 'NEXUS',
    subtitle: 'Next-Generation Experience User System',
    client: 'Global electric vehicle manufacturer',
    period: 'Oct 2024 – Present',
    role: 'Generative AI Engineer',
    summary:
      'An enterprise agentic AI platform on AWS Bedrock AgentCore, with stateful multi-agent workflows, a multi-provider LLM gateway and real-time guardrails.',
    problem:
      'Customer and internal support teams spent large amounts of time on repetitive lookups across fragmented knowledge sources. The client needed an AI platform that could reason across tools and data, stay secure with customer data, and keep costs predictable across several model providers.',
    approach: [
      'Designed and deployed the platform on AWS Bedrock AgentCore Runtime, using LangGraph to orchestrate stateful multi-agent workflows.',
      'Built a LiteLLM-based multi-provider gateway (Anthropic, OpenAI, Meta) with dynamic routing for cost and quality.',
      'Integrated RAG-based semantic search with OpenSearch Serverless and Titan Embeddings v2 for contextual knowledge retrieval.',
      'Implemented real-time guardrails for prompt-injection detection and PII protection.',
      'Added end-to-end observability with OpenTelemetry and Langfuse, and automated infrastructure with Terraform.',
    ],
    stack: ['Bedrock AgentCore', 'LangGraph', 'LiteLLM', 'OpenSearch Serverless', 'Titan Embeddings v2', 'OpenTelemetry', 'Langfuse', 'Terraform'],
    results: [
      { value: '70%', label: 'less manual effort' },
      { value: '25%', label: 'cost savings' },
      { value: '96%', label: 'retrieval accuracy' },
      { value: '1000+', label: 'daily interactions' },
      { value: '<500ms', label: 'latency' },
    ],
    architecture: [
      { label: 'Channels', nodes: ['Web & app users', 'Support agents'] },
      { label: 'Safety', nodes: ['Guardrails', 'PII & injection checks'] },
      { label: 'Orchestration', nodes: ['AgentCore Runtime', 'LangGraph multi-agent'] },
      { label: 'Models', nodes: ['LiteLLM gateway', 'Anthropic · OpenAI · Meta'] },
      { label: 'Knowledge', nodes: ['OpenSearch Serverless', 'Titan Embeddings v2'] },
      { label: 'Operate', nodes: ['OpenTelemetry', 'Langfuse', 'Terraform'] },
    ],
  },
  {
    slug: 'supplymind',
    name: 'SupplyMind',
    subtitle: 'AI-Powered Supply Chain Intelligence Platform',
    client: 'Automotive aftermarket parts manufacturer',
    period: 'Oct 2024 – Present',
    role: 'Generative AI Engineer',
    summary:
      'An end-to-end multi-agent orchestration platform on AWS Bedrock with five specialised agents and supervisor routing for enterprise supply chain operations.',
    problem:
      'Supply chain planners worked across inventory, demand, supplier and logistics systems that did not talk to each other. The client wanted one intelligent layer that could answer questions, forecast demand and act in real time, at enterprise scale and security.',
    approach: [
      'Architected five specialised agents with an intelligent supervisor that routes each request to the right agent.',
      'Built a serverless backbone (Lambda, AppSync, DynamoDB, RDS PostgreSQL, S3) for scalable, real-time operations.',
      'Integrated semantic search (OpenSearch Serverless) and ML-based demand forecasting (SageMaker).',
      'Created event-driven pipelines with Kinesis, Glue, EventBridge and ElastiCache.',
      'Secured end to end with Cognito, IAM, KMS and WAF, and automated infrastructure with AWS CDK and CloudFormation.',
    ],
    stack: ['Amazon Bedrock', 'Lambda', 'AppSync', 'DynamoDB', 'RDS PostgreSQL', 'SageMaker', 'Kinesis', 'Glue', 'EventBridge', 'ElastiCache', 'AWS CDK'],
    results: [
      { value: '5', label: 'specialised agents' },
      { value: '1', label: 'supervisor router' },
      { value: '100%', label: 'serverless & IaC' },
    ],
    architecture: [
      { label: 'Interface', nodes: ['Planner UI', 'AppSync API'] },
      { label: 'Supervisor', nodes: ['Bedrock supervisor agent'] },
      { label: 'Agents', nodes: ['Inventory', 'Demand', 'Supplier', 'Logistics', 'Insights'] },
      { label: 'Intelligence', nodes: ['OpenSearch semantic search', 'SageMaker forecasting'] },
      { label: 'Data & events', nodes: ['DynamoDB · RDS · S3', 'Kinesis · Glue · EventBridge'] },
      { label: 'Security', nodes: ['Cognito · IAM', 'KMS · WAF'] },
    ],
  },
  {
    slug: 'catalyst',
    name: 'Catalyst',
    subtitle: 'Enterprise Generative AI Knowledge Platform',
    client: 'Premium electric vehicle manufacturer',
    period: 'Apr 2024 – Sep 2024',
    role: 'Cloud & AI Associate',
    summary:
      'A RAG-powered knowledge platform on AWS that unified enterprise datasets and gave global teams accurate, secure access to company knowledge.',
    problem:
      'Knowledge was spread across clouds and teams, which made finding accurate answers slow. The client needed a secure, enterprise-grade Q&A system running on open models inside their own AWS environment.',
    approach: [
      'Deployed a secure inference workflow with S3, CloudFront and Cognito authentication.',
      'Routed queries through API Gateway and Lambda for preprocessing and embedding generation.',
      'Served HuggingFace InstructorXL embeddings with Falcon 7B-Instruct and Llama-2 13B-Chat on SageMaker, integrated with OpenSearch.',
      'Migrated data from OCI and GCP to AWS over a secure Site-to-Site VPN into centralised object storage.',
    ],
    stack: ['SageMaker', 'OpenSearch', 'InstructorXL', 'Falcon 7B', 'Llama-2 13B', 'API Gateway', 'Lambda', 'CloudFront', 'Cognito', 'Site-to-Site VPN'],
    results: [
      { value: '3', label: 'clouds unified into AWS' },
      { value: 'Global', label: 'teams served' },
      { value: 'Private', label: 'open-model inference' },
    ],
    architecture: [
      { label: 'Access', nodes: ['CloudFront', 'Cognito auth'] },
      { label: 'API', nodes: ['API Gateway', 'Lambda preprocessing'] },
      { label: 'Embeddings', nodes: ['InstructorXL on SageMaker'] },
      { label: 'Retrieval', nodes: ['OpenSearch vector index'] },
      { label: 'Generation', nodes: ['Falcon 7B-Instruct', 'Llama-2 13B-Chat'] },
      { label: 'Data', nodes: ['S3 data lake', 'OCI & GCP migration via VPN'] },
    ],
  },
  {
    slug: 'iot-lakehouse',
    name: 'IoT Data Lakehouse',
    subtitle: 'Real-time analytics on Hadoop and AWS',
    client: 'Industrial IoT analytics',
    period: 'Nov 2021 – May 2023',
    role: 'Big Data and Cloud Associate',
    summary:
      'A production Cloudera Hadoop ecosystem and AWS data lakehouse for real-time IoT sensor analytics.',
    problem:
      'High-volume sensor data needed to be ingested, processed and analysed in near real time, with reliable pipelines and dashboards for the business.',
    approach: [
      'Deployed and managed a production-grade Cloudera Hadoop ecosystem.',
      'Built an AWS data lakehouse with EMR, S3, RDS, MSK, Glue, Redshift, Athena and QuickSight.',
      'Monitored Kafka Connect and EMR pipelines and tuned auto-scaling for performance and cost.',
    ],
    stack: ['Cloudera CDP', 'Hadoop', 'EMR', 'MSK (Kafka)', 'Glue', 'Redshift', 'Athena', 'QuickSight', 'S3'],
    results: [
      { value: 'Real-time', label: 'IoT analytics' },
      { value: 'Hybrid', label: 'Hadoop + AWS' },
    ],
    architecture: [
      { label: 'Ingest', nodes: ['IoT sensors', 'MSK · Kafka Connect'] },
      { label: 'Process', nodes: ['EMR', 'Cloudera Hadoop'] },
      { label: 'Store', nodes: ['S3 lake', 'RDS'] },
      { label: 'Catalog', nodes: ['Glue'] },
      { label: 'Analyse', nodes: ['Redshift', 'Athena', 'QuickSight'] },
    ],
  },
];

export const experience = [
  {
    company: 'C.G. IT Services LLC',
    title: 'Generative AI Engineer',
    period: 'Oct 2024 – Present',
    points: ['Designed and deployed NEXUS, an agentic AI platform on Bedrock AgentCore.', 'Architected SupplyMind, a five-agent supply chain intelligence platform.'],
  },
  {
    company: 'C.G. IT Services LLC',
    title: 'Cloud & AI Associate (Contract)',
    period: 'Apr 2024 – Sep 2024',
    points: ['Deployed Catalyst, an enterprise RAG knowledge platform on SageMaker and OpenSearch.', 'Migrated data from OCI and GCP to AWS over Site-to-Site VPN.'],
  },
  {
    company: 'Duroshox Pvt. Ltd.',
    title: 'GET (Infrastructure & Maintenance)',
    period: 'Jun 2023 – Oct 2023',
    points: ['Configured networking hardware and maintained GPU clusters for AI and HPC workloads.'],
  },
  {
    company: 'AllOps Technologies Pvt. Ltd.',
    title: 'Big Data and Cloud Associate',
    period: 'Nov 2021 – May 2023',
    points: ['Ran a production Cloudera Hadoop ecosystem and AWS data lakehouse for real-time IoT analytics.'],
  },
];

const gh = (repo: string) => `https://github.com/AjitJadhav-Tech/${repo}`;

export const openSource = [
  { name: 'Personal-Agent', url: gh('Personal-Agent'), desc: 'A personal AI agent project.', tags: ['Agents'] },
  { name: 'CX-Platform-LangGraph-AgentCore', url: gh('CX-Platform-LangGraph-AgentCore'), desc: 'Customer experience platform with LangGraph on Bedrock AgentCore.', tags: ['LangGraph', 'AgentCore'] },
  { name: 'Guidance-For-Multi-Provider-GenAI-Gateway-On-AWS', url: gh('Guidance-For-Multi-Provider-GenAI-Gateway-On-AWS'), desc: 'Multi-provider GenAI gateway on AWS.', tags: ['LiteLLM', 'AWS'] },
  { name: 'Multi-Agent-Orchestration-AWS', url: gh('Multi-Agent-Orchestration-AWS'), desc: 'Multi-agent orchestration patterns on AWS.', tags: ['Multi-agent', 'Bedrock'] },
  { name: 'Legal-Documents-Analyzer-Using-Agentic-AI', url: gh('Legal-Documents-Analyzer-Using-Agentic-AI'), desc: 'Agentic AI for analysing legal documents.', tags: ['Agents', 'Documents'] },
  { name: 'SRE-Agent', url: gh('SRE-Agent'), desc: 'An AI agent for site reliability engineering tasks.', tags: ['Agents', 'SRE'] },
  { name: 'Agentic-AI-With-Strands-Agents', url: gh('Agentic-AI-With-Strands-Agents'), desc: 'Agentic AI built with Strands Agents.', tags: ['Strands'] },
  { name: 'agentcore-customer-service-agent', url: gh('agentcore-customer-service-agent'), desc: 'Customer service agent on Bedrock AgentCore.', tags: ['AgentCore'] },
  { name: 'GenAI-Weekend-Projects', url: gh('GenAI-Weekend-Projects'), desc: 'A collection of weekend Generative AI builds.', tags: ['GenAI'] },
];

export const credentials = {
  certifications: [{ name: 'OCI 2025 Certified Generative AI Professional', issuer: 'Oracle' }],
  education: [{ name: 'Bachelor of Engineering', issuer: 'Pune University', year: '2022' }],
};
