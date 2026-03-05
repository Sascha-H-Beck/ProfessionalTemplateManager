import type { Metadata } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const metadata: Metadata = {
  title: "FAQ — PDEV",
  description: "Frequently asked questions about the PDEV PDF Template Management platform.",
};

const FAQ_ITEMS = [
  {
    question: "What is PDEV?",
    answer:
      "PDEV is a PDF template management platform that allows you to design, version, and generate professional PDF documents such as invoices, contracts, and business letters.",
  },
  {
    question: "How does template versioning work?",
    answer:
      "Every time you save changes to a template, a new version is created automatically. You can view the full version history, compare changes, and roll back to any previous version at any time.",
  },
  {
    question: "Can I organize templates by department?",
    answer:
      "Yes. Templates can be assigned to departments such as Invoices, Business Letters, or Contracts. Each department can have its own access permissions so only authorized users can view or edit templates.",
  },
  {
    question: "What authentication methods are supported?",
    answer:
      "PDEV supports sign-in with Google and Microsoft accounts. Your data is secured with industry-standard OAuth 2.0 authentication.",
  },
  {
    question: "How does dynamic field mapping work?",
    answer:
      "When you design a template, each field is given a name. At runtime, these field names are automatically matched to your data source (e.g., customer name, invoice number) so PDFs are generated with the correct data.",
  },
  {
    question: "Is PDEV free to use?",
    answer:
      "PDEV offers a free tier for individual users. For teams and organizations that need department management and advanced features, paid plans are available.",
  },
];

export default function FaqPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Find answers to common questions about PDEV.
      </Typography>
      {FAQ_ITEMS.map((item, index) => (
        <Accordion key={index} variant="outlined" sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={600}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
