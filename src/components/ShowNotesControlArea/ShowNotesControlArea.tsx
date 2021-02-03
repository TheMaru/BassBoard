import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormGroup,
  FormControlLabel,
  Grid,
  Switch,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { ChangeEvent } from 'react';

import { NotePitch, NoteSequence } from '../Note/Note.model';

export type ShowNotesControlAreaProps = {
  toggleNote: (event: ChangeEvent<HTMLInputElement>) => void;
  visibleNotes: NotePitch[];
};

export const ShowNotesControlArea = ({
  toggleNote,
  visibleNotes,
}: ShowNotesControlAreaProps): JSX.Element => {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMore />}>Notes</AccordionSummary>
      <AccordionDetails>
        <Grid container align-content="center" align-items="center">
          <FormGroup row>
            {NoteSequence.map(note => (
              <FormControlLabel
                key={note}
                label={note}
                control={
                  <Switch
                    checked={visibleNotes.includes(note)}
                    onChange={toggleNote}
                    value={note}
                  />
                }
              />
            ))}
          </FormGroup>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
