import { ContentCopyRounded } from '@mui/icons-material';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share';
import React, { useState } from 'react';

import theme from '@/theme';

interface LinkDialogProps {
  open: boolean;
  onClose: () => void;
  link: string;
}

export const LinkShareDialog: React.FC<LinkDialogProps> = ({
  open = false,
  onClose,
  link,
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const copyLink = () => {
    navigator.clipboard.writeText(link);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1500);
  };
  return (
    <Dialog
      open={open}
      keepMounted
      onClose={onClose}
      aria-describedby="link-share-dialog"
    >
      <DialogTitle>{'Share Page Link'}</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="row" gap="10px">
          <FacebookShareButton url={link}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={link}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <RedditShareButton url={link}>
            <RedditIcon size={32} round />
          </RedditShareButton>
          <WhatsappShareButton url={link}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <LinkedinShareButton url={link}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <EmailShareButton url={link}>
            <EmailIcon size={32} round />
          </EmailShareButton>
          <Box onClick={() => copyLink()} style={{ cursor: 'pointer' }}>
            <ContentCopyRounded sx={{ height: 32, width: 32 }} />
          </Box>
        </Box>
        {showAlert && (
          <Box
            padding="10px"
            sx={{
              background: `${theme.palette.secondary.darker}`,
              opacity: 0.5,
            }}
          >
            <Typography>Text Copied!</Typography>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};
