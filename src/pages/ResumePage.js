import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const experience = [
  {
    role: 'Senior Software Engineer',
    organization: 'Notable Finance',
    dates: 'January 2022 - Present',
    highlights: [
      'Architected and built automated double-entry accounting ledger system, processing 3.5M transactions totaling over $670M in 2025.',
      'Redesigned client identity verification algorithm, resulting in streamlined application flow and an approximately 80% reduction in customer support follow ups.',
      'Designed and implemented automated financial reporting system across multiple delivery channels, providing previously unavailable visibility into metrics assisting in actionable insights.',
      'Developed scalable user interfaces for both internal and external applications, used by team members and hundreds of weekly applicants, and customized to over 800 new industry partners since 2024.',
    ],
  },
  {
    role: 'Math Tutor',
    organization: 'Literary Services of Wisconsin',
    dates: 'November 2023 - September 2025',
    highlights: [
      'Tutored GED-seekers in math and assisted in community outreach events.',
    ],
  },
  {
    role: 'Software Engineer',
    organization: 'Blue Cross Blue Shield',
    dates: 'March 2020 - January 2022',
    highlights: [
      'Built an extensible web application component compatible with internal interfaces used department-wide.',
      'Standardized business logic across applications to reduce redundancy and increase reusability allowing for 75% less code.',
    ],
  },
  {
    role: 'Software Engineer Trainee',
    organization: 'Revature',
    dates: 'December 2019 - March 2020',
    highlights: [
      'Selected as top performer (MVP) in training batch; first hire made post-program.',
    ],
  },
];

const education = {
  school: 'University of Wisconsin-Madison College of Engineering',
  degree: 'BS Materials Science & Engineering',
  dates: 'May 2018',
  highlights: [
    'Varsity Football',
    'Harry M. Clarke Memorial Scholarship',
    '2018 ASM Bergmann Seminar - First Place',
  ],
};

const skillGroups = [
  {
    label: 'Engineering',
    skills: ['React', 'Remix', 'NodeJS', 'Express', 'Typescript', 'Jest', 'Playwright', 'Postgres', 'Git', 'AWS', 'Sentry'],
  },
  {
    label: 'DevOps',
    skills: ['Github/Gitlab', 'Buildkite', 'Heroku'],
  },
  {
    label: 'Technical Integrations',
    skills: ['Marqeta', 'Plaid', 'Sendgrid', 'Twilio', 'Lob', 'Trello', 'Hubspot', 'Kustomer', 'Clarity'],
  },
  {
    label: 'Financial Systems',
    skills: ['Accounting', 'Financial reporting', 'Lending underwriting', 'Authentication/authorization'],
  },
];

function ResumeEntry({ entry }) {
  return (
    <Box component='article' sx={{ marginBottom: 3 }}>
      <Typography component='h3' variant='h5'>
        {entry.role}
      </Typography>
      <Typography color='textSecondary' sx={{ marginBottom: 1 }}>
        {entry.organization} | {entry.dates}
      </Typography>
      <Box component='ul' sx={{ margin: 0, paddingLeft: 3 }}>
        {entry.highlights.map((highlight) => (
          <Typography component='li' key={highlight} sx={{ marginBottom: 0.75 }}>
            {highlight}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default function ResumePage() {
  return (
    <Container maxWidth='md' sx={{ paddingTop: 6, paddingBottom: 6, textAlign: 'left' }}>
      <Paper elevation={3} sx={{ padding: { xs: 3, sm: 5 } }}>
        <Box sx={{ marginBottom: 4 }}>
          <Typography component='h1' variant='h3' sx={{ fontFamily: 'EB Garamond, serif' }}>
            Matt Austin
          </Typography>
          <Typography variant='h6' color='textSecondary'>
            Software Engineer
          </Typography>
          <Typography color='textSecondary'>
            mpaustin13@gmail.com | mattpaustin.com
          </Typography>
        </Box>

        <Typography component='h2' variant='h4' sx={{ marginBottom: 2, fontFamily: 'EB Garamond, serif' }}>
          Experience
        </Typography>
        {experience.map((entry) => (
          <ResumeEntry entry={entry} key={`${entry.organization}-${entry.role}`} />
        ))}

        <Divider sx={{ marginY: 4 }} />

        <Typography component='h2' variant='h4' sx={{ marginBottom: 2, fontFamily: 'EB Garamond, serif' }}>
          Education
        </Typography>
        <Box sx={{ marginBottom: 3 }}>
          <Typography component='h3' variant='h5'>
            {education.school}
          </Typography>
          <Typography color='textSecondary' sx={{ marginBottom: 1 }}>
            {education.degree} | {education.dates}
          </Typography>
          <Box component='ul' sx={{ margin: 0, paddingLeft: 3 }}>
            {education.highlights.map((highlight) => (
              <Typography component='li' key={highlight} sx={{ marginBottom: 0.75 }}>
                {highlight}
              </Typography>
            ))}
          </Box>
        </Box>

        <Divider sx={{ marginY: 4 }} />

        <Typography component='h2' variant='h4' sx={{ marginBottom: 2, fontFamily: 'EB Garamond, serif' }}>
          Skills
        </Typography>
        {skillGroups.map((group) => (
          <Box key={group.label} sx={{ marginBottom: 2 }}>
            <Typography component='h3' variant='h6' sx={{ marginBottom: 1 }}>
              {group.label}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {group.skills.map((skill) => (
                <Chip key={skill} label={skill} />
              ))}
            </Box>
          </Box>
        ))}
      </Paper>
    </Container>
  );
}
