import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function FaqAccordion({ title, summary }) {
  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: "#111111",
          borderBottom: " solid 1px rgba(255, 255, 255, 0.3)",
          color: "#FFFFFF",
        }}
      >
        <AccordionSummary
          expandIcon={<AddCircleIcon sx={{ color: "#FDD65B" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontWeight: "semibold" }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-white/30 text-xs">{summary}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
