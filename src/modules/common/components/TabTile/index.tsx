import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';

interface TabTileProps {
  tileInfo: any;
}

const TabTile: React.FC<TabTileProps> = ({ tileInfo }) => {
  return (
    <div style={{ maxWidth: '900px' }}>
      {tileInfo?.map((info: any, index: number) => (
        <Accordion key={index} sx={{ border: '1px solid #d4d4d4' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              fontSize={[18, 18, 24]}
              fontWeight={[600, 600, 600]}
              color="#D4D7E2"
              marginRight={['5px', '5px', '10px']}
            >
              {`${info?.index}`}
            </Typography>
            <Typography fontSize={[18, 18, 24]} fontWeight={[600, 600, 600]}>
              {info?.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ borderTop: '1px solid #d4d4d4' }}>
            <Typography
              fontSize={[14, 14, 16]}
              fontWeight={[600, 600, 600]}
              color="#404145"
            >
              {info?.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default TabTile;
